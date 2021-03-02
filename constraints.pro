gen_enforced_dependency(WorkspaceCwd, DependencyIdent, null, dependencies) :-
  workspace_has_dependency(WorkspaceCwd, DependencyIdent, _, dependencies),
  DependencyIdent \= 'vue'.

gen_enforced_dependency(WorkspaceCwd, DependencyIdent, null, devDependencies) :-
  workspace_has_dependency(WorkspaceCwd, DependencyIdent, _, devDependencies),
  DependencyIdent \= '@vitejs/plugin-vue', 
  DependencyIdent \= '@vue/compiler-sfc', 
  DependencyIdent \= '@yarnpkg/pnpify', 
  DependencyIdent \= 'husky', 
  DependencyIdent \= 'typescript', 
  DependencyIdent \= 'vite'.