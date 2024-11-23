document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slick-track');
    const slide = document.querySelectorAll('.js-slider-item');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
  
    let slideWidth;
    const animationDuration = 0.5; // Длительность анимации в секундах
    const autoPlayInterval = 10000; // Время автопрокрутки
  
    let currentIndex = 0; // Начинаем с первого реального слайда (индекс 0)
    let autoPlay;

    // Функция для установки размеров и обновления CSS переменных
    function updateSliderDimensions() {
        const screenWidth = window.innerWidth;
        slideWidth = screenWidth <= 1104 ? screenWidth : 1104;

        slide.forEach(item => {
            item.style.width = `${slideWidth}px`;
        });

        slides.style.width = `${slideWidth * slide.length}px`;
        document.documentElement.style.setProperty('--slide-width', `${slideWidth}px`);
    }

    // Функция для показа конкретного слайда
    function showSlide(index) {
        slides.style.transition = `transform ${animationDuration}s ease-in-out`;
        slides.style.transform = `translateX(-${index * slideWidth}px)`; // Сдвигаем на ширину слайда
        currentIndex = index;
    }

    // Функция для прокрутки слайдов
    function handleSlideTransition() {
        // Если мы достигли последнего слайда, показываем первый
        if (currentIndex >= slide.length) {
            currentIndex = 0;
            slides.style.transition = 'none'; // Убираем анимацию
            slides.style.transform = `translateX(0)`; // Сдвигаем в начало
            setTimeout(() => {
                slides.style.transition = `transform ${animationDuration}s ease-in-out`;
                showSlide(currentIndex + 1);
            }, 50);
        }
        // Если мы достигли первого слайда, показываем последний
        else if (currentIndex < 0) {
            currentIndex = slide.length - 1;
            slides.style.transition = 'none'; // Убираем анимацию
            slides.style.transform = `translateX(-${(slide.length - 1) * slideWidth}px)`; // Перемещаем на последний слайд
            setTimeout(() => {
                slides.style.transition = `transform ${animationDuration}s ease-in-out`;
                showSlide(currentIndex - 1);
            }, 50);
        } else {
            showSlide(currentIndex);
        }
    }

    // Автоматическая прокрутка
    function startAutoPlay() {
        autoPlay = setInterval(() => {
            currentIndex++;
            handleSlideTransition();
        }, autoPlayInterval);
    }

    // Остановка автопрокрутки
    function stopAutoPlay() {
        clearInterval(autoPlay);
    }

    // Обработчики кнопок
    prevButton.addEventListener('click', () => {
        stopAutoPlay();
        currentIndex = currentIndex - 1 < 0 ? slide.length - 1 : currentIndex - 1; // Циклический переход
        handleSlideTransition();
        startAutoPlay();
    });

    nextButton.addEventListener('click', () => {
        stopAutoPlay();
        currentIndex = currentIndex + 1 >= slide.length ? 0 : currentIndex + 1; // Циклический переход
        handleSlideTransition();
        startAutoPlay();
    });

    // Событие завершения анимации
    slides.addEventListener('transitionend', handleSlideTransition);

    // Инициализация размеров и начальной позиции
    updateSliderDimensions();
    slides.style.transition = 'none'; // Отключаем анимацию для начальной установки
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`; // Позиционируем слайдер на начальную позицию

    // Обновление размеров при изменении ширины окна
    window.addEventListener('resize', updateSliderDimensions);

    // Запуск автопрокрутки
    startAutoPlay();

    // Свайп для мобильных устройств
    let startTouchX;
    let endTouchX;

    slides.addEventListener('touchstart', (e) => {
        startTouchX = e.touches[0].clientX;
    });

    slides.addEventListener('touchmove', (e) => {
        endTouchX = e.touches[0].clientX;
    });

    slides.addEventListener('touchend', () => {
        if (startTouchX - endTouchX > 50) { // Свайп влево
            stopAutoPlay();
            currentIndex = currentIndex + 1 >= slide.length ? 0 : currentIndex + 1; // 
            startAutoPlay();
        } else if (endTouchX - startTouchX > 50) { // Свайп вправо
            stopAutoPlay();
            currentIndex = currentIndex - 1 < 0 ? slide.length - 1 : currentIndex - 1; // Циклический переход
            handleSlideTransition();
            startAutoPlay();
        }
    });
});
