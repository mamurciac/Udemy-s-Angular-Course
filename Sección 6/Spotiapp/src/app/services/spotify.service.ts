import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient){
    console.log('Servicio de Spotify listo para usar!!!');
  }

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBK0UC3WLAGQ_pFEE6H1XZFWp6eoBhgcQCLJGR7_SCpnTOk717G9u2jtKbEmZ3fh01H2hd2fZxmO6AK8CVS_CCb0Wbov3WceSTO80EOpx64AZ6eFvE'
    });
    this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers}).subscribe(data => {
      console.log(data);
    })
  }
}
