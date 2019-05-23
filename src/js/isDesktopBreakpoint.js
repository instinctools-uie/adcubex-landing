export default function isDesktopBreakpoint(currentBreakpoint) {
  return document.documentElement.clientWidth > currentBreakpoint;
}
