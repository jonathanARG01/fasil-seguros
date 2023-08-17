import { Component, Input } from '@angular/core';
import { CommonModule     } from '@angular/common';

import { AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder ,FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';



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
		patente:   [ '', [Validators.required, this.patenteValidator ]],
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


	formatPatente(event: any): void {
		
		const input      = event.target as HTMLInputElement;
		let patenteValue = input.value.replace(/[^A-Za-z0-9]/g, ''); // Permitir solo letras y números
		patenteValue     = patenteValue.slice(0, 6).toUpperCase(); // Limitar a 6 caracteres y convertir a mayúsculas
	  
		if ( patenteValue.length > 2 ) {
		  	
			const firstPart  = patenteValue.slice(0, 2);
		  	const secondPart = patenteValue.slice(2, 4);
		  	const thirdPart  = patenteValue.slice(4);
		  	patenteValue     = `${firstPart}-${secondPart}-${thirdPart}`;

		} else if ( patenteValue.length > 1 ) {

		  	const firstPart  = patenteValue.slice(0, 2);
		  	const secondPart = patenteValue.slice(2);
		  	patenteValue     = `${firstPart}-${secondPart}`;
		
		}
	  
		input.value = patenteValue;
		this.myFormCar.get('patente')?.setValue(patenteValue, { emitEvent: false });
	}
	

	private patenteValidator(control: AbstractControl): { [key: string]: boolean } | null {
		
		const value = control.value;
		
		if (!value) {
		  	return null; // No mostrar error si el campo está vacío
		}
	  
		// Expresión regular para validar patente chilena (formato: XXXX-XX)
		const patentePattern = /^[A-Z0-9]{4}-[A-Z0-9]{2}$/;
	  
		if (!patentePattern.test(value)) {
		  	return { invalidPatente: true }; // Mostrar error si el formato no es válido
		}
	  
		// Si pasa todas las validaciones, retorna null
		return null;
	
	}
	

	onSave(): void {
		
		if ( this.isCar ) {
			console.log( 'Form CAR' );
			if ( this.myFormCar.invalid ) {
				Swal.fire({
					icon: 'error',
					text: 'Por favor, completa todos los campos obligatorios.'
				});
				return;
			}
			console.log( this.myFormCar.value );
			
			Swal.fire({
				icon: 'success',
				text: 'Tu información se ha enviado con éxito a nuestros ejecutivos, y te contactaremos lo más pronto posible, para que tu experiencia sea FASIL.'
			});

			this.myFormCar.reset();
		}

		if ( this.isGeneral ) {
			console.log( 'Form GENERAL' );
			if ( this.myFormGeneral.invalid ) {
				Swal.fire({
					icon: 'error',
					text: 'Por favor, completa todos los campos obligatorios.'
				});
				return;
			};
			console.log( this.myFormGeneral.value );

			Swal.fire({
				icon: 'success',
				text: 'Tu información se ha enviado con éxito a nuestros ejecutivos, y te contactaremos lo más pronto posible, para que tu experiencia sea FASIL.'
			});

			this.myFormGeneral.reset();
		}

	}


}
