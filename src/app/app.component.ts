// Angular
import { Component        } from '@angular/core';
import { CommonModule     } from '@angular/common';
import { RouterOutlet     } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


// Components
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
  	selector: 'app-root',
  	standalone: true,
  	imports: [CommonModule, RouterOutlet, NavbarComponent, HttpClientModule],
  	templateUrl: './app.component.html',
  	styleUrls: ['./app.component.scss']
})



export class AppComponent {

	title = 'fasil-seguros';

}




