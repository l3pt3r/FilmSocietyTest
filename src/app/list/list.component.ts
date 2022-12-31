import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  dat: any;
  pageIndex: number = 1;
  pageLength: number = 10;
  total: number = 0;
  url: string = '';

  constructor(private router: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.router.queryParams.subscribe((params: any) => {
      this.url = params['link'];

      let tmp = JSON.parse(params['data']);
      this.dat = tmp.Search;
      this.total = tmp.totalResults;
    });
  }

  fetchData() {
    this.pageIndex++;
    let url = `${this.url}&page=${this.pageIndex}`;
    return this.http.get(url).subscribe((res) => {
      let obj = Object.values(res);
      if (obj[0] != 'False')
        for (var i = 0; i < obj[0].length; i++) {
          this.dat.push(obj[0][i]);
        }
    });
  }
}
