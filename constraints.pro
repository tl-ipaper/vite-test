gen_enforced_dependency(WorkspaceCwd, DependencyIdent, null, dependencies) :-
  workspace_has_dependency(WorkspaceCwd, DependencyIdent, _, dependencies),
  DependencyIdent \= 'vue'.

gen_enforced_dependency(WorkspaceCwd, DependencyIdent, null, devDependencies) :-
  workspace_has_dependency(WorkspaceCwd, DependencyIdent, _, devDependencies),
  DependencyIdent \= '@babel/core', 
  DependencyIdent \= '@types/jest', 
  DependencyIdent \= '@vitejs/plugin-vue', 
  DependencyIdent \= '@vue/compiler-sfc', 
  DependencyIdent \= '@vue/test-utils', 
  DependencyIdent \= '@yarnpkg/pnpify',
  DependencyIdent \= 'babel-jest', 
  DependencyIdent \= 'eslint',
  DependencyIdent \= 'expect-playwright',
  DependencyIdent \= 'husky',
  DependencyIdent \= 'jest', 
  DependencyIdent \= 'jest-circus',
  DependencyIdent \= 'jest-playwright',
  DependencyIdent \= 'jest-playwright-preset',
  DependencyIdent \= 'jest-transform-stub', 
  DependencyIdent \= 'playwright',
  DependencyIdent \= 'playwright-chromium',
  DependencyIdent \= 'playwright-core',
  DependencyIdent \= 'prettier',
  DependencyIdent \= 'ts-jest', 
  DependencyIdent \= 'typescript', 
  DependencyIdent \= 'vite',
  DependencyIdent \= 'vue-jest'.