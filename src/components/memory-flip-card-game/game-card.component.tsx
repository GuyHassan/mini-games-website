import React from 'react';
import { CardStyled } from './styled';
import { CardProps } from './memory-flip-card-game.types';

import { CardContent } from '@mui/material';
const { Card, FontAwesomeIcon } = CardStyled;

export const GameCard = ({ icon, color }: CardProps) => {
    return (
        <Card color={color}>
            <CardContent
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    padding: 0,
                }}
            >
                <FontAwesomeIcon icon={icon} />
            </CardContent>
        </Card>
    );
};
