export default interface LicenseType {
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
