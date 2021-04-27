import { NgModule } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx/index';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';


@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
  ],
  providers: [
    Camera
  ]
})
export class ProfilePageModule {}
