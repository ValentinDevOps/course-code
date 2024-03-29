const core = require("@actions/core"); //se puede formatear para hacer mensajes de warning y todo eso
//luego de compilarlo en un archivo (directorio dist creado, cambio el yaml y ahi puede crearse mi accion con sus dependencias)
const github = require("@actions/github");

try {
  throw new Error("Some error message");
  core.debug("Debug Message");
  core.warning("Warning message");
  core.error("Error message");

  const name = core.getInput("who_to_greet");

  console.log(`Hello ${name}`);

  const time = new Date();
  core.setOutput("time", time.toTimeString()); //setea un output para la action

  core.exportVariable("HELLO_TIME", time);

  core.startGroup("Logging github context");
  console.log(JSON.stringify(github.context, null, 2)); // en el paquete de action/github podes usar los contextos
  core.endGroup();
} catch (error) {
  core.setFailed(error.message); //non 0 exit code
}