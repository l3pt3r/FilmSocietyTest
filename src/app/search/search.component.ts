import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchQuery: string = '';
  API_KEY: string = '247de336';
  panelOpenState = false;
  panelOpenState2 = false;

  constructor(private http: HttpClient, private route: Router) {}
  ngOnInit(): void {}

  getTitleResults() {
    let url = `https://omdbapi.com/?apikey=${this.API_KEY}&s=${this.searchQuery}&r=json`;

    return this.http.get(url, { responseType: 'json' }).subscribe((res) => {
      console.log(res);

      let navigationExtras: NavigationExtras = {
        queryParams: { data: JSON.stringify(res), link: url },
      };

      this.route.navigate(['List'], navigationExtras);
    });
  }
  getIdResults() {
    let url = `https://omdbapi.com/?apikey=${this.API_KEY}&i=${this.searchQuery}`;
    console.log(url);
    return this.http.get(url).subscribe((res) => {
      console.log(res);
      this.route.navigate(['Details'], { queryParams: res });
    });
  }
}
