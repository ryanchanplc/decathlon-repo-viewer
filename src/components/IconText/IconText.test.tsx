import { render } from '@testing-library/react';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import IconText, { IconTextProps } from './IconText';

const text = 'test';
const url = 'https://www.google.com';
const renderUI = (props: IconTextProps) => render(<IconText {...props} />);

it('should render only text and icon', () => {
  renderUI({ text, icon: <ErrorOutlineIcon /> });
  expect(document.querySelector('.MuiSvgIcon-root')).toBeTruthy();
});

it('should render link', () => {
  const iconText = renderUI({ text, url, icon: <ErrorOutlineIcon /> });

  expect(iconText.getByText(text)).toHaveAttribute('href', url);
});
