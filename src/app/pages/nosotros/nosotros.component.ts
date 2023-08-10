import { Component    } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerAboutComponent } from 'src/app/sections/banner-about/banner-about.component';



@Component({
  	selector: 'app-nosotros',
  	standalone: true,
  	imports: [CommonModule, BannerAboutComponent],
  	templateUrl: './nosotros.component.html',
  	styleUrls: ['./nosotros.component.scss']
})



export class NosotrosComponent {



}
