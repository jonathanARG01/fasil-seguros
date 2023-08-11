import { Component    } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerSiniestroComponent } from 'src/app/sections/banner-siniestro/banner-siniestro.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';



@Component({
  	selector: 'app-siniestro',
  	standalone: true,
  	imports: [CommonModule, BannerSiniestroComponent, FooterComponent],
  	templateUrl: './siniestro.component.html',
  	styleUrls: ['./siniestro.component.scss']
})



export class SiniestroComponent {



}
