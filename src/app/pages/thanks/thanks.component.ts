import { Component    } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';



@Component({
  	selector: 'app-thanks',
  	standalone: true,
  	imports: [CommonModule, RouterModule],
  	templateUrl: './thanks.component.html',
  	styleUrls: ['./thanks.component.scss'],
	animations: [
		trigger('pageTransition', [
			transition(':enter, :leave', [
				style({ opacity: 0 }),
				animate('0.8s ease-in-out', style({ opacity: 1 })),
			]),
		])
	]
})



export class ThanksComponent {



}
