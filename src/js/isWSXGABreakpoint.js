import { WSGA_BREAKPOINT } from './constants';

export default function isWSXGABreakpoint() {
  return document.documentElement.clientWidth > WSGA_BREAKPOINT;
}
