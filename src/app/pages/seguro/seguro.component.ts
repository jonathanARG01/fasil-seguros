import { Component    } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

import { FooterComponent } from 'src/app/shared/footer/footer.component';



@Component({
  	selector: 'app-seguro',
  	standalone: true,
  	imports: [CommonModule, FooterComponent],
  	templateUrl: './seguro.component.html',
  	styleUrls: ['./seguro.component.scss'],
	animations: [
		trigger('pageTransition', [
			transition(':enter, :leave', [
				style({ opacity: 0 }),
				animate('0.8s ease-in-out', style({ opacity: 1 })),
			]),
		])
	]
})



export class SeguroComponent {



}
