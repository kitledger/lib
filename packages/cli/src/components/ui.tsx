import { useState, useEffect } from "react";
import { Text } from "ink";
import Spinner from "ink-spinner";
import { bundleScript } from "../bundler.js";
import * as fs from "fs/promises";
import * as path from "path";

type Props = {
  scriptPath: string;
  outPath: string;
};

export function BundleComponent({ scriptPath, outPath }: Props) {
  const [status, setStatus] = useState("bundling");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const doBundle = async () => {
      try {
        const fullScriptPath = path.resolve(scriptPath);
        const fullOutPath = path.resolve(outPath);
        
        const bundledCode = await bundleScript(fullScriptPath);
        await fs.writeFile(fullOutPath, bundledCode);
        
        setStatus("done");
      } catch (err) {
        setError((err as Error).message);
        setStatus("error");
      }
    };
    doBundle();
  }, [scriptPath, outPath]);

  if (status === "error") {
    return <Text color="red">🔥 Bundle failed: {error}</Text>;
  }

  if (status === "done") {
    return <Text color="green">✅ Bundle complete! Output: {outPath}</Text>;
  }

  return (
    <Text>
      <Spinner type="dots" />
      {` Bundling ${scriptPath}...`}
    </Text>
  );
}