import React from 'react';
import styled from "@emotion/styled";
import { Layout, Row, Col } from 'antd';
import Link from 'next/link';
import mq from '../style/theme';

const logoImage = 'images/balzzak_logo.png';
const { Header, Footer, Content } = Layout;

const HeaderRow = styled(Row)`
  display: flex;
  max-width: 1140px;
  height: 100px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: flex-end;
`;
const StyledMenu = styled('ul')`
  display: flex;
  flex-flow: row-reverse;
  margin-bottom: 0;
`;

const MenuItem = styled('li')`
  float: left;
  padding: 0 3%;
  list-style: none;

  & > a {
    color: #fff;
    font-size: 13px;
    background: rgba(255, 255, 255, .2);
  }

  ${mq[1]} {
    & > a {
      font-size: 17px;
      color: red;
    }
  }
`;

const AppLayout = ({ children }) => (
  <>
    <Layout
      style={{
        width: '100%',
      }}
    >
      <div css={{
        position: 'relative',
        zIndex: '1',
        padding: '0',
        height: 'auto',
        borderBottom: '1px solid #fff',
        background: 'none'
      }}>
        <HeaderRow>
          <Col span={4}>
            <Link href="/" css={{
              [mq[1]]: {
                fontSize: '17px'
              }
            }}>
                <img
                  src={logoImage}
                  alt="logo"
                  style={{
                    width: 81,
                    cursor: 'pointer',
                    paddingBottom: 13,
                  }}
                />
            </Link>
          </Col>
          <Col span={20}>
            <StyledMenu>
                <MenuItem><Link href="/menu">메뉴소개</Link></MenuItem>
                <MenuItem><Link href="/location">매장정보</Link></MenuItem>
                <MenuItem><Link href="/2">이벤트 및 제휴</Link></MenuItem>
                <MenuItem><Link href="/3">창업 안내</Link></MenuItem>
                <MenuItem><Link href="/4">고객의 소리</Link></MenuItem>
                <MenuItem><Link href="/5">커뮤니티</Link></MenuItem>
            </StyledMenu>
          </Col>
        </HeaderRow>
      </div>
      <Content>
        {children}
      </Content>
      <Footer>footer</Footer>
    </Layout>
  </>
);

export default AppLayout;
