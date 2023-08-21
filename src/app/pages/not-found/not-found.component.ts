import { Component    } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';



@Component({
  	selector: 'not-found',
  	standalone: true,
  	imports: [CommonModule],
  	templateUrl: './not-found.component.html',
  	styleUrls: ['./not-found.component.scss'],
	animations: [
		trigger('pageTransition', [
			transition(':enter, :leave', [
				style({ opacity: 0 }),
				animate('0.8s ease-in-out', style({ opacity: 1 })),
			]),
		])
	]
})



export class NotFoundComponent {

}
