import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { ModalComponent } from '../../app/modal/modal.component';

const meta: Meta<ModalComponent> = {
  title: 'Components/Secondary/Modal',
  component: ModalComponent,
  tags: ['autodocs'],
  args: {
    show: true,
    onConfirm: fn(),
    onCancel: fn(),
  },
};
export default meta;
type Story = StoryObj<ModalComponent>;

export const Success: Story = {
  args: {
    show: true,
    title: 'Success',
    message: 'Your operation was successful.',
    type: 'success',
    confirmLabel: 'Great!',
    cancelLabel: 'Dismiss',
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
