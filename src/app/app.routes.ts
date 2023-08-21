// Angular
import { Routes } from '@angular/router';

// Routes
import { InicioComponent    } from './pages/inicio/inicio.component';
import { NosotrosComponent  } from './pages/nosotros/nosotros.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { SeguroComponent    } from './pages/seguro/seguro.component';
import { ContactoComponent  } from './pages/contacto/contacto.component';
import { SiniestroComponent } from './pages/siniestro/siniestro.component';
import { ProductoComponent  } from './pages/producto/producto.component';
import { ThanksComponent    } from './pages/thanks/thanks.component';



export const routes: Routes = [
    { path: '',              component: InicioComponent, pathMatch: 'full',},
    { path: 'inicio',        component: InicioComponent    },
    { path: 'nosotros',      component: NosotrosComponent  },
    { path: 'productos',     component: ProductosComponent },
    { path: 'productos/:id', component: ProductoComponent  },
    { path: 'seguro',        component: SeguroComponent    },
    { path: 'contacto',      component: ContactoComponent  },
    { path: 'siniestro',     component: SiniestroComponent },
    { path: 'thanks',        component: ThanksComponent    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
