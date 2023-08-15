import { Component    } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  	selector: 'understanding',
  	standalone: true,
  	imports: [CommonModule],
  	templateUrl: './understanding.component.html',
  	styleUrls: ['./understanding.component.scss']
})



export class UnderstandingComponent {

	title: string = 'Te explicamos 8 conceptos importantes para que entiendas del mundo seguros';

	preguntas: any = [
		{
			pregunta: '¿Qué es una Póliza?',
			respuesta: 'Es el documento justificativo del seguro.'
		},
		{
			pregunta: '¿Qué es una Cobertura?',
			respuesta: 'Es lo que la compañía te pagará, en caso que sufras algún daño o siniestro, de la cosa asegurada.'
		},
		{
			pregunta: '¿Qué es una Prima?',
			respuesta: 'Es el costo del seguro que contratas, es anual, pero las compañías de seguro, dan la opción de pagarles en cuotas.'
		},
		{
			pregunta: '¿Qué es un Siniestro?',
			respuesta: 'Es la ocurrencia del riesgo, o sea, un choque, un incendio, un daño.'
		},
		{
			pregunta: '¿Qué es un Liquidador?',
			respuesta: 'Es la persona que investiga la ocurrencia de los siniestros y sus circunstancias y determinar si éstos se encuentran o no amparados por la póliza y el monto de la indemnización que corresponda pagar al asegurado o beneficiario.'
		},
		{
			pregunta: '¿Qué es un Deducible?',
			respuesta: 'Es parte de la reparación, que te comprometes a pagar en caso de siniestro. Por lo general, mientras más deducible contratas, menor es la prima que pagas.'
		},
		{
			pregunta: '¿Qué es una Responsabilidad Civil?',
			respuesta: 'En donde el asegurador se obliga a indemnizar los daños y perjuicios causados a terceros, de los cuales sea civilmente responsable el asegurado, por un hecho y en los términos previstos en la póliza.  '
		},
		{
			pregunta: '¿Qué es un Corredor de seguros?',
			respuesta: 'Es quien se encarga de asesorar, informar y asistir a los asegurados, para que entiendan perfecto lo que necesitan y contratan. Ayuda al asegurado para que no pague de más y se aseguren correctamente'
		}
	];

}
