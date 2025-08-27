import type{ Knex } from "knex";

export const config: {[key: string]: Knex.Config} = {
    development: {
        client: "pg",
        connection: {
            host: "localhost",
            port: 5432,
            user: "postgres",
            password: "3108",
            database: "employees",
        },
        migrations: {
            directory: "./migrations",
        },
        seeds: {
            directory: "./seeds",
        },
    }
};
