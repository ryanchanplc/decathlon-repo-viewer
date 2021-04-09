import faker from 'faker';

export const generateRepos = (size: number): Array<any> =>
  [...new Array(size)].map(() => ({
    id: faker.datatype.number(),
    name: faker.name.findName(),
    description: faker.commerce.productDescription(),
    html_url: faker.internet.url(),
    stargazers_count: faker.datatype.number({
      min: 0,
      max: 200,
    }),
    language: faker.random.word(),
    forks_count: faker.datatype.number({
      min: 0,
      max: 200,
    }),
    open_issues_count: faker.datatype.number(),
    license: {
      name: faker.random.word(),
      url: faker.internet.url(),
      key: faker.random.word(),
    },
    topics: [...Array(Math.floor(Math.random() * 10))].map(() =>
      faker.random.word()
    ),
    private: faker.datatype.boolean(),
    fork: faker.datatype.boolean(),
    archived: faker.datatype.boolean(),
    mirror: faker.datatype.boolean(),
    updated_at: faker.datatype.datetime(),
  }));

export const generateProfile = (): any => ({
  name: faker.name.findName(),
  description: faker.commerce.productDescription(),
  location: faker.address.country(),
  blog: faker.internet.url(),
  twitter_username: faker.internet.userName(),
  email: faker.internet.email(),
  avatar_url: faker.internet.avatar(),
});
