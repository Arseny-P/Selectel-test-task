import { Component, model, input } from '@angular/core';

@Component({
  selector: 'app-select',
  imports: [],
  template: `
    <label class="app-select">
      <input
        type="checkbox"
        [checked]="checked()"
        (change)="toggle()">
      <span class="app-select__checkmark"></span>
      <div class="app-select__values">
        <span class="app-select__values__label">{{ label() }}</span>
        <span class="app-select__values__value">Value: {{ value() }}</span>
      </div>
    </label>
  `,
  styleUrl: '../../../styles/app-select.scss',
})
export class Select {
  checked = model.required<boolean>();
  label = input<string>('');
  value = input<number>();
  toggle() {
    this.checked.set(!this.checked());
  }
}
