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

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCzgLVfwCQNWo2KBB_D9lTOG-6iqjQHZSZ0RnJW8g66l1mW2zk-mRgJMeCOxBQg1dsvsetrcrOcCfTVYoRqhy-8hm6eoQALuLYl7C8sPwHRAXuc6KI'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers}).pipe(map((data: any) => {
      return data['albums'].items;
    }));
  }

  getArtista(termino: string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCzgLVfwCQNWo2KBB_D9lTOG-6iqjQHZSZ0RnJW8g66l1mW2zk-mRgJMeCOxBQg1dsvsetrcrOcCfTVYoRqhy-8hm6eoQALuLYl7C8sPwHRAXuc6KI'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers}).pipe(map((data: any) => {
      return data['artists'].items;
    }));
  }
}
