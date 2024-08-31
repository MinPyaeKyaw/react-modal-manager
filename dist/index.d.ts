import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode, CSSProperties } from 'react';

type ModalProps = {
    content: ReactNode;
    backdropOpacity?: number;
    backdropColor?: string;
    backdropPadding?: string | number;
    fullscreen?: boolean;
    position?: ModalContentPosition;
    hideOnClickBackDrop?: boolean;
    animationType?: AnimationType;
};
type ModalState = {
    id: string;
    props: ModalProps;
    backDropStyle?: CSSProperties;
    modalContainerStyle?: CSSProperties;
    modalContentStyle?: CSSProperties;
    hideOnClickBackDrop?: boolean;
    animationClass: {
        enter: string;
        exit: string;
    };
};
type AnimationType = "default" | "fade" | "zoom" | "slide-from-top" | "slide-from-bottom" | "slide-from-right" | "slide-from-left";
type ModalContentPosition = "center" | "center-left" | "center-right" | "top-center" | "top-left" | "top-right" | "bottom-center" | "bottom-left" | "bottom-right";
type ModalContextType = {
    modals: ModalState[];
    open: (id: string, props: ModalProps) => void;
    close: (id: string) => void;
    closeAll: () => void;
};
interface Props {
    children: ReactNode;
}
declare const ModalProvider: ({ children }: Props) => react_jsx_runtime.JSX.Element;
declare const useModal: () => ModalContextType;

export { ModalProvider, useModal };
