import styled from 'styled-components';

const mockData1 = [
  {
    x: '2018-03-01',
    y: 30,
  },
  {
    x: '2018-03-02',
    y: 20,
  },
  {
    x: '2018-03-03',
    y: 40,
  },
];

const Linechart = ({ columns, data, width, height }) => {
  return <ChartContainer width={width} height={height}></ChartContainer>;
};

export default Linechart;

const ChartContainer = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
