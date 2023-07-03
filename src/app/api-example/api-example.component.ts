import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api-example',
  templateUrl: './api-example.component.html',
  styleUrls: ['./api-example.component.css']
})
export class ApiExampleComponent {
  artworks: any[] = [];

  constructor(private http: HttpClient) { }

  fetch() {
    this.http.get<any>('https://api.artic.edu/api/v1/artworks')
      .subscribe(response => this.artworks = response.data)
  }
}
