// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`E2E lint deprecated-styleguide 1`] = `

[1] .redocly.yaml:7:1 at #/styleguide

Property \`styleguide\` is not expected here.

5 |       rules:
6 |         operation-4xx-response: error
7 | styleguide:
  | ^^^^^^^^^^
8 |   rules:
9 |     info-contact: warn

Warning was generated by the configuration spec rule.


You have 1 warning.
The 'styleguide' field is deprecated. Read more about this change: https://redocly.com/docs/api-registry/guides/migration-guide-config-file/#changed-properties
validating /openapi.yaml...
[1] openapi.yaml:11:7 at #/paths/~1pet~1findByStatus/get/responses

Operation must have at least one \`4XX\` response.

 9 | operationId: example
10 | summary: summary example
11 | responses:
   | ^^^^^^^^^
12 |   '200':
13 |     description: example description

Error was generated by the operation-4xx-response rule.


[2] openapi.yaml:2:1 at #/info/contact

Info object should contain \`contact\` field.

1 | openapi: 3.1.0
2 | info:
  | ^^^^
3 |   title: Example OpenAPI 3 definition.
4 |   version: 1.0

Warning was generated by the info-contact rule.


/openapi.yaml: validated in <test>ms

❌ Validation failed with 1 error and 1 warning.
run \`openapi lint --generate-ignore-file\` to add all problems to the ignore file.


`;