/* eslint-disable react/no-array-index-key */
// Component import
import LoadingContainer from './LoadingContainer';

// CSF default export containing metadata about our component
// Read more at https://storybook.js.org/docs/react/api/csf
export default {
  title: 'Components/LoadingContainer',
  component: LoadingContainer,
  args: {
    numberOfChildren: 2,
    childContent: 'I am child content'
  },
  argTypes: {
    numberOfChildren: {
      type: 'number',
      description: 'Number of children to display in the container (only used for demonstration).',
      table: {
        defaultValue: { summary: '-' }
      }
    },
    childContent: {
      type: 'string',
      description: 'Text to display as content placeholder (only used for demonstration).',
      table: {
        defaultValue: { summary: '-' }
      }
    },
    isLoading: {
      type: 'boolean',
      description: 'Flag that indicates is the content loading or not.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
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
      <div>
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
  isLoading: false
};

// Loading story
export const Loading = Template.bind({});
Loading.args = {
  isLoading: true
};
