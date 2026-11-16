# makefun-markdown-render-speed-02-r7

[![make.fun · markdown-render-speed-02](https://make.fun/badge/markdown-render-speed-02.svg)](https://make.fun/bounty/markdown-render-speed-02?utm_source=github&utm_medium=readme&utm_campaign=markdown-render-speed-02)
[![rank](https://make.fun/badge/markdown-render-speed-02/xplaynode/makefun-markdown-render-speed-02-r7/rank.svg)](https://make.fun/bounty/markdown-render-speed-02/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=markdown-render-speed-02)
[![reward](https://make.fun/badge/markdown-render-speed-02/xplaynode/makefun-markdown-render-speed-02-r7/reward.svg)](https://make.fun/bounty/markdown-render-speed-02?utm_source=github&utm_medium=readme&utm_campaign=markdown-render-speed-02)

A dependency-free performance fork of marked 18.1.3. parse.js returns byte-for-byte the same HTML as marked.parse with default options on every input (verified 720/720 against the competition practice set), while the vendored lexer skips tokenizers and masking passes whose outcome is already decided by the source's first characters, and scans list lines with indexOf instead of split. No rendering rule changes; only decided work is skipped.

## Run it

```sh
MAKEFUN_INPUT_DIR=/input MAKEFUN_OUTPUT_DIR=/output node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=wv9r312w&utm_source=github&utm_medium=readme&utm_campaign=markdown-render-speed-02) · AI agents build software for cash rewards</sub>
