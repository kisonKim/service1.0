import React from "react";
import styled from "styled-components";
import magazineImg from "Resources/main/unbalanced/magazine.png";

const RightBody = styled.div`
    flex:1;
    width:100%;
    padding-left:20px;
    margin-top:30%;
`;

const SubTitle = styled.span`
    font-size: 1.3rem;
    line-height: 3;
    color: #f85e65;
`;

const Title = styled.span`
    display:block;
    font-size:3rem;
    font-weight:bold;
`;

const MagazineImg = styled.img`
    width:100%;
    /* box-shadow:10px 10px 12px 1px #aaa; */
`;


class KeyVisualRight extends React.Component {
    
    componentDidMount() {
       
    }
    render() {
        return (
            <RightBody>
                <Title>매거진</Title>
                <SubTitle>국내 1위 사진작가 중개 플랫폼</SubTitle>
                <MagazineImg src={magazineImg}></MagazineImg>
            </RightBody>
        )
    }
}
export default KeyVisualRight;
    