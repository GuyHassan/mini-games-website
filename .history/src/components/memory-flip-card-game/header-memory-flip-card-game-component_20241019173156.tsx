import { Typography } from '@mui/material';
import React from 'react';
import { HeaderMemoryFlipCardGameStyled } from './styled';

const { StyledHeaderContainer } = HeaderMemoryFlipCardGameStyled;

export const HeaderMemoryFlipCardGame = () => {
  return (
    <StyledHeaderContainer>
      <Typography>Memory Flip Card Game</Typography>
    </StyledHeaderContainer>
  );
};
