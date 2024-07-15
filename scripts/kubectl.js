const { exec } = require("child_process");
const fs = require("fs");

let args = process.argv.slice(2);

const kubeConfig = args[0];

fs.writeFile('/home/runner/.kube/', kubeConfig, (err) => {