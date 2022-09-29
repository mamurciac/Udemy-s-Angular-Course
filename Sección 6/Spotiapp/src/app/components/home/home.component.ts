import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  paises: any[] = [];

  constructor(private http: HttpClient){
    console.log('Constructor del home hecho');
    this.http.get('https://restcountries.com/v3.1/lang/spa').subscribe((respuesta: any) => {
      this.paises = respuesta;
      console.log(respuesta);
    });
  }

  ngOnInit(): void {
  }

}
