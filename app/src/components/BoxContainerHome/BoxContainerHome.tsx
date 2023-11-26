import { useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./BoxContainerHome.css";
import BoxHome from "../BoxHome/BoxHome";
import BoxController from "../../controllers/BoxController";
import Box from "../../models/Box";

function BoxContainerHome() {
	const [boxFlag] = useState(true);

	const boxController = new BoxController();
	const createBoxComponent = (box: Box) => {
		return <BoxHome name={box.name} valueCurrent={box.actualValue} valueMax={box.finalValue} />;
	};
	let boxes = boxController.getAll();
	let boxList: JSX.Element[] = [];
    boxes.then((boxlist) => {
		const b: JSX.Element[] = [];
		boxlist.forEach((box) => {
			b.push(createBoxComponent(box));
		});
        boxList = b;
	});
    setTimeout(() => {
        
    }, 2000);
	return (
		<div id="boxContainer">
			<label id="labelBoxes">
				<strong>Minhas caixinhas</strong>
			</label>
			{boxFlag === true ? (
				<>
					<ProgressBar
						valueCurrent={100}
						valueMax={1000}
						progress={1}
						height={2.92}
						width={28.99}
						top={7.91}
						backgroundStyle="var(--primaryColor)"
						labelStyle="var(--secondaryColor)"
					/>
					<div id="boxGridHome">{
                        boxList.map((box) => (<>{box}</>))
                    }</div>
				</>
			) : (
				<label id="boxLess">
					<strong>Sem caixinhas no momento. Clique para adicionar !!!</strong>
				</label>
			)}
		</div>
	);
}

export default BoxContainerHome;
