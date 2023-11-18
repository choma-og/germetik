import { resolve } from 'node:path';
import { defineConfig } from 'vite';
// import imagemin from 'unplugin-imagemin/vite';
import squooshPlugin from 'vite-plugin-squoosh';
import autoprefixer from 'autoprefixer';
import browserslist from 'browserslist';
import handlebars from 'vite-plugin-handlebars';
import zipPack from "vite-plugin-zip-pack";
import HandlebarUpdate from "./src/js/handlebarUpdate";


const pageData = {
  "index.html": {
    isHome: true,
  },
  "/src/pages/favor-coating.html": {
    isHome: false,
  },
  "/src/pages/fabrication.html": {
    isHome: false,
  },
  "/src/pages/favor-compounds.html": {
    isHome: false,
  },
  "/src/pages/favor-injection.html": {
    isHome: false,
  },
  "/src/pages/favor-shotcrete.html": {
    isHome: false,
  },
  "/src/pages/favor-strengthening.html": {
    isHome: false,
  },
  "/src/pages/favor.html": {
    isHome: false,
  },
  "/src/pages/lenti-okonnie.html": {
    isHome: false,
  },
  "/src/pages/maps.html": {
    isHome: false,
  },
  "/src/pages/product-card.html": {
    isHome: false,
  },
  "/src/pages/product-list-germetik.html": {
    isHome: false,
  },
  "/src/pages/product-list.html": {
    isHome: false,
  },
  "/src/pages/product.html": {
    isHome: false,
  },
  "/src/pages/section-about.html": {
    isHome: false,
  },
};

// @see https://github.com/vitejs/vite/issues/5815
global.navigator = undefined

export default defineConfig({
  
  resolve: {
    alias: {
      '@' : resolve(__dirname, 'src'),
    },
  },
  server: {
    hmr: true,
    open: true,
    host: true,
    port: 8888,
  },
    base: '/germetik/',
  // root: "src",
  // publicDir: "public",
  build: {
    // outDir: "dist",
    emptyOutDir: true,
    cssCodeSplit: false,
    minify: true,

    rollupOptions: {
        input : {
          index: resolve(__dirname, "index.html"),
          favorcoating: resolve(__dirname, "src", "pages", "favor-coating.html"),
          fabrication: resolve(__dirname, "src", "pages", "fabrication.html"),
          favorcompounds: resolve(__dirname, "src", "pages", "favor-compounds.html"),
          favorinjection: resolve(__dirname, "src", "pages", "favor-injection.html"),
          favorshotcrete: resolve(__dirname, "src", "pages", "favor-shotcrete.html"),
          favorstrengthening: resolve(__dirname, "src", "pages", "favor-strengthening.html"),
          favor: resolve(__dirname, "src", "pages", "favor.html"),
          lentiokonnie: resolve(__dirname, "src", "pages", "lenti-okonnie.html"),
          maps: resolve(__dirname, "src", "pages", "maps.html"),
          productcard: resolve(__dirname, "src", "pages", "product-card.html"),
          productlistgermetik: resolve(__dirname, "src", "pages", "product-list-germetik.html"),
          productlist: resolve(__dirname, "src", "pages", "product-list.html"),
          product: resolve(__dirname, "src", "pages", "product.html"),
          sectionabout: resolve(__dirname, "src", "pages", "section-about.html"),
        }
    }
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer(
          {
            overrideBrowserslist: browserslist(),
          }
        )
        // Другие плагины postcss
      ],
    },
    modules : true,
    preprocessorOptions: {
      scss: {
        includePaths: ['node_modules']
      }
    }
  },
  plugins: [
    HandlebarUpdate(),
    squooshPlugin({
      // Specify codec options.
      codecs: {
          jpg: {
            quality: 85,
          },
          gif: {
            quality: 90,
          },
      },
      exclude: /.(wp2|webp)$/,
      encodeTo: [
        { from: /.png$/, to: 'webp' },
        { from: /.jpeg$/, to: 'webp' },
        { from: /.jpg$/, to: 'webp' },
        { from: /.gif$/, to: 'webp' },
      ],
  }),
    handlebars({
      partialDirectory: resolve(__dirname, "src", "partials"),
      context(pagePath) {
        return pageData[pagePath];
      },
      reloadOnPartialChange: true,
    }),
    zipPack({
      outFileName: `choma__project.zip`
    }),
  ],
})