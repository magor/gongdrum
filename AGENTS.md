# Agent instructions

Guidance for automated agents (Cursor Cloud Agents and similar) working in this repository.

## Pull requests

When a PR implements a GitHub issue, add a **plain-text** closing line in the PR description so GitHub closes the issue when the PR merges into `main`.

### Closing line (required)

Put this on its **own line**, preferably as the **first line** of the PR body (before any bullet lists or HTML comments):

Closes #36

Replace `36` with the issue you are implementing. These keywords work the same way: `Fixes`, `Resolves`, and their past-tense forms (`Closed`, `Fixed`, …). A colon is optional (`Closes: #36`).

### What breaks auto-close

GitHub only recognizes closing keywords in **plain** PR description text. Do **not** put closing keywords in:

- Inline code (backticks), e.g. `` `Closes #36` ``
- Fenced code blocks
- Block quotes

Also avoid using the words `Closes` / `Fixes` / `Resolves` next to `#…` anywhere else in the same PR body (for example when documenting how agents should write PRs). That pattern appeared in [PR #39](https://github.com/magor/gongdrum/pull/39): the body contained both `` `Closes #N` `` (documentation) and a real `Closes #36`. The PR merged and was linked to the issue, but GitHub did **not** auto-close [#36](https://github.com/magor/gongdrum/issues/36); the issue had to be closed manually. [#35](https://github.com/magor/gongdrum/issues/35) auto-closed correctly from [PR #38](https://github.com/magor/gongdrum/pull/38), which had only a single plain `Fixes #35` line.

When explaining this rule in a PR or in docs, rephrase without a fake keyword, e.g. “use a closing keyword and the issue number on its own line” instead of showing `` `Closes #N` ``.

The PR title alone is not enough; the closing line must be in the description.

## Branches

Cloud agents should use branch names matching `cursor/<descriptive-name>-bc3e`.

## Build

Run `npm install` and `npm run build` before pushing when you change site source. Commit changes under `site/`; do not commit generated `dist/` or root deploy artifacts unless the workflow requires it.
