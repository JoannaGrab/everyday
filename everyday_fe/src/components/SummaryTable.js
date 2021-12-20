function Component({ summary }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>INCOMES</th>
                    <th>EXPENSES</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{summary.map(s => s.amount)
                        .filter(s => s > 0)
                        .reduce((current, prev) => current + prev, 0)}</td>
                    <td>{summary.map(s => s.amount)
                        .filter(s => s < 0)
                        .reduce((current, prev) => current + prev, 0)}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Component;
