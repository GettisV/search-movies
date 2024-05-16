import { SyntheticEvent } from 'react';

export const cancelEventBubbling = (e: SyntheticEvent) => {
    e.stopPropagation();
};
