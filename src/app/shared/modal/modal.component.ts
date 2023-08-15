import { Component    } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormContactComponent } from '../form-contact/form-contact.component';



@Component({
  	selector: 'modal',
  	standalone: true,
  	imports: [CommonModule, FormContactComponent],
  	templateUrl: './modal.component.html',
  	styleUrls: ['./modal.component.scss']
})



export class ModalComponent {


	isCar: boolean = true;
	isGeneral: boolean = true;
	

}
