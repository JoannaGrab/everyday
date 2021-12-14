import DetailsRow from './DetailsRow';

function Component({ rows }) {
    return (
        <table>
            <thead>
                <tr>
                    <th> Amount</th>
                    <th> Name</th>
                    <th> Date</th>
                </tr>
            </thead>
            <tbody>
                {rows.map(r =>
                    <DetailsRow row={r} />
                )}
            </tbody>
        </table>
    )
}

export default Component;
