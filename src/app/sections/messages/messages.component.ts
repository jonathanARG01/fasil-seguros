import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  	selector: 'app-messages',
  	standalone: true,
  	imports: [CommonModule],
  	templateUrl: './messages.component.html',
  	styleUrls: ['./messages.component.scss']
})



export class MessagesComponent {

	title: string = 'En Fasil Seguros trabajamos con las mejores aseguradoras del país';

}
