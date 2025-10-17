import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BikeproductsComponent } from "../bikeproducts/bikeproducts.component"; 
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BikeproductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  motorbikes: any[] = [];

}
