import { isRejectedWithValue, Middleware } from '@reduxjs/toolkit';
import { Bounce, toast, ToastOptions } from 'react-toastify';

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

const endpointsMap = new Map();

export const errorMiddleware: Middleware = (store) => (next) => (action: any) => {
    if (isRejectedWithValue(action)) {
        const endpoint = action?.meta?.arg?.endpointName;
        const message = action?.payload?.data?.message;

        if (!endpointsMap.get(endpoint)) {
            endpointsMap.set(endpoint, message);

            toast.error(endpointsMap.get(endpoint), toastCfg);
        }
    }

    return next(action);
};
