import { Component    } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerAboutComponent } from 'src/app/sections/banner-about/banner-about.component';
import { ValoresComponent     } from '../../sections/valores/valores.component';
import { FooterComponent      } from 'src/app/shared/footer/footer.component';



@Component({
  	selector: 'app-nosotros',
  	standalone: true,
  	imports: [CommonModule, BannerAboutComponent, ValoresComponent, FooterComponent],
  	templateUrl: './nosotros.component.html',
  	styleUrls: ['./nosotros.component.scss']
})



export class NosotrosComponent {



}
