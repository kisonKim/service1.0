import React from "react";
import styled from "styled-components";
import keyvisualImg from "Resources/main/keyvisual/keyvisual.svg";

const RightBody = styled.div`
    flex:1;
    width:100%;
`;

const Canvas = styled.canvas`
    width:100%;
`;

class KeyVisualRight extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }
    
    componentDidMount() {
        const ctx = this.refs.canvas.getContext('2d');
        
        var img = new Image();
        img.src = keyvisualImg;

        img.onload = () => {
            let width = ctx.canvas.width;
            let height = ctx.canvas.height;
            

            let y1 = 70;
            let y2 = 300;
            let y3 = 400;
            let x1 = 140;
            let x2 = 400;
            let x3 = 101;

            let y1speed = 1;
            let y2speed = 1;
            let y3speed = 1.5;
            let x1speed = -1;
            let x2speed = 1;
            let x3speed = 1.5;

            let cRad1 = 50;
            let cRad2 = 100;
            let cRad3 = 100;

            let cRad1Speed = 0.5;
            let cRad2Speed = 0.5;
            let cRad3Speed = 0.5;

            let circle1Color = 91;
            let circle1ColorTrans = 1;
            let circle2Color = 91;
            let circle2ColorTrans = 1;
            let circle3Color = 230;
            let circle3ColorTrans = 1;

            
            
            
            setInterval(()=>{
                ctx.clearRect(0,0,width,height);
                ctx.drawImage(img,width / 2 - img.width / 2,0);
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
                if(cRad3 >= 120 || cRad3<80){
                    cRad3Speed*=-1;
                }

                if(circle1Color >= 255 || circle1Color <= 0){
                    circle1ColorTrans*=-1;
                }
                if(circle2Color >= 255 || circle2Color <= 0){
                    circle2ColorTrans*=-1;
                }
                if(circle3Color >= 255 || circle3Color <= 0){
                    circle3ColorTrans*=-1;
                }
                ctx.beginPath();
                
                ctx.strokeStyle = ctx.fillStyle = `rgb(42, 67, ${circle1Color})`;
                ctx.globalAlpha = "0.7";
                ctx.arc(x1, y1, cRad1, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
    
    
                ctx.beginPath();
                ctx.strokeStyle = ctx.fillStyle = `rgb(248, 94, ${circle2Color})`;
                ctx.globalAlpha = "0.5";
                ctx.arc(x2, y2, cRad2, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
    
                
                ctx.beginPath();
                ctx.strokeStyle = ctx.fillStyle = `rgb(245, 236, ${circle3Color})`;
                ctx.globalAlpha = "0.8";
                ctx.arc(x3, y3, cRad3, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();

                y1+=y1speed;
                y2+=y2speed;
                y3+=y3speed;
                x1+=x1speed;
                x2+=x2speed;
                x3+=x3speed;
                cRad1+=cRad1Speed;
                cRad2+=cRad2Speed;
                cRad3+=cRad3Speed;
                circle1Color+=circle1ColorTrans;
                circle2Color+=circle2ColorTrans;
                circle3Color+=circle3ColorTrans;

            },20);
            
        }
    }
    render() {
        return (
            <RightBody>
                <Canvas ref="canvas" width={550} height={550} >이 브라우저는 canvas를 지원하지 않습니다.</Canvas>
            </RightBody>
        )
    }
}
export default KeyVisualRight;
    