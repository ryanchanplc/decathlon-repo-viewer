import { createServer } from 'miragejs';
import faker from 'faker';

export default function makeServer({ environment = 'test' } = {}): any {
  return createServer({
    environment,

    routes() {
      this.urlPrefix = 'https://api.github.com/';
      this.get('orgs/Decathlon', () => ({
        name: faker.name.findName(),
        description: faker.commerce.productDescription(),
        location: faker.address.country(),
        blog: faker.internet.url(),
        twitter_username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar_url: faker.internet.avatar(),
      }));

      this.get('orgs/Decathlon/repos', () =>
        [...Array(20)].map(() => ({
          id: faker.datatype.number(),
          name: faker.name.findName(),
          description: faker.commerce.productDescription(),
          html_url: faker.internet.url(),
          stargazers_count: faker.datatype.number(),
          language: faker.random.word(),
          forks_count: faker.datatype.number(),
          open_issues_count: faker.datatype.number(),
          license: { name: faker.random.word(), url: faker.internet.url() },
          topics: [...Array(Math.floor(Math.random() * 10))].map(() =>
            faker.random.word()
          ),
          private: faker.datatype.boolean(),
          fork: faker.datatype.boolean(),
          archived: faker.datatype.boolean(),
          disabled: faker.datatype.boolean(),
          updated_at: faker.datatype.datetime(),
        }))
      );
    },
  });
}
