(function () {
  'use strict';

  const starContainer = document.getElementById('stars-bg');
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  starContainer.appendChild(canvas);

  let stars = [];
  const STAR_COUNT = 260;

  function initStars() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    stars = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.8 + 0.3,
        alpha: Math.random(),
        dAlpha: (Math.random() * 0.02 + 0.005) * (Math.random() < 0.5 ? 1 : -1)
      });
    }
  }

  function drawStars(scrollRatio) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(function (s) {
      var offsetY = (1 - scrollRatio) * s.r * 120;
      var drawY = (s.y + offsetY) % canvas.height;

      s.alpha += s.dAlpha;
      if (s.alpha <= 0.1 || s.alpha >= 1) s.dAlpha *= -1;
      s.alpha = Math.max(0.1, Math.min(1, s.alpha));

      ctx.beginPath();
      ctx.arc(s.x, drawY, s.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,255,255,' + s.alpha + ')';
      ctx.fill();
    });
  }

  initStars();
  window.addEventListener('resize', initStars);

  window.addEventListener('load', function () {
    window.scrollTo(0, document.body.scrollHeight);
    onScroll();
  });

  var rocket = document.getElementById('rocket');
  var factCards = document.querySelectorAll('.fact-card');
  var ticking = false;

  function onScroll() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var maxScroll = document.body.scrollHeight - window.innerHeight;
    if (maxScroll <= 0) maxScroll = 1;

    var scrollRatio = scrollTop / maxScroll;

    var rocketBottom = 10 + (1 - scrollRatio) * 55;
    rocket.style.bottom = rocketBottom + '%';

    var wobble = Math.sin(scrollTop * 0.008) * 8;
    rocket.style.transform = 'translateX(calc(-50% + ' + wobble + 'px))';

    var flameScale = 0.6 + (1 - scrollRatio) * 0.6;
    var exhaust = rocket.querySelector('.exhaust');
    if (exhaust) exhaust.style.transform = 'scaleY(' + flameScale + ')';

    factCards.forEach(function (card) {
      var rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85 && rect.bottom > 0) {
        card.classList.add('visible');
      }
    });

    drawStars(scrollRatio);
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        onScroll();
        ticking = false;
      });
      ticking = true;
    }
  });

  function animateStars() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var maxScroll = document.body.scrollHeight - window.innerHeight;
    if (maxScroll <= 0) maxScroll = 1;
    drawStars(scrollTop / maxScroll);
    requestAnimationFrame(animateStars);
  }
  animateStars();

})();