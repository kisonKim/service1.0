import React from "react";
import styled,{ keyframes } from "styled-components";
import TypedWord from "react-typed";
import recommendCircle from "Resources/main/keyvisual/recommendCircle.svg";
import vipCircle from "Resources/main/keyvisual/vipCircle.svg";

const buttonCircleSize = "50px";
const recommCircleFullWidth = "230px";
const vipCircleFullWidth = "250px";
const buttonTextBtw = "60px";

const LeftBody = styled.div`
    flex:1.4;
    vertical-align:middle;
    color:#1E2D3A;
`;

const Slogan = styled.span`
    font-size: 1.25rem;
    font-weight: bold;
    color: #f85e65;
`;

const BriphyIs = styled.span`
    display: block;
    font-weight: bold;
    font-size: 5rem;
    margin-top : 1rem;
    margin-bottom : 0.6rem;
`;

const Typed = styled.div`
    display: block;
    font-size: 5rem;
    margin-top:25px;
`;

const Recommend = styled.div`
    margin-top: 145px;
    cursor:pointer;
`;

const RecommendCell = styled.div`
    position: relative;
`;

const VipCell = styled.div`
    position: relative;
`;

const Vip = styled.div`
    display:inline-block;
    cursor:pointer;
    height: 1px;
    margin-top: 90px;
`;

const RecommendCircle = styled.div`
    position:absolute;
    top:50%;
    left:0;
    transform: translateY(-50%);
    width:${buttonCircleSize};
    height:${buttonCircleSize};
    border-radius:50px;
    text-align:center;
    font-size:30px;
    line-height:40px;
    background-color: rgb(236, 173, 166);
    transition: all 0.5s;
`;

const RecommendBtn = styled.span`
    position:absolute;
    top:50%;
    left:${buttonTextBtw};
    width:160px;
    font-size:30px;
    font-weight: bold;
    transform:translateY(-50%);
`;

const VipCircle = styled.div`
    position:absolute;
    top:50%;
    left:0;
    transform: translateY(-50%);
    width:${buttonCircleSize};
    height:${buttonCircleSize};
    border-radius:50px;
    background-color: rgb(245, 236, 230);
    transition: all 0.5s;
    text-align:center;
    font-size:30px;
    line-height:40px;
`;

const VipBtn = styled.span`
    position:absolute;
    top:50%;
    width:160px;
    left:${buttonTextBtw};
    font-size:30px;
    font-weight: bold;
    transform:translateY(-50%);
`;

class KeyVisualLeft extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const typedCursor = document.querySelector(".typed-cursor");
        const typedText = document.querySelector(".typing");
        const recommendCircle = document.getElementById("recommendCircle");
        const vipCircle = document.getElementById("vipCircle");
        const recommendBtn = document.getElementById("recommendBtn");
        const vipBtn = document.getElementById("vipBtn");
        const navyColor = "rgb(42,67,91)";
        const pinkColor = "rgb(236, 173, 166)";
        const beigeColor = "rgb(245, 236, 230)";
        typedText.style.fontWeight = 600;
        typedCursor.innerText = "";
        typedCursor.style.marginLeft = "2px";
        typedCursor.style.borderRight = "2px solid black";


        // setTimeout(()=>{
        //     recommendCircle.style.width = recommCircleFullWidth;
        //     vipCircle.style.width = vipCircleFullWidth;
        // },1000);

        recommendBtn.addEventListener("mouseover",(event)=>{
            recommendBtn.style.color = pinkColor;
            recommendCircle.style.backgroundColor = navyColor;
        });
        recommendBtn.addEventListener("mouseout",(event)=>{
            recommendBtn.style.color = 'black';
            recommendCircle.style.backgroundColor = pinkColor;
        });
        recommendCircle.addEventListener("mouseover",(event)=>{
            recommendBtn.style.color = 'white';
            recommendCircle.style.backgroundColor = navyColor;
        });
        recommendCircle.addEventListener("mouseout",(event)=>{
            recommendBtn.style.color = 'black';
            recommendCircle.style.backgroundColor = pinkColor;
        });
        
        vipBtn.addEventListener("mouseover",(event)=>{
            vipBtn.style.color = pinkColor;
            vipCircle.style.backgroundColor = navyColor;
        }); 
        vipBtn.addEventListener("mouseout",(event)=>{
            vipBtn.style.color = 'black';
            vipCircle.style.backgroundColor = beigeColor;
        });
        vipCircle.addEventListener("mouseover",(event)=>{
            vipBtn.style.color = 'white';
            vipCircle.style.backgroundColor = navyColor;
        }); 
        vipCircle.addEventListener("mouseout",(event)=>{
            vipBtn.style.color = 'black';
            vipCircle.style.backgroundColor = beigeColor;
        });
    }

    render() {
        return (
            <LeftBody>
                <Slogan>국내 1위 촬영 중개 플랫폼</Slogan>
                <BriphyIs>브리피는</BriphyIs>
                <Typed>
                    <TypedWord className="typing"
                        strings={["당신만의 코디네이터","실례가 안된다면","죽같네"]}
                        typeSpeed={80}
                        backSpeed={50}
                        loop
                    />
                </Typed>
                <Recommend>
                    <RecommendCell>
                        <RecommendCircle id="recommendCircle"></RecommendCircle>
                        <RecommendBtn id="recommendBtn">
                            추천 받기
                        </RecommendBtn>
                    </RecommendCell>
                </Recommend>
                <Vip>
                    <VipCell>
                        <VipCircle id="vipCircle"></VipCircle>
                        <VipBtn id="vipBtn">
                            VIP 서비스
                        </VipBtn>
                    </ VipCell>
                </Vip>
            </LeftBody>
        )
    }
}


export default KeyVisualLeft;



