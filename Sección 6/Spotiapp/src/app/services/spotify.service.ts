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
      'Authorization': 'Bearer BQBvJ1RAL8frqKm6Cx2yF7xab1YFlaJgT0B-WEZAl-QFm3-vx4jXK5DatHh1xGnQlzmThPs2xwiXLVHD8i1H5g1q71o7RahNFx5I4yejnGHVhUKR7ZE'
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

  getTopTracks(id: string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(map((data: any) => {
      return data['tracks'];
    }));
  }
}
