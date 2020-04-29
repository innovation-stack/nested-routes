import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageGalleryComponent } from './manage-gallery/manage-gallery.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    ManageGalleryComponent,
    ManageUsersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [
  ]
})
export class AdminModule {

}
