import { merge } from 'lodash';
import { cssMatcher } from 'jest-matcher-css';
import postcss from 'postcss';
import tailwindcss from 'tailwindcss';
import pwaPlugin from './index';

expect.extend({
  toMatchCss: cssMatcher,
});

function generatePluginCss(overrides) {
  const config = {
    theme: {
      // Default options for your plugin.
      displaymodes: {
        YOUR_PLUGIN_CUSTOM_OPTION: false,
      },
    },
    variants: {
      // Default variants for your plugin.
      displaymodes: [],
    },
    corePlugins: false,
    plugins: [pwaPlugin],
  };

  return postcss(tailwindcss(merge(config, overrides)))
    .process('@tailwind utilities', {
      from: undefined,
    })
    .then(({ css }) => css);
}

test('should', () => {
  const css = generatePluginCss();
  console.log(css);
  return true;
});
