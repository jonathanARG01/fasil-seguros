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
			name: 'Duerme tranquilo',
			text: 'Protege tu inversión de daños y de la delincuencia.',
			img: 'assets/icon-benefit1.svg'
		},
		{
			name: 'Asistencias en todo Chile',
			text: 'Asistencias que te ayudarán siempre.',
			img: 'assets/icon-benefit2.svg'
		},
		{
			name: 'Seguridad para tu auto',
			text: 'Proximos descuentos en GPS por tener el seguro con Fasil Seguros.',
			img: 'assets/icon-benefit3.svg'
		},
	];

}
