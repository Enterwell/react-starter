// Component import
import { SimpleUserInformation } from './UserInformation';

// CSF default export containing metadata about our component
// Read more at https://storybook.js.org/docs/react/api/csf
export default {
  title: 'Components/UserInformation',
  component: SimpleUserInformation,
  argTypes: {
    userName: {
      type: 'string',
      description: 'User\'s name to show in the greeting part of the component (only used for demonstration).',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'John Doe' }
      }
    },
    appModel: {
      description: `User application model containing <code>User: { name: string, clone(): User }</code>
      object and <code>loadUser(): void</code> and
      <code>editUser(name: string): void</code> functions
      to handle loading and editing user's name`,
      control: { disable: true },
      table: {
        type: { summary: 'UserAppModel' },
        defaultValue: { summary: 'UserAppModel' }
      }
    },
    loadUser: { action: 'loadUser' },
    editUser: { action: 'editUser' }
  }
};

// 'Template' defining how the 'args' map to the component rendering
function Template(args) {
  const {
    userName,
    loadUser,
    editUser
  } = args;
  const mockAppModel = {
    user: { name: userName },
    loadUser,
    editUser
  };

  return <SimpleUserInformation appModel={mockAppModel} />;
}

// Default story
export const Default = Template.bind({});
Default.args = {
  userName: 'John Doe'
};
