import { Component    } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

import { BannerAboutComponent } from 'src/app/sections/banner-about/banner-about.component';
import { ValoresComponent     } from '../../sections/valores/valores.component';
import { FooterComponent      } from 'src/app/shared/footer/footer.component';



@Component({
  	selector: 'app-nosotros',
  	standalone: true,
  	imports: [CommonModule, BannerAboutComponent, ValoresComponent, FooterComponent],
  	templateUrl: './nosotros.component.html',
  	styleUrls: ['./nosotros.component.scss'],
	animations: [
		trigger('pageTransition', [
			transition(':enter, :leave', [
				style({ opacity: 0 }),
				animate('0.8s ease-in-out', style({ opacity: 1 })),
			]),
		])
	]
})



export class NosotrosComponent {



}
