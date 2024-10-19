import { Card, Stack } from '@mui/material';
import styled from 'styled-components';
import { cardClasses } from '@mui/material/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import spriteImage from '../../assets/fruits-shell-icons.png';
interface WrapperCardsProps {
    amountInRow: number;
}

const ContainerMemoryFlipCardGame = styled('div')((props) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '64px',
    margin: '8% auto 0',
    textAlign: 'center',
    height: '100%',
}));

const StyledWrapperCards = styled('div')<WrapperCardsProps>((props) => ({
    display: 'flex',
    flexDirection: 'row',
    gap: '16px',

    maxWidth: `calc(${props.amountInRow} * 120px + ${props.amountInRow - 1} * 16px)`,
    flexWrap: 'wrap',
}));

export const MemoryFlipCardGameStyled = {
    StyledContainer: ContainerMemoryFlipCardGame,
    StyledWrapperCards,
};

const StyledCard = styled(Card)(({ color }) => ({
    width: '120px',
    height: '120px',
    [`&.${cardClasses.root}`]: {
        backgroundColor: color,
    },
    [`&.${cardClasses.root}:hover`]: {
        backgroundColor: color,
        cursor: 'pointer',
    },
}));
const StyledFontAwesome = styled(FontAwesomeIcon)((props) => ({
    fontSize: '3em', // equivalent to size='3x'
    color: 'white',
    stroke: 'black',
    strokeWidth: 4,
}));
// const ContainerCard = styled('div')((props) => ({}));

export const CardStyled = {
    // ContainerContent: ContainerCard,
    Card: StyledCard,
    FontAwesomeIcon: StyledFontAwesome,
};

const HeaderContainer = styled('div')((props) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '16px',
    padding: '16px',
    backgroundColor: 'lightgray',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.5)',
}));

const ModeGameButtonsContainer = styled(Stack).attrs({
    direction: 'row',
})({
    gap: '16px',
});

export const HeaderMemoryFlipCardGameStyled = {
    StyledHeaderContainer: HeaderContainer,
    ModeGameButtonsContainer,
};

const SpriteIcon = styled('div')<{ x: number; y: number }>`
    width: 32px; /* Set the width of the sprite */
    height: 32px; /* Set the height of the sprite */
    background-image: url(${spriteImage});
    background-position: ${({ x, y }) => `-${x}px -${y}px`};
    background-size: auto;
`;
