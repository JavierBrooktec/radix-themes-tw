// for reference:
// https://tailwindcss.com/docs/theme#default-theme-variable-reference

const radixColors = [
  "tomato",
  "red",
  "ruby",
  "crimson",
  "pink",
  "plum",
  "purple",
  "violet",
  "iris",
  "indigo",
  "blue",
  "cyan",
  "teal",
  "jade",
  "green",
  "grass",
  "bronze",
  "gold",
  "brown",
  "orange",
  "amber",
  "yellow",
  "lime",
  "mint",
  "sky",
];

const radixGrayColors = ["gray", "mauve", "slate", "sage", "olive", "sand"];

// all this colors follow same structure
const allColors = ["accent", ...new Set([...radixColors, ...radixGrayColors])];

export function generateTheme() {
  return `
/** This file is autogenerated by the script. Do not edit it manually. */

@import "tailwindcss/base";
@import '@radix-ui/themes/styles.css';

@theme inline {
  /* colors - other */
  --color-overlay: var(--color-overlay);
  --color-panel: var(--color-panel);
  --color-panel-solid: var(--color-panel-solid);
  --color-panel-translucent: var(--color-panel-translucent);
  --color-transparent: transparent;

  --color-whiteA-1: var(--white-a1);
  --color-whiteA-2: var(--white-a2);
  --color-whiteA-3: var(--white-a3);
  --color-whiteA-4: var(--white-a4);
  --color-whiteA-5: var(--white-a5);
  --color-whiteA-6: var(--white-a6);
  --color-whiteA-7: var(--white-a7);
  --color-whiteA-8: var(--white-a8);
  --color-whiteA-9: var(--white-a9);
  --color-whiteA-10: var(--white-a10);
  --color-whiteA-11: var(--white-a11);
  --color-whiteA-12: var(--white-a12);

  --color-blackA-1: var(--black-a1);
  --color-blackA-2: var(--black-a2);
  --color-blackA-3: var(--black-a3);
  --color-blackA-4: var(--black-a4);
  --color-blackA-5: var(--black-a5);
  --color-blackA-6: var(--black-a6);
  --color-blackA-7: var(--black-a7);
  --color-blackA-8: var(--black-a8);
  --color-blackA-9: var(--black-a9);
  --color-blackA-10: var(--black-a10);
  --color-blackA-11: var(--black-a11);
  --color-blackA-12: var(--black-a12);

  /* spacing */
  --spacing-rx-1: var(--space-1);
  --spacing-rx-2: var(--space-2);
  --spacing-rx-3: var(--space-3);
  --spacing-rx-4: var(--space-4);
  --spacing-rx-5: var(--space-5);
  --spacing-rx-6: var(--space-6);
  --spacing-rx-7: var(--space-7);
  --spacing-rx-8: var(--space-8);
  --spacing-rx-9: var(--space-9);

  /* font size */
  --text-1: var(--font-size-1);
  --text-2: var(--font-size-2);
  --text-3: var(--font-size-3);
  --text-4: var(--font-size-4);
  --text-5: var(--font-size-5);
  --text-6: var(--font-size-6);
  --text-7: var(--font-size-7);
  --text-8: var(--font-size-8);
  --text-9: var(--font-size-9);

  /* line height */
  --text-1--line-height: var(--line-height-1);
  --text-2--line-height: var(--line-height-2);
  --text-3--line-height: var(--line-height-3);
  --text-4--line-height: var(--line-height-4);
  --text-5--line-height: var(--line-height-5);
  --text-6--line-height: var(--line-height-6);
  --text-7--line-height: var(--line-height-7);
  --text-8--line-height: var(--line-height-8);
  --text-9--line-height: var(--line-height-9);

  --leading-1: var(--line-height-1);
  --leading-2: var(--line-height-2);
  --leading-3: var(--line-height-3);
  --leading-4: var(--line-height-4);
  --leading-5: var(--line-height-5);
  --leading-6: var(--line-height-6);
  --leading-7: var(--line-height-7);
  --leading-8: var(--line-height-8);
  --leading-9: var(--line-height-9);
  
  /* letter spacing */
  --text-1--letter-spacing: var(--letter-spacing-1);
  --text-2--letter-spacing: var(--letter-spacing-2);
  --text-3--letter-spacing: var(--letter-spacing-3);
  --text-4--letter-spacing: var(--letter-spacing-4);
  --text-5--letter-spacing: var(--letter-spacing-5);
  --text-6--letter-spacing: var(--letter-spacing-6);
  --text-7--letter-spacing: var(--letter-spacing-7);
  --text-8--letter-spacing: var(--letter-spacing-8);
  --text-9--letter-spacing: var(--letter-spacing-9);
  
  --tracking-1: var(--letter-spacing-1);
  --tracking-2: var(--letter-spacing-2);
  --tracking-3: var(--letter-spacing-3);
  --tracking-4: var(--letter-spacing-4);
  --tracking-5: var(--letter-spacing-5);
  --tracking-6: var(--letter-spacing-6);
  --tracking-7: var(--letter-spacing-7);
  --tracking-8: var(--letter-spacing-8);
  --tracking-9: var(--letter-spacing-9);

  /* font weight */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-normal: 400;
  --font-weight-normal: 500;
  --font-weight-medium: 700;

  /* border radius */
  --radius-1: var(--radius-1);
  --radius-2: var(--radius-2);
  --radius-3: var(--radius-3);
  --radius-4: var(--radius-4);
  --radius-5: var(--radius-5);
  --radius-6: var(--radius-6);
  --radius-item: max(var(--radius-2),var(--radius-full));
  --radius-full: 9999px;

  /* shadow */
  --shadow-1: var(--shadow-1);
  --shadow-2: var(--shadow-2);
  --shadow-3: var(--shadow-3);
  --shadow-4: var(--shadow-4);
  --shadow-5: var(--shadow-5);
  --shadow-6: var(--shadow-6);


  /* colors - all */
  ${allColors
    ?.map((key) =>
      `
  --color-${key}-1: var(--${key}-1);
  --color-${key}-2: var(--${key}-2);
  --color-${key}-3: var(--${key}-3);
  --color-${key}-4: var(--${key}-4);
  --color-${key}-5: var(--${key}-5);
  --color-${key}-6: var(--${key}-6);
  --color-${key}-7: var(--${key}-7);
  --color-${key}-8: var(--${key}-8);
  --color-${key}-9: var(--${key}-9);
  --color-${key}-10: var(--${key}-10);
  --color-${key}-11: var(--${key}-11);
  --color-${key}-12: var(--${key}-12);
  --color-${key}A-1: var(--${key}-a1);
  --color-${key}A-2: var(--${key}-a2);
  --color-${key}A-3: var(--${key}-a3);
  --color-${key}A-4: var(--${key}-a4);
  --color-${key}A-5: var(--${key}-a5);
  --color-${key}A-6: var(--${key}-a6);
  --color-${key}A-7: var(--${key}-a7);
  --color-${key}A-8: var(--${key}-a8);
  --color-${key}A-9: var(--${key}-a9);
  --color-${key}A-10: var(--${key}-a10);
  --color-${key}A-11: var(--${key}-a11);
  --color-${key}A-12: var(--${key}-a12);
  --color-${key}-contrast: var(--${key}-contrast);
  --color-${key}-surface: var(--${key}-surface);
  --color-${key}-track: var(--${key}-track);
  --color-${key}-indicator: var(--${key}-indicator);
  `.trimEnd()
    )
    .join("\n")}

  /* breakpoints */

  --breakpoint-xs: 520px;
  --breakpoint-sm: 768px;
  --breakpoint-md: 1024px;
  --breakpoint-lg: 1280px;
  --breakpoint-xl: 1640px;
}
`.trim();
}
