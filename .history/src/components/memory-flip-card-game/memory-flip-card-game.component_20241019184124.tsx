import { shuffleArray, generateCardsInfo, GameModes } from '../../helpers';
import { MemoryFlipCardGameStyled } from './styled';
import { GameCard } from './game-card.component';
import { HeaderMemoryFlipCardGame } from './header-memory-flip-card-game-component';

const { StyledContainer, StyledWrapperCards } = MemoryFlipCardGameStyled;

export const MemoryFlipCardGame = () => {
    const colorsAndIcons = generateCardsInfo(GameModes.Hard.totalCards);
    const cardsInfo = [...colorsAndIcons, ...colorsAndIcons];

    return (
        <StyledContainer>
            <HeaderMemoryFlipCardGame />
            <StyledWrapperCards amountInRow={GameModes.Easy.cardsInARow}>
                {shuffleArray(cardsInfo)?.map(({ color, icon }, index) => {
                    return <GameCard key={index} color={color} icon={icon} />;
                })}
            </StyledWrapperCards>
        </StyledContainer>
    );
};
