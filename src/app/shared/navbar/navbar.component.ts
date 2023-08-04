// Angular
import { Component        } from '@angular/core';
import { CommonModule     } from '@angular/common';
import { RouterModule     } from '@angular/router';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';



@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})



export class NavbarComponent {

}
