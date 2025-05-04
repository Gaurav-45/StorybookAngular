import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent {
  /**
   * Options available for selection
   * @required
   */
  @Input() options: string[] = [];

  /**
   * Placeholder text shown when no value is selected
   */
  @Input() placeholder: string = 'Select an option';

  /**
   * Whether the dropdown is disabled
   */
  @Input() disabled: boolean = false;

  /**
   * Default pre-selected value
   */
  @Input() defaultValue: string = '';

  /**
   * Size of the dropdown: small, medium, or large
   */
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Emits selected value when changed
   */
  @Output() valueChange = new EventEmitter<string>();

  onValueChange(value: string) {
    this.valueChange.emit(value);
  }

  get classes(): string[] {
    return ['storybook-dropdown', `storybook-dropdown--${this.size}`];
  }
}
