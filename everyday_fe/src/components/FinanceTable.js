import InputsBar from './InputsBar';
import FinanceDetailsTable from './FinanceDetailsTable';
import SummaryTable from './SummaryTable';
import LoginPanel from './LoginPanel';
import { useState, useEffect } from 'react';
import BalanceChart from './charts/BalanceChart';
import AccumulatedChart from './charts/AccumulatedChart';
import Stack from './common/Stack';
import styled from 'styled-components';

function Component() {
    const pageLayoutStyle = {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        margin: 'auto'
    }
    const columnStyle = {
        width: '40%',
        margin: '50px',
    }
    const tableStyle = {
        border: '1px solid black',
        margin: '50px',
        padding: '20px'
    }
    const balanceChartStyle = {
        border: '1px solid black',
        margin: '50px',
        padding: '20px',
        marginTop: '0px'
    }

    const [rows, setRows] = useState([]);

    async function getOperations() {
        // const url = 'http://localhost:3001/v1/finance/operations?from=2021-01-0100:00:00&to=2021-12-1500:00:00';
        const url = 'http://localhost:3001/finance/balance?from=2021-01-0100:00:00&to=2021-12-1500:00:00';
        const data = await fetch(url);
        const json = await data.json();
        setRows(json);
    }

    useEffect(() => { getOperations() }, []);

    const onClick = async (operation) => {
        operation.amount = operation.amount * 100;

        // const url = 'http://127.0.0.1:3001/v1/finance/operations'
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
        <div style={pageLayoutStyle}>
            <div style={columnStyle}>
                <div style={balanceChartStyle}>
                    <BalanceChart data={rows} />
                </div>
                <div style={balanceChartStyle}>
                    <AccumulatedChart data={rows} />
                </div>
                <div>
                    <LoginPanel />
                </div>
                <Stack children={[<Box>sfdf</Box>, <Box>pou</Box>]}/>
            </div>
            <div style={tableStyle}>
                <InputsBar onAdd={onClick} />
                <br />
                <FinanceDetailsTable rows={rows} />
                <br />
                <SummaryTable summary={rows} />
            </div>
        </div>
    )
}

const Box = styled.div`
    background-color: red;
`


export default Component;
