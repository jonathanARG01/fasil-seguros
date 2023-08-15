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



}
