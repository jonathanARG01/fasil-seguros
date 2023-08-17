import { Component, Input } from '@angular/core';
import { CommonModule     } from '@angular/common';

import { AbstractControl, ReactiveFormsModule } from '@angular/forms';
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


	public myFormCar: FormGroup = this.fb.group({
		name:      [ '', [Validators.required] ],
		lastname:  [ '', [Validators.required] ],
		rut:       [ '', [Validators.required, this.rutValidator] ],
		email:     [ '', [Validators.required, Validators.email] ],
		phone:     [ '', [Validators.required, Validators.minLength(9), Validators.maxLength(9)] ],
		marca:     [ '' ],
		model:     [ '' ],
		year:      [ '' ],
		patente:   [ '', [Validators.required] ],
		cuota:     [ '' ],
		deducible: [ '' ]
	});

	
	public myFormGeneral: FormGroup = this.fb.group({
		name:      [ '', [Validators.required, Validators.minLength(3)] ],
		lastname:  [ '', [Validators.required, Validators.minLength(3)] ],
		rut:       [ '', [Validators.required, this.rutValidator]],
		email:     [ '', [Validators.required, Validators.email] ],
		phone:     [ '', [Validators.required, Validators.minLength(9), Validators.maxLength(9)] ],
		motivo:    [ '', [Validators.required] ],
		comments:  [ '' ],
	});


	constructor( private fb: FormBuilder ) {}


	validatePhoneInput(event: any): void {
		const input = event.target.value;
		const numericInput = input.replace(/[^0-9]/g, '');
		
		if (numericInput.length < 9) {
			this.myFormCar.get('phone')?.setErrors({ invalidLength: true });
		} else {
			this.myFormCar.get('phone')?.setErrors(null);
		}
		
		this.myFormCar.get('phone')?.setValue(numericInput);
	}


	formatRut(event: any): void {
		
		const input = event.target as HTMLInputElement;
		let rutValue = input.value.replace(/\D+/g, ''); // Remover caracteres no numéricos
		
		if ( rutValue.length > 1 ) {
		  	const lastDigit    = rutValue.slice(-1);
		  	const restOfDigits = rutValue.slice(0, -1);
		  	rutValue           = restOfDigits + '-' + lastDigit;
		}
		
		input.value = rutValue;
		this.myFormCar.get('rut')?.setValue(rutValue, { emitEvent: false });
	
	}


	// Definir un validador personalizado para el RUT
	private rutValidator(control: AbstractControl): { [key: string]: boolean } | null {
		
		const value = control.value;

		if (!value) {
			return null; // No mostrar error si el campo está vacío
		}

		// Expresión regular para validar RUT chileno (con puntos y guión)
		const rutPattern = /^[0-9]+-[0-9kK]{1}$/;
		
		if (!rutPattern.test(value)) {
			return { invalidRut: true }; // Mostrar error si el formato no es válido
		}

		// Verificar longitud mínima y máxima
		const rutWithoutPunctuation = value.replace(/[.-]/g, ''); // Eliminar puntos y guiones
		if (rutWithoutPunctuation.length < 8 || rutWithoutPunctuation.length > 9) {
			return { invalidLength: true }; // Mostrar error si longitud es incorrecta
		}

		// Si pasa todas las validaciones, retorna null
		return null;

	}


	isFieldInvalid(form: FormGroup, fieldName: string): boolean {
		const field = form.get(fieldName);
		return !!field?.touched && !!field?.errors;
	}


	onSave(): void {

		if ( this.isCar ) {
			console.log( 'Form CAR' );
			if ( this.myFormCar.invalid ) return;
			console.log( this.myFormCar.value );
			this.myFormCar.reset();
		}

		if ( this.isGeneral ) {
			console.log( 'Form GENERAL' );
			if ( this.myFormGeneral.invalid ) return;
			console.log( this.myFormGeneral.value );
			this.myFormGeneral.reset();
		}
		
	}


}
