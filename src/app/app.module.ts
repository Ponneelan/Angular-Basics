import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyAppComponent } from './my-app/my-app.component';
import { HooksComponent } from './hooks/hooks.component';
import { ChileToParentComponent } from './chile-to-parent/chile-to-parent.component';
import { ParentToChildComponent } from './parent-to-child/parent-to-child.component';

@NgModule({
  declarations: [
    AppComponent,
    MyAppComponent,
    HooksComponent,
    ChileToParentComponent,
    ParentToChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
