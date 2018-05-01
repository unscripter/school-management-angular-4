import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component';
import { WebsiteDirectivesModule } from './website.directives/website.directives.module';
import { routing } from './routing.module';
import { PageNotFoundComponent } from './not-found.component';
import { Website } from './website/website.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    Website
  ],
  imports: [
    BrowserModule,
    routing,
    WebsiteDirectivesModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
