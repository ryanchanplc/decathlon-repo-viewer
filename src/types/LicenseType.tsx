export default interface LicenseType {
  /**
   * license name
   */
  name: string;

  /**
   * license key
   */
  key: string;

  /**
   * url of the license
   */
  url: string | null;
}
