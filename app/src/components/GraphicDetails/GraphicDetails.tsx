import GraphicsCategory from "../GraphicsCategory/GraphicsCategory"
import "./GraphicDetails.css"

function GraphicDetails(props: { chartType: number, pieChartType: number }) {
    return (
        <>
            {props.chartType === 0 ?
                props.pieChartType === 0 ?
                    <div className="pieChartDetails">
                        <div className="chartCategoriesGroup">
                            <GraphicsCategory category="sales" categoryType="revenue" value={89898.00} />
                            <GraphicsCategory category="bonus" categoryType="revenue" value={89898.00} />
                            <GraphicsCategory category="cashback" categoryType="revenue" value={89898.00} />
                        </div>
                    </div>
                    :
                    <div className="pieChartDetails">
                        <div className="chartCategoriesGroup">
                            <GraphicsCategory category="alimentation" categoryType="expense" value={89898.00} />
                            <GraphicsCategory category="leisure" categoryType="expense" value={89898.00} />
                            <GraphicsCategory category="donation" categoryType="expense" value={89898.00} />
                        </div>
                    </div>
                : props.chartType === 1 ?
                    <div id="barChartDetails">
                        <div className="chartCategoriesGroup">
                        </div>
                    </div>
                    :
                    <div id="lineChartDetails">
                        <div id="lineChartRevenueDetails">
                            <div className="chartCategoriesGroup">
                            </div>
                        </div>
                        <div id="lineChartExpenseDetails">
                            <div className="chartCategoriesGroup">
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default GraphicDetails