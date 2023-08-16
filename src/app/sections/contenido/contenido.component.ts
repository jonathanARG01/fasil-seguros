import { Component    } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from 'src/app/shared/modal/modal.component';



@Component({
  	selector: 'contenido',
  	standalone: true,
  	imports: [CommonModule, ModalComponent],
  	templateUrl: './contenido.component.html',
  	styleUrls: ['./contenido.component.scss']
})



export class ContenidoComponent {



}
