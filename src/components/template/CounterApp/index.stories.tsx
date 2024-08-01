import {Meta,StoryObj} from "@storybook/react";

import {CounterApp} from '.';

const meta ={
    title:"Templates/CounterApp",
    component: CounterApp,
} satisfies Meta<typeof CounterApp>

export default meta

type Story = StoryObj<typeof CounterApp>
export const Template:Story = {}