import { componentWrapperDecorator, moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { ModalComponent } from '../../app/modal/modal.component';
import { IconComponent } from '../../app/icon/icon.component';
import { CommonModule } from '@angular/common';

import * as ButtonStories from '../Components/button.stories';
import { ButtonComponent } from '../../app/button/button.component';

const meta: Meta<ModalComponent> = {
  title: 'Components/Secondary/Modal',
  component: ModalComponent,
  tags: ['autodocs'],
  args: {
    show: true,
    onConfirm: fn(),
    onCancel: fn(),
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, ButtonComponent],
    }),
    componentWrapperDecorator(
      (story) => `<div style="margin: 15em">${story}</div>`
    ),
  ],
};
export default meta;
type Story = StoryObj<ModalComponent>;

export const Success: Story = {
  args: {
    show: true,
    title: 'Success',
    message: 'Your operation was successful.',
    type: 'success',
    confirmLabel: ButtonStories.Primary.args?.label || 'Great!',
    cancelLabel: ButtonStories.Secondary.args?.label || 'Dismiss',
    confirmButtonColor: ButtonStories.Primary.args?.backgroundColor,
    cancelButtonColor: ButtonStories.Secondary.args?.backgroundColor,
    onConfirm: fn(() => alert('Confirmed!')),
    onCancel: fn(() => alert('Cancelled!')),
  },
};

export const Error: Story = {
  args: {
    title: 'Error!',
    message: 'Something went wrong. Please try again.',
    type: 'error',
    confirmLabel: 'Retry',
  },
};

export const Warning: Story = {
  args: {
    title: 'Warning!',
    message: 'Are you sure you want to delete this item?',
    type: 'warning',
    confirmLabel: 'Yes, Delete',
    cancelLabel: 'Cancel',
  },
};

export const mobileView: Story = {
  args: {
    show: true,
    title: 'Mobile View',
    message: 'This is a mobile view of the modal.',
    type: 'success',
    confirmLabel: 'Great!',
    cancelLabel:'Dismiss',
  },
  parameters: {
    viewport: {
      defaultViewport: 'iphone14pro',
    },
  },
};

export const tabletView: Story = {
  args: {
    show: true,
    title: 'Tablet View',
    message: 'This is a tablet view of the modal.',
    type: 'success',
    confirmLabel: 'Great!',
    cancelLabel:'Dismiss',
  },
  parameters: {
    viewport: {
      defaultViewport: 'ipad',
    },
  },
};
