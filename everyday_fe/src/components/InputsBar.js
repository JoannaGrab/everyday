import Input from './Input';
import Button from './Button';
import { useState } from 'react';

function Component({ onAdd }) {
    const [operation, setOperation] = useState({
        value: {
            currency: 'PLN',
            amount: 0
        },
        date: '',
        title: ''
    })

    const amountChanged = (event) => {
        const str = event.target.value;
        const amount = Number(str);
        setOperation({
            value: {
                currency: 'PLN',
                amount: amount
            },
            date: operation.date,
            title: operation.title
        })
    }

    const titleChanged = (event) => {
        setOperation({
            value: {
                currency: 'PLN',
                amount: operation.value.amount
            },
            date: operation.date,
            title: event.target.value
        })
    }

    const dateChanged = (event) => {
        setOperation({
            value: {
                currency: 'PLN',
                amount: operation.value.amount
            },
            date: event.target.value,
            title: operation.title
        })
    }

    const onClick = () => {
        onAdd(operation);
    };

    const barStyle = {
        display: 'flex',
        flexDirection: 'row'
    };

    return (
        <div style={barStyle}>
            <Input title="Amount" value={operation.value.amount} onChange={amountChanged} />
            <Input title="Title" value={operation.title} onChange={titleChanged} />
            <Input title="Date" value={operation.date} onChange={dateChanged} />
            <Button marginTop={'50px'} height={'10%'} onClick={onClick} label={'Add'} />
        </div>
    )
}

export default Component;
