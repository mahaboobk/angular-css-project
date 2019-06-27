import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ParentDivComponent } from './parent-div/parent-div.component';
import { ChildDivComponent } from './child-div/child-div.component';
import { LowerCornerComponent } from './lower-corner/lower-corner.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule ],
  declarations: [ AppComponent, HelloComponent, ParentDivComponent, ChildDivComponent, LowerCornerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
