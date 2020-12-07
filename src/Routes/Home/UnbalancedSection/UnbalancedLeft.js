import React from "react";
import styled from "styled-components";
import portfolioVideo from "Resources/main/unbalanced/portfolio.mp4"
import portfolioCircle from "Resources/main/unbalanced/portfolioCircle.svg"
import eventImg from "Resources/main/unbalanced/event2.png";

const LeftBody = styled.div`
    flex:1.3;
    width:100%;
    padding-right:30px;
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
    &::before {
        background-image: url(${portfolioCircle}) no-repeat;
    }
`;

const PortVideo = styled.video`
    width:100%;
    /* box-shadow:10px 10px 12px 1px #aaa; */
`;

const EventImg = styled.img`
    width:100%;
    /* box-shadow:10px 10px 12px 1px #aaa; */
`;

const Frame = styled.div`
    width:100%;
    margin-top:10%;
`;
class KeyVisualLeft extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.getElementById('portVideo').play();
    }

    render() {
        return (
            <LeftBody>
                    <Title>포트폴리오</Title>
                    <SubTitle>국내 1위 사진작가 중개 플랫폼</SubTitle>
                    <PortVideo id="portVideo" src={portfolioVideo} type="video/mp4" muted autoplay loop></PortVideo>
                    <Frame>
                        <Title>이벤트</Title>
                        <SubTitle>국내 1위 사진작가 중개 플랫폼</SubTitle>
                        <EventImg src={eventImg}></EventImg>
                    </Frame>
            </LeftBody>
        )
    }
}


export default KeyVisualLeft;