interface IDatabaseConfig {
    uri: string;
}

const databaseConfig: IDatabaseConfig = {
    uri: process.env.MONGO_URI || 'mongodb://mongo:27017/rendevo',
};

export default databaseConfig;
