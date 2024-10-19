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
            <SpriteIcon x={32} y={32} />
            <SpriteIcon x={32 + 145} y={32} />
            <SpriteIcon x={32 + 145 + 145} y={32} />
            <SpriteIcon x={32 + 145 + 145 + 145} y={32*2} />

            {/* <HeaderMemoryFlipCardGame />
            <StyledWrapperCards amountInRow={GameModes.Medium.cardsInARow}>
                {shuffleArray(cardsInfo)?.map(({ color, icon }, index) => {
                    return <GameCard key={index} color={color} icon={icon} />;
                })}
            </StyledWrapperCards> */}
        </StyledContainer>
    );
};
