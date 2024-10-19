import { Button, Typography } from '@mui/material';
import React from 'react';
import { HeaderMemoryFlipCardGameStyled } from './styled';

const { StyledHeaderContainer } = HeaderMemoryFlipCardGameStyled;

export const HeaderMemoryFlipCardGame = () => {
    return (
        <StyledHeaderContainer>
            <Button />
            <Button />
            <Button />
            <Typography>Memory Flip Card Game</Typography>
        </StyledHeaderContainer>
    );
};
