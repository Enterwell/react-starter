import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@mui/material';

import { SimpleUserInformation } from './UserInformation';

type PropsWithCustomArgs = React.ComponentProps<typeof SimpleUserInformation> & {
  userName: string;
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
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
    }
  }
} satisfies Meta<PropsWithCustomArgs>;

export default meta;

type Story = StoryObj<PropsWithCustomArgs>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  render: (args) => {
    const {
      userName = 'John Doe'
    } = args;

    const mockAppModel = {
      user: { name: userName },
      loadUser: () => {},
      editUser: () => {}
    };

    return (
      <Box sx={{ height: 200 }}>
        <SimpleUserInformation appModel={mockAppModel} />
      </Box>
    );
  }
};