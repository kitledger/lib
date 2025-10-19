import * as esbuild from "esbuild";

/**
 * Bundles a user's script into a single, executable string.
 * @param userScriptPath The file path to the user's TS script.
 * @returns The bundled JS code with an inline source map.
 */
export async function bundleScript(userScriptPath: string): Promise<string> {
    const result = await esbuild.build({
        entryPoints: [userScriptPath],
        bundle: true,
        sourcemap: "inline",
        write: false,
        format: "esm",
        platform: "neutral",
    });

    esbuild.stop();

    return result.outputFiles[0].text;
}