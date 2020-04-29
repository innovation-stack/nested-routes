import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageGalleryComponent } from './manage-gallery/manage-gallery.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
  { path: 'home', component: AdminComponent, children: [
    { path: 'dashboard', component: DashboardComponent, outlet: 'admin' },
    { path: 'manage-gallery', component: ManageGalleryComponent, outlet: 'admin' },
    { path: 'manage-user', component: ManageUsersComponent, outlet: 'admin' }
  ] }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {

}
