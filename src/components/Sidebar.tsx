import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Colors from 'lib/Colors';
import * as Common from 'components/commons/Index';
import { Link } from 'react-router-dom';

const URL = process.env.PUBLIC_URL;

const SidebarWrap = styled.div`
  height: 100vh;
  width: 260px;
  background: ${Colors('Dark')};
  position: fixed;
`;

const Main = styled.div`
  height: 100vh;
  width: 250px;
  background: linear-gradient(
      45deg,
      ${Colors('GradationFrom')},
      ${Colors('GradationTo')}
    ),
    url(${process.env.PUBLIC_URL + '/img/background/sidebar.svg'});
  color: #fff;
  background-position: center;
  background-size: cover;
  position: relative;
`;

const ItemWrapper = styled.div<{ active?: boolean }>`
  padding: 0 1rem;
  text-decoration: none;
  color: ${Colors('White')};
  ${(props) =>
    props.active &&
    `
      background: linear-gradient(45deg,${Colors('GradationFrom')},${Colors(
      'GradationTo'
    )});
    `}
  padding: 0 1rem;
  display: flex;
  flex-direction: row;
  align-items: 'center';
  gap: 1rem;
  margin: 0.5rem 0;
  -webkit-box-pack: center;
  align-items: center;
`;

const subMenuItems: {
  icon: string;
  label: string;
  active: boolean;
  linkTo: string;
}[] = [
  {
    icon: '/img/icon/home.svg',
    label: 'HOME',
    active: false,
    linkTo: `${URL}`,
  },
  {
    icon: '/img/icon/pages.svg',
    label: 'Pages',
    active: false,
    linkTo: `${URL}/pages`,
  },
  {
    icon: '/img/icon/apps.svg',
    label: 'Components',
    active: false,
    linkTo: `${URL}/components`,
  },
];

const changeTheme = (theme: string) => {
  localStorage.setItem('theme', theme);
  location.reload();
};

export const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <SidebarWrap>
      <Common.HStack align="top">
        <Common.VStack>
          <Common.Image
            path={'/img/gallery/theme_default.png'}
            width="30px"
            height="30px"
            margin="0.7rem 0.5rem"
            onClick={() => changeTheme('default')}
          />
          <Common.Image
            path={'/img/gallery/theme_lightblue.png'}
            width="30px"
            height="30px"
            margin="0.7rem 0.5rem"
            onClick={() => changeTheme('lightblue')}
          />
          <Common.Image
            path={'/img/gallery/theme_elegant_night.png'}
            width="30px"
            height="30px"
            margin="0.7rem 0.5rem"
            onClick={() => changeTheme('elegantNight')}
          />
        </Common.VStack>

        <Main>
          <Common.VStack content="space-between" height="100vh">
            <div>
              <Common.Image
                path={'/img/icon/logo.svg'}
                width="80px"
                height="80px"
                margin="2rem auto"
              />
              <Common.VStack margin="1rem 0">
                {subMenuItems.map((item, i) => (
                  <Link to={item.linkTo} key={i}>
                    <ItemWrapper
                      active={item.linkTo === location.pathname ? true : false}
                    >
                      <Common.Image
                        path={item.icon}
                        width="30px"
                        height="30px"
                        margin="0"
                      />
                      <p>{item.label}</p>
                    </ItemWrapper>
                  </Link>
                ))}
              </Common.VStack>
            </div>
            <Common.Typography
              text="infigate.net"
              type="p"
              padding="0.5rem 0"
              align="center"
              background={Colors('Accent')}
            />
          </Common.VStack>
        </Main>
      </Common.HStack>
    </SidebarWrap>
  );
};

export default Sidebar;
