import InputsBar from './InputsBar';
import FinanceDetailsTable from './FinanceDetailsTable';
import SummaryTable from './SummaryTable';
import { useState, useEffect } from 'react';

function Component() {
    const [rows, setRows] = useState([]);

    async function getOperations() {
        const url = 'http://localhost:3001/finance/balance?from=2021-01-0100:00:00&to=2021-12-1500:00:00';
        const data = await fetch(url);
        const json = await data.json();
        setRows(json);
    }

    useEffect(() => { getOperations() }, []);

    const onClick = async (operation) => {
        operation.value.amount = operation.value.amount * 100;

        await fetch('http://127.0.0.1:3001/finance/balance/operation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(operation),
        });
        getOperations();
    }

    return (
        <div>
            <InputsBar onAdd={onClick} />
            <FinanceDetailsTable rows={rows} />
            <SummaryTable summary={rows} />
        </div>
    )
}

export default Component;
