import { VictoryGroup, VictoryArea, VictoryChart, VictoryLegend } from 'victory';

function Component({ data }) {

    return (
        <VictoryChart>
            <VictoryGroup>
                <VictoryArea
                    data={[
                        { x: 1, y: 3300 },
                        { x: 2, y: 5500 },
                        { x: 3, y: 8400 },
                        { x: 4, y: 11550 },
                        { x: 5, y: 13370 }
                    ]}
                />
                <VictoryArea
                    data={[
                        { x: 1, y: 1560 },
                        { x: 2, y: 3460 },
                        { x: 3, y: 5560 },
                        { x: 4, y: 6900 },
                        { x: 5, y: 8700 }
                    ]}
                />
            </VictoryGroup>
            <VictoryLegend x={125} y={10}
                title="Legend"
                centerTitle
                orientation="vertical"
                gutter={20}
                style={{ border: { stroke: "black" }, title: { fontSize: 20 } }}
                data={[
                    { name: "Incomes" }, { name: "Expenses" }
                ]}
            />
        </VictoryChart>
    )
}

export default Component;
