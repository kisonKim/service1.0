import React from "react";
import {Link, withRouter} from "react-router-dom";//withrouter는 다른 컴포넌트를 감싸는 component. 라우터에 정보를 줌
import styled from "styled-components";
import logo from "Resources/logo.svg";

const Header = styled.header`
    position:fixed;
    top:0;
    left:0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    background-color: white;
`;
const Item = styled.li`
    
    width: 140px;
    text-align:center;
    border-bottom : 5px solid ${props=> props.current?"#e74c3c":'transparent'};
    transition: border-bottom .3s ease-in-out;
    line-height:50px;

    &:first-child {
        width:150px;
        margin-right:100px;
    }

    `;

const List = styled.ul`
    display:flex;    
    height:50px;
`;
const SLink = styled(Link)`
    height:50px;
    display:flex;
    align-items: center;
    justify-content: center;
`;

const LogoImg = styled.img`
    width:140px;
    vertical-align:middle;
`;

const MoreSpan = styled.span`
    cursor: pointer;
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
                <SLink to="/recommend">추천서비스</SLink>
            </Item>
            <Item current={pathname==="/portfolio"}>
                <SLink to="/portfolio">포트폴리오</SLink>
            </Item>
            <Item current={pathname==="/search"}>
                <SLink to="/search">Search</SLink>
            </Item>
            <Item>
                <MoreSpan>
                더보기
                </MoreSpan>
            </Item>
        </List>
    </Header>
));