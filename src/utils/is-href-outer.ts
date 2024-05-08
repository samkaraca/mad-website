export const isHrefOuter = (href: string): boolean => {
  try {
    new URL(href);
    return true;
  } catch (error) {
    return false;
  }
};
