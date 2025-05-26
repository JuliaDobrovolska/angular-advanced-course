import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaskEmailPipe} from './pipes/mask-email.pipe';


@NgModule({
  declarations: [MaskEmailPipe],
  imports: [
    CommonModule
  ],
  exports:[MaskEmailPipe]
})
export class SharedModule { }
