import { memo } from 'react';
import SearchIcon from 'shared/assets/icons/search.svg';
import { cancelEventBubbling } from 'shared/lib/cancelEventBubbling';
import { classNames } from 'shared/lib/classNames';
import { Input } from 'shared/ui/Input/Input';
import cls from './FIlmsSearchInput.module.scss';

interface FIlmsSearchInputType{
    className?: string;
    filmSearchInput: string,
    onChangeFilmSearchInput?: (value:string) => void
}

export const FilmsSearchInput = memo((props: FIlmsSearchInputType) => {
    const {
        className,
        filmSearchInput,
        onChangeFilmSearchInput,
    } = props;

    const onChangeInputHandler = (value: string) => {
        onChangeFilmSearchInput?.(value);
    };

    return (
        <div
            onClick={cancelEventBubbling}
            className={classNames(cls.searchWrapper, {}, [className])}
            aria-hidden="true"
        >
            <SearchIcon onClick={cancelEventBubbling} className={cls.searchIcon} />
            <Input
                value={filmSearchInput}
                type="text"
                className={cls.input}
                placeholder="Название фильма"
                onClick={cancelEventBubbling}
                onChange={onChangeInputHandler}
            />
        </div>
    );
});
