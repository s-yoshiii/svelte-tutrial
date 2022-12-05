import svelte from "rollup-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";

export default {
  plugins: [
    svelte({
      css: (css) => {
        css.write("bundle.css");
      },
      preprocess: sveltePreprocess({
        style: sass({}, { name: "scss" }),
        postcss: {
          plugins: [require("autoprefixer")({ browsers: "last 2 versions" })],
        },
      }),
    }),
  ],
};
