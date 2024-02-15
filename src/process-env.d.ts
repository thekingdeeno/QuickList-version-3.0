declare global {
    namespace NodeJS {
      interface ProcessEnv {
        [key: string]: string | undefined;
        PORT: Number;
        DATABASE_URL: string;
      }
    }
  }