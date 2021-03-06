import React from "react";
import styled from "styled-components";
import logo from "Resources/footer/footerLogo.svg";
import instagram from "Resources/footer/instagram.svg";

const Footer = styled.footer`
    background-color: rgb(30,45,58);
    color: white;
    height: 368px;
    position:relative;
    width: 100%;
`;

const FooterBottom = styled.div`
    height:60px;
    width:100%;
    text-align:center;
    position: absolute;
    bottom : 0px;
    left : 0px;
    padding-top:20px;
`;

const FooterMiddle = styled.div`
    padding:14px 0;
    width:100%;
    color:#1E2D3A;
    text-align:center;
    position: absolute;
    bottom : 78px;
    left : 0px;
    background-color: rgb(245, 236, 230);
`;

const MiddleItem = styled.span`
    padding: 0 50px;
    font-size:22px;
    font-weight:bold;
    :not(:last-child){
        border-right : 2px solid black;
    }
`;

const FooterItems = styled.div`
    display:flex;
    width:100%;
    padding:3% 325px 0 325px;
    ul:first-child {
        flex:0.58;
    }
    ul:nth-child(2) {
        flex:1.1;
    }

    ul:nth-child(4) {
        flex:0.7;
    }

    ul:last-child {
        flex:0.2;
    }
`;

const Item = styled.ul`
    flex:1;
    list-style-type:none;
    line-height:2;
    font-size:18px;
    li:first-child{
        font-size:22px;
        font-weight:bold;
        text-align:left;
    }
    
`;

const FooterLogo = styled.img`
    width: 128px;
    height: 132px;
`;
export default () => (
    <Footer>
        <FooterItems>
            <Item>
                <li><FooterLogo src={logo} /></li>
            </Item>
            <Item>
                <li>(주)브리엑스</li>
                <li>대표:신영욱<span style={{marginLeft:'30px'}}>개인정보보호책임</span> : 개발팀</li>
                <li>주소 : 서울시 중구 퇴계로 36길 2, 상생스페이스</li>
                <li>이메일 : contact@briphy.com</li>
            </Item>
            <Item>
                <li>{'\u00A0'}</li>
                <li>카카오톡 : @브리피</li>
                <li>사업자등록번호 : 822-87-01977</li>
                <li>통신판매번호: 2020-부산부산진구-1016</li>
            </Item>
            <Item>
                <li>고객센터</li>
                <li>상담시간 10:00 ~ 18:00</li>
                <li>점심시간 13:00 ~ 14:00</li>
                <li>주말/공휴일은 쉽니다.</li>
            </Item>
            <Item>
                <li><img src={instagram} /></li>
            </Item>
        </FooterItems>
        <FooterMiddle>
                <MiddleItem>자주 묻는 질문</MiddleItem>
                <MiddleItem>Q&A</MiddleItem>
                <MiddleItem>이용약관</MiddleItem>
                <MiddleItem>개인정보처리방침</MiddleItem>
        </FooterMiddle>
        <FooterBottom>
            <span>Copyright &copy; 2020 briphy. All rights reserved.</span>
        </FooterBottom>
    </Footer>
);