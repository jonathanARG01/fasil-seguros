import { Component    } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  	selector: 'benefits',
  	standalone: true,
  	imports: [CommonModule],
  	templateUrl: './benefits.component.html',
  	styleUrls: ['./benefits.component.scss']
})



export class BenefitsComponent {

	title: string = 'Beneficios';

	benefits: any = [
		{
			name: 'Beneficio 01',
			text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
			img: 'assets/icon-benefit1.svg'
		},
		{
			name: 'Beneficio 02',
			text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
			img: 'assets/icon-benefit2.svg'
		},
		{
			name: 'Beneficio 03',
			text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
			img: 'assets/icon-benefit3.svg'
		},
	];

}
