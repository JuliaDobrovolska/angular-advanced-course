import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {UserService} from './services/user.service';
import {UserData} from './models/user.module';
import {Observable} from 'rxjs';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {NzContentComponent, NzLayoutComponent, NzLayoutModule} from 'ng-zorro-antd/layout';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgForOf, NgIf, AsyncPipe, ToolbarComponent, NzLayoutComponent, NzLayoutModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent  {
  title = 'angular-advanced-course';


}
