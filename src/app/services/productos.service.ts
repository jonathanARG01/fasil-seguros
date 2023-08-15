import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Producto } from '../interfaces/producto.interface';



@Injectable({
  	providedIn: 'root'
})



export class ProductosService {


	private categories: any = [
		{
			id: 1,
			name: 'auto'
		},
		{
			id: 2,
			name: 'salud'
		},
		{
			id: 3,
			name: 'viajes'
		},
		{
			id: 4,
			name: 'hogar'
		}
	];

	private productos: Producto[] = [
		{
			id: 1,
			name: 'Seguro Automotríz',
			description: 'Protege tu inversión sobre daños, robos o accidentes, con un seguro automotriz y cuida tu patrimonio. Cubre daños propios como a terceros.',
			cover: ['Daños materiales', 'Robos de accesorios', 'Robo, hurto y uso no autorizado', 'Huelga, Terrorismo', 'Actos maliciosos', 'Sismo granizo y otros riesgos de naturaleza', 'Defensa penal', 'Responsabilidad civil', 'Daños a terceros por conductor dependiente', 'Entre otros'],
			nocover: ['Los daños preexistentes de mi vehículo', 'Siniestros ocasionados por el uso no autorizado del vehículo', 'Usos diferentes al declarado al contratar el seguro', 'Los daños bajo la influencia de cualquier droga', 'Los daños si el conductor ha huido o abandonado el lugar del accidente', 'Siniestros por modificación de piezas o partes del vehículo asegurado.'],
			type: 'personas',
			category: 'auto',
			banner: 'assets/banner-single1.png',
		},
		{
			id: 2,
			name: 'Seguro Moto',
			description: '',
			cover: [],
			nocover: [],
			type: 'personas',
			category: 'auto',
			banner: '',
		},
		{
			id: 3,
			name: 'SOAP',
			description: 'Seguro Obligatorio de Accidentes Personales. Este seguro es un requisito obligatorio para transitar en territorio Chileno. Da cobertura a personas en caso de lesiones corporales o muerte por consecuencias de un accidente en el que el vehículo asegurado participe.',
			cover: [],
			nocover: [],
			type: 'personas',
			category: 'auto',
			banner: '',
		},
		{
			id: 4,
			name: 'Seguro complementario de salud (con consulta de Telemedicina)',
			description: 'Planes de 60%, 70% y 80% de cobertura de copago. Hasta 5 cargas adicionales. Prestaciones ambulatorias, Hospitalarias, Maternidad, Psiquiátricas y Psicológicas, etc. Cobertura en el extranjero en accidentes y urgencias. Cobertura en medicamentos.',
			cover: [],
			nocover: [],
			type: 'personas',
			category: 'salud',
			banner: '',
		},
		{
			id: 5,
			name: 'Seguro complementario de salud individual',
			description: '¡Protegemos tu salud y la de los que más quieres! Complementa tu plan Fonasa o Isapre y reduce un 60%, 70% u 80% los gastos médicos por consultas, tratamientos, procedimientos y exámenes hasta cinco cargas adicionales. TIENES TELECONSULTAS GRATIS ILIMITADAS, en donde doctores te pueden dar recetas, ordenes, revisión de exámenes, etc.',
			cover: [],
			nocover: [],
			type: 'personas',
			category: 'salud',
			banner: '',
		},
		{
			id: 6,
			name: 'Seguro de Accidentes Personales',
			description: 'Cubre al asegurado o a sus beneficiarios, las lesiones corporales, la incapacidad o la muerte que éste sufra a consecuencias de un accidente que haya ocurrido durante la vigencia de la póliza.',
			cover: [],
			nocover: [],
			type: 'personas',
			category: 'salud',
			banner: '',
		},
		{
			id: 7,
			name: 'Seguro Asistencia en viaje',
			description: 'Cubre las indemnizaciones y a efectuar las prestaciones contempladas en favor de las personas aseguradas, respecto de una o varias contingencias que puedan sufrir durante un viaje y que se describen en la póliza de seguro.',
			cover: [],
			nocover: [],
			type: 'personas',
			category: 'viajes',
			banner: '',
		},
		{
			id: 8,
			name: 'RCI (Responsabilidad Civil Internacional)',
			description: 'La cobertura cubre al asegurado por el daño que pueda experimentar su patrimonio a consecuencia de la reclamación que le efectúe un tercero, por la responsabilidad en que haya podido incurrir, tanto el propio asegurado como aquellas personas por las cuales él responda civilmente.',
			cover: [],
			nocover: [],
			type: 'personas',
			category: 'viajes',
			banner: '',
		},
		{
			id: 9,
			name: 'Seguro Incendio hogar',
			description: 'Cobertura para tu hogar contra un daño generado por la acción directa de un incendio, sismo, o incluso el contenido, en caso de robo. Algunas asistencias de algunos pólizas son gasfitería, electricidad, cerrajería y cristalería. Hay que estar preparado ante condiciones inevitables como un terremoto y sobre todo en un país tan sísmico como CHILE, dado que nos encontramos dentro de los 6 países mas sísmicos del mundo.',
			cover: [],
			nocover: [],
			type: 'personas',
			category: 'hogar',
			banner: '',
		},
		{
			id: 10,
			name: 'Seguro incendio',
			description: 'La presente cobertura, cubre, los daños materiales que sufran los objetos asegurados por la acción directa del incendio y los que sean una consecuencia inmediata del mismo, como los causados por el calor, el humo, el vapor o por los medios empleados para extinguirlo o contenerlo; y las demoliciones que sean necesarias u ordenadas por la autoridad competente.',
			cover: [],
			nocover: [],
			type: 'empresas',
			category: 'empresa',
			banner: '',
		},
		{
			id: 11,
			name: 'Seguro PYME',
			description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna',
			cover: [],
			nocover: [],
			type: 'empresas',
			category: 'empresa',
			banner: '',
		},
		{
			id: 12,
			name: 'Seguro Todo Riesgo de Construcción',
			description: 'Cubre al “Asegurado” descrito en las Condiciones Particulares, por los riesgos derivados de Trabajos de Construcción e Ingeniería Civil y por la Responsabilidad Civil, es decir, por la responsabilidad en que haya podido incurrir, tanto el propio asegurado como aquellas personas por las cuales él responda civilmente.',
			cover: [],
			nocover: [],
			type: 'empresas',
			category: 'empresa',
			banner: '',
		},
		{
			id: 13,
			name: 'Seguro Todo Riesgo Montaje',
			description: 'Cubre al asegurado, descrito en las Condiciones Particulares de la póliza, los riesgos derivados de Trabajos de Montaje, y la Responsabilidad Civil, si ambos riesgos han sido contratados conjuntamente, dentro de los límites, montos, condiciones y demás estipulaciones de estas condiciones Generales y en las condiciones particulares de la Póliza.',
			cover: [],
			nocover: [],
			type: 'empresas',
			category: 'empresa',
			banner: '',
		},
		{
			id: 14,
			name: 'Seguro Equipo Contratista',
			description: 'Cubre al asegurado descrito en las Condiciones Particulares de la póliza, los riesgos de daños propios y la responsabilidad civil, si ha sido contratada, dentro de los límites, montos, condiciones y demás estipulaciones indicadas en estas Condiciones Generales y en las Condiciones Particulares de la póliza.',
			cover: [],
			nocover: [],
			type: 'empresas',
			category: 'empresa',
			banner: '',
		},
		{
			id: 15,
			name: 'Seguro Equipos Electrónicos',
			description: 'Cubre al asegurado los riesgos de daños físicos, de todas las instalaciones y equipos electrónicos especificados en las Condiciones Particulares de la póliza, llamadas en adelante materia asegurada, una vez que su instalación y puesta en marcha hayan sido finalizadas satisfactoriamente.',
			cover: [],
			nocover: [],
			type: 'empresas',
			category: 'empresa',
			banner: '',
		},
		{
			id: 16,
			name: 'Responsabilidad Civil',
			description: 'La cobertura cubre al asegurado por el daño que pueda experimentar su patrimonio a consecuencia de la reclamación que le efectúe un tercero, por la responsabilidad en que haya podido incurrir, tanto el propio asegurado como aquellas personas por las cuales él responda civilmente.',
			cover: [],
			nocover: [],
			type: 'empresas',
			category: 'empresa',
			banner: '',
		},
		{
			id: 17,
			name: 'Incendio Comunidad',
			description: 'La presente cobertura, cubre, los daños materiales que sufran los objetos asegurados por la acción directa del incendio y los que sean una consecuencia inmediata del mismo, como los causados por el calor, el humo, el vapor o por los medios empleados para extinguirlo o contenerlo; y las demoliciones que sean necesarias u ordenadas por la autoridad competente.',
			cover: [],
			nocover: [],
			type: 'empresas',
			category: 'empresa',
			banner: '',
		},
		{
			id: 18,
			name: 'Seguro automotriz (flotas)',
			description: 'Lo que se busca es garantizar la tranquilidad y funcionamiento de tu negocio, frente a algún problema. Protege tu inversión sobre daños, robos o accidentes, con un seguro automotriz y cuida tu patrimonio en tu empresa. Cubre daños propios como a terceros.',
			cover: [],
			nocover: [],
			type: 'empresas',
			category: 'empresa',
			banner: '',
		}
	];


	constructor() { }


	getProducts() {
		return this.productos;
	}


	getCategories() {
		return this.categories;
	}
	
	
	getProductById(id: number): Observable<Producto | undefined> {
		const producto = this.productos.find(producto => producto.id === id);
		return of(producto);
	}

	
	clearProducts() {
		this.productos = [];
	}


}
