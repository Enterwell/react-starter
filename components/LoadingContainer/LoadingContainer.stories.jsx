/* eslint-disable react/no-array-index-key */
// Component import
import LoadingContainer from './LoadingContainer';

// Decorator import
import { fullHeightStoryDecorator } from '../../.storybook/decorators';

// CSF default export containing metadata about our component
// Read more at https://storybook.js.org/docs/react/api/csf
export default {
  title: 'Components/LoadingContainer',
  component: LoadingContainer,
  decorators: [fullHeightStoryDecorator],
  argTypes: {
    numberOfChildren: {
      type: 'number',
      defaultValue: 2
    },
    childContent: {
      type: 'string',
      defaultValue: 'Ja sam content'
    }
  }
};

// 'Template' defining how the 'args' map to the component rendering
function Template(args) {
  const {
    numberOfChildren,
    childContent,
    ...rest
  } = args;

  return (
    <LoadingContainer {...rest}>
      <div style={{flexDirection: 'column'}}>
        {[...Array(numberOfChildren).keys()].map((_, index) => (
          <p key={index}>{childContent}</p>
        ))}
      </div>
    </LoadingContainer>
  );
}

// Not loading story
export const NotLoading = Template.bind({});
NotLoading.args = {
  ...Template.args,
  isLoading: false
};

// Loading story
export const Loading = Template.bind({});
Loading.args = {
  ...Template.args,
  isLoading: true
};
