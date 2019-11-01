import { BrowserModule }       from '@angular/platform-browser';
import { NgModule }            from '@angular/core';
import { FormsModule }         from '@angular/forms';
import { AppComponent }        from './app.component';
import { HeroesComponent }     from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { ProductComponent }    from './product-list/product-list.component';
import { MessagesComponent }   from './messages/messages.component';
import { SqrtPipe }            from './app.sqrt';


import { AppRoutingModule }   from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientModule }   from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { TestComponent } from './test/test.component';
import { ChangeTextDirective } from './change-text.directive';
import { TimeService } from './time.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    TestComponent,
    SqrtPipe,
    ChangeTextDirective,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false})
  ],
  providers: [
    // no need to place any providers due to the `providedIn` flag...
    InMemoryDataService,
    TimeService],
  
  bootstrap: [ AppComponent ]
})
export class AppModule { }