import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HighlightComponent } from './highlight/highlight.component';
import { HighlightDirective } from './highlight/highlight.directive';

const routes: Routes = [
  { path: 'highlight', component: HighlightComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HighlightComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
