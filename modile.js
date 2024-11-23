// Получаем все элементы с классом .game-item
const gameItems = document.querySelectorAll('.game-item');

gameItems.forEach(item => {
  // Проверяем, что элемент не имеет id "game-item_none"
  if (item.id !== 'game-item_none') {

    const gameHover = item.querySelector('.game-hover');

    // При наведении на .game-item
    item.addEventListener('mouseenter', () => {
      item.classList.add('game-item_hover'); // Добавляем класс при наведении
      gameHover.style.zIndex = '10'; // Поверх других элементов
    });

    // При уходе мыши с .game-item
    item.addEventListener('mouseleave', () => {
      item.classList.remove('game-item_hover'); // Убираем класс при уходе
      gameHover.style.zIndex = ''; // Возвращаем z-index в исходное состояние
    });
  }
});
(function () {
  const breakpoints = [
      { className: 'R-430', width: 430 },
      { className: 'R-600', width: 600 },
      { className: 'R-800', width: 800 },
      { className: 'R-1280', width: 1280 },
      { className: 'R-1440', width: 1440 },
  ];

  function updateBodyClasses() {
      const body = document.body;
      const currentWidth = window.innerWidth;

      breakpoints.forEach(breakpoint => {
          if (currentWidth <= breakpoint.width) {
              if (!body.classList.contains(breakpoint.className)) {
                  body.classList.add(breakpoint.className);
              }
          } else {
              if (body.classList.contains(breakpoint.className)) {
                  body.classList.remove(breakpoint.className);
              }
          }
      });
  }

  // Обновляем классы при загрузке страницы и изменении размера окна
  window.addEventListener('resize', updateBodyClasses);
  window.addEventListener('load', updateBodyClasses);
})();
document.addEventListener("DOMContentLoaded", () => {
  const updateSizes = () => {
      const container = document.getElementById('game-list');
      const gameItems = document.querySelectorAll(".game-item");
      const gameHover = document.querySelector(".game-hover");

      if (!container || gameItems.length === 0 || !gameHover) {
          console.error("Контейнер, элементы .game-item или .game-hover не найдены!");
          return;
      }

      const containerWidth = container.offsetWidth; // Ширина контейнера
      let columns = 2; // По умолчанию 2 блока в ряд

      // Вычисляем количество колонок на основе ширины контейнера
      if (containerWidth > 1388) {
          columns = 5; // Переход на 5 блоков в ряд
      } else if (containerWidth > 750) {
          columns = 4; // Переход на 4 блока в ряд
      } else if (containerWidth > 550) {
          columns = 3; // Переход на 3 блока в ряд
      }

      // Рассчитываем ширину элемента с учётом отступов
      const itemWidth = (containerWidth / columns) - 16; // Ширина блока (отнимаем отступы)
      const itemHeight = itemWidth / (252 / 169); // Высота на основе соотношения 252:169

      // Устанавливаем размеры и отступы для каждого .game-item
      gameItems.forEach((item, index) => {
          item.style.width = `${itemWidth}px`;
          item.style.height = `${itemHeight}px`;
          item.style.margin = "0 16px 16px 0"; // Отступы справа и снизу

          // Если это последний блок в ряду, обнуляем отступ справа
          if ((index + 1) % columns === 0) {
              item.style.marginRight = "0";
          }
      });

      // Устанавливаем размеры для .game-hover
      gameHover.style.width = `${itemWidth}px`;
      gameHover.style.height = `${itemHeight}px`;

      // Рассчитываем количество рядов
      const rows = Math.ceil(20 / columns); // Количество рядов (округляем вверх)

      // Рассчитываем высоту контейнера
      const containerHeight = (rows * itemHeight) + ((rows - 1) * 16); // Высота + отступы между рядами

      // Устанавливаем высоту контейнера
      container.style.height = `${containerHeight}px`;

      console.log(
          `Обновлено: ширина ${itemWidth}px, высота ${itemHeight}px, количество колонок ${columns}, высота контейнера ${containerHeight}px`
      );
  };

  // Первоначальное обновление размеров
  updateSizes();

  // Обновляем размеры при изменении размеров окна
  window.addEventListener("resize", updateSizes);
});