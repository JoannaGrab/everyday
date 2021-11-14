const EDO = require("./nbp_edo")
const dayjs = require("dayjs")
const Dinero = require("dinero.js")

// sampleEDO returns EDO bond with:
// value = 100 PLN
// first_year_roi = 2.7%
// margin = 1.5% (marza)
// inflation = 2.5% 
let pln = (amount) => Dinero({ amount: amount, currency: 'PLN' });
let sampleEDO = (start) => EDO.createBond(pln(10000), 2.7, 1.5, 2.5, start);
let investment_start = () => dayjs("2018-04-04T16:00:00.000Z").startOf('day')

const expected = [
    JSON.stringify(pln(10270)),
    JSON.stringify(pln(10681)),
    JSON.stringify(pln(11108)),
    JSON.stringify(pln(11552)),
    JSON.stringify(pln(12014)),
    JSON.stringify(pln(12495)),
    JSON.stringify(pln(12995)),
    JSON.stringify(pln(13515)),
    // TODO: probably one cent extra is returned to be checked, but we dont care for now
    JSON.stringify(pln(14056)),
    JSON.stringify(pln(14618)),
];

test('history in the very beginning should be empty', () => {
    // given
    const bond = sampleEDO(investment_start());
    // when
    const history = EDO.edoHistory(bond, investment_start());
    // then
    expect(history.length).toBe(0);
});

test('history in different month, but the same year should be empty', () => {
    // given
    const bond = sampleEDO(investment_start().add(3, 'month'));
    // when
    const history = EDO.edoHistory(bond, investment_start());
    // then
    expect(history.length).toBe(0);
});


test('history after first year should have value incread by the first year roi', () => {
    // given
    const bond = sampleEDO(investment_start());
    // and
    const checkpoint = investment_start().add(1, 'year');
    // when
    const history = EDO.edoHistory(bond, checkpoint);
    // then
    expect(history.length).toBe(1);
    // and
    expect(JSON.stringify(history[0])).toEqual(expected[0]);
});

test('history after two years should have value incread by roi and mergin + inflation', () => {
    // given
    const bond = sampleEDO(investment_start());
    // and
    const checkpoint = investment_start().add(2, 'year');
    // when
    const history = EDO.edoHistory(bond, checkpoint);
    // then
    expect(history.length).toBe(2);
    // and
    expect(JSON.stringify(history[0])).toEqual(expected[0]);
    // and
    expect(JSON.stringify(history[1])).toEqual(expected[1]);
});

test('history after two ten years should have value incread by roi and mergin + inflation', () => {
    // given
    const bond = sampleEDO(investment_start());
    // and
    const checkpoint = investment_start().add(10, 'year');
    // when
    const history = EDO.edoHistory(bond, checkpoint);
    // then
    expect(history.length).toBe(10);
    // and
    expect(history.map(x => JSON.stringify(x))).toEqual(expected);
});

test('history after more than two ten years should have value incread by roi and mergin + inflation', () => {
    // given
    const bond = sampleEDO(investment_start());
    // and
    const checkpoint = investment_start().add(16, 'year');
    // when
    const history = EDO.edoHistory(bond, checkpoint);
    // then
    expect(history.length).toBe(10);
    // and
    expect(history.map(x => JSON.stringify(x))).toEqual(expected);
});
