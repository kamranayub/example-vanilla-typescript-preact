// Since we are not leveraging a bundler or script loader
// we can't use ES module imports, so we use a reference
// comment. See: http://www.typescriptlang.org/docs/handbook/triple-slash-directives.html

//
// Types references
//
/// <reference types="preact" />

//
// Project references
//
/// <reference path="App.tsx" />

// Render root node
preact.render(<App />, document.getElementById("root"));