import { Component    } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from 'src/app/shared/footer/footer.component';



@Component({
  	selector: 'app-seguro',
  	standalone: true,
  	imports: [CommonModule, FooterComponent],
  	templateUrl: './seguro.component.html',
  	styleUrls: ['./seguro.component.scss']
})



export class SeguroComponent {



}
