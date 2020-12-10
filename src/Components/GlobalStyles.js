import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body {
        
        color:#1E2D3A;
        font-family : "NanumSquare_AC", sans-serif;
        font-size:16px;
    } 
`;

export default globalStyles;