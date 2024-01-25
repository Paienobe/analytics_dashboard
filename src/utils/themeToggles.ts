export const toggleTheme = (isDark: boolean) => {
  const rootElement = document.querySelector(":root") as HTMLElement;

  const darkThemeMap: { [x: string]: string } = {
    "--bg-gray": "#262626",
    "--text-color": "#fff",
    "--tile-background": "#171717",
    "--alternate-bg": "#262626",
    "--border-color": "#ebecf23d",
  };

  for (const property in darkThemeMap) {
    if (darkThemeMap[property] !== undefined) {
      rootElement.style.setProperty(property, darkThemeMap[property]);
    }

    if (!isDark) {
      rootElement.style.setProperty(property, "");
    }
  }
};
