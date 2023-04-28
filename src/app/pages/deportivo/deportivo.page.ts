import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-deportivo',
  templateUrl: './deportivo.page.html',
  styleUrls: ['./deportivo.page.scss'],
})
export class DeportivoPage implements OnInit {
  productos?: Observable<any>;
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.productos = this.http.get('https://fakestoreapi.com/products');
  }

}
