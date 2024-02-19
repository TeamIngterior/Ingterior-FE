import type { Meta, StoryObj } from '@storybook/react';

import Button from '../../components/common/Button';

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    style: { control: 'object' },
    size: { control: 'radio', options: ['sm', 'md'] },
    $fullWidth: { control: 'boolean', defaultValue: false },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args) => <Button {...args}>Button</Button>,
};
