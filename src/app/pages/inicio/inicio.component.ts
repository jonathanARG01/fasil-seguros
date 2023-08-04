import { Component    } from '@angular/core';
import { CommonModule } from '@angular/common';

// Sections
import { ChooseUsComponent } from 'src/app/sections/choose-us/choose-us.component';
import { InsurersComponent } from 'src/app/sections/insurers/insurers.component';



@Component({
  	selector: 'app-inicio',
  	standalone: true,
  	imports: [CommonModule, ChooseUsComponent, InsurersComponent],
  	templateUrl: './inicio.component.html',
  	styleUrls: ['./inicio.component.scss']
})



export class InicioComponent {



}
