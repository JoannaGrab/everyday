import InputsBar from './InputsBar';
import FinanceDetailsTable from './FinanceDetailsTable';
import SummaryTable from './SummaryTable';
import { useState } from 'react';

function Component() {
    const [amount, setAmount] = useState(0);
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [rows, setRows] = useState([]);

    const afterChange = (set) => {
        return (event) => {
            set(event.target.value);
        }
    }

    const inputs = [
        {
            'title': 'Amount',
            'value': amount,
            'function': afterChange(setAmount)
        },
        {
            'title': 'Name',
            'value': name,
            'function': afterChange(setName)
        },
        {
            'title': 'Date',
            'value': date,
            'function': afterChange(setDate)
        }
    ]

    const row = {
        'value': {
            'currency': 'PLN',
            'amount': amount * 100
        },
        'date': date,
        'name': name
    }

    const onClick = () => {
        setRows([...rows, row])
    }

    return (
        <div>
            <InputsBar inputs={inputs} onClick={onClick} />
            <FinanceDetailsTable rows={rows} />
            <SummaryTable summary={rows} />
        </div>
    )
}

export default Component;
