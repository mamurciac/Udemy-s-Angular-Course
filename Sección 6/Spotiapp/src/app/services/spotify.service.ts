import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient){
    console.log('Servicio de Spotify listo para usar!!!');
  }

  getQuery(query: string){
    const URL = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAR1J6sG-wmOPrgl1CtBABphOakqrfOo7flqBIrrNMiKHnOD7k_Z6D-IO86Ua5VM_8IwN5S0f7OfVuqn6muV9wwexeHStjGsByZVm1kI6RN_Sjl3k0'
    });

    return this.http.get(URL, {headers});
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=20').pipe(map((data: any) => {
      return data['albums'].items;
    }));
  }

  getArtistas(termino: string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map((data: any) => {
      return data['artists'].items;
    }));
  }

  getArtista(id: string){
    return this.getQuery(`artists/${id}`);
  }
}
