import {Meta,StoryObj} from "@storybook/react";
import {Button} from ".";
import {fn} from "@storybook/test";
const meta = {
    title:"Atoms/Button",
    component:Button,
} satisfies Meta<typeof Button>

export default meta;
type Story = StoryObj<typeof Button>
export const Template:Story = {
    args: {
        label: 'Button',
        onClick: fn(),
    }
}