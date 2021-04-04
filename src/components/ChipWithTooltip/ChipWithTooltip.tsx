import { Chip, Tooltip } from '@material-ui/core';

export interface ChipWithTooltipBaseProps {
  /**
   * tooltip for the chip
   */
  tooltip?: string;
}
export type ChipWithTooltipProps = ChipWithTooltipBaseProps &
  React.ComponentProps<typeof Chip>;

const ChipWithTooltip = (props: ChipWithTooltipProps): JSX.Element => {
  const { tooltip, ...others } = props;

  return (
    <>
      {tooltip ? (
        <Tooltip title={tooltip}>
          <Chip {...others} />
        </Tooltip>
      ) : (
        <Chip {...others} />
      )}
    </>
  );
};

ChipWithTooltip.defaultProps = {
  tooltip: null,
};

export default ChipWithTooltip;
