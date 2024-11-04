import React from 'react';
import styled from 'styled-components';
import image from './/..//..//img/Rectangle 1.png';
import {StyledLabel, SmallBox, SuperButton, SecondButton} from './Label.styled'

type SuperButtonPropsType = {
    color?: string
}

export function Label(props: SuperButtonPropsType) {
    return (
        <StyledLabel>
            <img src={image} />
            <h2>Headline</h2>
            <p>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</p>
            <SmallBox>
                <SuperButton color={props.color}>See more</SuperButton>
                <SecondButton>Save</SecondButton>
            </SmallBox>
        </StyledLabel>
    );
}

