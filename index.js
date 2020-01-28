"use strict";

const Path = require("path");

const Hapi = require("hapi");
const Marko = require("marko");
const Vision = require("vision");

require("marko/node-require");

const internals = {
  templatePath: ".",
  thisYear: new Date().getFullYear()
};

internals.rootHandler = function(request, h) {
  const relativePath = Path.relative(
    `${__dirname}/../..`,
    `${__dirname}/templates/${internals.templatePath}`
  );

  return h.view("index", {
    title: `Running ${relativePath} | hapi ${request.server.version}`,
    message: "Hello Marko!",
    year: internals.thisYear
  });
};

internals.main = async function() {
  const server = Hapi.server({ port: 3000 });

  await server.register(Vision);

  server.views({
    relativeTo: __dirname,
    engines: {
      marko: {
        compile: (src, options) => {
          const opts = {
            preserveWhitespace: true,
            writeToDisk: false
          };

          const template = Marko.load(options.filename, opts);

          return context => {
            return template.renderToString(context);
          };
        }
      }
    },
    path: `templates/${internals.templatePath}`
  });

  server.route({
    method: "GET",
    path: "/",
    handler: internals.rootHandler
  });

  await server.start();
  console.log("Server is running at " + server.info.uri);
};

internals.main();
