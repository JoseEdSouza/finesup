import GraphicsCategory from "../GraphicsCategory/GraphicsCategory"
import "./GraphicDetails.css"

function GraphicDetails(props: { chartType: number, pieChartType: number }) {
    return (
        <>
            {props.chartType === 0 ?
                props.pieChartType === 0 ?
                    <div className="pieChartDetails">
                        <div className="chartCategoriesGroup">
                            <GraphicsCategory category="sales" categoryType="revenue" value={898.00} />
                            <GraphicsCategory category="bonus" categoryType="revenue" value={1009.00} />
                            <GraphicsCategory category="cashback" categoryType="revenue" value={31.00} />
                        </div>
                    </div>
                    :
                    <div className="pieChartDetails">
                        <div className="chartCategoriesGroup">
                            <GraphicsCategory category="alimentation" categoryType="expense" value={239.00} />
                            <GraphicsCategory category="leisure" categoryType="expense" value={3290.00} />
                            <GraphicsCategory category="donation" categoryType="expense" value={45.00} />
                        </div>
                    </div>
                : props.chartType === 1 ?
                    <div id="barChartDetails">
                        <div className="chartCategoriesGroup">
                            <GraphicsCategory category="alimentation" categoryType="expense" value={3.00} />
                            <GraphicsCategory category="leisure" categoryType="expense" value={40.00} />
                            <GraphicsCategory category="clothes" categoryType="expense" value={5.00} />                            
                            <GraphicsCategory category="health" categoryType="expense" value={10.00} />
                            <GraphicsCategory category="donation" categoryType="expense" value={14.00} />
                            <GraphicsCategory category="travel" categoryType="expense" value={1.00} />
                            <GraphicsCategory category="pets" categoryType="expense" value={29.00} />
                        </div>
                    </div>
                    :
                    <div id="lineChartDetails">
                        <div id="lineChartRevenueDetails">
                            <div className="chartCategoriesGroup">
                                <GraphicsCategory category="alimentation" categoryType="expense" value={3.00} />
                                <GraphicsCategory category="leisure" categoryType="expense" value={40.00} />
                                <GraphicsCategory category="leisure" categoryType="expense" value={40.00} />
                                <GraphicsCategory category="clothes" categoryType="expense" value={5.00} />
                            </div>
                        </div>
                        <div id="lineChartExpenseDetails">
                            <div className="chartCategoriesGroup">
                                <GraphicsCategory category="cashback" categoryType="revenue" value={3.00} />
                                <GraphicsCategory category="sales" categoryType="revenue" value={40.00} />
                                <GraphicsCategory category="bonus" categoryType="revenue" value={40.00} />
                                <GraphicsCategory category="reversal" categoryType="revenue" value={5.00} />
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default GraphicDetails