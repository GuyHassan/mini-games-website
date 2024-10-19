import { Button, Typography } from '@mui/material';
import React from 'react';
import { HeaderMemoryFlipCardGameStyled } from './styled';

const { StyledHeaderContainer } = HeaderMemoryFlipCardGameStyled;

export const HeaderMemoryFlipCardGame = () => {
    return (
        <StyledHeaderContainer>
            <div>
                <Button variant="contained">Easy</Button>
                <Button variant="contained">Medium</Button>
                <Button variant="contained">Hard</Button>
            </div>
            <Typography>Memory Flip Card Game</Typography>
        </StyledHeaderContainer>
    );
};
