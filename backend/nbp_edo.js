const dayjs = require('dayjs');
var isSameOrBefore = require('dayjs/plugin/isSameOrBefore');
const { minimum } = require('dinero.js');
dayjs.extend(isSameOrBefore);


module.exports = {
    createBond: (value, first_year_roi, margin, inflation, start) => {
        if (value.getAmount() === 0 || (value.getAmount() % 10000 !== 0)) {
            throw "value must be multiple of 10000";
        }

        return {
            value: value,
            first_year_roi: first_year_roi,
            margin: margin,
            inflation: inflation,
            start: start,
            end: start.add(10, 'year'),
        }
    },
    edoHistory: (edo, date) => {
        const startYear = edo.start.startOf('year');
        const historyEnd = date.startOf('year');
        if (historyEnd.isSameOrBefore(startYear)) {
            return [];
        }
        const first_year_bonus = edo.value.percentage(edo.first_year_roi);
        let total = edo.value.add(first_year_bonus);
        const out = [total];

        let years = historyEnd.diff(startYear, 'years')
        if(years > 10 ){
            years = 10;
        }
        for(let i = 1; i < years; i++){
            const next_year_bonus = total.percentage(edo.inflation + edo.margin);
            total = total.add(next_year_bonus);
            out.push(total);
        }
        return out;
    }
}
