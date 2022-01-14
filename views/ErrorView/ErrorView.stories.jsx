// Component import
import ErrorView from './ErrorView';

// CSF default export containing metadata about our component
// Read more at https://storybook.js.org/docs/react/api/csf
export default {
  title: 'Pages/Error',
  component: ErrorView
};

// 'Template' defining how the 'args' map to the component rendering
function Template() {
  return <ErrorView />;
}

// View story
export const View = Template.bind({});
