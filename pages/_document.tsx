import { defaultSettings } from "@constants/default-settings";
import { localStorageKeys } from "@constants/local-storage-keys";
import { useLocalStorage } from "@hooks/use-local-storage";
import classNames from "classnames";

import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  const [theme, _] = useLocalStorage<string>(
    localStorageKeys.THEME,
    defaultSettings.themeClassName
  );

  return (
    <Html>
      <Head />
      <body className={classNames(theme, "bg-primary-50")}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
