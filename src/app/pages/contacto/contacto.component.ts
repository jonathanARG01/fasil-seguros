// Angular
import { Component    } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

// Components
import { FormContactComponent } from 'src/app/shared/form-contact/form-contact.component';
import { FooterComponent      } from 'src/app/shared/footer/footer.component';



@Component({
  	selector: 'app-contacto',
  	standalone: true,
  	imports: [CommonModule, FormContactComponent, FooterComponent, RouterModule],
  	templateUrl: './contacto.component.html',
  	styleUrls: ['./contacto.component.scss'],
	animations: [
		trigger('pageTransition', [
			transition(':enter, :leave', [
				style({ opacity: 0 }),
				animate('0.8s ease-in-out', style({ opacity: 1 })),
			]),
		])
	]
})



export class ContactoComponent {
	isCar: boolean = true;
	isGeneral: boolean = true;
}
