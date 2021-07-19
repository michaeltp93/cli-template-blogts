#!/usr/bin/env node

import yargs from "yargs";
import fs from "fs-extra";
import path from "path";

const { name }: any = yargs.options({
  name: { type: "string", demandOption: true, alias: "n" },
}).argv;

// blog-template-ts --name project-name

fs.mkdir(`./${name}`, (error: Error) => {
  if (error) {
    console.log("Could not create project.");
    process.exit(0);
  }

  const srcDir = `${path.resolve(__dirname)}/../blog-nextjs-start-typescript`;
  const destDir = `./${name}`;

  fs.copySync(srcDir, destDir);
  console.log("Templete created successfully!");
  process.exit(0);
});
