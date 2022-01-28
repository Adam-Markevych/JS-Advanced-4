import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompComponent } from './comp/comp.component';
import { SearchPipe } from './comp/search.pipe';
import { SortPipe } from './comp/sort.pipe';
import { Sort1Pipe } from './comp/sort1.pipe';
import { Sort2Pipe } from './comp/sort2.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CompComponent,
    SearchPipe,
    SortPipe,
    Sort1Pipe,
    Sort2Pipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
