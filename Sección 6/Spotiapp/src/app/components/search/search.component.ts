import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  artistas: any[] = [];
  loading: boolean = false;

  constructor(private spotify: SpotifyService) {

  }

  buscar(termino: string){
    this.loading = true;
    console.log(termino);
    this.spotify.getArtistas(termino).subscribe((data: any) => {
      console.log(data);
      this.artistas = data;
    })
    this.loading = false;
  }

  ngOnInit(): void {
  }

}
