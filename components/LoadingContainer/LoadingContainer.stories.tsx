import type { Meta, StoryObj } from '@storybook/react';

import LoadingContainer from './LoadingContainer';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/LoadingContainer',
  component: LoadingContainer,
  render: (args) => (
    <LoadingContainer {...args}>
      <div>
        <p>I am child content</p>
        <p>I am child content</p>
      </div>
    </LoadingContainer>
  )
} satisfies Meta<typeof LoadingContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const NotLoading: Story = {};

export const Loading: Story = {
  args: {
    isLoading: true
  }
};
