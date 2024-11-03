import React from 'react';

import Text from './Text';

export default {
  component: Text,
  title: 'Text',
};

const Template = (args) => <Text {...args} />;


export const Default = Template.bind({});
Default.args = {
  text: {
    id: '1',
    title: 'Test Text',
    state: 'TEXT_INBOX',
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  text: {
    ...Default.args.text,
    state: 'TEXT_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  text: {
    ...Default.args.text,
    state: 'TEXT_ARCHIVED',
  },
};