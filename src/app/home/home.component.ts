import {Component, inject} from '@angular/core';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {AuthService} from '../core/auth.service';

@Component({
  selector: 'app-home',
  imports: [
    NzButtonComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  protected readonly authService: AuthService = inject(AuthService);
}
