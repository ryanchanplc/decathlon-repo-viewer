import { Meta, Story } from '@storybook/react';
import Result from './Result';
import { defaultDecorator } from '../../utils/decoratorUtil';
import { initialState } from '../../context/AppContext';

export default {
  title: 'Result/Result',
  component: Result,
  decorators: [defaultDecorator()],
} as Meta;

const Template: Story = (args) => <Result {...args} />;
const defaultParams = {
  forks: '<50',
  stars: '>50',
  license: {
    url: 'http://test',
    key: 'test-license',
    name: 'Test License',
  },
  language: 'Typescript',
  topic: 'css',
  keywords: 'test',
};
export const WithArgsData = Template.bind({});
WithArgsData.decorators = [
  defaultDecorator({
    ...initialState,
    queryParams: {
      ...defaultParams,
    },
  }),
];

export const WithArgsLicense = Template.bind({});
WithArgsLicense.decorators = [
  defaultDecorator({
    ...initialState,
    queryParams: {
      license: defaultParams.license,
    },
  }),
];

export const WithArgsLanguage = Template.bind({});
WithArgsLanguage.decorators = [
  defaultDecorator({
    ...initialState,
    queryParams: {
      language: defaultParams.language,
    },
  }),
];

export const WithArgsTopic = Template.bind({});
WithArgsTopic.decorators = [
  defaultDecorator({
    ...initialState,
    queryParams: {
      topic: defaultParams.topic,
    },
  }),
];

export const WithArgsSearch = Template.bind({});
WithArgsSearch.decorators = [
  defaultDecorator({
    ...initialState,
    queryParams: {
      keywords: defaultParams.keywords,
    },
  }),
];

export const WithArgsForks = Template.bind({});
WithArgsForks.decorators = [
  defaultDecorator({
    ...initialState,
    queryParams: {
      forks: defaultParams.forks,
    },
  }),
];

export const WithArgsStars = Template.bind({});
WithArgsStars.decorators = [
  defaultDecorator({
    ...initialState,
    queryParams: {
      stars: defaultParams.stars,
    },
  }),
];
