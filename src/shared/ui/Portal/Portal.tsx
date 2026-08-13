import {ReactNode} from "react";
import {createPortal} from "react-dom";

interface PortalProps {
 container?: HTMLElement;
 children: ReactNode
}

export const Portal = ({ container = document.body, children }: PortalProps) => {
  return createPortal(children, container)
};
