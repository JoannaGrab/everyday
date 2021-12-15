CREATE TABLE operations (
    id         SERIAL PRIMARY KEY,
    currency   VARCHAR(3) NOT NULL,
    amount     INTEGER NOT NULL,
    date       TIMESTAMP NOT NULL,
    name       VARCHAR(256) NOT NULL
);
