import { isRejectedWithValue, Middleware } from '@reduxjs/toolkit';
import {
    Bounce, toast, ToastOptions,
} from 'react-toastify';

const DELAY = 5000;

const toastCfg: ToastOptions<unknown> | undefined = {
    position: 'top-right',
    autoClose: DELAY,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
    transition: Bounce,
};

export const errorMiddleware: Middleware = (store) => (next) => (action: any) => {
    if (isRejectedWithValue(action)) {
        const endpoint = action?.meta?.arg?.endpointName;
        const message = action?.payload?.data?.message;

        toastCfg.toastId = endpoint;

        if (toastCfg.toastId && !toast.isActive(toastCfg.toastId)) {
            toast.error(message, toastCfg);
        }
    }

    return next(action);
};
