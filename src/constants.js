export const SERVER_URI = `https://2891637c-8ab7-4a84-906b-a98465726f85.mock.pstmn.io`;

export const ENDPOINTS = {
  prices: `/prices`
}

export const PROMO_CODE = `PROMOHG40`;

export const RECURRENCY_PERIODS = {
  TRIENNIALLY: {
    LABEL: `3 anos`,
    MONTHS: 36,
  },
  ANNUALLY: {
    LABEL: `1 ano`,
    MONTHS: 12,
  },
  MONTHLY: {
    LABEL: `1 mês`,
    MONTHS: 1,
  },
}

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
