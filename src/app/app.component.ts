import { Component, VERSION } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AppService } from '../cart.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  items = this.AppService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
    phone: '',
  });

  constructor(
    private AppService: AppService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit(): void {
    // Process checkout data here
    this.items = this.AppService.clearApp();
    console.warn('Your data has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
