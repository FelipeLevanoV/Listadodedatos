import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent {

  productos = [
    {
      id: 1,
      nombre: "Cupcake de Fresas",
      precio: 8.50,
      imagen: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40"
    },
    {
      id: 2,
      nombre: "Cheesecake de Frutos Rojos",
      precio: 14.90,
      imagen: "https://images.unsplash.com/photo-1505253216365-7483c0c1e1a1https://cdn0.recetasgratis.net/es/posts/1/4/9/cheesecake_de_frutos_rojos_73941_orig.jpg"
    },
    {
      id: 3,
      nombre: "Torta de Chocolate",
      precio: 18.00,
      imagen: "https://images.unsplash.com/photo-1599785209707-e8264c67a89e"
    },
    {
      id: 4,
      nombre: "Macarons Franceses",
      precio: 12.50,
      imagen: "https://images.unsplash.com/photo-1521302080372-e0a4ff3f3f1f"
    },
    {
      id: 5,
      nombre: "Rollos de Canela",
      precio: 7.00,
      imagen: "https://images.unsplash.com/photo-1607083204853-e91f55a744d9"
    }
  ];

}
