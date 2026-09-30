# Agent instructions

Guidance for automated agents (Cursor Cloud Agents and similar) working in this repository.

## Pull requests

When a PR implements a GitHub issue, include a **closing keyword** and the issue number in the PR description so the issue is closed automatically when the PR merges into the default branch.

Use one of these forms on its own line (replace `N` with the issue number):

```
Closes #N
```

Other valid keywords: `Fixes #N`, `Resolves #N`.

Example for issue 36:

```
Closes #36
```

Do not rely only on the PR title for linking; put the closing reference in the body.

## Branches

Cloud agents should use branch names matching `cursor/<descriptive-name>-bc3e`.

## Build

Run `npm install` and `npm run build` before pushing when you change site source. Commit changes under `site/`; do not commit generated `dist/` or root deploy artifacts unless the workflow requires it.
