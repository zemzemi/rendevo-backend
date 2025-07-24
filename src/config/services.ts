export interface ServicesConfig {
    stripe: {
        publicKey: string;
        secretKey: string;
        webhookSecret: string;
    };
    google: {
        clientId: string;
        clientSecret: string;
    };
}

const servicesConfig: ServicesConfig = {
    stripe: {
        publicKey: process.env.STRIPE_PUBLIC_KEY || '',
        secretKey: process.env.STRIPE_SECRET_KEY || '',
        webhookSecret: process.env.STRIPE_WEBHOOK_SECRET || '',
    },
    google: {
        clientId: process.env.GOOGLE_CLIENT_ID || '',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    },
};

export default servicesConfig;
