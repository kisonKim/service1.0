import React from "react";
import styled from "styled-components";
import portfolioVideo from "Resources/main/unbalanced/portfolio.mp4"
import portfolioCircle from "Resources/main/unbalanced/portfolioCircle.svg"
import eventImg_1 from "Resources/main/unbalanced/event1.png";
import eventImg_2 from "Resources/main/unbalanced/event2.png";
import "./SwiperStyle.css";
import 'swiper/swiper.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectFade, Autoplay} from 'swiper';

SwiperCore.use([EffectFade,Autoplay]);

const LeftBody = styled.div`
    flex:1.3951;
    width:100%;
    padding-right:12.5px;
`;

const SubTitle = styled.span`
    position:absolute;
    bottom: -75px;
    width:300px;
    font-size: 22px;
    color: #2A435B;
`;

const TitleSection = styled.div`
    display:inline-block;
    height:100px;
    width:100%;
`;

const TitleWrapper = styled.div`
    position:relative;
`;
const Title = styled.span`
    position:absolute;
    left: 0;
    display:block;
    font-size:40px;
    font-weight:bold;
`;
const PortfolioCircle = styled.div`
    position:absolute;
    left: -80px;
    bottom: -142px;
    width: 127px;
    height: 127px;
    border-radius:100%;
    background-color: rgb(245,236,230);
`;

const EventCircle = styled.div`
    position:absolute;
    left: -25px;
    bottom: -29px;
    width: 49px;
    height: 49px;
    border-radius:100%;
    background-color: rgb(245,236,230);
`;

const PortVideo = styled.video`
    position:relative;
    width:100%;
    z-index:2;
    /* box-shadow:10px 10px 12px 1px #aaa; */
`;

const EventImg = styled.img`
    width:100%;
    /* box-shadow:10px 10px 12px 1px #aaa; */
`;

const Frame = styled.div`
    width:100%;
    margin-top:172px;
`;

const swiperParams = {
    effect:"fade",
    autoplay:true,
    loop:true,
    slidesPerView: "1",
}
class KeyVisualLeft extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.getElementById("portVideo").play();
    }

    render() {
        let reactSwipeEl;
        return (
            <LeftBody>
                    <TitleSection>
                        <TitleWrapper>
                            <PortfolioCircle/>
                            <Title>포트폴리오</Title>
                            <SubTitle>국내 1위 사진작가 중개 플랫폼</SubTitle>
                        </TitleWrapper>
                    </TitleSection>
                    
                    <PortVideo id="portVideo" src={portfolioVideo} type="video/mp4" muted autoplay loop></PortVideo>
                    <Frame>
                        <TitleSection>
                            <TitleWrapper>
                            <EventCircle />
                            <Title>이벤트</Title>
                            <SubTitle>국내 1위 사진작가 중개 플랫폼</SubTitle>
                            </TitleWrapper>
                        </TitleSection>
                        <Swiper {...swiperParams}> 
                            <SwiperSlide><EventImg src={eventImg_1} /></SwiperSlide> 
                            <SwiperSlide><EventImg src={eventImg_2} /></SwiperSlide> 
                        </Swiper>
                        
                    </Frame>
            </LeftBody>
        )
    }
}


export default KeyVisualLeft;