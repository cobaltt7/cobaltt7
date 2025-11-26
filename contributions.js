// @ts-check
/// <reference lib="es2024" />
/// <reference types="node" />

import { writeFile } from "node:fs/promises";

const USERNAMES = ["cobaltt7", "RedGuy12", "RedGuy13"];
const IGNORED_ORGS = [...USERNAMES, "sa-community", "scratchdit", "nexensys", "TheColaber"];
const PER_PAGE = 100;

let page = 1;
const allPulls = [];

while (true) {
	const pulls = await fetch(
		`https://api.github.com/search/issues?${new URLSearchParams({
			q: `is:pr is:merged (${USERNAMES.map((username) => `author:${username}`).join(" OR ")}) ${IGNORED_ORGS.map((org) => `-org:${org}`).join(" ")}`,
			advanced_search: true.toString(),
			sort: "created",
			order: "asc",
			per_page: PER_PAGE.toString(),
			page: page.toString(),
		})}`,
	).then((response) => response.json());
	if (!pulls.items) throw new Error("Failed to fetch pulls", { cause: pulls });
	allPulls.push(...pulls.items);
	if (pulls.items.length < PER_PAGE) break;
	page++;
}

const HEADERS = {
	black:
		`[Black](https://black.readthedocs.io/en/stable/) _(Python)_ - Opinionated and uncompromising Python code formatter`
		+ `\n\n`
		+ `### Maintainer since January 2025`,
	discordjs: `[discord.js](https://discord.js.org/) _(JavaScript + TypeScript)_ - Powerful JavaScript libraries for building Discord bots`,
	highlightjs: `[highlight.js](https://highlightjs.org/) _(JavaScript)_ - Multi-language code syntax highlighter`,
	ScratchAddons:
		`[Scratch Addons](https://scratchaddons.com/) _(JavaScript)_ - Browser extention with helpful utilities and themes for Scratch`
		+ `\n\n`
		+ `### Active maintainer from April 2021 to December 2022; Reputable community member since`,
	pandas: `[pandas](https://pandas.pydata.org/) _(Python)_ - Tabular data manipulation tool and Python library`,
	discordpy: `[discord.py](https://discordpy.readthedocs.io/en/stable/) _(Python)_ - Python wrapper around the Discord API and Discord bot framework`,
	ballsdex: `[BallsDex](https://discord.gg/KPmnDEFPpa) _(Python)_ - Discord bot to collect and exchange Countryballs`,
};

/** @type {Record<string, keyof typeof HEADERS>} */
const orgs = { "Ballsdex-Team": "ballsdex", "pandas-dev": "pandas" };
/** @type {Record<`${string}/${string}`, keyof typeof HEADERS>} */
const repos = {
	"ichard26/diff-shades": "black",
	"psf/black": "black",
	"Rapptz/discord.py": "discordpy",
};

const indexed = Object.entries(
	Object.groupBy(allPulls, (pull) => {
		const parts = pull.url.split("/");
		return orgs[parts[4]] ?? repos[`${parts[4]}/${parts[5]}`] ?? parts[4] in HEADERS ? parts[4] : parts[5];
	}),
);
const combined = indexed.reduce(
	(acc, [project, pulls]) => {
		if (pulls.length > 1) acc.unshift([project, pulls]);
		else acc.at(-1)[1].push(...pulls);
		return acc;
	},
	/** @type {[string, any[]][]} */ ([["Misc", []]]),
);
const formattedProjects = combined.map(
	([project, pulls]) =>
		`## ${HEADERS[project] ?? project}\n\n`
		+ `${pulls
			.toReversed()
			.map((pull) => {
				const parts = pull.url.split("/");
				return `- [${
					project === "Misc" ? `${parts[4]}/${parts[5]}`
					: parts[5] == project ? ""
					: parts[5]
				}#${
					pull.number
				}](${pull.html_url}) (${pull.created_at.split("T")[0]}): ${pull.title}`;
			})
			.join("\n")}`,
);

await writeFile(
	"contributions.md",
	`# Open-Source Contributions\n\n`
		+ `Significant contributions that I have made to various open-source projects over the past few years.\n\n`
		+ formattedProjects.join("\n\n")
		+ "\n",
	"utf8",
);
