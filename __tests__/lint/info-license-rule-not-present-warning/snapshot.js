// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`E2E lint info-license-rule-not-present-warning 1`] = `

validating /openapi.yaml...
[1] openapi.yaml:3:3 at #/info

Info object should contain \`license\` field.

1 | openapi: 3.1.0
2 | info:
3 |   title: Example OpenAPI 3 definition.
  |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
4 |   version: 1.0.0
  |   ^^^^^^^^^^^^^^
5 |
6 | paths:

Warning was generated by the info-license rule.


/openapi.yaml: validated in <test>ms

Woohoo! Your OpenAPI definition is valid. 🎉
You have 1 warning.


`;