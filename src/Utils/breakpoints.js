// src/utils/breakpoints.js
export const breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1440,
  xxl: 1920,
};

export const getBreakpoint = (width) => {
  if (width >= breakpoints.xl) return "xl";
  if (width >= breakpoints.lg) return "lg";
  if (width >= breakpoints.md) return "md";
  if (width >= breakpoints.sm) return "sm";
  if (width >= breakpoints.xs) return "xs";
  if (width >= breakpoints.xxl) return "xxl";
};
