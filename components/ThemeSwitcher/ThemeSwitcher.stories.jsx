// Component import
import ThemeSwitcher from './ThemeSwitcher';

// CSF default export containing metadata about our component
// Read more at https://storybook.js.org/docs/react/api/csf
export default {
  title: 'Components/ThemeSwitcher',
  component: ThemeSwitcher,
  argTypes: {
    isDarkMode: {
      description: 'Is the dark mode currently active flag.',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'bool' },
        defaultType: { summary: false }
      }
    },
    onModeChange: {
      description: 'Callback fired when the mode is changed.',
      table: {
        type: { summary: 'func' }
      }
    }
  }
};

// 'Template' defining how the 'args' map to the component rendering
function Template(args) {
  return <ThemeSwitcher {...args} />;
}

// Default story
export const Default = Template.bind({});
Default.args = {
  isDarkMode: false
};

// Dark mode story
export const DarkMode = Template.bind({});
DarkMode.args = {
  isDarkMode: true
};
// Only show 'isDarkMode' control in the Dark mode story
DarkMode.parameters = { controls: { include: 'isDarkMode' } };
