interface Env {
  APPLICATION_ENV: string;
  VUE_ROUTER_MODE: 'hash' | 'history' | 'abstract' | undefined;
  VUE_ROUTER_BASE: string | undefined;
  APP_URL: string;
  DEV: string;
  PROD: string;
}

declare namespace NodeJS {
  interface ProcessEnv extends Env {
    NODE: string;
  }
}
