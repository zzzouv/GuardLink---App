import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
})
export class UbicacionPage implements OnInit {
  ubicacionTexto: string = ''; 

  constructor() {}

  ngOnInit() {}

  async verCordenadas() {
    const coordenadas = await Geolocation.getCurrentPosition();
    this.ubicacionTexto = `La Latitud: ${coordenadas.coords.latitude} y la Longitud: ${coordenadas.coords.longitude}`;
    console.log('Current position:', coordenadas);
  }
}

