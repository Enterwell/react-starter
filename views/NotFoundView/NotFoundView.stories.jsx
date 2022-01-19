// Component import
import NotFoundView from './NotFoundView';

// CSF default export containing metadata about our component
// Read more at https://storybook.js.org/docs/react/api/csf
export default {
  title: 'Pages/NotFound',
  component: NotFoundView
};

// 'Template' defining how the 'args' map to the component rendering
function Template() {
  return <NotFoundView />;
}

// View story
export const View = Template.bind({});
