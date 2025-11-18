import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-productos.component.html',
  styleUrls: ['./detalle-productos.component.css']
})
export class ProductoDetalleComponent implements OnInit {

  id!: number;
  producto: any;

  productos = [
    {
      id: 1,
      nombre: "Cupcake de Fresas",
      precio: 8.50,
      imagen: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=800&h=800&fit=crop",
      descripcion: "Delicioso cupcake elaborado con un bizcocho suave y esponjoso, cubierto con una crema de fresa natural y decorado con fresas frescas. Perfecto para endulzar cualquier momento del día. Cada bocado te transportará a un mundo de dulzura natural."
    },
    {
      id: 2,
      nombre: "Cheesecake de Frutos Rojos",
      precio: 14.90,
      imagen: "https://www.paulinacocina.net/wp-content/uploads/2025/01/receta-de-cheesecake-1742898428.jpg",
      descripcion: "Exquisito cheesecake cremoso con base crujiente de galletas, coronado con una mezcla de frutos rojos frescos (fresas, frambuesas y arándanos). Su textura suave y equilibrado sabor lo convierten en el postre ideal para ocasiones especiales."
    },
    {
      id: 3,
      nombre: "Torta de Chocolate",
      precio: 18.00,
      imagen: "https://images.aws.nestle.recipes/resized/2020_06_23T11_58_41_mrs_ImageRecipes_32386lrg_1080_850.jpg",
      descripcion: "Torta de chocolate artesanal con varias capas de bizcocho húmedo y cremoso. Cubierta con ganache de chocolate belga y decorada elegantemente. Un clásico irresistible para los amantes del chocolate más intenso y delicioso."
    },
    {
      id: 4,
      nombre: "Macarons Franceses",
      precio: 12.50,
      imagen: "https://comedera.com/wp-content/uploads/sites/9/2021/03/macarons-franceses.jpg",
      descripcion: "Auténticos macarons franceses con su característica textura crujiente por fuera y suave por dentro. Disponibles en diversos sabores delicados como vainilla, fresa, chocolate y pistacho. Cada macaron es una obra maestra de la pastelería francesa."
    },
    {
      id: 5,
      nombre: "Rollos de Canela",
      precio: 7.00,
      imagen: "https://www.paulinacocina.net/wp-content/uploads/2023/04/3_20230410_094455_0002.jpg",
      descripcion: "Recién horneados rollos de canela, suaves y esponjosos, rellenos con una mezcla dulce de canela y azúcar moreno, y cubiertos con un glaseado cremoso. El aroma y sabor casero los hace perfectos para acompañar tu café matutino o merienda."
    }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.producto = this.productos.find(p => p.id === this.id);
  }

  volver(): void {
    this.router.navigate(['/']);
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (this.producto) {
      img.src = `https://via.placeholder.com/500x500/ffbcd4/8b1e54?text=${encodeURIComponent(this.producto.nombre)}`;
    }
  }
}
