declare global {
    namespace NodeJS {
      interface ProcessEnv {
        [key: string]: string | undefined;
        PORT: number;
        HOST: string;
        PGHOSST: string;
        PGUSER: string;
        PGDATABASE: string;
        PGPASSWORD: string;
        PGPORT: number;
        NGROK_AUTHTOKEN: string;
      }
    }
  }