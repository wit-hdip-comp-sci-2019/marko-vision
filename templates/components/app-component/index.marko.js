// Compiled using marko@4.18.35 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-example$1.0.0/templates/components/app-component/index.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<h2>I am a " +
    marko_escapeXml(data.prop) +
    " component </h2>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/marko-example$1.0.0/templates/components/app-component/index.marko"
  };
