import { shuffleArray, generateCardsInfo, GameModes } from '../../helpers';
import { MemoryFlipCardGameStyled, SpriteIcon } from './styled';
import { GameCard } from './game-card.component';
import { HeaderMemoryFlipCardGame } from './header-memory-flip-card-game-component';

const { StyledContainer, StyledWrapperCards } = MemoryFlipCardGameStyled;
const spriteWidth = 145; // Width of each sprite
const spriteHeight = 145; // Height of each sprite
const spritesPerRow = 4; // Number of sprites per row in the sprite sheet
export const MemoryFlipCardGame = () => {
    const colorsAndIcons = generateCardsInfo(GameModes.Medium.totalCards);
    const cardsInfo = [...colorsAndIcons, ...colorsAndIcons];
    const getSpriteCoordinates = (index: number, spriteWidth: number, spriteHeight: number, spritesPerRow: number) => {
      const x = (index % spritesPerRow) * spriteWidth;
      const y = Math.floor(index / spritesPerRow) * spriteHeight;
      return { x, y };
    };
    return (
        <StyledContainer>
            {/* <SpriteIcon x={32} y={32} />
            <SpriteIcon x={32 + 145} y={32} />
            <SpriteIcon x={32 + 145 + 145} y={32} />
            <SpriteIcon x={32 + 145 + 145 + 145} y={32} /> */}
            {[0, 1, 2, 3].map((index) => {
        const { x, y } = getSpriteCoordinates(index, spriteWidth, spriteHeight, spritesPerRow);
        return <SpriteIcon key={index} x={x} y={y} />;
      })}
            {/* <HeaderMemoryFlipCardGame />
            <StyledWrapperCards amountInRow={GameModes.Medium.cardsInARow}>
                {shuffleArray(cardsInfo)?.map(({ color, icon }, index) => {
                    return <GameCard key={index} color={color} icon={icon} />;
                })}
            </StyledWrapperCards> */}
        </StyledContainer>
    );
};
