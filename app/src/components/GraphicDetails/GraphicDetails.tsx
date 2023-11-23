import GraphicsCategory from "../GraphicsCategory/GraphicsCategory"
import "./GraphicDetails.css"

function GraphicDetails(props: { chartType: number, pieChartType: number }) {
    return (
        <>
            {props.chartType === 0 ?
                props.pieChartType === 0 ?
                    <div className="pieChartDetails">
                        <div className="chartCategoriesGroup">
                            <GraphicsCategory categorie="sales" categorieType="revenue" value={89898.00} />
                            <GraphicsCategory categorie="bonus" categorieType="revenue" value={89898.00} />
                            <GraphicsCategory categorie="cashback" categorieType="revenue" value={89898.00} />
                        </div>
                    </div>
                    :
                    <div className="pieChartDetails">
                        <div className="chartCategoriesGroup">
                            <GraphicsCategory categorie="alimentation" categorieType="expense" value={89898.00} />
                            <GraphicsCategory categorie="leisure" categorieType="expense" value={89898.00} />
                            <GraphicsCategory categorie="donation" categorieType="expense" value={89898.00} />
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