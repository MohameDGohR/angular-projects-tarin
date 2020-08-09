import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DataComponent } from './data/data.component';
import { FavoriteComponent } from './favorite/favorite.component';




const routes: Routes = [
   {path: 'login', component: LoginComponent} ,
   {path: 'data', component: DataComponent} ,
   {path: 'favorite', component: FavoriteComponent}
];

@NgModule({
   imports: [
      RouterModule.forRoot(routes)
   ],
   exports: [
      RouterModule
   ],
   declarations: [
   ]
})
export class AppRoutingModule { }
