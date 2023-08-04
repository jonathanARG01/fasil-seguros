import { Component    } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  	selector: 'app-choose-us',
  	standalone: true,
  	imports: [CommonModule],
  	templateUrl: './choose-us.component.html',
  	styleUrls: ['./choose-us.component.scss']
})





export class ChooseUsComponent {

	
	choose: any = [
		{
			text: 'Confianza',
			img: 'assets/icon-choose1.svg'
		},
		{
			text: 'Experiencia',
			img: 'assets/icon-choose2.svg'
		},
		{
			text: 'Servicio 24/7 y compromiso',
			img: 'assets/icon-choose3.svg'
		},
		{
			text: 'Oportunidad de elegir productos a medida',
			img: 'assets/icon-choose4.svg'
		},
		{
			text: 'Ofrecemos productos innovadores',
			img: 'assets/icon-choose5.svg'
		}
	];


}
