import React,{Component} from 'react';

import PropTypes from "prop-types";
import styled from "styled-components";
import KeyVisualSection from "./KeyVisualSection/KeyVisualSection";
import UnbalancedSection from "./UnbalancedSection/UnbalancedSection";

const HomeStyle = styled.div`
    
    background-color: white;
    // padding: 170px 324px;
    width:1200px;
    min-width:1200px;
    margin: 170px 325px;
`;

class HomePresenter extends Component {
    

    render(){
        return (
            <HomeStyle>
                <KeyVisualSection />
                <UnbalancedSection />
            </HomeStyle>
        );
    }
}

export default HomePresenter;