# Open-Source Contributions

Significant contributions that I have made to various open-source projects over the past few years.

## [Black](https://black.readthedocs.io/en/stable/) _(Python)_ - Opinionated and uncompromising Python code formatter

### Maintainer since January 2025

- [black#4799](https://github.com/psf/black/pull/4799) (2025-10-18): Revert "ci: Run diff-shades on unstable instead of preview (#4741)"
- [black#4767](https://github.com/psf/black/pull/4767) (2025-09-26): ci: try running diff-shades runs concurrently
- [black#4766](https://github.com/psf/black/pull/4766) (2025-09-25): ci: ignore `#\r` in Fuzz
- [black#4760](https://github.com/psf/black/pull/4760) (2025-09-20): Move `multiline_string_handling` from unstable to preview
- [black#4745](https://github.com/psf/black/pull/4745) (2025-09-11): Fix mypy type issue
- [black#4741](https://github.com/psf/black/pull/4741) (2025-08-31): ci: Run diff-shades on unstable instead of preview
- [diff-shades#19](https://github.com/ichard26/diff-shades/pull/19) (2025-08-24): Add `--force-unstable-style` flag
- [black#4716](https://github.com/psf/black/pull/4716) (2025-07-27): Update PR Template
- [black#4699](https://github.com/psf/black/pull/4699) (2025-06-20): Wrap the `in` clause of comprehensions across lines if necessary
- [black#4665](https://github.com/psf/black/pull/4665) (2025-05-12): CI: Remove now-uneeded workarounds
- [black#4662](https://github.com/psf/black/pull/4662) (2025-05-04): Update Prettier pre-commit configuration
- [black#4657](https://github.com/psf/black/pull/4657) (2025-04-26): Improve `multiline_string_handling` with ternaries and dictionaries
- [black#4561](https://github.com/psf/black/pull/4561) (2025-01-26): Move `wrap_long_dict_values_in_parens` to the preview style
- [black#4537](https://github.com/psf/black/pull/4537) (2024-12-23): Fix type error
- [black#4377](https://github.com/psf/black/pull/4377) (2024-06-06): fix: Don't remove parenthesis around long dictionary values
- [black#4312](https://github.com/psf/black/pull/4312) (2024-04-17): fix: Remove parenthesis around sole list items
- [black#4289](https://github.com/psf/black/pull/4289) (2024-03-22): fix: Stop moving multiline strings to a new line unless inside brackets
- [black#4257](https://github.com/psf/black/pull/4257) (2024-02-28): chore: Refactor `delimiter_split()`
- [black#4248](https://github.com/psf/black/pull/4248) (2024-02-22): fix: Don't move comments while splitting delimiters
- [black#4218](https://github.com/psf/black/pull/4218) (2024-02-08): fix: Don't remove comments along with parens
- [black#4202](https://github.com/psf/black/pull/4202) (2024-02-01): Make trailing comma logic more consise
- [black#4194](https://github.com/psf/black/pull/4194) (2024-01-29): docs: Refactor pycodestyle/Flake8 compatibility docs
- [black#4164](https://github.com/psf/black/pull/4164) (2024-01-23): fix: Consistently add trailing comma on typed parameters
- [black#4155](https://github.com/psf/black/pull/4155) (2024-01-17): fix: Don't allow unparenthesizing walruses
- [black#4146](https://github.com/psf/black/pull/4146) (2024-01-08): fix: Don't normalize whitespace before fmt:skip comments
- [black#4109](https://github.com/psf/black/pull/4109) (2023-12-13): fix: In subscripts, treat walruses just like other binary operators
- [black#4090](https://github.com/psf/black/pull/4090) (2023-12-08): docs: Move `fmt: off` docs
- [black#4076](https://github.com/psf/black/pull/4076) (2023-11-28): docs: Unify option descriptions between `--help` and `the_basics.md`
- [black#4072](https://github.com/psf/black/pull/4072) (2023-11-27): docs: Clarify include/exclude documentation
- [black#4048](https://github.com/psf/black/pull/4048) (2023-11-17): docs: Document target version inference

## [discord.js](https://discord.js.org/) _(JavaScript + TypeScript)_ - Powerful JavaScript libraries for building Discord bots

- [discord.js#10591](https://github.com/discordjs/discord.js/pull/10591) (2024-11-05): fix(GuildAuditLogEntry)!: Fix some incorrect types and runtime logic
- [discord.js#10567](https://github.com/discordjs/discord.js/pull/10567) (2024-10-20): refactor(formatters): Change `:_:` emoji name placeholder
- [discord.js#10276](https://github.com/discordjs/discord.js/pull/10276) (2024-05-14): types: Forum starter messages do not support polls
- [discord-api-types#955](https://github.com/discordjs/discord-api-types/pull/955) (2024-04-16): fix: Correct types for `APIAuditLogChangeKey$Add` and `APIAuditLogChangeKey$Remove`
- [discord.js#10184](https://github.com/discordjs/discord.js/pull/10184) (2024-03-20): fix(types): Export `ReadonlyCollection`
- [discord.js#10181](https://github.com/discordjs/discord.js/pull/10181) (2024-03-18): types: Use `ThreadChannel` and `AnyThreadChannel` consistently
- [discord.js#10156](https://github.com/discordjs/discord.js/pull/10156) (2024-02-27): fix(Faces): Escape backslash in `Shrug`
- [discord.js#9847](https://github.com/discordjs/discord.js/pull/9847) (2023-09-22): feat(BaseChannel): Add `isThreadOnly()`
- [discord.js#9648](https://github.com/discordjs/discord.js/pull/9648) (2023-06-13): fix(ThreadManager): Fix internal crash upon conditionally resolving thread members
- [discord.js#8799](https://github.com/discordjs/discord.js/pull/8799) (2022-10-30): fix(escapeMarkdown): fix double escaping (v13)
- [discord.js#8798](https://github.com/discordjs/discord.js/pull/8798) (2022-10-30): fix(escapeMarkdown): fix double escaping
- [discord.js#8790](https://github.com/discordjs/discord.js/pull/8790) (2022-10-27): fix(Transfomers): call `.toJSON` in `toSnakeCase`
- [discord.js#8703](https://github.com/discordjs/discord.js/pull/8703) (2022-10-04): feat(Util): backport `escapeMarkdown` PRs to v13
- [discord.js#8701](https://github.com/discordjs/discord.js/pull/8701) (2022-10-04): feat(Util): escape more markdown characters
- [discord.js#8682](https://github.com/discordjs/discord.js/pull/8682) (2022-09-26): feat(EmbedBuilder): add `.length`
- [discord.js#8624](https://github.com/discordjs/discord.js/pull/8624) (2022-09-15): docs: fix regexps incorrectly being called global
- [discord.js#8598](https://github.com/discordjs/discord.js/pull/8598) (2022-09-05): fix: `awaitMessageComponent` with `MessageComponentInteraction`s
- [discord.js#8596](https://github.com/discordjs/discord.js/pull/8596) (2022-09-05): test: rename incorrect test
- [discord.js#8560](https://github.com/discordjs/discord.js/pull/8560) (2022-08-27): types(ThreadChannel): `fetchStarterMessage` must return a `Message<true>`
- [guide#1234](https://github.com/discordjs/guide/pull/1234) (2022-08-23): Mention `restWsBridgeTimeout` in the v14 upgrade documentation
- [discord.js#8551](https://github.com/discordjs/discord.js/pull/8551) (2022-08-23): types(GuildChannelManager): correct fetch return type (v13)
- [discord.js#8549](https://github.com/discordjs/discord.js/pull/8549) (2022-08-23): types(GuildChannelManager): correct `fetch` return type
- [discord.js#8469](https://github.com/discordjs/discord.js/pull/8469) (2022-08-10): types(Message): correct `bulkDelete` return type (v13)
- [discord.js#8465](https://github.com/discordjs/discord.js/pull/8465) (2022-08-10): types(Message): correct `bulkDelete` return type
- [discord.js#8421](https://github.com/discordjs/discord.js/pull/8421) (2022-08-03): docs(AttachmentBuilder): fix #8407

## [Scratch Addons](https://scratchaddons.com/) _(JavaScript)_ - Browser extention with helpful utilities and themes for Scratch

### Active maintainer from April 2021 to December 2022; Reputable community member since

- [manifest-schema#74](https://github.com/ScratchAddons/manifest-schema/pull/74) (2025-04-22): Update previews, add relatedAddons, remove popup script/html
- [contributors#304](https://github.com/ScratchAddons/contributors/pull/304) (2024-08-15): Sync all profile names of contributors and add more moderators
- [ScratchAddons#7725](https://github.com/ScratchAddons/ScratchAddons/pull/7725) (2024-08-14): Update cobalt's username in multiple addon credits
- [ScratchAddons#5617](https://github.com/ScratchAddons/ScratchAddons/pull/5617) (2023-01-14): Fix broken links
- [ScratchAddons#5519](https://github.com/ScratchAddons/ScratchAddons/pull/5519) (2022-12-30): Move more md files to .github
- [website-v2#270](https://github.com/ScratchAddons/website-v2/pull/270) (2022-11-08): Add /install
- [ScratchAddons#5279](https://github.com/ScratchAddons/ScratchAddons/pull/5279) (2022-10-27): Remove `global` parameter from addon default functions
- [ScratchAddons#5278](https://github.com/ScratchAddons/ScratchAddons/pull/5278) (2022-10-27): Remove unlocalized instance of "Scratch Addons"
- [ScratchAddons#5233](https://github.com/ScratchAddons/ScratchAddons/pull/5233) (2022-10-20): Fix typo in constructing a /feedback link
- [ScratchAddons#5191](https://github.com/ScratchAddons/ScratchAddons/pull/5191) (2022-10-13): Update RedGuy7 credit links
- [ScratchAddons#5048](https://github.com/ScratchAddons/ScratchAddons/pull/5048) (2022-08-29): Bump to 1.29-pre
- [website-v2#183](https://github.com/ScratchAddons/website-v2/pull/183) (2022-03-24): Temporarily disable feedback forum
- [ScratchAddons#4388](https://github.com/ScratchAddons/ScratchAddons/pull/4388) (2022-03-10): Move eslint ignores into .eslintrc
- [ScratchAddons#4326](https://github.com/ScratchAddons/ScratchAddons/pull/4326) (2022-02-24): Remove redundant CSS
- [ScratchAddons#4319](https://github.com/ScratchAddons/ScratchAddons/pull/4319) (2022-02-23): custom-zoom: revert minimum fix, change setting name instead
- [ScratchAddons#4307](https://github.com/ScratchAddons/ScratchAddons/pull/4307) (2022-02-22): Fix minimum being different then what it said it is
- [ScratchAddons#4146](https://github.com/ScratchAddons/ScratchAddons/pull/4146) (2022-01-28): Fix uncentered block-pallate-icons
- [contributors#179](https://github.com/ScratchAddons/contributors/pull/179) (2022-01-28): Revert "docs: add ignite as a contributor for bug"
- [website-v2#140](https://github.com/ScratchAddons/website-v2/pull/140) (2021-12-21): Add twemoji to contributors page
- [ScratchAddons#3866](https://github.com/ScratchAddons/ScratchAddons/pull/3866) (2021-12-01): fix(addon): `customize-avatar-border` - hide `Outline color` when `Hide outline` is off
- [ScratchAddons#3587](https://github.com/ScratchAddons/ScratchAddons/pull/3587) (2021-09-30): Add a delay option to mediarecorder
- [ScratchAddons#3585](https://github.com/ScratchAddons/ScratchAddons/pull/3585) (2021-09-30): Updates to scratch messaging ui
- [ScratchAddons#3547](https://github.com/ScratchAddons/ScratchAddons/pull/3547) (2021-09-23): Bump to v1.21.0-prerelease
- [ScratchAddons#3228](https://github.com/ScratchAddons/ScratchAddons/pull/3228) (2021-08-03): Bump to stable
- [ScratchAddons#3151](https://github.com/ScratchAddons/ScratchAddons/pull/3151) (2021-07-29): Replace `settingsMatch` with more general `if`
- [website-v2#70](https://github.com/ScratchAddons/website-v2/pull/70) (2021-06-23): safeMsg is not available in persistent scripts
- [ScratchAddons#2492](https://github.com/ScratchAddons/ScratchAddons/pull/2492) (2021-05-14): Migrate `exact-count` to scratch-www
- [ScratchAddons#2318](https://github.com/ScratchAddons/ScratchAddons/pull/2318) (2021-04-28): css variables aren't being set bug
- [ScratchAddons#2289](https://github.com/ScratchAddons/ScratchAddons/pull/2289) (2021-04-25): remove "check format" from format code action
- [ScratchAddons#2186](https://github.com/ScratchAddons/ScratchAddons/pull/2186) (2021-04-16): Remove force option from dango-rain
- [ScratchAddons#2159](https://github.com/ScratchAddons/ScratchAddons/pull/2159) (2021-04-14): migrate block-pallate-icons to a userstyle
- [ScratchAddons#1831](https://github.com/ScratchAddons/ScratchAddons/pull/1831) (2021-03-12): scratchblocks scroll
- [ScratchAddons#1830](https://github.com/ScratchAddons/ScratchAddons/pull/1830) (2021-03-12): Add error when scratchdb is down
- [ScratchAddons#1815](https://github.com/ScratchAddons/ScratchAddons/pull/1815) (2021-03-11): fix longer-wiwo error on others' profiles
- [ScratchAddons#1674](https://github.com/ScratchAddons/ScratchAddons/pull/1674) (2021-02-26): New addon - Longer WIWO
- [ScratchAddons#1570](https://github.com/ScratchAddons/ScratchAddons/pull/1570) (2021-02-13): fix unreadable crash message with dark-www
- [ScratchAddons#1563](https://github.com/ScratchAddons/ScratchAddons/pull/1563) (2021-02-12): Fix "custom Colors addon makes devtools highlighting not work"
- [ScratchAddons#1389](https://github.com/ScratchAddons/ScratchAddons/pull/1389) (2021-01-23): fix uploading image message
- [ScratchAddons#1226](https://github.com/ScratchAddons/ScratchAddons/pull/1226) (2021-01-07): Scrollable Scratchblocks
- [scratchaddons.github.io#4](https://github.com/ScratchAddons/scratchaddons.github.io/pull/4) (2021-01-02): Better redirect page

## [highlight.js](https://highlightjs.org/) _(JavaScript)_ - Multi-language code syntax highlighter

- [highlight.js#2965](https://github.com/highlightjs/highlight.js/pull/2965) (2021-01-19): Add missing comma to SUPPORTED_LANGUAGES.md
- [highlight.js#2867](https://github.com/highlightjs/highlight.js/pull/2867) (2020-11-15): Add BBcode to language table
- [highlightjs-bbcode#1](https://github.com/highlightjs/highlightjs-bbcode/pull/1) (2020-11-15): Change robots-txt to bbcode

## Misc

- [Ballsdex-Team/BallsDex-DiscordBot#460](https://github.com/Ballsdex-Team/BallsDex-DiscordBot/pull/460) (2024-11-11): Show the actual emoji instead of just the ID on the admin panel
- [MiniDiscordThemes/Snippets#2](https://github.com/MiniDiscordThemes/Snippets/pull/2) (2024-04-06): fix(AvatarDecorationCheckmark): Ignore clown decoration
- [pandas-dev/pandas#55427](https://github.com/pandas-dev/pandas/pull/55427) (2023-10-06): DOC: Remove outdated docs about NumPy's broadcasting
- [railwayapp/docs#288](https://github.com/railwayapp/docs/pull/288) (2023-06-24): Change example RAILWAY_VOLUME_MOUNT_PATH
- [Rapptz/discord.py#9410](https://github.com/Rapptz/discord.py/pull/9410) (2023-05-17): Fix `channel_icon_change`'s `system_message`
- [BirthdayyBot/BirthdayyBot#173](https://github.com/BirthdayyBot/BirthdayyBot/pull/173) (2023-04-04): Fix permissions for `/birthday update` and `/birthday remove`
- [antfu/vscode-file-nesting-config#147](https://github.com/antfu/vscode-file-nesting-config/pull/147) (2023-02-20): feat: add npm-shrinkwrap.json
- [TurboWarp/docs#48](https://github.com/TurboWarp/docs/pull/48) (2022-10-30): Fix grammar in 4.4.md
- [jeffalo/ocular#137](https://github.com/jeffalo/ocular/pull/137) (2022-01-11): Fix broken link
- [bryanburgers/node-mustache-express#33](https://github.com/bryanburgers/node-mustache-express/pull/33) (2021-08-05): Tell the user what file errors occur in
- [stewartmcgown/grammarly-api#27](https://github.com/stewartmcgown/grammarly-api/pull/27) (2021-06-05): Dialect customization
