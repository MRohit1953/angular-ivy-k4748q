import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HelloService } from '../cart.service';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;

  items = this.helloService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
    phone: '',
  });

  constructor(
    private helloService: HelloService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit(): void {
    // Process checkout data here
    this.items = this.helloService.clearHello();
    console.warn('Your data has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
