import { render, fireEvent } from '@testing-library/react';
import ChipWithTooltip, { ChipWithTooltipProps } from './ChipWithTooltip';

const testLabel = 'testingChip';
const renderUI = (props: ChipWithTooltipProps) =>
  render(<ChipWithTooltip {...props} />);

it('should render normal chip', () => {
  const chip = renderUI({ label: testLabel });
  expect(chip.getByText(testLabel)).toBeInTheDocument();
});

it('should render chip with tooltip', async () => {
  const tooltipMessage = 'testing tooltip';
  const chip = renderUI({ label: testLabel, tooltip: tooltipMessage });
  fireEvent.mouseOver(chip.getByText(testLabel));

  expect(await chip.findByText(tooltipMessage)).toBeInTheDocument();
});
