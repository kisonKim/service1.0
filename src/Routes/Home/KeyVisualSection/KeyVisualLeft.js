import React from "react";
import styled,{ keyframes } from "styled-components";
import TypedWord from "react-typed";
import recommendCircle from "Resources/main/keyvisual/recommendCircle.svg";
import vipCircle from "Resources/main/keyvisual/vipCircle.svg";

const LeftBody = styled.div`
    flex:1.4;
    font-size: 3.5rem;
    vertical-align:middle;
    margin-top: 6%;
    margin-left: 5%;
`;

const Slogan = styled.span`
    font-size: 1.3rem;
    color: #f85e65;
`;

const BriphyIs = styled.span`
    display: block;
    font-weight: 600;
    margin-top : 1rem;
    margin-bottom : 0.6rem;
`;

const Typed = styled.div`
    display: block;

`;

const Recommend = styled.div`
    display:table;
    vertical-align:middle;
    margin-top: 50px;
`;

const RecommendCell = styled.div`
    display:table-cell;
    vertical-align:middle;
`;

const Vip = styled.div`
    margin-top: 50px;
`;

const RecommendCircle = styled.img`
`;
const VipCircle = styled.img`
   
`;

const RecommendBtn = styled.button`
    display:table-cell;
    background: none;
    border: 3px solid #fff;
    color: black;
    font-size: 0.4em;
    position: relative;
    text-transform: uppercase;
    cursor: pointer;
    

    &:after {
        background: #f85e65;
        content: '';
        position: absolute;
        height: 100%;
        left: 0;
        top: 0;
        width: 0;
        -webkit-transition: all 0.3s;
            -moz-transition: all 0.3s;
        -o-transition: all 0.3s;
            transition: all 0.3s;
    }
    &:hover {
        color: white;
        &:after {
            width: 100%;
        }
    }
`;

const VipBtn = styled.button`
    background: none;
    border: 3px solid #fff;
    color: black;
    display:inline-block;
    font-size: 0.4em;
    position: relative;
    text-transform: uppercase;
    cursor: pointer;
    display:inline-block;
    &:after {
        background: #f85e65;
        content: '';
        position: absolute;
        height: 100%;
        left: 0;
        top: 0;
        width: 0;
        -webkit-transition: all 0.3s;
            -moz-transition: all 0.3s;
        -o-transition: all 0.3s;
            transition: all 0.3s;
    }
    &:hover {
        color: white;
        &:after {
            width: 100%;
        }
    }
`;

class KeyVisualLeft extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const typedCursor = document.querySelector(".typed-cursor");
        const typedText = document.querySelector(".typing");

        typedText.style.fontWeight = 600;
        typedCursor.innerText = "";
        typedCursor.style.marginLeft = "2px";
        typedCursor.style.borderRight = "2px solid black";
    }

    render() {
        return (
            <LeftBody>
                <Slogan>국내 1위 촬영 중개 플랫폼</Slogan>
                <BriphyIs>브리피는</BriphyIs>
                <Typed>
                    <TypedWord className="typing"
                        strings={["당신만의 코디네이터","찍어줄게 완전히 달라진 너","마케팅 담당자의 칼퇴 도우미"]}
                        typeSpeed={80}
                        backSpeed={50}
                        loop
                    />
                </Typed>
                <Recommend>
                    <RecommendCell>
                        <RecommendCircle src={recommendCircle}></RecommendCircle>
                        <RecommendBtn>
                            추천 받기
                        </RecommendBtn>
                    </RecommendCell>
                </Recommend>
                <Vip>
                    <VipCircle src={vipCircle}></VipCircle>
                    <VipBtn>
                        VIP 서비스
                    </VipBtn>
                </Vip>
            </LeftBody>
        )
    }
}


export default KeyVisualLeft;



