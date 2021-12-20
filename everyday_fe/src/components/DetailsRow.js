function Component({ row }) {
    const fullDate = row.date;
    const modifiedDate = fullDate.slice(0, fullDate.indexOf('T'));
    const mulipliedAmount = row.amount;
    const originalAmount = mulipliedAmount / 100;

    const onEdit = () => {
        alert('Operation edited!')
    };

    const onDelete = () => {
        alert('Operation deleted!')
    };

    return (
        <tr>
            <td>{originalAmount}</td>
            <td>{row.title} </td>
            <td>{modifiedDate}</td>
            <td><button type='button' onClick={onEdit}>Edit</button></td>
            <td><button type='button' onClick={onDelete}>Delete</button></td>
        </tr>
    )
}

export default Component;
