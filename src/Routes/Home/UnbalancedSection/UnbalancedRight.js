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
    padding-left:20px;
    margin-top:30%;
`;

const SubTitle = styled.span`
    font-size: 1.3rem;
    line-height: 3;
    color: #f85e65;
`;

const swiperParams = {
    effect:"fade",
    autoplay:{delay:3000},
    loop:true,
    slidesPerView: "1",
}

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
    