import React from "react";
import styled from "styled-components";
import KeyVisualLeft from "./KeyVisualLeft";
import KeyVisualRight from "./KeyVisualRight";

const KeyVisual = styled.div`    
    display:flex;
    flex-direction:row;
    `;

class KeyVisualSection extends React.Component {
    
    render() {
        return (
            <KeyVisual>
                <KeyVisualLeft />
                <KeyVisualRight />
            </KeyVisual>
        )
    }
}
export default KeyVisualSection; 
