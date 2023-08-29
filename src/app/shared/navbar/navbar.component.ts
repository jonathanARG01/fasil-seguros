import { Component, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

import { animate, state, style, transition, trigger } from '@angular/animations';



@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    animations: [
        trigger('menuAnimation', [
            state('slideIn', style({ opacity: 1, transform: 'translateY(0)' })),
            state('slideOut', style({ opacity: 0, transform: 'translateY(-10px)' })),
            transition('slideIn <=> slideOut', animate('0.3s ease-in-out')),
        ]),
    ],
})



export class NavbarComponent {


    isMenuExpanded: boolean = false;

    constructor( private elementRef: ElementRef, private router: Router ) {}


    ngOnInit() {
        this.scrollToTopOnRouteChange();
    }
    

    toggleMenu() {
        this.scrollToTopOnRouteChange();
        this.isMenuExpanded = !this.isMenuExpanded;
    }


    closeMenu() {
        this.scrollToTopOnRouteChange();
        this.isMenuExpanded = false;
    }


    scrollToTopOnRouteChange() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                const element = document.getElementById('page_top');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    }


    // Escucha el evento click del documento
    @HostListener('document:click', ['$event'])
    handleClick(event: MouseEvent) {
        // Comprueba si el clic ocurrió fuera del área del menú flotante
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.isMenuExpanded = false;
        }
    }

}
