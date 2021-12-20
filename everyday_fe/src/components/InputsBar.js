import { useState } from 'react';

function Component({ onAdd }) {
    const [operation, setOperation] = useState({
        currency: 'PLN',
        amount: '',
        date: '',
        title: ''
    })

    const amountChanged = (event) => {
        const str = event.target.value;
        const amount = Number(str);
        setOperation({
            currency: 'PLN',
            amount: amount,
            date: operation.date,
            title: operation.title
        })
    }

    const titleChanged = (event) => {
        setOperation({
            currency: 'PLN',
            amount: operation.amount,
            date: operation.date,
            title: event.target.value
        })
    }

    const dateChanged = (event) => {
        setOperation({
            currency: 'PLN',
            amount: operation.amount,
            date: event.target.value,
            title: operation.title
        })
    }

    const onSubmit = () => {
        onAdd(operation);
    };

    return (
        <form>
            <label for='amount'>Amount</label><br />
            <input type='number'
                id='amount'
                value={operation.amount}
                onChange={amountChanged}>
            </input><br />
            <label for='title'>Title</label><br />
            <input type='text'
                id='title'
                value={operation.title}
                onChange={titleChanged}>
            </input><br />
            <label for='date'>Date</label><br />
            <input type='date'
                id='date'
                value={operation.date}
                onChange={dateChanged}>
            </input><br />
            <button type='submit' onClick={onSubmit}>Add</button>
        </form>
    )
}

export default Component;
