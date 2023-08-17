import { Component, Input } from '@angular/core';
import { CommonModule     } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder ,FormGroup, Validators } from '@angular/forms';



@Component({
  	selector: 'form-contact',
  	standalone: true,
  	imports: [CommonModule, ReactiveFormsModule],
  	templateUrl: './form-contact.component.html',
  	styleUrls: ['./form-contact.component.scss']
})



export class FormContactComponent {

	
	@Input() isCar!: boolean;
	@Input() isGeneral!: boolean;
	@Input() isCotizar!: boolean;


	// public myForm: FormGroup = new FormGroup({
	// 	name: new FormControl('')
	// });


	public myForm: FormGroup = this.fb.group({
		name:     [ '', [Validators.required] ],
		lastname: [ '', [Validators.required] ],
		rut:      [ 0,  [Validators.required] ]
	});


	constructor( private fb: FormBuilder ) {}


	onSave(): void {
		if ( this.myForm.invalid ) return;
		console.log( this.myForm.value );
		this.myForm.reset();
	}


}
