import { Component    } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';




@Component({
  	selector: 'app-footer',
  	standalone: true,
  	imports: [CommonModule, RouterModule],
  	templateUrl: './footer.component.html',
  	styleUrls: ['./footer.component.scss']
})



export class FooterComponent {


	horario: string = '00:00 a 00:00hs';
	phone:   string = '(+56) 987654321';
	email:   string = 'nombre@fasilseguros.cl';

	rrss: any = [
		{
			name: 'facebook',
			link: 'https://www.facebook.com/',
			icon: 'assets/icon-facebook.svg'
		},
		{
			name: 'instagram',
			link: 'https://www.instagram.com/',
			icon: 'assets/icon-instagram.svg'
		},
		{
			name: 'linkedin',
			link: 'https://www.linkedin.com/feed/',
			icon: 'assets/icon-linkedin.svg'
		}
	];

}
