import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css'
})
export class IconComponent {
  @Input() type: 'success' | 'error' | 'warning' = 'success';

  get icon(): string {
    switch (this.type) {
      case 'success': return '✔️';
      case 'error': return '❌';
      case 'warning': return '⚠️';
      default: return '';
    }
  }

  get classes(): string[] {
    return ['storybook-icon', `storybook-icon--${this.type}`];
  }
}
