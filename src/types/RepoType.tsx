export interface LicenseType {
  /**
   * license name
   */
  name: string;

  key: string;
  /**
   * url of the license
   */
  url: string | null;
}

export default interface RepoType {
  id?: number;
  name?: string;
  html_url?: string;
  description?: string;
  stargazers_count: number;
  language?: string;
  forks_count: number;
  updated_at: string;
  open_issues_count: number;
  license?: LicenseType;
  topics?: Array<string>;
  private: boolean;
  fork: boolean;
  archived: boolean;
  disabled: boolean;
}
