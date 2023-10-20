import { Component    } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

import { BannerSiniestroComponent } from 'src/app/sections/banner-siniestro/banner-siniestro.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';



@Component({
  	selector: 'app-siniestro',
  	standalone: true,
  	imports: [CommonModule, BannerSiniestroComponent, FooterComponent, RouterModule],
  	templateUrl: './siniestro.component.html',
  	styleUrls: ['./siniestro.component.scss'],
	animations: [
		trigger('pageTransition', [
			transition(':enter, :leave', [
				style({ opacity: 0 }),
				animate('0.8s ease-in-out', style({ opacity: 1 })),
			]),
		])
	]
})



export class SiniestroComponent {


	aseguradoras: any = [
		{
			name: 'bci seguros',
			logo: 'assets/logo-bci.svg',
			link: 'https://denunciowebvehiculo.bciseguros.cl/inicio?utm_source=web&utm_medium=WL&utm_campaign=denuncioHomehuincha'
		},
		{
			name: 'hdi seguros',
			logo: 'assets/logo-hdi.svg',
			link: 'https://www.hdi.cl/hdi-seguros-home/denunciar-siniestro/'
		},
		{
			name: 'liberty seguros',
			logo: 'assets/logo-liberty.svg',
			link: 'https://denuncio.liberty.cl/#_gl=1*zly01b*_gcl_au*MTk4MDg5ODExMi4xNjk3ODA2NjAx'
		},
		{
			name: 'reale seguros',
			logo: 'assets/logo-reale.svg',
			link: 'https://www.reale.cl/denunciar-un-siniestro/'
		}
	];


	verAseguradora( name: string ) {
		console.log( 'Aseguradora: ', name );
	}


}
