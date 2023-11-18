import Swiper, {Navigation,Pagination} from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import '@/styles/style.scss';
import Inputmask from 'inputmask';
// import SimpleParallax from 'simple-parallax-js';
import axios from 'axios';

// ========== BURGER ==========
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if(iconMenu) {
	iconMenu.addEventListener("click", e => {
		e.preventDefault();
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	})
}
// ========== HERO SWIPER ==========
var heroSwiper = new Swiper(".hero__swiper", {
	loop: true,
	spaceBetween: 20,
	modules: [Navigation, Pagination],
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		dynamicBullets: true,
	},
})
const heroInfo = document.querySelectorAll(".hero__info");
heroSwiper.on('slideChange', function(swiper) {
	let activeSlideIndex = swiper.realIndex;
	let activeSlide = swiper.slides[activeSlideIndex];
	activeSlide.classList.add('_show');
	let previousSlide = swiper.slides[activeSlideIndex - 1];
	if(previousSlide) {
		previousSlide.classList.remove('_show');
	}
	let nextSlide = swiper.slides[activeSlideIndex + 1];
	if(nextSlide) {
		nextSlide.classList.remove('_show');
	}
	heroInfo.forEach(info => {
		info.classList.remove('_showEffect');
	});
	let activeInfo = heroInfo[activeSlideIndex];
	activeInfo.classList.add('_showEffect');
	let previousInfo = heroInfo[activeSlideIndex - 1];
	if(previousInfo) {
		previousInfo.classList.remove('_showEffect');
	}
	let nextInfo = heroInfo[activeSlideIndex + 1];
	if(nextInfo) {
		nextInfo.classList.remove('_showEffect');
	}
});
// ========== OBJECTS SWIPER ==========
var objectsSwiper = new Swiper(".objects__swiper", {
	spaceBetween: 20,
	centeredSlides: true,
	slidesPerView: 'auto',
	loop: false,
	grabCursor:true,
	modules: [Navigation, Pagination],
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		dynamicBullets: true,
	},
	breakpoints: {
		600: {
			spaceBetween: 30,
		},
		900: {
			centeredSlides: false,
			slidesPerView: 'auto',
			spaceBetween: 20,
			loop: true,
		},
	},
});
 // Обработчики событий для свайпа вне слайдера
//  var startX;
//  var startScroll;
//  var isTouching = false;

//  document.querySelector('.custom-swipe-area').addEventListener('touchstart', function(e) {
// 	 isTouching = true;
// 	 startX = e.touches[0].clientX;
// 	 startScroll = objectsSwiper.translate;

// 	 objectsSwiper.setTransition(0);
//  });

//  document.querySelector('.custom-swipe-area').addEventListener('touchmove', function(e) {
// 	 if (!isTouching) return;

// 	 var touchX = e.touches[0].clientX;
// 	 var diff = touchX - startX;
// 	 objectsSwiper.setTranslate(startScroll + diff);
//  });

//  document.querySelector('.custom-swipe-area').addEventListener('touchend', function() {
// 	 isTouching = false;

// 	 // Определите, куда должен прокручиваться слайдер после отпускания пальца
// 	 var currentTranslate = objectsSwiper.translate;
// 	 var swiperWidth = objectsSwiper.width;
// 	 var threshold = swiperWidth / 3;

// 	 if (currentTranslate > threshold) {
// 		 objectsSwiper.slidePrev();
// 	 } else if (currentTranslate < -threshold) {
// 		 objectsSwiper.slideNext();
// 	 } else {
// 		 objectsSwiper.slideTo(objectsSwiper.activeIndex);
// 	 }

// 	 objectsSwiper.setTransition(300);
// 	 objectsSwiper.setTranslate(objectsSwiper.slides[objectsSwiper.activeIndex].offsetLeft * -1);
//  });
// ========== SECTION-CARD SWIPER ==========
var cardSwiper = new Swiper(".card-slider__swiper", {
	spaceBetween: 20,
	loop: true,
	slidesPerView: 'auto',
	modules: [Navigation],
	navigation: {
		nextEl: ".card-slider-next",
		prevEl: ".card-slider-prev",
	},
});
// ========== MODAL HEADER ==========
const modalHeaderBody = document.querySelector('.modal-header__body');
const modalHeaderButton = document.querySelector('.js-modal-header');
const modalHeaderContent = document.querySelector('.modal-header__content');
const modalHeaderClose = document.querySelector(".modal-header__close");

if(modalHeaderButton) {
  modalHeaderButton.addEventListener("click", (e) => {
	document.body.classList.add("_lock");
	modalHeaderBody.classList.add("_active");
	modalHeaderContent.classList.add("_active");
})
}
if (modalHeaderClose) {
    modalHeaderClose.addEventListener("click", (e) => {
		document.body.classList.remove("_lock");
		modalHeaderBody.classList.remove("_active");
		modalHeaderContent.classList.remove("_active");
	})
}
modalHeaderBody.addEventListener('touchmove', function (e) {
  e.preventDefault();
});

	// ========== MODAL DELIVERY ==========
const modalDeliveryBody = document.querySelector('.modal-delivery__body');
const modalDeliveryButton = document.querySelector('.js-modal-delivery');
const modalDeliveryContent = document.querySelector('.modal-delivery__content');
const modaldeliveryClose = document.querySelector(".modal-delivery__close");

if(modalDeliveryButton) {
  modalDeliveryButton.addEventListener("click", (e) => {
	document.body.classList.add("_lock");
	modalDeliveryBody.classList.add("_active");
	modalDeliveryContent.classList.add("_active");
})
}
if (modaldeliveryClose) {
  modaldeliveryClose.addEventListener("click", (e) => {
	document.body.classList.remove("_lock");
	modalDeliveryBody.classList.remove("_active");
	modalDeliveryContent.classList.remove("_active");
});
}
// ========== ACCORDION ==========
const items = document.querySelectorAll(".navbar__arrow");

function toggleAccordion() {
	const itemToggle = this.getAttribute('aria-expanded');
	if(itemToggle == 'false') {
		this.setAttribute('aria-expanded', 'true');
	} else {
		this.setAttribute('aria-expanded', 'false');
	}
}
items.forEach(item => item.addEventListener('click', toggleAccordion));

/*=============== CARD ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.card__acrd-item')
accordionItems.forEach((item) => {
	const accoordionHeader = item.querySelector('.card__acrd-title')
	accoordionHeader.addEventListener('click', () => {
		const openItem = document.querySelector('.acrd-open')
		toggleItem(item)
		if(openItem && openItem !== item) {
			toggleItem(openItem)
		}
	})
})
const toggleItem = (item) => {
		const accordionContent = item.querySelector('.card__acrd-content')
		if(item.classList.contains('acrd-open')) {
			accordionContent.removeAttribute('style')
			item.classList.remove('acrd-open')
		} else {
			accordionContent.style.height = accordionContent.scrollHeight + 'px'
			item.classList.add('acrd-open')
		}
	}
/*=============== CARDLIST TABS ===============*/
const pagLinks = document.querySelectorAll('.pag__link');
const pagItems = document.querySelectorAll('.pag__item');

pagLinks.forEach((link, index) => {
	link.addEventListener('click', (event) => {
		event.preventDefault();
		pagLinks.forEach(link => link.classList.remove('pag__link--active'));
		link.classList.add('pag__link--active');
		pagItems.forEach(item => item.classList.remove('pag__item--active'));
		pagItems[index].classList.add('pag__item--active');
	});
});

/*=============== INPUT MASK ===============*/
const phones = document.querySelectorAll('[data-mask="phone"]');
let im = new Inputmask('+7 (999) 999-99-99');
console.log(phones);
im.mask(phones);

/*=============== HOVER DATA NAVBAR ===============*/
// Получаем значение query параметра data-path
const urlParams = new URLSearchParams(window.location.search);
const dataPath = urlParams.get('data-path');

// Получаем ссылки на второй странице
const links = document.querySelectorAll('a[data-title]');

// Обрабатываем каждую ссылку
links.forEach(link => {
  // Проверяем значение data-title и выполняем необходимые действия
  if (link.getAttribute('data-title') === dataPath) {
    link.setAttribute('aria-expanded', 'true');

    // Проверяем, есть ли родительская ссылка
    const parentLink = link.closest('.navbar__item').querySelector('.navbar__heading');
    if (parentLink) {
      parentLink.setAttribute('aria-expanded', 'true');
    }
  }
});

// Получаем ссылки на первой странице
const cardlinks = document.querySelectorAll('.cardlist__nav .cardlist__btn');

// Обрабатываем каждую ссылку
cardlinks.forEach(link => {
  link.addEventListener('click', function(e) {

    // Удаляем класс cardlist__btn-active у всех ссылок
    cardlinks.forEach(link => {
      link.classList.remove('cardlist__btn-active');
    });
    // Добавляем класс cardlist__btn-active к выбранной ссылке
    this.classList.add('cardlist__btn-active');
  });
});

/*=============== AXIOS ===============*/
function validatePhone(phone)  {
  const cleanedPhone = phone.replace(/\D/g, "");
  console.log(new String(cleanedPhone).length)
  console.log(cleanedPhone.length === 11, "partial")

  if(cleanedPhone.length === 11) {
    return true; 
  } else {
    return false;
  }
}
function validateText(text)  {
  const trimmedText = text.trim();

    if (trimmedText.length >= 2) {
    return true;
  } else {
    return false;
  }
}
const validate = (input) => {
  const dataType = input.getAttribute("data-type");
  let res = true;
  switch(dataType) {
      case "phone": 
      res = validatePhone(input.value)
      break;
      case "text": 
      res = validateText(input.value)
      break;
  }
  console.log(input, res, dataType)
  return res;
}

let forms = document.querySelectorAll('.js-form');
console.log(forms)
forms.forEach((form) => {
  let formButton = form.querySelector(".js-form-submit");
	console.log(formButton)
	if(formButton) {
		formButton.addEventListener("click", (e) => {
		e.preventDefault();
		formButton.disabled = true;
		const inputs = form.querySelectorAll("input");
		const method = form.method;
		const action = form.action;
		let isValidated = true;
		let formData = [];

		inputs.forEach(input => {
      formData.push({
        name: input.name,
        value: input.value,
        isValidate: validate(input),
      })  
  })

	formData.forEach(item => {
    const input = form.querySelector(`[name="${item.name}"]`);
    const wrapper = input.parentNode;
    const errorBlock = wrapper.querySelector('.js-error');

    if(!item.isValidate) {
        isValidated = false;
        errorBlock.classList.add("_active")
    } else {
        errorBlock.classList.remove("_active")
    }
  })

	if(!isValidated) {
    formButton.disabled = false;
    return false;
  }

	axios({
		method,
		url: action,
		data: formData,
}).then((response) => {
		console.log("success");
		formButton.disabled = false;
}).catch((error) => {
		console.error(error)
		formButton.disabled = false;
	});
})
	}
})

/*=============== AVAILABILITY ===============*/
document.addEventListener('DOMContentLoaded', function() {
  let spansAvailability = document.querySelectorAll('span.cardlist__availability');
  spansAvailability.forEach(function(span) {
    let availability = span.getAttribute('data-availability');
    if (availability === 'true') {
      span.textContent = 'В наличии';
    } else {
      span.textContent = 'Нет в наличии';
    }
  });
});

/*=============== PRICE ===============*/
document.addEventListener('DOMContentLoaded', function() {
  let spansPrice = document.querySelectorAll('span.cardlist__price');
  spansPrice.forEach(function(span) {
    let price = span.getAttribute('data-price');
    if (price === 'true') {
      span.textContent = span.textContent;
    } else {
      span.textContent = 'Цена по запросу';
    }
  });
});


/*=============== MAP ===============*/
let centerBrn = [53.38988962211063, 83.67874116024242];
let centerNsk = [55.004994486746305, 82.95321743254078];

function init() {
	let mapBrn = new ymaps.Map('maps-brn', {
		center: centerBrn,
		zoom: 16,
	});
	let mapNsk = new ymaps.Map('maps-nsk', {
		center: centerNsk,
		zoom: 16,
	});
	let placemarkNsk = new ymaps.Placemark([55.00503589640458, 82.95315150165784], {}, {
		iconLayout: 'default#image',
		iconImageHref: 'map.svg',
		iconImageSize: [37, 37],
		iconImageOffset: [-20, -20]
	});
	let placemarkBrn = new ymaps.Placemark([53.38988962211063, 83.67854804119332], {}, {
		iconLayout: 'default#image',
		iconImageHref: 'map.svg',
		iconImageSize: [37, 37],
		iconImageOffset: [-20, -20]
	});
	mapBrn.controls.remove('geolocationControl');
	mapBrn.controls.remove('searchControl');
	mapBrn.controls.remove('trafficControl');
	mapBrn.controls.remove('typeSelector');
	mapBrn.controls.remove('rulerControl', {
		scaleLine: false,
	});
	mapNsk.controls.remove('geolocationControl');
	mapNsk.controls.remove('searchControl');
	mapNsk.controls.remove('trafficControl');
	mapNsk.controls.remove('typeSelector');
	mapNsk.controls.remove('rulerControl', {
		scaleLine: false,
	});
	mapNsk.geoObjects.add(placemarkNsk);
	mapBrn.geoObjects.add(placemarkBrn);
}
if(ymaps) {
ymaps.ready(init);
}


