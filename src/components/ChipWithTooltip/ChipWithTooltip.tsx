import { Chip, Tooltip, ChipProps } from '@material-ui/core';

export interface ChipWithTooltipProps extends ChipProps {
  /**
   * tooltip for the chip
   */
  tooltip?: string;
}

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
