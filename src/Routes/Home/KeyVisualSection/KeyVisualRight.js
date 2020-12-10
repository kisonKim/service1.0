import React from "react";
import styled from "styled-components";
import keyvisualImg from "Resources/main/keyvisual/keyvisual.svg";

const RightBody = styled.div`
    flex:1;
    width:100%;
    margin-top: 15px;
`;

const Canvas = styled.canvas`
    position:absolute;
    top:0;
    left:0;
    margin-top:-50px;
    width:100%;
    background-color:transparent;
`;

const KeyVisualImg = styled.img`
    position:absolute;
    top:50px;
    left:50%;
    transform:translateX(-50%);
    width: 266px;
    height: 429px;
`;

const CanvasSection = styled.div`
    position:relative;
`;

class KeyVisualRight extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }
    
    componentDidMount() {
        const ctx = this.refs.canvas.getContext('2d');
        
        let width = ctx.canvas.width;
        let height = ctx.canvas.height;
        
        let y1 = 60;
        let y2 = 220;
        let y3 = 400;
        let x1 = 180;
        let x2 = 450;
        let x3 = 150;

        let y1speed = 0.6;
        let y2speed = 0.6;
        let y3speed = 1.1;
        let x1speed = -0.6;
        let x2speed = 0.6;
        let x3speed = 1.1;

        let cRad1 = 36;
        let cRad2 = 76.5;
        let cRad3 = 141;

        let cRad1Speed = 0.3;
        let cRad2Speed = 0.3;
        let cRad3Speed = 0.3;

        
        let blur = 2;
        let blurSpeed = 0.2;
        
        setInterval(()=>{
            ctx.clearRect(0,0,width,height);

            if(blur <=1 || blur>12){
                blurSpeed*= -1;
            }
            if(height <= y1+50 || y1-50<= 0) {
                y1speed*=-1;
            }
            if(height <= y2+100 || y2-100<= 0) {
                y2speed*=-1;
            }
            if(height <= y3+100 || y3-100<= 0) {
                y3speed*=-1;
            }
            if(width <= x1+50 || x1-50<= 0) {
                x1speed*=-1;
            }
            if(width <= x2+100 || x2-100<= 0) {
                x2speed*=-1;
            }
            if(width <= x3+100 || x3-100<= 0) {
                x3speed*=-1;
            }
            if(cRad1 >= 70 || cRad1<30){
                cRad1Speed*=-1;
            }
            if(cRad2 >= 120 || cRad2<80){
                cRad2Speed*=-1;
            }
            if(cRad3 >= 163 || cRad3<80){
                cRad3Speed*=-1;
            }

            ctx.beginPath();
            ctx.filter = `blur(${blur}px)`;
            ctx.strokeStyle = ctx.fillStyle = `rgb(42, 67, 91)`;
            ctx.globalAlpha = "0.7";
            ctx.arc(x1, y1, cRad1, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            ctx.beginPath();
            ctx.strokeStyle = ctx.fillStyle = `rgb(248, 94, 91)`;
            ctx.globalAlpha = "0.5";
            ctx.arc(x2, y2, cRad2, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            ctx.beginPath();
            ctx.strokeStyle = ctx.fillStyle = `rgb(245, 236, 230)`;
            ctx.globalAlpha = "0.8";
            ctx.arc(x3, y3, cRad3, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            // y1+=y1speed;
            // y2+=y2speed;
            // y3+=y3speed;
            // x1+=x1speed;
            // x2+=x2speed;
            // x3+=x3speed;
            // cRad1+=cRad1Speed;
            // cRad2+=cRad2Speed;
            // cRad3+=cRad3Speed;
            blur+=blurSpeed;
        },20);
    }
    render() {
        return (
            <RightBody>
                <CanvasSection>
                    <Canvas ref="canvas" width={580} height={556} >이 브라우저는 canvas를 지원하지 않습니다.</Canvas>
                    <KeyVisualImg src={keyvisualImg} />
                </CanvasSection>
            </RightBody>
        )
    }
}
export default KeyVisualRight;
    