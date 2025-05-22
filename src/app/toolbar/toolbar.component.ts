import { Component } from '@angular/core';
import {NzMenuDirective, NzMenuGroupComponent, NzMenuItemComponent, NzSubMenuComponent} from 'ng-zorro-antd/menu';
import {NzIconDirective} from 'ng-zorro-antd/icon';
import {RouterLink} from '@angular/router';
import {NzButtonComponent} from 'ng-zorro-antd/button';

@Component({
  selector: 'app-toolbar',
  imports: [
    NzMenuItemComponent,
    NzIconDirective,
    NzSubMenuComponent,
    NzMenuGroupComponent,
    NzMenuDirective,
    RouterLink,
    NzButtonComponent
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

}
