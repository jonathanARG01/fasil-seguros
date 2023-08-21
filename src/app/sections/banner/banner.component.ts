import { Component, OnInit    } from '@angular/core';
import { CommonModule } from '@angular/common';

// Swiper
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { register      } from 'swiper/element/bundle';

import { InsuranceMenuComponent } from 'src/app/shared/insurance-menu/insurance-menu.component';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

register();


@Component({
  	selector: 'app-banner',
  	standalone: true,
  	imports: [CommonModule, InsuranceMenuComponent, ModalComponent],
  	templateUrl: './banner.component.html',
  	styleUrls: ['./banner.component.scss']
})



export class BannerComponent implements OnInit {


	slides: any = [
		{
			pretitle: 'Seguros',
			title: 'Seguro Automotriz',
			img: 'assets/banner-single1.png'
		},
		{
			pretitle: 'Fasil Seguros',
			title: 'Cubre todo, sin complicaciones',
			img: 'assets/banner1.png'
		},
		{
			pretitle: 'Fasil Seguros',
			title: 'Seguros simples, protección completa',
			img: 'assets/banner2.png'
		},
		{
			pretitle: 'Fasil Seguros',
			title: 'Protección fasil, sin complicaciones',
			img: 'assets/banner3.png'
		}
	];


	ngOnInit(): void {
		
		const swiperParams: SwiperOptions = {
			effect: 'coverflow',
			speed: 1000,
			slidesPerView: 1,
  			spaceBetween: 20,
			loop: true,
			autoplay: false,
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next'
			}
		};
		  
		const swiper = new Swiper('.swiper', swiperParams);

		swiper;

	}


}
