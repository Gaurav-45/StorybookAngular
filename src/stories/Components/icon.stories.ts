import type { Meta, StoryObj } from '@storybook/angular';
import { IconComponent } from '../../app/icon/icon.component';

const meta: Meta<IconComponent> = {
  title: 'Components/Icon',
  component: IconComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['success', 'error', 'warning'],
    },
  },
};

export default meta;
type Story = StoryObj<IconComponent>;

export const Success: Story = {
  args: {
    type: 'success',
  },
};

export const Error: Story = {
  args: {
    type: 'error',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
  },
};
