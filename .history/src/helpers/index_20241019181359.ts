import { CardProps, ShuffleArrayProps } from '../components/memory-flip-card-game/memory-flip-card-game.types';
import { iconsList } from './iconLists';

export const MIN_NUMBER_OF_CARDS = 5 * 4;
export const LevelBySizes = { Easy: { total: 12, inARow: 4 }, Medium: { total: 24, inARow: 5 }, Hard: { total: 36, inARow: 6 } };

export const generateRandomColors = (numberOfColors: number): string[] => {
    const colors = [];
    for (let i = 0; i < numberOfColors; i++) {
        const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        colors.push(color);
    }
    return colors;
};

export const shuffleArray = (array: ShuffleArrayProps) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

export const generateCardsInfo = (mode): CardProps[] => {
    const amountOfSingleCards = mode.total / 2;
    const colors = generateRandomColors(amountOfSingleCards);
    const iconsLength = iconsList.length;

    return colors.reduce((acc: { color: string; icon: any }[], color: string, index: number) => {
        const iconIndex = index % iconsLength;
        acc.push({ color, icon: iconsList[iconIndex] });
        return acc;
    }, []);
};
