#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { render } from "ink";
import { BundleComponent } from "./components/ui.js";

yargs(hideBin(process.argv))
	.command(
		"bundle <script>",
		"Bundle a Kitledger script into a single file",
		(yargs) => {
			return yargs
				.positional("script", {
					describe: "The path to the user's script file",
					type: "string",
					demandOption: true,
				})
				.option("out", {
					alias: "o",
					describe: "The output path for the bundled file",
					type: "string",
					default: "bundle.js",
				});
		},
		async (argv) => {
			render(
				<BundleComponent
					scriptPath={argv.script as string}
					outPath={argv.out as string}
				/>
			);
		},
	)
	.demandCommand(1, "You must provide a command.")
	.strict()
	.help()
	.argv;