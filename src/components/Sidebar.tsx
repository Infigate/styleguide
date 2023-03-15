import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from 'lib/Colors';
import * as Common from 'components/commons/Index';

const Wrapper = styled.div`
  height: 100vh;
  width: 250px;
  background: linear-gradient(45deg, ${Colors.Gradation}, ${Colors.Secondary}),
    url(${process.env.PUBLIC_URL + 'img/background/sidebar.svg'});
  color: #fff;
  background-position: center;
  background-size: cover;
  position: fixed;
`;

const ItemWrapper = styled.a<{ active?: boolean }>`
  padding: 0 1rem;
  text-decoration: none;
  color: ${Colors.White};
  ${(props) =>
    props.active &&
    `
      background: linear-gradient(45deg,${Colors.Gradation},${Colors.PrimaryVariant});
    `}
  border-radius: 1rem;
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
  { icon: 'img/icon/home.svg', label: 'HOME', active: false, linkTo: '/' },
  {
    icon: 'img/icon/pages.svg',
    label: 'PAGES',
    active: false,
    linkTo: '/pages',
  },
  { icon: 'img/icon/apps.svg', label: 'UI/UX', active: false, linkTo: '/uiux' },
];

export const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <Wrapper>
      <Common.VStack content="space-between" height="100vh">
        <div>
          <Common.Image
            path={'img/icon/logo.svg'}
            width="80px"
            height="80px"
            margin="2rem auto"
          />
          <Common.VStack margin="1rem 0">
            {subMenuItems.map((item, i) => (
              <ItemWrapper
                href={item.linkTo}
                active={item.linkTo === location.pathname ? true : false}
                key={i}
              >
                <Common.Image
                  path={item.icon}
                  width="30px"
                  height="30px"
                  margin="0"
                />
                <p>{item.label}</p>
              </ItemWrapper>
            ))}
          </Common.VStack>
        </div>
        <Common.Typography
          text="infigate.net"
          type="p"
          padding=".5rem auto"
          align="center"
        />
      </Common.VStack>
    </Wrapper>
  );
};

export default Sidebar;
