import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PorfolioPresenter = ({topRated, popular, airingToday, error, loading}) => null;

PorfolioPresenter.protoTypes = {
    topRated: PropTypes.array,
    popular: PropTypes.array, 
    airingToday: PropTypes.array,
    loading: PropTypes.isRequired,
    error : PropTypes.string
}

export default PorfolioPresenter;