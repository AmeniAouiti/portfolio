import type { HTMLAttributes } from "react";

export interface ThreadsProps extends HTMLAttributes<HTMLDivElement> {
  color?: [number, number, number];
  amplitude?: number;
  distance?: number;
  enableMouseInteraction?: boolean;
}

declare function Threads(props: ThreadsProps): JSX.Element;
export default Threads;
