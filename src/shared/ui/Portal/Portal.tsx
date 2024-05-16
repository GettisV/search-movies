import { ReactElement, memo } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps{
    children: ReactElement,
    domElement: Element,
}

export const Portal = memo((props: PortalProps) => {
    const {
        children,
        domElement,
    } = props;

    return createPortal(children, domElement);
});
