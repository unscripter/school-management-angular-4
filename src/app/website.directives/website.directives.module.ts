import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { WebsiteHeader } from './website.directives.header/website.directives.header';


@NgModule({
  declarations: [
    WebsiteHeader
  ],
  entryComponents: [
    WebsiteHeader
  ],
  imports: [
    BrowserModule
  ],
  exports: [WebsiteHeader],
  providers: [],
})
export class WebsiteDirectivesModule { }
