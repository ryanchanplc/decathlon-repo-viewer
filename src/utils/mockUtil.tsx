/* eslint  @typescript-eslint/explicit-module-boundary-types: 0 */

export const checkArray = (array: any, value: any): boolean =>
  value && value !== '' ? array?.includes(value) : true;

export const checkValue = (item: any, value: any): boolean =>
  value && value !== '' ? item === value : true;

export const checkRange = (item: number, value: string): boolean => {
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

export const filter = (q: any, schema: any): Array<any> => {
  const query: Record<string, string> = {
    keywords: '',
    language: '',
    topic: '',
    license: '',
    forks: '',
    stars: '',
    is: '',
    archived: '',
    mirror: '',
  };

  q.split(' ').forEach((element: any) => {
    const type = element.split(':');
    if (type.length === 1) [query.keywords] = type;
    else {
      [, query[type[0]]] = type;
    }
  });

  return schema
    .all('repo')
    .models.filter(
      (item: any) =>
        checkArray(item.name, query.keywords) &&
        checkValue(item.language, query.language) &&
        checkArray(item.topics, query.topic) &&
        checkValue(item.license?.key, query.license) &&
        checkRange(item.stargazers_count, query.stars) &&
        checkRange(item.forks_count, query.forks) &&
        checkValue(item.private, query.is !== '' && true) &&
        checkValue(item.archived, !!query.archived) &&
        checkValue(item.mirror, !!query.mirror)
    );
};

export const sorting = (filtered: any, sort: any, order: any) =>
  filtered.sort((a: any, b: any) => {
    const orderASC = order === 'asc' ? 1 : -1;
    switch (sort) {
      case 'updated':
        return a.updated_at < b.updated_at ? orderASC : -1 * orderASC;
      case 'bestmatch':
        return a.name < b.name ? orderASC : -1 * orderASC;
      case 'stars':
        return a.stargazers_count < b.stargazers_count
          ? orderASC
          : -1 * orderASC;
      case 'forks':
        return a.forks_count < b.forks_count ? orderASC : -1 * orderASC;
      case 'help-wanted-issues':
        return a.open_issues_count < b.open_issues_count
          ? orderASC
          : -1 * orderASC;

      default:
        return 0;
    }
  });
