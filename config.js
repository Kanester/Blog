System.config({
  transpiler: 'ts',
  typescriptOptions: {
    target: "es2023", 
    module: "system", 
    moduleResolution: "node", 
    sourceMap: false, 
    emitDecorationMetadata: true, 
    experimentalDecoration: true, 
    libs: ["es2023", "dom"], 
    noImplicitAny: true, 
    supressImplicitAnyIndexErrors: true
  },
  packages: {
    ".": {
      main: './main.ts',
      defaultExtension: 'ts'
    }
  },
  meta: {
    'typescript': { 'exports': 'ts' }
  },
  paths: {
    'npm:': 'https://unpkg.com/'
  },
  map: {
    'ts': `npm:plugin-typescript@8.0.0/lib/plugin.js`,
    'typescript': `npm:typescript@5.6.2/lib/typescript.js`
  }
});

System.import('./main')
  .catch(console.error.bind(console));
