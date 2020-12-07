import React from "react";
import styled from "styled-components";
import UnbalancedLeft from "./UnbalancedLeft";
import UnbalancedRight from "./UnbalancedRight";

const UnBalanced = styled.div`    
    display:flex;
    flex-direction:row;
    padding-top:10%;
    `;

class KeyVisualSection extends React.Component {
    
    render() {
        return (
            <UnBalanced>
                <UnbalancedLeft />
                <UnbalancedRight />
            </UnBalanced>
        )
    }
}
export default KeyVisualSection; 
