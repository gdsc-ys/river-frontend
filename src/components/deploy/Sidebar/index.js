import { VscVersions } from 'react-icons/vsc';
import styled from 'styled-components';

import IconNavigation from '@components/common/IconNavigation';
import { versionPageUrl } from '@data/urls';

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
