import { useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  AnimatedAxis,
  AnimatedGrid,
  AnimatedLineSeries,
  XYChart,
} from '@visx/xychart';

const Linechart = ({ data, Xaccessor, Yaccessor }) => {
  const accessors = useMemo(() => {
    return {
      xAccessor: (d) => d.Xaccessor,
      yAccessor: (d) => d.Yaccessor,
    };
  }, [data, Xaccessor, Yaccessor]);

  const lineStyle = useMemo(() => {
    return {
      stroke: '#000000',
      strokeLinecap: 'round',
      strokeWidth: 1,
    };
  });

  const TICK_LABEL_OFFSET = 10;

  return (
    <ChartContainer>
      <XYChart>
        <AnimatedGrid
          columns={false}
          numTicks={4}
          lineStyle={lineStyle}
          strokeDasharray="0, 4"
        />
        {/* X Axis */}
        <AnimatedAxis
          hideAxisLine
          hideTicks
          orientation="bottom"
          tickLabelProps={() => {
            // eslint-disable-next-line no-unused-labels
            dy: TICK_LABEL_OFFSET;
          }}
        />
        {/* Y Axis */}
        <AnimatedAxis
          hideAxisLine
          hideTicks
          orientation="left"
          tickLabelProps={() => {
            // eslint-disable-next-line no-unused-labels
            dx: -10;
          }}
        />
        <AnimatedLineSeries
          stroke="#000000"
          dataKey="line1"
          data={data}
          {...accessors}
        />
      </XYChart>
    </ChartContainer>
  );
};

export default Linechart;

Linechart.propTypes = {
  data: PropTypes.object.isRequired,
  Xaccessor: PropTypes.string.isRequired,
  Yaccessor: PropTypes.string.isRequired,
};

const ChartContainer = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
