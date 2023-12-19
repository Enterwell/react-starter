import type { Meta, StoryObj } from '@storybook/react';

import Pagination from './Pagination';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {
    variant: {
      description: 'The variant to use.',
      control: 'radio',
      options: ['outlined', 'text'],
      table: {
        type: { summary: '\'outlined\' | \'text\''},
        defaultValue: { summary: 'text' }
      }
    },
    count: {
      type: 'number',
      description: 'The total number of pages.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 }
      }
    },
    onChange: {
      description: 'Callback fired when the page is changed.',
      table: {
        type: { summary: 'func' }
      }
    },
    shape: {
      description: 'The shape of the pagination items.',
      control: 'radio',
      options: ['circular', 'rounded'],
      table: {
        type: { summary: '\'circular\' | \'rounded\'' },
        defaultValue: { summary: '\'circular\'' }
      }
    },
    disabled: {
      description: 'If <code>true</code>, the component is disabled.',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: false }
      }
    },
    color: {
      description: 'The active pagination color.',
      control: 'radio',
      options: ['primary', 'secondary', 'standard'],
      table: {
        type: { summary: '\'primary\' | \'secondary\' | \'standard\'' },
        defaultValue: { summary: '\'standard\'' }
      }
    },
    size: {
      description: 'The size of the component.',
      control: 'radio',
      options: ['small', 'medium', 'large'],
      table: {
        type: { summary: '\'small\' | \'medium\' | \'large\'' },
        defaultValue: { summary: '\'medium\'' }
      }
    },
    siblingCount: {
      type: 'number',
      description: 'Number of always visible pages before and after the current page.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 }
      }
    },
    page: {
      type: 'number',
      description: 'The current page.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 }
      }
    },
    showFirstButton: {
      description: 'If <code>true</code>, show the first-page button.',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: false }
      }
    },
    showLastButton: {
      description: 'If <code>true</code>, show the last-page button.',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    }
  }
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    variant: 'text',
    count: 1,
    shape: 'circular',
    disabled: false,
    color: 'standard',
    size: 'medium',
    siblingCount: 1,
    page: 1,
    showFirstButton: false,
    showLastButton: false
  }
};

export const Basic: Story = {
  args: {
    count: 10
  }
};

export const Disabled: Story = {
  args: {
    ...Basic.args,
    disabled: true
  }
};

export const Primary: Story = {
  args: {
    ...Basic.args,
    color: 'primary'
  }
};

export const Outlined: Story = {
  args: {
    ...Basic.args,
    variant: 'outlined'
  }
};

export const Rounded: Story = {
  args: {
    ...Basic.args,
    shape: 'rounded'
  }
};

export const SiblingCount: Story = {
  args: {
    count: 20,
    page: 10,
    siblingCount: 2
  }
};

export const Small: Story = {
  args: {
    ...Basic.args,
    size: 'small'
  }
};

export const Large: Story = {
  args: {
    ...Basic.args,
    size: 'large'
  }
};