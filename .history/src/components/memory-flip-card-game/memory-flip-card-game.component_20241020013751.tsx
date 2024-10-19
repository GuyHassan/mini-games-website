import { shuffleArray, generateCardsInfo, GameModes } from '../../helpers';
import { MemoryFlipCardGameStyled, SpriteIcon } from './styled';
import { GameCard } from './game-card.component';
import { HeaderMemoryFlipCardGame } from './header-memory-flip-card-game-component';

const { StyledContainer, StyledWrapperCards } = MemoryFlipCardGameStyled;

export const MemoryFlipCardGame = () => {
    const colorsAndIcons = generateCardsInfo(GameModes.Medium.totalCards);
    const cardsInfo = [...colorsAndIcons, ...colorsAndIcons];

    return (
        <StyledContainer>
          <SpriteIcon x={0} y={0} />
            {/* <HeaderMemoryFlipCardGame />
            <StyledWrapperCards amountInRow={GameModes.Medium.cardsInARow}>
                {shuffleArray(cardsInfo)?.map(({ color, icon }, index) => {
                    return <GameCard key={index} color={color} icon={icon} />;
                })}
            </StyledWrapperCards> */}
        </StyledContainer>
    );
};
