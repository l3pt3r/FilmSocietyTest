import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  dat: any
  constructor(private router: ActivatedRoute) {
    // const data = router.getCurrentNavigation().extras.queryParams.data;
   }

  ngOnInit(): void {
    this.router.queryParams.subscribe((params: object) =>{
      console.log(params);
      this.dat = params
    }
    )
  }

}
