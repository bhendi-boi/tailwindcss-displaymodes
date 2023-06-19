# tailwindcss-displaymodes

The **tailwindcss-displaymodes** plugin is an extension for Tailwind CSS that provides additional variants to apply specific classes when a website is being viewed in different display modes. This guide will walk you through the installation and usage of the plugin.

## Install the plugin from npm:

```powershell
$ npm install tailwindcss-displaymodes
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  // ...
  plugins: [
    // ...
    require('tailwindcss-displaymodes'),
  ],
};
```

## Usage

Once you have installed and enabled the **tailwindcss-displaymodes** plugin, you can start using the additional variants it provides.

The plugin introduces the following display mode variants:

- standalone
- minimal-ui
- browser
- fullscreen

To apply classes specific to a particular display mode, use the format `displaymode:class`. For example, to hide an element when the website is viewed in "standalone" mode, you can use the `standalone:hidden` class.

Here's an example usage:

```jsx
<div class="standalone:hidden">
  This content will be hidden in standalone mode.
</div>
```

You can combine the display mode variants with other Tailwind CSS utility classes to achieve the desired styling and behavior.

## Supported display modes

The **tailwindcss-displaymodes** plugin supports the following display modes:

- **Standalone** : When the website is launched as a standalone web app.
- **Minimal-ui** : When the browser UI is minimized, typically used on mobile devices.
- **Browser** : When the website is viewed in a regular browser mode.
- **Fullscreen** : When the website is displayed in fullscreen mode.

For a detailed understanding of the functionality of each display mode, you can refer to the documentation available on [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/display-mode).

Please note that the availability of display modes may vary depending on the device and browser used.

## Conclusion

Congratulations! You have successfully installed and configured the **tailwindcss-displaymodes** plugin. You can now utilize the additional display mode variants to enhance the styling and behavior of your Tailwind CSS project.

## License

tailwindcss-displaymodes is licensed under the MIT License.

## Credits

Created with [create-tailwind-plugin](https://github.com/Landish/create-tailwind-plugin).
