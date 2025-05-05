import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, ButtonComponent, IconComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  /** Title of the modal */
  @Input() title: string = 'Modal Title';

  /** Description or message inside the modal */
  @Input() message: string = 'This is a modal message.';

  /** Type of modal: success, error, warning */
  @Input() type: 'success' | 'error' | 'warning' = 'success';

  /** Show or hide modal */
  @Input() show: boolean = false;

  /** Confirm button label */
  @Input() confirmLabel: string = 'OK';

  /** Cancel button label */
  @Input() cancelLabel: string = 'Cancel';

  /** Callback function executed when confirm is clicked */
  @Output() onConfirm = new EventEmitter<void>();

  /** Callback function executed when cancel is clicked */
  @Output() onCancel = new EventEmitter<void>();

  get classes(): string[] {
    return ['storybook-modal', `storybook-modal--${this.type}`];
  }

  getButtonColor(type: 'success' | 'error' | 'warning'): string {
    switch (type) {
      case 'success':
        return '#4caf50';
      case 'error':
        return '#f44336';
      case 'warning':
        return '#ff9800';
      default:
        return '#555ab9';
    }
  }
}
