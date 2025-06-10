import { FilmsSearchInput } from 'features/GetFilms';
import {
    KeyboardEvent, memo,
    useCallback,
    useEffect,
} from 'react';
import { useAppDispatch, useAppSelector } from 'shared/hooks/storeHooks/storeHooks';
import { cancelEventBubbling } from 'shared/lib/cancelEventBubbling';
import { classNames } from 'shared/lib/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
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

    const dispatch = useAppDispatch();
    // const data = useAppSelector(getFilmsSearchResponse);
    // const searchInput = useAppSelector(getFilmSearchValue);
    // const isFetching = useAppSelector(getFilmsSearchIsFetching);
    // const isSuccess = useAppSelector(getFilmsSearchIsSuccess);

    useEffect(() => {
        if (stateModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [stateModal]);

    const closeModalHandler = useCallback(() => {
        // dispatch(filmSearchActions.setIsSuccess(false));
        closeModal?.();
    }, [closeModal]);

    const onKeyDownHandler = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Escape') closeModal?.();
    }, [closeModal]);

    // function getFilmsGrid() {
    //     if (
    //         !Boolean(data?.docs?.length)
    //         && !isFetching
    //         && isSuccess
    //     ) {
    //         return <div className={cls.filmsNotFound}>Фильмы не найдены :(</div>;
    //     }

    //     return searchInput
    //         ? (
    //             <Container>
    //                 <FilmsGrid films={data} />
    //             </Container>
    //         )
    //         : <div />;
    // }

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
                {/* {
                    isFetching
                        ? <LoaderPage />
                        : getFilmsGrid()
                } */}
            </div>
        </Portal>
    );
});
