function temParam(param) {
  return process.argv.indexOf(param) !== -1;
}

if (temParam("--producao")) {
  console.log("Passou ");
} else {
  console.log(" Não Passou ");
}
