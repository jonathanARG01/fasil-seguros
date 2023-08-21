import { Component, Input                     } from '@angular/core';
import { CommonModule                         } from '@angular/common';
import { HttpClient, HttpHeaders              } from '@angular/common/http';
import { Router 				              } from '@angular/router';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder ,FormGroup, Validators   } from '@angular/forms';

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
		nombre:      [ '', [Validators.required] ],
		apellido:    [ '', [Validators.required] ],
		rut:         [ '', [Validators.required, this.rutValidator]],
		email:       [ '', [Validators.required, Validators.email] ],
		telefono:    [ '', [Validators.required] ],
		marca:       [ '' ],
		modelo:      [ '' ],
		anio:        [ '' ],
		patente:     [ '' ],
		valor_cuota: [ '' ],
		deducible:   [ '' ]
	});


	// rut:       [ '', [Validators.required, this.rutValidator]],
	// telefono: [ '', [Validators.required, Validators.minLength(9), Validators.maxLength(9)] ],
	// patente:   [ '', [Validators.required, this.patenteValidator ]],

	// {
	// 	"motivo_consulta": "Test",
	// 	"nombre": "Juan",
	// 	"apellido": "Perez",
	// 	"rut": "11.111.111-1",
	// 	"email": "test@test.cl",
	// 	"telefono": "987654321",
	// 	"marca": "Mazda",
	// 	"modelo": "2 Sport",
	// 	"anio": 2018,
	// 	"patente": "KJBT84",
	// 	"valor_cuota": 30000,
	// 	"deducible": "5 UF",
	// 	"comentarios": "Test"
	//   }

	
	public myFormGeneral: FormGroup = this.fb.group({
		nombre:          [ '', [Validators.required] ],
		apellido:        [ '', [Validators.required] ],
		rut:             [ '', [Validators.required, this.rutValidator]],
		email:           [ '', [Validators.required, Validators.email] ],
		telefono:        [ '', [Validators.required] ],
		motivo_consulta: [ '', [Validators.required] ],
		comentarios:     [ '' ],
	});


	constructor(
		private http: HttpClient,
		private fb: FormBuilder,
		private router: Router) {}


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




	private rutValidator(control: AbstractControl): { [key: string]: boolean } | null {
		const value = control.value;
	
		if (!value) {
			return null; // No mostrar error si el campo está vacío
		}
	
		// Expresión regular para validar RUT chileno (con puntos y guión)
		const rutPattern = /^[0-9]{1,2}\.?[0-9]{3}\.?[0-9]{3}-?[0-9kK]{1}$/;
	
		if (!rutPattern.test(value)) {
			return { invalidRut: true }; // Mostrar error si el formato no es válido
		}
	
		// Eliminar puntos y guion para contar la longitud real del RUT
		const rutWithoutPunctuation = value.replace(/[.-]/g, '');
	
		// Verificar longitud mínima y máxima
		if (rutWithoutPunctuation.length !== 8 && rutWithoutPunctuation.length !== 9) {
			return { invalidLength: true }; // Mostrar error si la longitud no es correcta
		}
	
		// Validar el dígito verificador (algoritmo adecuado para validar RUT)
		const rutDigits = rutWithoutPunctuation.slice(0, -1);
		const verifierDigit = rutWithoutPunctuation.slice(-1).toUpperCase();
		const verifierCode = (verifierDigit === 'K') ? 10 : parseInt(verifierDigit, 10);
	
		let sum = 0;
		let multiplier = 2;
	
		for (let i = rutDigits.length - 1; i >= 0; i--) {
			sum += parseInt(rutDigits[i], 10) * multiplier;
			multiplier = (multiplier === 7) ? 2 : multiplier + 1;
		}
	
		const calculatedVerifier = 11 - (sum % 11);
		const calculatedVerifierDigit = (calculatedVerifier === 10) ? 'K' : String(calculatedVerifier);
	
		if (calculatedVerifierDigit !== verifierDigit) {
			return { invalidRut: true }; // Mostrar error si el dígito verificador no coincide
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
	

	// private patenteValidator(control: AbstractControl): { [key: string]: boolean } | null {
		
	// 	const value = control.value;
		
	// 	if (!value) {
	// 	  	return null; // No mostrar error si el campo está vacío
	// 	}
	  
	// 	// Expresión regular para validar patente chilena (formato: XXXX-XX)
	// 	const patentePattern = /^[A-Z0-9]{4}-[A-Z0-9]{2}$/;
	  
	// 	if (!patentePattern.test(value)) {
	// 	  	return { invalidPatente: true }; // Mostrar error si el formato no es válido
	// 	}
	  
	// 	// Si pasa todas las validaciones, retorna null
	// 	return null;
	
	// }
	

	onSave(): void {
		let formData: any;
	  
		if (this.isCar) {
		  if (this.myFormCar.invalid) return;
		  formData = this.myFormCar.value;
		}
	  
		if (this.isGeneral) {
		  if (this.myFormGeneral.invalid) return;
		  formData = this.myFormGeneral.value;
		}
	  
		// Formatear el RUT antes de enviarlo
		if (formData.rut) {
		  const rutValue = formData.rut.replace(/[^\dkK]/g, '');
		  const rutDigits = rutValue.slice(0, -1);
		  const verifierDigit = rutValue.slice(-1);
		  const formattedRut = `${rutDigits.slice(0, 2)}.${rutDigits.slice(2, 5)}.${rutDigits.slice(5)}-${verifierDigit}`;
		  formData.rut = formattedRut;
		}
	  
		const url = 'https://leads.fasilseguros.cl/api/save';
		const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
	  
		console.log( formData );

		this.http.post(url, formData, { headers }).subscribe(
		  () => {
			Swal.fire({
			  icon: 'success',
			  text: 'Tu información se ha enviado con éxito a nuestros ejecutivos, y te contactaremos lo más pronto posible, para que tu experiencia sea FASIL.'
			});
	  
			if (this.isCar) {
			  this.myFormCar.reset();
			}
	  
			if (this.isGeneral) {
			  this.myFormGeneral.reset();
			}
	  
			this.router.navigate(['/thanks']);
		  },
		  (error) => {
			console.error('Error:', error);
	  
			Swal.fire({
			  icon: 'error',
			  text: 'Hubo un error al enviar la información. Por favor, inténtalo de nuevo.'
			});
		  }
		);
	  }
	  


}
