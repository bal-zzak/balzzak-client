import React from 'react';
import styled from "@emotion/styled";
import theme from '../style/theme';
import { Layout, Row, Col } from 'antd';
import Link from 'next/link';

const logoImage = 'images/balzzak_logo.png';
const { Header, Footer, Content } = Layout;


const StyledHeader = styled(Header)` 
  position: absolute;
  z-index: 1;
  width: 100%;
  height: auto;
  border-bottom: 1px solid #fff;
  background: ${theme.subColor};

  ${theme.tablet} {
    background: none;
  }
`;
const HeaderRow = styled(Row)`
  display: flex;
  max-width: 1140px;
  height: 45px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;

  & > .ant-col img {
    min-width: 28px;
    max-height: 30px;
  }

  ${theme.tablet} {
    height: 100px;

    & > .ant-col img {
      padding: 7px 0;
      max-height: 80px;
    }
  }
`;
const PcGnb = styled('ul')`
  display: none;
  flex-flow: row-reverse;
  margin-bottom: 0;

  & > li {
    float: left;
    padding: 0 3%;
    list-style: none;
    font-size: 17px;
  
    & > a {
      color: ${theme.mainColor};
    }
  }

  ${theme.tablet} {
    display: flex;
  }
`;

const MobileGnb = styled('ul')`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  padding: 30px;
  width: 100%;
  background: ${theme.subColor};

  ${theme.tablet} {
    display: none;
  }
`;

const StyledContent = styled(Content)`
  padding-top: 45px;

  ${theme.tablet} {
    padding-top: 0;
  }
`

const AppLayout = ({ children }) => (
  <>
    <Layout
      style={{
        width: '100%',
      }}
    >
      <StyledHeader>
        <HeaderRow>
          <Col xs={5} lg={4}>
            <Link href="/">
                <img
                  src={logoImage}
                  alt="logo"
                  style={{
                    cursor: 'pointer',
                  }}
                />
            </Link>
          </Col>
          <Col xs={24} lg={20}>
            <PcGnb>
                <li><Link href="/menu">메뉴소개</Link></li>
                <li><Link href="/location">매장정보</Link></li>
                <li><Link href="/2">이벤트 및 제휴</Link></li>
                <li><Link href="/3">창업 안내</Link></li>
                <li><Link href="/4">고객의 소리</Link></li>
                <li><Link href="/5">커뮤니티</Link></li>
            </PcGnb>
          </Col>
          <MobileGnb>
            <li><Link href="/menu">메뉴소개</Link></li>
            <li><Link href="/location">매장정보</Link></li>
            <li><Link href="/2">이벤트 및 제휴</Link></li>
            <li><Link href="/3">창업 안내</Link></li>
            <li><Link href="/4">고객의 소리</Link></li>
            <li><Link href="/5">커뮤니티</Link></li>
          </MobileGnb>
        </HeaderRow>
      </StyledHeader>
      <StyledContent>
        {children}
      </StyledContent>
      <Footer>footer</Footer>
    </Layout>
  </>
);

export default AppLayout;
