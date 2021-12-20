import { VictoryBar, VictoryChart, VictoryAxis, VictoryStack, VictoryLegend } from 'victory';

function Component({ data }) {
    const navStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    }

    const legendStyle = {
        display: 'flex',
        flexDirection: 'row',
    }
    const a = data.map(s => s.amount)
        .filter(s => s > 0)

    const incomes = data.map(s => s.amount)
        .filter(s => s > 0)
        .reduce((current, prev) => current + prev, 0)

    const expenses = Math.abs(data.map(s => s.amount)
        .filter(s => s < 0)
        .reduce((current, prev) => current + prev, 0))

    const test = [
        { type: 1, amount: incomes },
        { type: 2, amount: expenses }
    ];

    // const test1 = [
    //     { type: 1, amount: 3540 },
    //     { type: 2, amount: 1570 }
    // ];
    // const test2 = [
    //     { type: 1, amount: 1350 },
    //     { type: 2, amount: 1050 }
    // ];
    // const test3 = [
    //     { type: 1, amount: 940 },
    //     { type: 2, amount: 1080 }
    // ];

    function countBalance(incomes, expenses) {
        const balance = incomes - expenses;
        return (balance >= 0) ? `+ ${balance} zł` : `- ${balance} zł`;
    }

    const onClickLeft = () => {
        alert('Clicked left');
    };

    const onClickRight = () => {
        alert('Clicked right');
    };
    return (
        <div>
            <div style={navStyle}>
                <button type='button' onClick={onClickLeft}>&lt;</button>
                <h1>Styczeń</h1>
                <button type='button' onClick={onClickRight}>&gt;</button>
            </div>

            <div style={legendStyle}>
                <VictoryChart
                    // domainPadding will add space to each side of VictoryBar to
                    // prevent it from overlapping the axis
                    domainPadding={150}
                >
                    <VictoryAxis
                        // tickValues specifies both the number of ticks and where
                        // they are placed on the axis
                        tickValues={[1, 2]}
                        tickFormat={["Incomes", "Expenses"]}
                    />
                    <VictoryAxis
                        dependentAxis
                        // tickFormat specifies how ticks should be displayed
                        tickFormat={(x) => (`${x}`)}
                    />
                    {/* <VictoryStack> */}
                    <VictoryBar
                        data={test}
                        x="type"
                        y="amount"
                    />
                    {/* <VictoryBar
                            data={test2}
                            x="type"
                            y="amount"
                        />
                        <VictoryBar
                            data={test3}
                            x="type"
                            y="amount"
                        /> */}
                    {/* </VictoryStack> */}
                </VictoryChart>
                <VictoryLegend x={125} y={10}
                    title="Legend"
                    centerTitle
                    // orientation="vertical"
                    gutter={20}
                    style={{ border: { stroke: "black" }, title: { fontSize: 20 } }}
                    data={[
                        { name: "One" }, { name: "Two" }, { name: "Three" }
                    ]}
                />
            </div>
            <h2>{countBalance(incomes, expenses)}</h2>
        </div>
    )
}

export default Component;
