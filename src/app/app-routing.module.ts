import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './auth/user-login/user-login.component';
import { AdminLoginComponent } from './auth/admin-login/admin-login.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './user/home/home.component';
import { ViewComponent } from './user/view/view.component';
import { GalleryComponent } from './user/gallery/gallery.component';

const routes: Routes = [
  { path: 'user-login', component: UserLoginComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'user', component: UserComponent, children: [
    { path: 'home', component: HomeComponent, outlet: 'user' },
    { path: 'view', component: ViewComponent, outlet: 'user' },
    { path: 'gallery', component: GalleryComponent, outlet: 'user'  }
  ] },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
