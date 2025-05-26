import {Routes} from '@angular/router';
import {ContactComponent} from './components/contact/contact.component';
import {InfoComponent} from './components/info/info.component';

export const aboutRoutes: Routes = [
  {path: 'contact', component: ContactComponent},
  {path: 'info', component: InfoComponent}
]

