const dayjs = require('dayjs');
var isSameOrBefore = require('dayjs/plugin/isSameOrBefore');
dayjs.extend(isSameOrBefore);


module.exports = {
    createBond: (value, first_year_roi, margin, inflation, start) => {
        return {
            value: value,
            first_year_roi: first_year_roi,
            margin: margin,
            inflation: inflation,
            start: start,
            end: start.add(9, 'year'),
        }
    },
    edoHistory: (edo, date) => {
        const checkpoint = date.startOf('year');
        const startYear = edo.start.startOf('year')
        if (checkpoint.isSameOrBefore(startYear)) {
            return []
        }
        const first_year_bonus = edo.value.percentage(edo.first_year_roi);
        let total = edo.value.add(first_year_bonus);
        const out = [total];

        for (let i = startYear.add(1, 'year'); i.isBefore(edo.end); i = i.add(1, 'year')) {
            if (checkpoint.isSameOrBefore(i)) {
                break;
            }
            const next_year_bonus = total.percentage(edo.inflation + edo.margin);
            total = total.add(next_year_bonus);
            out.push(total);
        }
        return out;
    }
}
