// Angular
import { Component    } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { FormContactComponent } from 'src/app/shared/form-contact/form-contact.component';
import { FooterComponent      } from 'src/app/shared/footer/footer.component';



@Component({
  	selector: 'app-contacto',
  	standalone: true,
  	imports: [CommonModule, FormContactComponent,FooterComponent],
  	templateUrl: './contacto.component.html',
  	styleUrls: ['./contacto.component.scss']
})



export class ContactoComponent {

	

}
