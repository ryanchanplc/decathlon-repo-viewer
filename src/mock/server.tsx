import { createServer, Model, Registry } from 'miragejs';
import { ModelDefinition } from 'miragejs/-types';
import Schema from 'miragejs/orm/schema';
import faker from 'faker';
import RepoType from '../types/RepoType';

const RepoModel: ModelDefinition<RepoType> = Model.extend({});
type AppRegistry = Registry<
  { repo: typeof RepoModel },
  {
    /* factories can be defined here */
  }
>;
type AppSchema = Schema<AppRegistry>;

const checkArray = (array: any, value: any) =>
  value && value !== '' ? array?.includes(value) : true;

const checkValue = (item: any, value: any) =>
  value && value !== '' ? item === value : true;
const checkRange = (item: number, value: string) => {
  if (!value || value === '') return true;
  const isRange = value.includes('..');
  const isLarger = value.includes('>');
  const isSmaller = value.includes('<');
  if (isRange) {
    const minMax = value.split('..');
    return item > parseInt(minMax[0]) && item < parseInt(minMax[1]);
  }
  if (isLarger) {
    const number = value.split('>');

    return item > parseInt(number[1]);
  }
  if (isSmaller) {
    const number = value.split('<');
    return item < parseInt(number[1]);
  }

  return true;
};
export default function makeServer({ environment = 'test' } = {}): any {
  return createServer({
    environment,
    models: {
      repo: Model,
    },
    seeds(server) {
      for (let i = 0; i < 100; i += 1)
        server.create('repo', {
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
          disabled: faker.datatype.boolean(),
          updated_at: faker.datatype.datetime(),
        });
    },
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

      this.get('search/repositories', (schema: AppSchema, { queryParams }) => {
        const { per_page: perPage, page, q, sort, order } = queryParams;
        const index = parseInt(page) - 1;
        const limit = parseInt(perPage);
        const start = index * limit;
        const end = start + limit;
        const query: Record<string, string> = {
          keywords: '',
          language: '',
          topic: '',
          license: '',
          forks: '',
          stars: '',
        };

        q.split(' ').forEach((element) => {
          const type = element.split(':');
          if (type.length === 1) [query.keywords] = type;
          else {
            [, query[type[0]]] = type;
          }
        });

        const filtered = schema
          .all('repo')
          .models.filter(
            (item) =>
              checkArray(item.name, query.keywords) &&
              checkValue(item.language, query.language) &&
              checkArray(item.topics, query.topic) &&
              checkValue(item.license?.key, query.license) &&
              checkRange(item.stargazers_count, query.stars) &&
              checkRange(item.forks_count, query.forks)
          );
        return {
          total_count: filtered.length,
          items: filtered
            .sort((a, b) => {
              const orderASC = order === 'asc' ? 1 : -1;
              switch (sort) {
                case 'updated':
                  return a.updated_at < b.updated_at
                    ? orderASC * 1
                    : -1 * orderASC;
                case 'bestmatch':
                  return a.updated_at < b.updated_at
                    ? 1 * orderASC
                    : -1 * orderASC;
                case 'stars':
                  return a.stargazers_count < b.stargazers_count
                    ? 1 * orderASC
                    : -1 * orderASC;
                case 'forks':
                  return a.forks_count < b.forks_count
                    ? 1 * orderASC
                    : -1 * orderASC;
                case 'help-wanted-issues':
                  return a.open_issues_count < b.open_issues_count
                    ? 1 * orderASC
                    : -1 * orderASC;

                default:
                  return 0;
              }
            })
            .slice(start, end),
        };
      });
    },
  });
}
