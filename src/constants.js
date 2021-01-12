export const IS_PRODUCTION = process.env.NODE_ENV === `production`;

const SERVER_URI = `localhost`;

export const ENDPOINTS = {
  GRAPHQL_URI: IS_PRODUCTION ? `http://${SERVER_URI}/graphql` : `http://${SERVER_URI}:9001/graphql`,
  SERVER_URI: IS_PRODUCTION ? `http://${SERVER_URI}` : `http://${SERVER_URI}:9001`,
};

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  REDIRECT: 302,
  NOTMODIFIED: 304,
  BADREQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  NOTACCEPTABLE: 406,
  INTERNAL_SERVER_ERROR: 500,
  BADGATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
};
