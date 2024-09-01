import { createPortal } from "react-dom";
import {
  cloneElement,
  createContext,
  CSSProperties,
  ReactElement,
  ReactNode,
  useContext,
  useState,
} from "react";
import "./modal.css";

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

type AnimationType =
  | "default"
  | "fade"
  | "zoom"
  | "slide-from-top"
  | "slide-from-bottom"
  | "slide-from-right"
  | "slide-from-left";

type ModalContentPosition =
  | "center"
  | "center-left"
  | "center-right"
  | "top-center"
  | "top-left"
  | "top-right"
  | "bottom-center"
  | "bottom-left"
  | "bottom-right";

type ModalContextType = {
  modals: ModalState[];
  open: (id: string, props: ModalProps) => void;
  close: (id: string) => void;
  closeAll: () => void;
};

type ProviderProps = {
  children: ReactNode;
  config?: Omit<ModalProps, "content">;
};

const ModalContext = createContext<ModalContextType>({
  modals: [],
  open: () => {},
  close: () => {},
  closeAll: () => {},
});

export const ModalProvider = ({ children, config }: ProviderProps) => {
  const [modals, setModals] = useState<ModalState[]>([]);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [closingId, setClosingId] = useState<string | null>(null);

  const generateFlexPosition = (
    position: ModalContentPosition
  ): {
    alignItems: string;
    justifyContent: string;
  } => {
    let alignItems = "center";
    let justifyContent = "center";

    switch (position) {
      case "center-right":
        alignItems = "center";
        justifyContent = "flex-end";
        break;
      case "center-left":
        alignItems = "center";
        justifyContent = "flex-start";
        break;
      case "top-left":
        alignItems = "flex-start";
        justifyContent = "flex-start";
        break;
      case "top-right":
        alignItems = "flex-start";
        justifyContent = "flex-end";
        break;
      case "top-center":
        alignItems = "flex-start";
        justifyContent = "center";
        break;
      case "bottom-left":
        alignItems = "flex-end";
        justifyContent = "flex-start";
        break;
      case "bottom-right":
        alignItems = "flex-end";
        justifyContent = "flex-end";
        break;
      case "bottom-center":
        alignItems = "flex-end";
        justifyContent = "center";
        break;
      default:
        alignItems = "center";
        justifyContent = "center";
    }

    return { justifyContent, alignItems };
  };

  const colorToRgba = (color: string, opacity: number) => {
    const canvas: HTMLCanvasElement = document.createElement("canvas");
    const context: CanvasRenderingContext2D | null = canvas.getContext("2d");

    if (context) {
      context.fillStyle = color;
      let hex = context.fillStyle;
      hex = hex.replace("#", "");

      if (hex) {
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
      }
    }

    return "rgba(0, 0, 0, 0.3)";
  };

  const generateBackDropStyle = ({
    bg = "black",
    opacity = 0.3,
  }: {
    bg?: string;
    opacity?: number;
  }) => {
    const styles: CSSProperties = {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 10000,
      display: "flex",
      background: colorToRgba(bg, opacity),
    };

    return styles;
  };

  const generateContainerStyle = ({
    position = "center",
    padding = "2%",
    fullscreen,
  }: {
    position?: ModalContentPosition;
    padding?: string | number;
    fullscreen?: boolean;
  }) => {
    const styles: CSSProperties = {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 10000,
      display: "flex",
      ...generateFlexPosition(position),
      ...(fullscreen ? { padding: 0 } : { padding: padding }),
    };

    return styles;
  };

  const generateModalContentStyle = ({
    fullscreen,
  }: {
    fullscreen: boolean;
  }) => {
    return {
      width: fullscreen ? "100vw" : "auto",
      height: fullscreen ? "100vh" : "auto",
      backgroundColor: "transparent",
    };
  };

  const generateAnimationClass = (animationType?: AnimationType) => {
    if (animationType) {
      return {
        enter: animationType,
        exit: animationType + "-exit",
      };
    }

    return {
      enter: "",
      exit: "",
    };
  };

  const open = (id: string, props: ModalProps) => {
    setIsClosing(false);
    document.body.style["overflow"] = "hidden";

    const modalProperties = { ...config, ...props };

    const backDropStyle = generateBackDropStyle({
      bg: modalProperties.backdropColor,
      opacity: modalProperties.backdropOpacity,
    });

    const modalContainerStyle = generateContainerStyle({
      position: modalProperties.position,
      fullscreen: modalProperties.fullscreen,
      padding: modalProperties.backdropPadding,
    });

    const modalContentStyle = generateModalContentStyle({
      fullscreen: modalProperties.fullscreen || false,
    });

    const animationClass = generateAnimationClass(
      modalProperties.animationType
    );

    setModals((prev) => [
      ...prev,
      {
        id,
        props: modalProperties,
        backDropStyle,
        modalContentStyle,
        modalContainerStyle,
        animationClass,
        hideOnClickBackDrop:
          props.hideOnClickBackDrop === undefined
            ? true
            : props.hideOnClickBackDrop,
      },
    ]);
  };

  const close = (id: string) => {
    setIsClosing(true);
    setClosingId(id);
    document.body.style["overflow"] = "auto";

    const modal = modals.find((m) => m.id === id);
    if (modal?.props.animationType) {
      setTimeout(() => {
        setModals((prev) => prev.filter((modal) => modal.id !== id));
      }, 300);
    } else {
      setModals((prev) => prev.filter((modal) => modal.id !== id));
    }
  };

  const closeAll = () => {
    setIsClosing(true);
    document.body.style["overflow"] = "auto";
    setModals([]);
  };

  return (
    <ModalContext.Provider value={{ modals, open, close, closeAll }}>
      {children}

      {createPortal(
        <div id="modal-root" style={{ position: "relative" }}>
          {modals.map((modal) => {
            const clonedContent = cloneElement(
              modal.props.content as ReactElement,
              {
                style: { ...modal.modalContentStyle },
              }
            );

            return (
              <div key={modal.id}>
                <div
                  className={
                    modal.props.animationType
                      ? isClosing
                        ? closingId === modal.id
                          ? "backdrop-exit"
                          : "backdrop"
                        : "backdrop"
                      : ""
                  }
                  style={modal.backDropStyle}
                ></div>

                <div
                  style={modal.modalContainerStyle}
                  onClick={() => {
                    if (modal.hideOnClickBackDrop) {
                      close(modal.id);
                    }
                  }}
                >
                  <div
                    className={
                      modal.props.animationType &&
                      isClosing &&
                      closingId === modal.id
                        ? modal.animationClass?.exit
                        : modal.animationClass?.enter
                    }
                    style={{ ...modal.modalContentStyle }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {clonedContent}
                  </div>
                </div>
              </div>
            );
          })}
        </div>,
        document.body
      )}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
