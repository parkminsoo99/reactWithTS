import {Meta, StoryObj} from "@storybook/react";
import {Count} from ".";

const meta = {
    title:"Atoms/Count",
    component:Count,

} satisfies Meta<typeof Count>

export default meta;

type Story = StoryObj<typeof Count>

export const Template: Story = {
    args:{
        value:0,
    }
}
