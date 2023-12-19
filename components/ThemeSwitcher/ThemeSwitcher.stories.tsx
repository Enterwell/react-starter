import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@mui/material';

import ThemeSwitcher from './ThemeSwitcher';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/ThemeSwitcher',
  component: ThemeSwitcher,
  argTypes: {
    isDarkMode: {
      description: 'Is the dark mode currently active flag.'
    },
    onModeChange: {
      description: 'Callback fired when the mode is changed.'
    }
  },
  render: (args) => (
    <Box sx={{ height: 50 }}>
      <ThemeSwitcher {...args} />
    </Box>
  )
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {};

export const DarkMode: Story = {
  args: {
    isDarkMode: true
  }
};