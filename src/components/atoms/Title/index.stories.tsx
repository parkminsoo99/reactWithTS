import { Meta, StoryObj } from '@storybook/react';
import { Title } from '.'; 
const meta = {
    title: 'Atomes/Title',
    component: Title,
} satisfies Meta<typeof Title>;

export default meta;

type Story = StoryObj<typeof Title>;

export const Template: Story = {
    args: {
        title:"Title"
    }
}
