import { Component, OnInit    } from '@angular/core';
import { CommonModule } from '@angular/common';

// Swiper
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { register      } from 'swiper/element/bundle';

import { InsuranceMenuComponent } from 'src/app/shared/insurance-menu/insurance-menu.component';

register();


@Component({
  	selector: 'app-banner',
  	standalone: true,
  	imports: [CommonModule, InsuranceMenuComponent],
  	templateUrl: './banner.component.html',
  	styleUrls: ['./banner.component.scss']
})



export class BannerComponent implements OnInit {


	ngOnInit(): void {
		
		const swiperParams: SwiperOptions = {
			effect: 'coverflow',
			speed: 1000,
			slidesPerView: 1,
  			spaceBetween: 20,
			loop: true,
			autoplay: false,
			navigation: {
				prevEl: '.swiper-button-prev-swiper2',
				nextEl: '.swiper-button-next-swiper2'
			}
		};
		  
		const swiper = new Swiper('.swiper', swiperParams);

		swiper;

	}


}
