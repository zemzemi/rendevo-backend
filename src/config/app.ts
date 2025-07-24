type Env = 'development' | 'production' | 'test';

interface IAppConfig {
    name: string;
    env: Env;
    port: number;
}
const appConfig: IAppConfig = {
    name: process.env.APP_NAME || 'MyApp',
    env: (process.env.NODE_ENV as Env) || 'development',
    port: Number(process.env.PORT) || 5000,
};

export default appConfig;
