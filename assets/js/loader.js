function startLoader() {
  let counterElement = document.querySelector('.count p');
  let currentValue = 0;

  function updateCounter() {
    if (currentValue < 100) {
      let increment = Math.floor(Math.random() * 10) + 1;
      currentValue = Math.min(currentValue + increment, 100);
      counterElement.textContent = currentValue;

      let delay = Math.floor(Math.random() * 200) + 25;
      setTimeout(updateCounter, delay);
    }
  }

  updateCounter();
}

startLoader();
gsap.to('.count', { opacity: 0, delay: 3.5, duration: 0.25 });

let textWrapper = document.querySelector('.ml16');
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: false })
  .add({
    targets: '.ml16 .letter',
    translateY: [-100, 0],
    easing: 'easeOutExpo',
    duration: 1500,
    delay: (el, i) => 30 * i,
  })
  .add({
    targets: '.ml16 .letter',
    translateY: [0, 100],
    easing: 'easeOutExpo',
    duration: 3000,
    delay: (el, i) => 2000 + 30 * i,
  });

gsap.to('.count', {
  opacity: 0,
  ease: 'power2.inOut',
  duration: 0.5,
  delay: 3.75,
});

gsap.to('.pre-loader', {
  scale: 0.5,
  ease: 'power4.inOut',
  duration: 2,
  delay: 3,
});

gsap.to('.loader', {
  height: '0',
  ease: 'power4.inOut',
  duration: 1.5,
  delay: 3.75,
});

gsap.to('.loader-bg', {
  height: '0',
  ease: 'power4.inOut',
  duration: 1.5,
  delay: 4,
});

gsap.to('.loader-2', {
  clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
  ease: 'power4.inOut',
  duration: 1.5,
  delay: 3.5,
});

gsap.from('.header h1', {
  y: 200,
  ease: 'power4.inOut',
  duration: 1.5,
  delay: 3.75,
  stagger: 0.05,
});

gsap.to('.img', {
  clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
  ease: 'power4.inOut',
  duration: 1.5,
  delay: 4.5,
  stagger: 0.25,
});

// Функция для удаления элемента HTML после завершения анимации GSAP
function removeElementAfterAnimation(elementSelector, animationConfig) {
  gsap.to(elementSelector, animationConfig).then(() => {
    const elementToRemove = document.querySelector(elementSelector);
    if (elementToRemove) {
      elementToRemove.remove();
    }
  });
}

// Пример использования:
removeElementAfterAnimation('.container', {
  duration: 1,
  ease: 'power2.inOut',
  delay: 4, // Пример задержки
});

// Функция для удаления класса HTML после завершения анимации GSAP
function removeClassAfterAnimation(
  elementSelector,
  className,
  animationConfig
) {
  gsap.to(elementSelector, {
    ...animationConfig,
    onComplete: function () {
      const element = document.querySelector(elementSelector);
      if (element) {
        element.classList.remove(className);
      }
    },
  });
}

// Пример использования:
removeClassAfterAnimation('.site-content', 'site-content', {
  duration: 1,
  ease: 'power2.inOut',
  delay: 4, // Пример задержки
});

function removeClassAfterAnimation(
  elementSelector,
  className,
  animationConfig
) {
  gsap.to(elementSelector, {
    ...animationConfig,
    onComplete: function () {
      const element = document.querySelector(elementSelector);
      if (element) {
        element.classList.remove(className);
      }
    },
  });
}

// Пример использования:
removeClassAfterAnimation('.scrollbar', 'scrollbar', {
  duration: 1,
  ease: 'power2.inOut',
  delay: 4, // Пример задержки
});
