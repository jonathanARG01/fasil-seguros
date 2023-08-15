import { Component    } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  	selector: 'app-insurers',
  	standalone: true,
  	imports: [CommonModule],
  	templateUrl: './insurers.component.html',
  	styleUrls: ['./insurers.component.scss']
})



export class InsurersComponent {

	
	title: string = 'Nuestras Aseguradoras';

	insurers: any = [
		{
			name: 'bci seguros',
			img: 'assets/icon-insurance1.svg'
		},
		{
			name: 'hdi seguros',
			img: 'assets/icon-insurance2.svg'
		},
		{
			name: 'liberty seguros',
			img: 'assets/icon-insurance3.svg'
		},
		{
			name: 'reale seguros',
			img: 'assets/icon-insurance4.svg'
		}
	];


}
