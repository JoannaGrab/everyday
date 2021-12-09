CREATE TABLE bonds (
    id          SERIAL PRIMARY KEY,
    symbol      VARCHAR(3) NOT NULL,
    min_value   INTEGER,
    roi         INTEGER NOT NULL,
    margin      INTEGER NOT NULL
);
