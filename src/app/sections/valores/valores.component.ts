import { Component    } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  	selector: 'app-valores',
  	standalone: true,
  	imports: [CommonModule],
  	templateUrl: './valores.component.html',
  	styleUrls: ['./valores.component.scss']
})



export class ValoresComponent {

	
	valores: any = [
		{
			name: 'Profesionalismo',
			text: 'Actuar con integridad, ética y conocimientos especializados para ofrecer el mejor servicio a personas como tu.'
		},
		{
			name: 'Orientación al cliente',
			text: 'Colocar siempre las necesidades y los intereses de nuestros clientes en el centro de nuestras acciones y decisiones.'
		},
		{
			name: 'Innovación',
			text: 'Buscar constantemente nuevas soluciones que ayuden a mejorar la experiencia de nuestros clientes, como así tecnologías que puedan usarse para cuidar el patrimonio asegurado.'
		},
		{
			name: 'Trabajo en equipo',
			text: 'Fomentar un ambiente colaborativo, donde el talento individual se combine con el trabajo conjunto, y así mejorar la experiencia del cliente.'
		},
		{
			name: 'Responsabilidad socio y medioambiental',
			text: 'Contribuir activamente al bienestar de la comunidad y el cuidado del medio ambiente, en todas nuestras acciones y decisiones.'
		},
	]; 


}
