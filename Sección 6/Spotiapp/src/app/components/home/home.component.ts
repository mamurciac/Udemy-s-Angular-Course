import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;
  errorServicio: boolean;
  mensajeError: string;

  constructor(private spotify: SpotifyService){
    this.errorServicio = false;
    this.loading = true;
    this.mensajeError = "";

    this.spotify.getNewReleases().subscribe((data: any) => {
      console.log(data);
      this.nuevasCanciones = data;
      this.loading = false;
    }, (error) => {
      console.log(error);
      this.mensajeError = error.error.error.message;
      this.errorServicio = true;
      this.loading = false;
    });
    
  }

  ngOnInit(): void {
  }

}
