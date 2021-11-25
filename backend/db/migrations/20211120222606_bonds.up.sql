CREATE TABLE bonds (
    id          INTEGER NOT NULL PRIMARY KEY,
    symbol      VARCHAR(3) NOT NULL,
    min_value   INTEGER,
    roi         INTEGER NOT NULL,
    margin      INTEGER NOT NULL
);

INSERT INTO bonds(id, symbol, min_value, roi,margin)
VALUES(1131 ,'EDO', 10000, 170, 100);
