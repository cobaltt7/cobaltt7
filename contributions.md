# Open-Source Contributions

Significant contributions that I have made to various open-source projects over the past few years.

## [Black](https://black.readthedocs.io/en/stable/) _(Python)_ - Opinionated and uncompromising Python code formatter

### Maintainer since January 2025

- [#5115](https://github.com/psf/black/pull/5115) (2026-04-24): docs: update deprecated PEP URLs to peps.python.org
- [#5098](https://github.com/psf/black/pull/5098) (2026-04-13): Revert "[pre-commit.ci] pre-commit autoupdate"
- [#5094](https://github.com/psf/black/pull/5094) (2026-04-12): Update old comments & add back Hatch plugins
- [#5069](https://github.com/psf/black/pull/5069) (2026-03-30): Add tests for #3350
- [#5036](https://github.com/psf/black/pull/5036) (2026-03-08): Add new changelog
- [#5035](https://github.com/psf/black/pull/5035) (2026-03-08): Minor release patches
- [#5028](https://github.com/psf/black/pull/5028) (2026-03-06): Revert "Bump hatch from 1.15.1 to 1.16.4"
- [#5012](https://github.com/psf/black/pull/5012) (2026-03-02): Fix Dependabot config
- [#5011](https://github.com/psf/black/pull/5011) (2026-03-01): Add an upper bound to `virtualenv` in the build deps
- [#5000](https://github.com/psf/black/pull/5000) (2026-02-21): Fix `wrap_comprehension_in` docs
- [#4978](https://github.com/psf/black/pull/4978) (2026-02-01): A few more small CI tweaks
- [#4964](https://github.com/psf/black/pull/4964) (2026-01-19): Don't double-decode input, causing non-UTF-8 files to be corrupted
- [#4962](https://github.com/psf/black/pull/4962) (2026-01-18): Add new changelog
- [#4958](https://github.com/psf/black/pull/4958) (2026-01-15): Handle pathspec v1 changes
- [#4928](https://github.com/psf/black/pull/4928) (2025-12-29): Various CI and doc refactors
- [#4878](https://github.com/psf/black/pull/4878) (2025-12-01): Pin Hatch to hopefully fix Docker builds
- [#4876](https://github.com/psf/black/pull/4876) (2025-11-29): Attempt to fix Docker build failures
- [#4874](https://github.com/psf/black/pull/4874) (2025-11-28): Remove old `noqa` comments and disable `C901` globally
- [#4868](https://github.com/psf/black/pull/4868) (2025-11-26): Fix syntax in diff-shades conditional for compare job
- [#4867](https://github.com/psf/black/pull/4867) (2025-11-25): Minor CI improvements
- [diff-shades#20](https://github.com/ichard26/diff-shades/pull/20) (2025-11-25): Update Python version requirements and arguments
- [#4856](https://github.com/psf/black/pull/4856) (2025-11-22): Fix crashes when fmt directives are indented
- [#4855](https://github.com/psf/black/pull/4855) (2025-11-21): Fix `fmt: skip` skipping the line after instead of the line it's on
- [#4854](https://github.com/psf/black/pull/4854) (2025-11-21): Fix `fix_fmt_skip_in_one_liners` crashing on annotated parameters
- [#4853](https://github.com/psf/black/pull/4853) (2025-11-21): Fix `fix_fmt_skip_in_one_liners` crashing on `with` statements
- [#4836](https://github.com/psf/black/pull/4836) (2025-11-10): Add new changelog
- [#4830](https://github.com/psf/black/pull/4830) (2025-11-09): fix windows wheels
- [#4767](https://github.com/psf/black/pull/4767) (2025-09-26): ci: try running diff-shades runs concurrently
- [#4766](https://github.com/psf/black/pull/4766) (2025-09-25): ci: ignore `#\r` in Fuzz
- [#4760](https://github.com/psf/black/pull/4760) (2025-09-20): Move `multiline_string_handling` from unstable to preview
- [#4745](https://github.com/psf/black/pull/4745) (2025-09-11): Fix mypy type issue
- [#4741](https://github.com/psf/black/pull/4741) (2025-08-31): ci: Run diff-shades on unstable instead of preview
- [diff-shades#19](https://github.com/ichard26/diff-shades/pull/19) (2025-08-24): Add `--force-unstable-style` flag
- [#4716](https://github.com/psf/black/pull/4716) (2025-07-27): Update PR Template
- [#4699](https://github.com/psf/black/pull/4699) (2025-06-20): Wrap the `in` clause of comprehensions across lines if necessary
- [#4665](https://github.com/psf/black/pull/4665) (2025-05-12): CI: Remove now-uneeded workarounds
- [#4662](https://github.com/psf/black/pull/4662) (2025-05-04): Update Prettier pre-commit configuration
- [#4657](https://github.com/psf/black/pull/4657) (2025-04-26): Improve `multiline_string_handling` with ternaries and dictionaries
- [#4561](https://github.com/psf/black/pull/4561) (2025-01-26): Move `wrap_long_dict_values_in_parens` to the preview style
- [#4537](https://github.com/psf/black/pull/4537) (2024-12-23): Fix type error
- [#4257](https://github.com/psf/black/pull/4257) (2024-02-28): chore: Refactor `delimiter_split()`
- [#4248](https://github.com/psf/black/pull/4248) (2024-02-22): fix: Don't move comments while splitting delimiters
- [#4218](https://github.com/psf/black/pull/4218) (2024-02-08): fix: Don't remove comments along with parens
- [#4202](https://github.com/psf/black/pull/4202) (2024-02-01): Make trailing comma logic more consise
- [#4194](https://github.com/psf/black/pull/4194) (2024-01-29): docs: Refactor pycodestyle/Flake8 compatibility docs
- [#4146](https://github.com/psf/black/pull/4146) (2024-01-08): fix: Don't normalize whitespace before fmt:skip comments

## [Scratch Addons](https://scratchaddons.com/) _(JavaScript)_ - Browser extention with helpful utilities and themes for Scratch

### Active maintainer from April 2021 to December 2022; Reputable community member since

- [manifest-schema#74](https://github.com/ScratchAddons/manifest-schema/pull/74) (2025-04-22): Update previews, add relatedAddons, remove popup script/html
- [#5519](https://github.com/ScratchAddons/ScratchAddons/pull/5519) (2022-12-30): Move more md files to .github
- [#5191](https://github.com/ScratchAddons/ScratchAddons/pull/5191) (2022-10-13): Update RedGuy7 credit links
- [#5048](https://github.com/ScratchAddons/ScratchAddons/pull/5048) (2022-08-29): Bump to 1.29-pre

## [discord.js](https://discord.js.org/) _(JavaScript + TypeScript)_ - Powerful JavaScript libraries for building Discord bots

- [#10184](https://github.com/discordjs/discord.js/pull/10184) (2024-03-20): fix(types): Export `ReadonlyCollection`
- [#10181](https://github.com/discordjs/discord.js/pull/10181) (2024-03-18): types: Use `ThreadChannel` and `AnyThreadChannel` consistently
- [#10156](https://github.com/discordjs/discord.js/pull/10156) (2024-02-27): fix(Faces): Escape backslash in `Shrug`
- [#8703](https://github.com/discordjs/discord.js/pull/8703) (2022-10-04): feat(Util): backport `escapeMarkdown` PRs to v13
- [#8701](https://github.com/discordjs/discord.js/pull/8701) (2022-10-04): feat(Util): escape more markdown characters
- [#8682](https://github.com/discordjs/discord.js/pull/8682) (2022-09-26): feat(EmbedBuilder): add `.length`
- [#8624](https://github.com/discordjs/discord.js/pull/8624) (2022-09-15): docs: fix regexps incorrectly being called global
- [#8598](https://github.com/discordjs/discord.js/pull/8598) (2022-09-05): fix: `awaitMessageComponent` with `MessageComponentInteraction`s
- [#8596](https://github.com/discordjs/discord.js/pull/8596) (2022-09-05): test: rename incorrect test
- [#8560](https://github.com/discordjs/discord.js/pull/8560) (2022-08-27): types(ThreadChannel): `fetchStarterMessage` must return a `Message<true>`
- [guide#1234](https://github.com/discordjs/guide/pull/1234) (2022-08-23): Mention `restWsBridgeTimeout` in the v14 upgrade documentation
- [#8551](https://github.com/discordjs/discord.js/pull/8551) (2022-08-23): types(GuildChannelManager): correct fetch return type (v13)
- [#8549](https://github.com/discordjs/discord.js/pull/8549) (2022-08-23): types(GuildChannelManager): correct `fetch` return type
- [#8469](https://github.com/discordjs/discord.js/pull/8469) (2022-08-10): types(Message): correct `bulkDelete` return type (v13)
- [#8465](https://github.com/discordjs/discord.js/pull/8465) (2022-08-10): types(Message): correct `bulkDelete` return type
- [#8421](https://github.com/discordjs/discord.js/pull/8421) (2022-08-03): docs(AttachmentBuilder): fix #8407

## Misc


