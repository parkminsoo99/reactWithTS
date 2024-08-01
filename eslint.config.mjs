import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginStorybook from "eslint-plugin-storybook";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginStorybook.configs.recommended, // Storybook 플러그인 추가
  {
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/prop-types": "off", // prop-types 사용 비활성화
      "no-unused-vars": "warn", // 사용되지 않는 변수 경고
      "@typescript-eslint/no-unused-vars": "warn", // 사용되지 않는 변수 경고 (TypeScript용)
      "react/react-in-jsx-scope": "off", // JSX 사용시 React 필요 비활성화 (Next.js 등의 경우)
    },
  },
];
