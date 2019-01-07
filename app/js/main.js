class Preloader{
	constructor(){
		this.preloader = document.querySelector('.preloader');
		this.logo = this.preloader.querySelector('.preloader__logo');
		this.way = null

		this.steps = {
			300: this.rotating,
			500: this.text,
			2300: this.translate,
			3500: this.scroll
		}

		window.onload = this.hide.bind(this);
	}

	show(){
		this.way = 1;
		for (let i in this.steps){
			this.steps[i].call(this)
		}
	}

	rotating(){
		return !this.way ? this.logo.classList.remove('rotating') : this.logo.classList.add('rotating');
	}

	text(){
		return !this.way ? this.preloader.classList.add('show') : this.preloader.classList.remove('show');
	}

	translate(){
		return !this.way ? this.preloader.classList.add('hidden') : this.preloader.classList.remove('hidden');
	}

	scroll(){
		return document.querySelectorAll('html, body').forEach((item) => item.style.overflowY = !this.way ? 'visible' : 'hidden');
	}

	hide(fast=0){
		this.way = 0;
		if (fast == 1){
			this.translate();
			this.scroll();
		}
		else{
			for (let i in this.steps){
				let timeout = setTimeout(this.steps[i].bind(this), i)
			}
		}
	}
}

let preloader;

document.addEventListener("DOMContentLoaded", () => {
	if (document.querySelector('.preloader')) 
		preloader = new Preloader();
})

document.addEventListener("DOMContentLoaded", ()=> {
	let percentBlock = document.querySelector('.profile__stat');
	percentBlock.style.display = 'none';
	let tabs = document.querySelectorAll('.info__tabs--block'),
		infoBlocks = [...document.querySelector('.info__block').children];
		
		
	tabs.forEach( ( item, i ) => {
		item.addEventListener('click', ()=> {
			tabs.forEach( v => v.classList.remove('info__tabs--block_active'));
			item.classList.add('info__tabs--block_active');
			infoBlocks.forEach( (v)=> {
				v.style.display = 'none';
				infoBlocks[i].style.display = 'block';
			})
		})
	});

	//change profile

	let kids 	   = document.querySelectorAll('.kids__item'),
		profileImg = document.querySelector('.profile__pic');

	kids.forEach( (item)=> {
		if(item.classList.contains('kids__item_active')) {
			profileImg.setAttribute('src', item.dataset.img);
		} 
		item.addEventListener('click', ()=> {
			kids.forEach( v => v.classList.remove('kids__item_active'))
			item.classList.add('kids__item_active');
			profileImg.setAttribute('src', item.dataset.img);
		})
	})


})

// Slider 
/*======================= General function =================*/
  function _q(node) {
    return document.querySelector(node);
  }

  function _qA(node) {
    return document.querySelectorAll(node);
  }
/*======================= General function End==============*/

let slideCount = _qA('.slider__item').length,
    slideEle   = _q('.slider__item'),
    slideWidth = slideEle.getBoundingClientRect().width,
    slideHeight = slideEle.getBoundingClientRect().height,
    sliderUlWidth = slideCount * slideWidth,
    slider = _q('.slider'),
    sliderList = _q('.slider__list');
    console.log(slideWidth)   

/*slider.style.width = slideWidth+'px';*/
/*slider.style.height = slideHeight + 'px';*/
sliderList.style.width = slideWidth*4+'px';
sliderList.style.transform = `translateX(-${slideWidth}px)`;

/*function changeLeft() {

    let sliderCol  = _qA('.slider__item'),
        firstSlide = sliderCol[0],
        lastSlide = sliderCol[sliderCol.length - 1]; 

    sliderList.insertBefore(lastSlide,firstSlide);   
};

changeLeft();*/

function changeRight() {
    let sliderCol  = _qA('.slider__item'),
        firstSlide = sliderCol[0],
        lastSlide = sliderCol[sliderCol.length - 1]; 

    sliderList.appendChild(firstSlide);   
}

/*
function moveLeft() {

    sliderList.style.transition = 'transform 1.2s';
    sliderList.style.transform = 'translateX(' + y + ')';   
    setTimeout(function () {
        sliderList.style.transition = 'none';
        sliderList.style.transform = 'translateX(-500px)';   
        changeLeft();
    },300);
}*/

function moveRight() {

    sliderList.style.transition = 'transform 1.2s';
    sliderList.style.transform = `translateX(-${slideWidth*2}px)`; 
  
    setTimeout(function () {
        sliderList.style.transition = 'none';      
        sliderList.style.transform = `translateX( -${slideWidth}px )`;    
        changeRight();
    },1200);
}

setInterval(moveRight,10000);

document.addEventListener('DOMContentLoaded', () => {
	let lang = document.querySelector('.header__languages')
		langBlock = document.querySelector('.langblock'),
		langBlockClose = document.querySelector('.langblock__close')
	lang.addEventListener('click', () => {
		langBlock.classList.add('active');
	})
	langBlockClose.addEventListener('click', () => {
		langBlock.classList.remove('active');
	})
})
