import React from "react";
import {Link, withRouter} from "react-router-dom";//withrouter는 다른 컴포넌트를 감싸는 component. 라우터에 정보를 줌
import styled from "styled-components";
import logo from "Resources/logo.svg";

const Header = styled.header`
    display: flex;
    position:fixed;
    top:0;
    left:0;
    width:1280px;
    min-width:1280px;
    margin: 0 325px;
    height: 70px;
    font-size: 18px;
    align-items: center;
    z-index: 3;
    color:black;
    background-color: white;
    border-bottom:1px solid white;
    box-shadow:1px 1px 4px 1px white;
`;
const Item = styled.li`
    
    width: 140px;
    text-align:center;
    border-bottom : 5px solid ${props=> props.current?"#e74c3c":'transparent'};
    transition: border-bottom .3s ease-in-out;
    line-height:70px;

    &:first-child {
        width:173px;
        margin-right:73px;
    }
    `;

const List = styled.ul`
    display:flex;    
    height:70px;
`;

const LogoImg = styled.img`
    width:100%;
    vertical-align:middle;
`;

const SLink = styled(Link)`
    height:70px;
    display:flex;
    align-items: center;
    justify-content: center;
`;

const MoreSpan = styled.span`
    cursor: pointer;
`;
const UserItem = styled.div`
    position:absolute;
    right:0;
    line-height:70px;
`;

const Login = styled(Link)`
    margin-right:40px;
`;
const Join = styled(Link)`
    border:1px solid rgb(30,45,58);
    border-radius:5px;
    padding: 5px 15px;
    transition: 0.2s ease-in-out;
    :hover {
        background-color:#f85e65;
        color:white;
        border-color:transparent;
    }
`;

export default withRouter( ({location: { pathname } }) => (
    <Header>
        <List>

            <Item>
                {/* <SLink to="/">추천서비스</SLink> */}
                <SLink to="/">
                    <LogoImg src={logo} />
                </SLink>
            </Item>
            <Item current={pathname==="/recommend"}>
                <SLink to="/recommend">추천 받기</SLink>
            </Item>
            <Item current={pathname==="/portfolio"}>
                <SLink to="/portfolio">포트폴리오 보기</SLink>
            </Item>
            <Item current={pathname==="/vip"}>
                <SLink to="/portfolio">VIP 서비스</SLink>
            </Item>
            <Item>
                <MoreSpan>
                더보기
                </MoreSpan>
            </Item>
            <UserItem>
                <Login to="/">로그인</Login>
                <Join to="/">회원가입</Join>
            </UserItem>
        </List>
    </Header>
));