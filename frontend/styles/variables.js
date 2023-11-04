// COLORS
//
export const black = "#000000";
export const dark = "#333";
export const primary = "#56FFFE";
export const secondary = "#DEFFFE";

export const headerHeight = "132px";

// MEDIA QUERIES
//
const deviceSize = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS_min: `(min-width: ${deviceSize.mobileS})`,
  mobileM_min: `(min-width: ${deviceSize.mobileM})`,
  mobileL_min: `(min-width: ${deviceSize.mobileL})`,
  tablet_min: `(min-width: ${deviceSize.tablet})`,
  laptop_min: `(min-width: ${deviceSize.laptop})`,
  laptopL_min: `(min-width: ${deviceSize.laptopL})`,
  desktop_min: `(min-width: ${deviceSize.desktop})`,
  desktopL_min: `(min-width: ${deviceSize.desktop})`,
  mobileS_max: `(max-width: ${deviceSize.mobileS})`,
  mobileM_max: `(max-width: ${deviceSize.mobileM})`,
  mobileL_max: `(max-width: ${deviceSize.mobileL})`,
  tablet_max: `(max-width: ${deviceSize.tablet})`,
  laptop_max: `(max-width: ${deviceSize.laptop})`,
  laptopL_max: `(max-width: ${deviceSize.laptopL})`,
  desktop_max: `(max-width: ${deviceSize.desktop})`,
  desktopL_max: `(max-width: ${deviceSize.desktop})`,
};

// FONT SETTINGS
//
export const fontDefault = `"Roboto", "Fira Sans", "Helvetica Neue", sans-serif`;

// SPACING
//
export const marginXS = "8px";
export const marginS = "16px";
export const marginM = "32px";
export const marginL = "40px";
export const marginXL = "64px";
export const marginXXL = "112px";
export const marginXXXL = "128px";

// ANIMATION STYLES
export const cubicBezier = "cubic-bezier(0.79, 0.14, 0.15, 0.86)";

// SHADOWS
//
export const cardShadowXSmall = `0 2px 5px -1px rgba(50, 50, 93, 0.25),
  0 1px 3px -1px rgba(0, 0, 0, 0.3)`;
export const cardShadowSmall = `0 6px 12px -2px rgba(50, 50, 93, 0.25),
  0 3px 7px -3px rgba(0, 0, 0, 0.3)`;
export const cardShadowMedium = `0 13px 27px -5px rgba(50, 50, 93, 0.25),
  0 8px 16px -8px rgba(0, 0, 0, 0.3)`;
export const cardShadowLarge = `0 30px 60px -12px rgba(50, 50, 93, 0.25),
  0 18px 36px -18px rgba(0, 0, 0, 0.3)`;
export const cardShadowLargeInset = `inset 0 30px 60px -12px rgba(50, 50, 93, 0.25),
  inset 0 18px 36px -18px rgba(0, 0, 0, 0.3)`;
export const cardShadowXLarge = `0 50px 100px -20px rgba(50, 50, 93, 0.25),
  0 30px 60px -30px rgba(0, 0, 0, 0.3)`;
