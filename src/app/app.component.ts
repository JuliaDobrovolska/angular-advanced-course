import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ToolbarComponent} from './core/components/toolbar/toolbar.component';
import {NzLayoutComponent, NzLayoutModule} from 'ng-zorro-antd/layout';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToolbarComponent, NzLayoutComponent, NzLayoutModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent  {
  title = 'angular-advanced-course';


}
