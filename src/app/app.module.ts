import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import {MatPaginatorModule} from '@angular/material/paginator';

const appRoute: Routes = [
  {path:'', component: SearchComponent},
  {path:'List', component: ListComponent},
  {path:'Details', component: DetailsComponent}
]

@NgModule({
  declarations: [AppComponent, SearchComponent, DetailsComponent, ListComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
