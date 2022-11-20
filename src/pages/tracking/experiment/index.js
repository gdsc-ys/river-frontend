import { Link, useOutlet, useParams } from 'react-router-dom';
import styled from 'styled-components';

/**
 * Sample data
 */
const experimentList = [
  { name: 'Sample experiment 1', experiementId: '1' },
  { name: 'Sample experiment 2', experiementId: '2' },
  { name: 'Sample experiment 3', experiementId: '3' },
];

const ExperimentPage = () => {
  const outlet = useOutlet();

  const { experimentId } = useParams();

  return (
    <Wrapper>
      <ExperimentContainer>
        <Title>Experiment</Title>
        <ExperimentList>
          {experimentList.map((experiment) => (
            <ExperimentItem
              key={experiment.name}
              to={`/tracking/experiment/${experiment.experiementId}`}
              replace
              $active={experiment.experiementId === experimentId}
            >
              {experiment.name}
            </ExperimentItem>
          ))}
        </ExperimentList>
      </ExperimentContainer>
      {outlet}
    </Wrapper>
  );
};

export default ExperimentPage;

const Wrapper = styled.div`
  height: calc(100vh - 80px);
  display: flex;
`;

const Title = styled.h1`
  margin-bottom: 30px;

  font-size: 30px;
`;

const ExperimentContainer = styled.div`
  min-width: 250px;
  flex-shrink: 0;
  padding: 30px;

  border-right: 1px solid #00000020;

  overflow-y: scroll;
`;

const ExperimentList = styled.div`
  display: flex;
  flex-direction: column;

  > :not(:first-child) {
    margin-top: 20px;
  }
`;

const ExperimentItem = styled(Link)`
  font-size: 17px;
  font-weight: 600;
  text-decoration: none;
  color: black;

  opacity: ${({ $active }) => ($active ? 1 : 0.3)};
  transition: opacity ease 0.3s;
`;
