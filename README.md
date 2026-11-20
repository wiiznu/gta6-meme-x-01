# GTA VI: Take a Number

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/wiiznu/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/wiiznu/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

Entry for the [make.fun gta6-meme-x-01 bounty](https://make.fun/bounty/gta6-meme-x-01) — "Post a GTA 6 meme on X", $500 in USDC for the 50 best posts.

An original GTA VI launch-week meme for the make.fun competition. The scene puts Jason and Lucia in the Vice City Driver Services queue after thirteen years of waiting; the make.fun ghost clerk still tells them to take a number.

Wisnu published the image from his public X account himself; this machine has no X-posting connector. The post's real X URL is in `POST.json`, and the exact post caption is kept in `POST-TEXT.txt`.

With a real `POST.json` present, run the Node 22 entry point from the repository root:

```sh
mkdir -p out
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It copies `POST.json` byte for byte to `out/POST.json` for local testing. The grader supplies its own `/bot` and `/output` directories.

Referral code: `ydpasff0`  
Referral link: <https://make.fun/r/ydpasff0>
