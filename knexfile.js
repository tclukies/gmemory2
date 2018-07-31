module.exports = {
    development: {
        client: "pg",
        connection: "postgres://localhost:/gmemory-two"
    },

    production: {
        client: "postgresql",
        connection: process.env.DATABASE_URL
    }
};
