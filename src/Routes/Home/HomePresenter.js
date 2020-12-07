import React,{Component} from 'react';

import PropTypes from "prop-types";
import styled from "styled-components";
import KeyVisualSection from "./KeyVisualSection/KeyVisualSection";
import UnbalancedSection from "./UnbalancedSection/UnbalancedSection";

const HomeStyle = styled.div`
    width:100%;
    background-color: white;
    color: black;
    padding: 10% 120px;
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