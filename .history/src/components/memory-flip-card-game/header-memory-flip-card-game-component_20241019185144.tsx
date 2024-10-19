import { Button, Typography } from '@mui/material';
import React from 'react';
import { HeaderMemoryFlipCardGameStyled } from './styled';

const { StyledHeaderContainer, ModeGameButtonsContainer } = HeaderMemoryFlipCardGameStyled;

export const HeaderMemoryFlipCardGame = () => {
    return (
        <StyledHeaderContainer>
            <ModeGameButtonsContainer>
                <Button variant="contained">Easy</Button>
                <Button variant="contained">Medium</Button>
                <Button variant="contained">Hard</Button>
            </ModeGameButtonsContainer>
            <Typography>Memory Flip Card Game</Typography>
        </StyledHeaderContainer>
    );
};
