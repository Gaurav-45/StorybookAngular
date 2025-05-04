import { DropdownComponent } from '../../app/dropdown/dropdown.component';

export default {
  title: 'Components/Dropdown',
  component: DropdownComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
  },
};

export const Default = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    placeholder: 'Select an option',
    size: 'large',
  },
};

export const PreSelected = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    defaultValue: 'Option 4',
    size: 'medium',
  },
};

export const Disabled = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    disabled: true,
    placeholder: 'Disabled Dropdown',
    size: 'medium',
  },
};

export const ManyOptions = {
  args: {
    options: ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'],
    size: 'medium',
  },
};

export const SmallSize = {
  args: {
    options: ['One', 'Two'],
    size: 'small',
  },
};

export const LargeSize = {
  args: {
    options: ['One', 'Two'],
    size: 'large',
  },
};
