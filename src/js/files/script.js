// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { formsModules } from "./forms/forms.js";

import {
	menuClose
} from "./functions.js";

import {
	isMobile
} from "./functions.js";

import {
	removeClasses
} from "./functions.js";

import {
	bodyLockToggle
} from "./functions.js";


import $ from "jquery";

// Скрыть меню при клике вне меню
let hamburger = document.querySelector('.icon-menu'),
	menu = document.querySelector('.menu__list');

hamburger.addEventListener('click', (e) => {
	e.stopPropagation();
});

document.addEventListener('click', (e) => {
	let target = e.target;
	let its_menu = target == menu || menu.contains(target);
	let its_hamburger = target == hamburger;
	let menu_is_active = document.documentElement.classList.contains("menu-open");

	if (!its_menu && !its_hamburger && menu_is_active) {
		menuClose();
		bodyLockToggle();
	}
});

// Actions (делегирование события click)
function documentActions(e) {
	const targetElement = e.target;
	if (targetElement.classList.contains('menu__link')) {
		targetElement.closest('.menu__item').classList.toggle('_hover');
	}
	if (!targetElement.closest('.menu__item') && document.querySelectorAll('.menu__item._hover').length > 0) {
		removeClasses(document.querySelectorAll('.menu__item._hover'), "_hover");
	} else if (targetElement.closest('.menu__item') && document.querySelectorAll('.menu__item._hover').length > 0) {
		removeClasses(document.querySelectorAll('.menu__item._hover'), "_hover");
		targetElement.closest('.menu__item').classList.add('_hover');
	}
}

document.addEventListener("click", documentActions);

const menuItems = document.querySelectorAll('.menu__item');

menuItems.forEach(item => {
	item.addEventListener('mouseover', (e) => {
		if (e.target) {
			item.classList.add('_hover');
		}
	});
	item.addEventListener('mouseout', (e) => {
		if (e.target) {
			item.classList.remove('_hover');
		}
	});
});


// Rating

const reviewsRating = document.querySelectorAll('.reviews__list-item--rating'),
	slidesRating = document.querySelectorAll('.b-reviews__item-rating'),
	reviewsHeaderRating = document.querySelectorAll('.reviews__header-rating');


const changeRating = (containerVariable, color) => {
	let ratingValue = 0;

	if (containerVariable) {
		containerVariable.forEach(item => {
			ratingValue = +item.innerText;
			switch (ratingValue) {
				case 5:
					item.innerHTML = `
				<i class="fa-regular fa-star ${color}"></i>
				<i class="fa-regular fa-star ${color}"></i>
				<i class="fa-regular fa-star ${color}"></i>
				<i class="fa-regular fa-star ${color}"></i>
				<i class="fa-regular fa-star ${color}"></i>
				`;
					break;
				case 4:
					item.innerHTML = `
				<i class="fa-regular fa-star ${color}"></i>
				<i class="fa-regular fa-star ${color}"></i>
				<i class="fa-regular fa-star ${color}"></i>
				<i class="fa-regular fa-star ${color}"></i>
				<i class="fa-regular fa-star"></i>
				`;
					break;
				case 3:
					item.innerHTML = `
					<i class="fa-regular fa-star ${color}"></i>
					<i class="fa-regular fa-star ${color}"></i>
					<i class="fa-regular fa-star ${color}"></i>
					<i class="fa-regular fa-star"></i>
					<i class="fa-regular fa-star"></i>
					`;
					break;
				case 2:
					item.innerHTML = `
					<i class="fa-regular fa-star ${color}"></i>
					<i class="fa-regular fa-star ${color}"></i>
					<i class="fa-regular fa-star"></i>
					<i class="fa-regular fa-star"></i>
					<i class="fa-regular fa-star"></i>
					`;
					break;
				case 1:
					item.innerHTML = `
					<i class="fa-regular fa-star ${color}"></i>
					<i class="fa-regular fa-star"></i>
					<i class="fa-regular fa-star"></i>
					<i class="fa-regular fa-star"></i>
					<i class="fa-regular fa-star"></i>
					`;
					break;
			}
		});
	}
}

changeRating(reviewsRating, 'yellow');
changeRating(slidesRating, 'yellow');
changeRating(reviewsHeaderRating, 'white');


// Heading

const output = document.createDocumentFragment(),
	headers = document.querySelectorAll('.overview__content h1, .overview__content h2, .overview__content h3, .overview__content h4, .overview__content h5, .overview__content h6'),
	wrapper = document.createElement('div'),
	title = document.createElement('h2'),
	ul = document.createElement('ul'),
	target = document.querySelector('.overview'),
	headersTitle = document.querySelector('.overview__title');



if (target) {
	wrapper.classList.add('overview__header');
	title.classList.add('overview__header-title');
	title.textContent = headersTitle.textContent;
	ul.classList.add('overview__header-list');
	output.appendChild(wrapper);
	wrapper.appendChild(title);
	wrapper.appendChild(ul);

	headers.forEach(function (item, index) {
		const li = document.createElement('li'),
			titleh2 = document.createElement('h2'),
			img = document.createElement('img');
		li.classList.add('overview__header-item');
		titleh2.classList.add('overview__header-subtitle');
		img.src = `img/overview-item.svg`;
		img.alt = `overview-item`;
		if (item.id === '') {
			item.id = 'id-' + index;
		}
		li.dataset.goto = item.id;
		li.setAttribute('data-goto-header', true);
		titleh2.textContent = item.textContent;
		li.appendChild(img);
		li.appendChild(titleh2);
		ul.appendChild(li);
	});

	target.prepend(output);
}


// Sticky meny
let navbar = document.querySelector(".header"),
	sticky = navbar.offsetTop,
	nextBlock = document.querySelector(".page"),
	nextBlockMarginTop = window.getComputedStyle(nextBlock).marginTop;

function stickyMenu() {
	let navbarHeight = window.getComputedStyle(navbar).height;
	window.addEventListener('resize', () => {
		navbarHeight = window.getComputedStyle(navbar).height,
			sticky = navbar.offsetTop;
	});
	if (window.pageYOffset > sticky) {
		navbar.classList.add("sticky");
		nextBlock.style.marginTop = +nextBlockMarginTop.slice(0, nextBlockMarginTop.length - 2) + +navbarHeight.slice(0, navbarHeight.length - 2) + "px";
	} else {
		navbar.classList.remove("sticky");
		nextBlock.style.marginTop = nextBlockMarginTop;
	}
}

window.addEventListener('scroll', stickyMenu);


// Menu fix

window.addEventListener('resize', () => {
	if (window.innerWidth >= 992) {
		menuClose();
	}
});


// Promocode

function copy2buffer(e) {
	let idTarget = e.target.getAttribute('id');
	let textArea = document.createElement("textarea");
	textArea.value = idTarget;
	document.body.appendChild(textArea);
	textArea.select();
	document.execCommand("Copy");
	textArea.remove();
	$('#' + idTarget).text('Скопировано');
	$('#' + idTarget).addClass('active');
	setTimeout(function () {
		$('#' + idTarget).text(idTarget);
		$('#' + idTarget).removeClass('active');
	}, 3000);
	//$.fancybox.open('<div class="сopied-popup"><div class="msg-buffer"></div><h1>Успех!</h1><p>Промокод скопирован в буфер обмена</p></div>');
	//setTimeout(function(){$.fancybox.close();}, 3000);
}


const promocode = document.querySelectorAll('.promocode__body');

promocode.forEach(item => {
	item.addEventListener('click', (e) => {
		copy2buffer(e)
	});
});


// Back to top

! function (s) {
	"use strict";
	s(".switch").on("click", function () {
		s("body").hasClass("light") ? (s("body").removeClass("light"), s(".switch").removeClass("switched")) : (s("body").addClass("light"), s(".switch").addClass("switched"))
	}), s(document).ready(function () {
		var e = document.querySelector(".progress-wrap path"),
			t = e.getTotalLength();
		e.style.transition = e.style.WebkitTransition = "none", e.style.strokeDasharray = t + " " + t, e.style.strokeDashoffset = t, e.getBoundingClientRect(), e.style.transition = e.style.WebkitTransition = "stroke-dashoffset 10ms linear";
		var o = function () {
			var o = s(window).scrollTop(),
				r = s(document).height() - s(window).height(),
				i = t - o * t / r;
			e.style.strokeDashoffset = i
		};
		o(), s(window).scroll(o);
		s(window).on("scroll", function () {
			s(this).scrollTop() > 50 ? s(".progress-wrap").addClass("active-progress") : s(".progress-wrap").removeClass("active-progress")
		})
	})
}($);

$('.progress-wrap').on('click', function (event) {
	event.preventDefault();

	$('html, body').animate({
		scrollTop: 0,
	}, 1500);
});

//Поиск

const searchBtn = document.querySelector('.search button'),
	searchInput = document.querySelector('.search__input'),
	searchResults = document.querySelector('.search__results-box'),
	headerMenu = document.querySelector('.header__menu'),
	headerIcons = document.querySelector('.header__icons');

let headerMenuWidth = window.getComputedStyle(headerMenu).width,
	headerMenuMarginLeft = window.getComputedStyle(headerMenu).marginLeft,
	headerIconsMarginLeft = window.getComputedStyle(headerIcons).marginLeft;


if (window.innerWidth >= 992) {
	searchResults.style.width = +headerMenuWidth.slice(0, headerMenuWidth.length - 2) +
		+headerMenuMarginLeft.slice(0, headerMenuMarginLeft.length - 2) +
		+headerIconsMarginLeft.slice(0, headerIconsMarginLeft.length - 2) + "px";
} else if (window.innerWidth >= 480) {
	searchResults.style.width = '300px';
} else {
	searchResults.style.width = '220px';
}


searchBtn.addEventListener('click', (e) => {
	e.stopPropagation();
	if (e.target && !searchInput.classList.contains('_active')) {
		e.preventDefault();
		searchInput.classList.toggle('_active');
		if (window.innerWidth >= 992) {
			searchInput.style.width = +headerMenuWidth.slice(0, headerMenuWidth.length - 2) +
				+headerMenuMarginLeft.slice(0, headerMenuMarginLeft.length - 2) +
				+headerIconsMarginLeft.slice(0, headerIconsMarginLeft.length - 2) + "px";
			searchResults.style.width = +headerMenuWidth.slice(0, headerMenuWidth.length - 2) +
				+headerMenuMarginLeft.slice(0, headerMenuMarginLeft.length - 2) +
				+headerIconsMarginLeft.slice(0, headerIconsMarginLeft.length - 2) + "px";
		} else if (window.innerWidth >= 480) {
			searchInput.style.width = '300px';
			searchResults.style.width = '300px';
		} else {
			searchInput.style.width = '220px';
			searchResults.style.width = '220px';
		}
	} else {
		return;
	}
})

window.addEventListener('resize', () => {
	headerMenuWidth = window.getComputedStyle(headerMenu).width;
	headerMenuMarginLeft = window.getComputedStyle(headerMenu).marginLeft;
	headerIconsMarginLeft = window.getComputedStyle(headerIcons).marginLeft;
	if (window.innerWidth >= 992) {
		searchInput.style.width = +headerMenuWidth.slice(0, headerMenuWidth.length - 2) +
			+headerMenuMarginLeft.slice(0, headerMenuMarginLeft.length - 2) +
			+headerIconsMarginLeft.slice(0, headerIconsMarginLeft.length - 2) + "px";
		searchResults.style.width = +headerMenuWidth.slice(0, headerMenuWidth.length - 2) +
			+headerMenuMarginLeft.slice(0, headerMenuMarginLeft.length - 2) +
			+headerIconsMarginLeft.slice(0, headerIconsMarginLeft.length - 2) + "px";
	} else if (window.innerWidth >= 480) {
		searchInput.style.width = '300px';
		searchResults.style.width = '300px';
	} else {
		searchInput.style.width = '220px';
		searchResults.style.width = '220px';
	}
});


document.addEventListener('click', (e) => {
	let target = e.target;
	let its_results = target == searchResults;
	let its_menu = target == searchInput || searchInput.contains(target);
	let its_hamburger = target == searchBtn;
	let menu_is_active = searchInput.classList.contains("_active");

	if (!its_menu && !its_hamburger && !its_results && menu_is_active) {
		searchInput.classList.toggle('_active');
	}
});

// Поиск ajax

$(document).ready(function () {
	var $result = $('.search__results-box');

	$('#search').on('keyup', function () {
		var search = $(this).val();
		if ((search != '') && (search.length > 1)) {
			$.ajax({
				type: "POST",
				url: "/ajax_search.php",
				data: {
					'search': search
				},
				success: function (msg) {
					$result.html(msg);
					if (msg != '') {
						$result.fadeIn();
					} else {
						$result.fadeOut(100);
					}
				}
			});
		} else {
			$result.html('');
			$result.fadeOut(100);
		}
	});

	$(document).on('click', function (e) {
		if (!$(e.target).closest('.search').length) {
			$result.html('');
			$result.fadeOut(100);
		}
	});

	$(document).on('click', '.search__results-link', function () {
		$result.fadeOut(100);
	});

});