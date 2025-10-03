function init () {
    let map = new ymaps.Map('map', {
        center: [55.755864, 37.617698],
        zoom:10
    });
  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}
ymaps.ready(init);

const images = [
  'images/slide@1.jpg',
  'images/slide@2.jpg',
  'images/slide@3.jpg',
  'images/slide@4.jpg',
  'images/slide@5.jpg'
];

const slider = document.querySelector("[data-slider]");
const prevBtn = document.querySelector("[data-btn-prev]");
const nextBtn = document.querySelector("[data-btn-next]");

const setupSlides = () => {
  images.forEach((image, index) => {
    const img = document.createElement('img');
    img.src = image;
    img.dataset.index = index;
    img.alt = `slide ${index + 1}`;

    slider.appendChild(img);
  })

  const firstClone = slider.firstElementChild.cloneNode(true);
  const lastClone = slider.lastElementChild.cloneNode(true);
  slider.appendChild(firstClone);
  slider.insertBefore(lastClone, slider.firstChild);
};

nextBtn.addEventListener("click", () => {
  const slideWidth = slider.firstElementChild.offsetWidth; 
})




setupSlides();