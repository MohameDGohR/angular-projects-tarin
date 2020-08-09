import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { CustomFormsModule } from 'ngx-custom-validators';

import { FavoriteComponent } from './favorite/favorite.component';
import { SummaryPipe } from './summary.pipe';
import { PanelComponent } from './panel/panel.component';
import { DirectivesComponent } from './directives/directives.component';
import { InputFormateDirective } from './input-formate.directive';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { DataComponent } from './data/data.component';
import { RoutingComponentComponent } from './routing-component/routing-component.component' ;


@NgModule({
   declarations: [
      AppComponent,
      FavoriteComponent,
      SummaryPipe,
      PanelComponent,
      DirectivesComponent,
      InputFormateDirective,
      LoginComponent,
      DataComponent,
      RoutingComponentComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      CustomFormsModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
