import { NgModule, NgZone } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  declarations: [AppComponent, MainComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(protected ngZone: NgZone) {
    (window as any).ngZone = this.ngZone;
  }
}
