import { FilmsGrid } from 'entities/Films';
import { getFilmsResponseSearch, getIsFetching } from 'entities/Films/model/selectors/filmSelectors';
import { FilmsSearchInput, getFilmSearchValue } from 'features/GetFilms';
import {
    KeyboardEvent, memo,
    useCallback,
    useEffect,
} from 'react';
import { useAppSelector } from 'shared/hooks/storeHooks/storeHooks';
import { cancelEventBubbling } from 'shared/lib/cancelEventBubbling';
import { classNames } from 'shared/lib/classNames';
import LoaderPage from 'shared/ui/LoaderPage/LoaderPage';
import { Portal } from 'shared/ui/Portal/Portal';
import { Container } from 'widgets/Container';
import cls from './FilmsSearchModalWindow.module.scss';

interface FilmsSearchModalWindowType{
    className?: string;
    stateModal: boolean;
    closeModal?: () => void;
    onChangeInput?: (value:string) => void
}

export const FilmsSearchModalWindow = memo((props: FilmsSearchModalWindowType) => {
    const {
        className,
        stateModal,
        closeModal,
        onChangeInput,
    } = props;

    type Mods = Record<string, boolean>

    const mods: Mods = {
        [cls.show!]: stateModal,
    };

    const data = useAppSelector(getFilmsResponseSearch);
    const searchInput = useAppSelector(getFilmSearchValue);
    const isFetching = useAppSelector(getIsFetching);

    useEffect(() => {
        if (stateModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [stateModal]);

    const closeModalHandler = useCallback(() => {
        closeModal?.();
    }, [closeModal]);

    const onKeyDownHandler = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Escape') closeModal?.();
    }, [closeModal]);

    return (
        <Portal domElement={document.body}>
            <div
                className={classNames(cls.overlay, mods, [className])}
                onClick={closeModalHandler}
                onKeyDown={onKeyDownHandler}
                aria-hidden="true"
            >
                <div
                    onClick={cancelEventBubbling}
                    className={cls.headerSearch}
                    aria-hidden="true"
                >
                    <FilmsSearchInput
                        className={cls.inputSearch}
                        onChangeInput={onChangeInput}
                    />
                    <button
                        className={cls.modalClose}
                        onClick={closeModalHandler}
                        type="button"
                    >
                        X
                    </button>
                </div>
                {
                    isFetching ? <LoaderPage />
                        : searchInput && (
                            <Container>
                                <FilmsGrid films={data} />
                            </Container>
                        )
                }
            </div>
        </Portal>
    );
});