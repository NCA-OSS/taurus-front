import { defaultSettings } from "@constants/default-settings";
import { localStorageKeys } from "@constants/local-storage-keys";
import { useLocalStorage } from "@hooks/use-local-storage";

import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  const [theme, _] = useLocalStorage<string>(
    localStorageKeys.THEME,
    defaultSettings.themeClassName
  );

  return (
    <Html>
      <Head />
      <body className={theme}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
