import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bike }  from '../models/touch bike.model'

@Injectable({
  providedIn: 'root'
})
export class BikeserviceService {

  private apiUrl = 'http://localhost:8080/bikes';

   constructor(private http: HttpClient) {}

   getAllBikes(): Observable<Bike[]> {
    return this.http.get<Bike[]>(this.apiUrl);
  }

}
