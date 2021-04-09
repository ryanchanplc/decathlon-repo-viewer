import { createServer, Model, Registry } from 'miragejs';
import { ModelDefinition } from 'miragejs/-types';
import Schema from 'miragejs/orm/schema';
import { filter, sorting } from '../utils/mockUtil';
import RepoType from '../types/RepoType';
import { generateRepos, generateProfile } from './generate';
import {
  BASE_URL,
  REPO_ENDPOINT,
  PROFILE_ENDPOINT,
  USER,
} from '../constant/api';

const RepoModel: ModelDefinition<RepoType> = Model.extend({});
type AppRegistry = Registry<{ repo: typeof RepoModel }, Record<string, never>>;
type AppSchema = Schema<AppRegistry>;

export const mockRepos = (size: number) => (): any =>
  createServer({
    routes() {
      this.get(`${BASE_URL}${REPO_ENDPOINT}`, () => ({
        total_count: size,
        items: generateRepos(size),
      }));
    },
  });

export const mockProfile = () => (): any =>
  createServer({
    routes() {
      this.get(`${BASE_URL}${PROFILE_ENDPOINT}/${USER}`, () =>
        generateProfile()
      );
    },
  });
export default function makeServer({ environment = 'test' } = {}): any {
  return createServer({
    environment,
    models: {
      repo: Model,
    },
    seeds(server) {
      generateRepos(100).forEach((repo) => server.create('repo', repo));
    },
    routes() {
      this.urlPrefix = BASE_URL;
      this.get(`${PROFILE_ENDPOINT}/${USER}`, () => generateProfile());
      this.get(`${REPO_ENDPOINT}`, (schema: AppSchema, { queryParams }) => {
        const { per_page: perPage, page, q, sort, order } = queryParams;
        const index = parseInt(page) - 1;
        const limit = parseInt(perPage);
        const start = index * limit;
        const end = start + limit;
        const filtered = filter(q, schema);
        return {
          total_count: filtered.length,
          items: sorting(filtered, sort, order).slice(start, end),
        };
      });
    },
  });
}
