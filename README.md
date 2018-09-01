Example vanilla TypeScript project with no loaders/bundlers. 

## Run

    npm install
    npm run build
    npm start

## Notes

Since we aren't using a module loader, we need to leverage the "triple-slash directives" to tell the compiler what order and what files we need to compile as well as what types to reference for declarations (like for Preact).

We also need to tell TS what "JSX factory" method to use since by default it'll be React. From the Preact docs, it should be `preact.h`.

To concatenate into a "bundle", we need to use `outFile` compiler option to combine output otherwise we'd need to add each file as a script reference in our `index.html` file.

If we could find a ES2015 module version of Preact, we could include it locally and then use Chrome 61+ support for native ES2015 modules (`"module": "es2015"`). We could also use ES2015 modules with this existing code but it would only work in very recent browser versions. With the current example, this could work in older browsers (for even older ones, we can change the `target` to `es5`).