import {Routes} from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {InfoComponent} from './info/info.component';

export const aboutRoutes: Routes = [
  {path: 'contact', component: ContactComponent},
  {path: 'info', component: InfoComponent}
]
