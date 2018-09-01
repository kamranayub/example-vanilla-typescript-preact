Example vanilla TypeScript project with no loaders/bundlers. 

## Run

    npm install
    npm run build
    npm start

## Notes

Since we aren't using a module loader, we need to leverage the "triple-slash directives" to tell the compiler what order and what files we need to compile as well as what types to reference for declarations (like for Preact).