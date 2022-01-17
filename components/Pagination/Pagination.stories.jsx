// Component import
import Pagination from './Pagination';

// CSF default export containing metadata about our component
// Read more at https://storybook.js.org/docs/react/api/csf
export default {
  title: 'Components/Pagination',
  component: Pagination
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
  ...Default.args,
  count: 10
};

// Disabled pagination story
export const Disabled = Template.bind({});
Disabled.args = {
  ...Basic.args,
  disabled: true
};

// Primary pagination story
export const Primary = Template.bind({});
Primary.args = {
  ...Basic.args,
  color: 'primary'
};

// Outlined pagination story
export const Outlined = Template.bind({});
Outlined.args = {
  ...Basic.args,
  variant: 'outlined'
};

// Rounded pagination story
export const Rounded = Template.bind({});
Rounded.args = {
  ...Basic.args,
  shape: 'rounded'
};

// Sibling count pagination story
export const SiblingCount = Template.bind({});
SiblingCount.args = {
  ...Basic.args,
  count: 20,
  page: 10,
  siblingCount: 2
};

// Small pagination story
export const Small = Template.bind({});
Small.args = {
  ...Basic.args,
  size: 'small'
};

// Large pagination story
export const Large = Template.bind({});
Large.args = {
  ...Basic.args,
  size: 'large'
};
