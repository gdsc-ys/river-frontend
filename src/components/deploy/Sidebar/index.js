import { versionPageUrl } from 'data/urls';
import styled from 'styled-components';
import { VscVersions } from 'react-icons/vsc';
import IconNavigation from 'components/common/IconNavigation';

const Sidebar = () => {
  return (
    <Wrapper>
      <IconNavigation targetPath={versionPageUrl} Icon={VscVersions}>
        Version
      </IconNavigation>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.aside`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  padding-top: 80px;

  background-color: white;
  border-right: 1px solid #00000020;
`;
