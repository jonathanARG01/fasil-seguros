import { Component    } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

// Sections
import { ChooseUsComponent } from 'src/app/sections/choose-us/choose-us.component';
import { InsurersComponent } from 'src/app/sections/insurers/insurers.component';
import { BannerComponent   } from 'src/app/sections/banner/banner.component';
import { MessagesComponent } from 'src/app/sections/messages/messages.component';
import { DiscoverComponent } from 'src/app/sections/discover/discover.component';
import { FooterComponent   } from 'src/app/shared/footer/footer.component';



@Component({
  	selector: 'app-inicio',
  	standalone: true,
  	imports: [
		CommonModule,
		ChooseUsComponent,
		InsurersComponent,
		BannerComponent,
		MessagesComponent,
		DiscoverComponent,
		FooterComponent
	],
  	templateUrl: './inicio.component.html',
  	styleUrls: ['./inicio.component.scss'],
	animations: [
		trigger('pageTransition', [
			transition(':enter, :leave', [
				style({ opacity: 0 }),
				animate('0.8s ease-in-out', style({ opacity: 1 })),
			]),
		])
	]
})



export class InicioComponent {

	

}
