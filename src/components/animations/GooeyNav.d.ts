export interface GooeyNavItem {
  label: string;
  href?: string;
  id?: string;
}

export interface GooeyNavProps {
  items?: GooeyNavItem[];
  animationTime?: number;
  particleCount?: number;
  particleDistances?: [number, number];
  particleR?: number;
  timeVariance?: number;
  colors?: number[];
  initialActiveIndex?: number;
  activeIndex?: number;
  onItemClick?: (item: GooeyNavItem, index: number) => void;
}

declare function GooeyNav(props: GooeyNavProps): JSX.Element;
export default GooeyNav;
