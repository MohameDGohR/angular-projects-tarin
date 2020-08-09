import { Component, NgModule } from '@angular/core';
import { Observable, Observer } from 'rxjs';

import { map } from 'rxjs/operators';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectnew';
  status = true ;
  nameval ;

  onkeyup(firstname){

      console.log(firstname);
  }


  favouritechanged(){

   console.log(this.status);
  }
}
