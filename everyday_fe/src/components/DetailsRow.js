function Component({ row }) {
    return (
        <tr>
            <td>{row.value.amount}</td>
            <td>{row.name} </td>
            <td>{row.date}</td>
        </tr>
    )
}

export default Component;
