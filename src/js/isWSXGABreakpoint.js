import { WXGA_BREAKPOINT } from './constants';

export default function isWSXGABreakpoint() {
  return document.documentElement.clientWidth > WXGA_BREAKPOINT;
}
