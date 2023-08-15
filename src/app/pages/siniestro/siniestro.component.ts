import { Component    } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

import { BannerSiniestroComponent } from 'src/app/sections/banner-siniestro/banner-siniestro.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';



@Component({
  	selector: 'app-siniestro',
  	standalone: true,
  	imports: [CommonModule, BannerSiniestroComponent, FooterComponent],
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
			logo: 'assets/logo-bci.svg'
		},
		{
			name: 'hdi seguros',
			logo: 'assets/logo-hdi.svg'
		},
		{
			name: 'liberty seguros',
			logo: 'assets/logo-liberty.svg'
		},
		{
			name: 'reale seguros',
			logo: 'assets/logo-reale.svg'
		}
	];


	verAseguradora( name: string ) {
		console.log( 'Aseguradora: ', name );
	}


}
