Example vanilla TypeScript project with no loaders/bundlers. 

## Run

    npm install
    npm run build
    npm start

## Notes

Since we aren't using a module loader, we need to leverage the "triple-slash directives" to tell the compiler what order and what files we need to compile as well as what types to reference for declarations (like for Preact).

We also need to tell TS what "JSX factory" method to use since by default it'll be React. From the Preact docs, it should be `preact.h`.