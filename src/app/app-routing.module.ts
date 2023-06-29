import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';

const routes: Routes = [
  { //router-outlet (padre)
  path: 'auth', //localhost:4200  /home
  // component: AuthPageComponent,
  loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
},
{
  path: '', //localhost:4200/home
  component: HomePageComponent,
  loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  // loadChildren: () => import('./modules/tracks/tracks.module').then(m => m.TracksModule)
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
