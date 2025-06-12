import {
    filmResponseServerType, FilmsSearchInput,
} from 'features/GetFilms';
import {
    KeyboardEvent, memo,
    useCallback,
    useEffect,
} from 'react';
import { cancelEventBubbling } from 'shared/lib/cancelEventBubbling';
import { classNames } from 'shared/lib/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import LoaderPage from 'shared/ui/LoaderPage/LoaderPage';
import cls from './FilmsSearchModalWindow.module.scss';
import { FilmsSearchModalGrid } from '../FilmsSearchModalGrid/FilmsSearchModalGrid';

interface FilmsSearchModalWindowType{
    data: filmResponseServerType;
    isLoading: boolean;
    className?: string;
    stateModal: boolean;
    closeModal?: () => void;
    filmSearchInput: string;
    onChangeFilmSearchInput?: (...args:any[]) => void
}

export const FilmsSearchModalWindow = memo((props: FilmsSearchModalWindowType) => {
    const {
        data,
        isLoading,
        className,
        stateModal,
        closeModal,
        filmSearchInput,
        onChangeFilmSearchInput,
    } = props;

    type Mods = Record<string, boolean>

    const mods: Mods = {
        [cls.show!]: stateModal,
    };

    const closeModalHandler = useCallback(() => {
        closeModal?.();
    }, [closeModal]);

    const onKeyDownHandler = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Escape') closeModal?.();
    }, [closeModal]);

    const loader = isLoading && <LoaderPage />;
    const hasData = data?.docs && (data.docs.length > 0);
    const showFilmsNotFound = !isLoading && !hasData && filmSearchInput;

    useEffect(() => {
        if (stateModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [stateModal]);

    console.log(data);

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
                        filmSearchInput={filmSearchInput}
                        onChangeFilmSearchInput={onChangeFilmSearchInput}
                    />
                    <button
                        className={cls.modalClose}
                        onClick={closeModalHandler}
                        type="button"
                    >
                        X
                    </button>
                </div>
                { loader }
                { !isLoading && hasData && <FilmsSearchModalGrid films={data} /> }
                { showFilmsNotFound && <div className={cls.filmsNotFound}>Фильмы не найдены :(</div> }
            </div>
        </Portal>
    );
});
