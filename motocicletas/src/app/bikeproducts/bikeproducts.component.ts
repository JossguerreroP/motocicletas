import { Component,OnInit  } from '@angular/core';
import { BikeserviceService } from '../services/bikeservice.service';
import { Bike } from '../models/touch bike.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-bikeproducts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bikeproducts.component.html',
  styleUrl: './bikeproducts.component.css'
})
export class BikeproductsComponent  implements OnInit {
  bikes: Bike[] = [];
  
  ngOnInit(): void {
    this.loadBikes();
  }

  constructor(private bikeService: BikeserviceService) { }

  loadBikes(): void {
    this.bikeService.getAllBikes().subscribe({
      next: (data) => {
        this.bikes = data; // Guardamos la respuesta en el arreglo
        console.log(this.bikes); // Opcional: revisar en consola
      },
      error: (err) => {
        console.error('Error al cargar las motos', err);
      }
    });
  }

}
