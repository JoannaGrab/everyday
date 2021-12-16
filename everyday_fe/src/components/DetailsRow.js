import Button from './Button';

function Component({ row }) {
    const fullDate = row.date;
    const modifiedDate = fullDate.slice(0, fullDate.indexOf('T'));
    const mulipliedAmount = row.value.amount;
    const originalAmount = mulipliedAmount / 100;

    return (
        <tr>
            <td>{originalAmount}</td>
            <td>{row.title} </td>
            <td>{modifiedDate}</td>
            <td><Button label={'Edit'}/></td>
            <td><Button label={'Delete'}/></td>
        </tr>
    )
}

export default Component;
