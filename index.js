import plugin from 'tailwindcss/plugin';

const pwaPlugin = plugin(function ({ addVariant }) {
  addVariant('standalone', '@media all and (display-mode: standalone)');
  addVariant('fullscreen', '@media all and (display-mode: fullscreen)');
  addVariant('minimal-ui', '@media all and (display-mode: minimal-ui)');
  addVariant('browser', '@media all and (display-mode: browser)');
});

export default pwaPlugin;
