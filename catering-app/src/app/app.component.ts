import { Component } from '@angular/core';
import { CateringChargesComponent } from './catering-charges/catering-charges.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CateringChargesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'catering-app';
}
