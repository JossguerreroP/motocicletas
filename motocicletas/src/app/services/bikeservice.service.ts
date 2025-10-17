import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BikeserviceService {

  private apiUrl = '';

   constructor(private http: HttpClient) {}

   getAllBikes(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

}
