// Component import
import Pagination from './Pagination';

// CSF default export containing metadata about our component
// Read more at https://storybook.js.org/docs/react/api/csf
export default {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {
    variant: {
      description: 'The variant to use.',
      control: 'radio',
      options: ['outlined', 'text'],
      table: {
        type: { summary: "'outlined' | 'text'"},
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
        type: { summary: "'circular' | 'rounded'" },
        defaultValue: { summary: "'circular'" }
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
        type: { summary: "'primary' | 'secondary' | 'standard'" },
        defaultValue: { summary: "'standard'" }
      }
    },
    size: {
      description: 'The size of the component.',
      control: 'radio',
      options: ['small', 'medium', 'large'],
      table: {
        type: { summary: "'small' | 'medium' | 'large'" },
        defaultValue: { summary: "'medium'" }
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
};

// 'Template' defining how the 'args' map to the component rendering
function Template(args) {
  return <Pagination {...args} />;
}

// Default story
export const Default = Template.bind({});
Default.args = {
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
};

// Basic pagination story
export const Basic = Template.bind({});
Basic.args = {
  count: 10
};
// Only show 'count' control in the Basic pagination story
Basic.parameters = { controls: { include: 'count' } };

// Disabled pagination story
export const Disabled = Template.bind({});
Disabled.args = {
  ...Basic.args,
  disabled: true
};
// Only show 'disabled' control in the Disabled pagination story
Disabled.parameters = { controls: { include: 'disabled' } };

// Primary pagination story
export const Primary = Template.bind({});
Primary.args = {
  ...Basic.args,
  color: 'primary'
};
// Only show 'count' and 'color' controls in the Primary pagination story
Primary.parameters = { controls: { include: ['count', 'color'] } };

// Outlined pagination story
export const Outlined = Template.bind({});
Outlined.args = {
  ...Basic.args,
  variant: 'outlined'
};
// Only show 'count' and 'variant' controls in the Outlined pagination story
Outlined.parameters = { controls: { include: ['count', 'variant'] } };

// Rounded pagination story
export const Rounded = Template.bind({});
Rounded.args = {
  ...Basic.args,
  shape: 'rounded'
};
// Only show 'count' and 'shape' controls in the Rounded pagination story
Rounded.parameters = { controls: { include: ['count', 'shape'] } };

// Sibling count pagination story
export const SiblingCount = Template.bind({});
SiblingCount.args = {
  count: 20,
  page: 10,
  siblingCount: 2
};
// Only show 'count', 'page' and 'siblingCount' controls in the SiblingCount pagination story
SiblingCount.parameters = { controls: { include: ['count', 'page', 'siblingCount'] } };

// Small pagination story
export const Small = Template.bind({});
Small.args = {
  ...Basic.args,
  size: 'small'
};
// Only show 'count' and 'size' controls in the Small pagination story
Small.parameters = { controls: { include: ['count', 'size'] } };

// Large pagination story
export const Large = Template.bind({});
Large.args = {
  ...Basic.args,
  size: 'large'
};
// Only show 'count' and 'size' controls in the Large pagination story
Large.parameters = { controls: { include: ['count', 'size'] } };
