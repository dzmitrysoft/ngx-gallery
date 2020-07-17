import { NgModule } from '@angular/core';
import { GalleryModule } from 'projects/core/src/public_api';
import { LightboxModule } from 'projects/lightbox/src/public_api';
import { GallerizeDirective } from './gallerize.directive';

@NgModule({
  imports: [
    GalleryModule,
    LightboxModule
  ],
  declarations: [GallerizeDirective],
  exports: [GallerizeDirective]
})
export class GallerizeModule {

}
