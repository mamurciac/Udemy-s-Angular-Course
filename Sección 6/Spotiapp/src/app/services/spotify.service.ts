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
      'Authorization': 'Bearer BQDQ4ps-_Dd-wqOk_Qe5tWdkWeE6EeP4MYPHFN19iBrxHXXGz647nlipryfK_LEJfdphEyfczWPskvBfbO5c9SFVj3ImsAHdcnR4fJhd9O_GvMH5w1w'
    });

    return this.http.get(URL, {headers});
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=20').pipe(map((data: any) => {
      return data['albums'].items;
    }));
  }

  getArtista(termino: string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map((data: any) => {
      return data['artists'].items;
    }));
  }
}
