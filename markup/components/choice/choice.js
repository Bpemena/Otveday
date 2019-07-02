 var swiper = new Swiper('.choice__container', {
      slidesPerView: 'auto',
      loop: true,
      loopedSlides: 3,
      spaceBetween: 50,
      freeMode: true,
      freeModeMomentum: true,
      navigation: {
      	nextEl: '.swiper-button-next',
	  	prevEl: '.swiper-button-prev',
	  },
    });