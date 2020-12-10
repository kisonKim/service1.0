import React from "react";
import styled from "styled-components";
import magazineImg1 from "Resources/main/unbalanced/magazine1.png";
import magazineImg2 from "Resources/main/unbalanced/magazine2.png";
import magazineImg3 from "Resources/main/unbalanced/magazine3.png";
import "./SwiperStyle.css";
import 'swiper/swiper.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectFade, Autoplay} from 'swiper';

SwiperCore.use([EffectFade,Autoplay]);

const RightBody = styled.div`
    flex:1;
    width:100%;
    padding-left:26px;
    margin-top:30%;
`;

const TitleSection = styled.div`
    display:inline-block;
    height:100px;
    width:100%;
`;

const TitleWrapper = styled.div`
    position:relative;
`;

const MagazineCircle = styled.div`
    position:absolute;
    left: 102px;
    bottom: -35px;
    width: 65px;
    height: 65px;
    border-radius:100%;
    background-color: #ECADA6;
`;

const swiperParams = {
    effect:"fade",
    autoplay:{delay:3000},
    loop:true,
    slidesPerView: "1",
}

const Title = styled.span`
    position:absolute;
    left: 0;
    display:block;
    font-size:3rem;
    font-weight:bold;
`;

const SubTitle = styled.span`
    position:absolute;
    bottom: -110px;
    width:300px;
    font-size: 1.3rem;
    line-height: 3;
`;

const MagazineImg = styled.img`
    width:100%;
`;


class KeyVisualRight extends React.Component {
    
    componentDidMount() {
       
    }

    render() {
        return (
            <RightBody>
                <TitleSection>
                    <TitleWrapper>
                        <MagazineCircle/>
                        <Title>매거진</Title>
                        <SubTitle>국내 1위 사진작가 중개 플랫폼</SubTitle>
                    </TitleWrapper>
                </TitleSection>
                {/* <MagazineImg src={magazineImg}></MagazineImg> */}
                <Swiper {...swiperParams}> 
                    <SwiperSlide data-swiper-autoplay="2000"><MagazineImg src={magazineImg1}></MagazineImg></SwiperSlide> 
                    <SwiperSlide data-swiper-autoplay="2000"><MagazineImg src={magazineImg2}></MagazineImg></SwiperSlide> 
                    <SwiperSlide data-swiper-autoplay="2000"><MagazineImg src={magazineImg3}></MagazineImg></SwiperSlide> 
                </Swiper>
            </RightBody>
        )
    }
}
export default KeyVisualRight;
    