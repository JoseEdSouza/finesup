import { useEffect, useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./BoxContainerHome.css";
import BoxHome from "../BoxHome/BoxHome";
import BoxController from "../../controllers/BoxController";
import Box from "../../models/Box";

function BoxContainerHome() {
	const [boxFlag, setBoxFlag] = useState(true);
	const [boxList, setBoxList] = useState<JSX.Element[]>()
	const [sumActualValue, setSumActualValue] = useState(0)
	const [sumTotalValue, setSumTotalValue] = useState(0)

	const boxController = new BoxController();

	useEffect(() => {
		const fecthData = async () => {
			try {
				const boxes = await boxController.getAll();
				const boxesElements = boxes.map((box) => createBoxComponent(box))
				setBoxList(boxesElements)
				setBoxFlag(true)

				const totalFinalValue = sumAllTotalValue(boxes)
				setSumTotalValue(totalFinalValue)
				const totalActualValue = sumAllActualValue(boxes)
				setSumActualValue(totalActualValue)
			}
			catch (error) {
				console.log(error)
				setBoxFlag(false)
			}
		}

		fecthData()
	}, [boxController])

	const createBoxComponent = (box: Box) => {
		return <BoxHome name={box.name} valueCurrent={box.actualValue} valueMax={box.finalValue} />;
	};

	const sumAllActualValue = (boxList: Box[]): number => {
		let sum = 0
		boxList.forEach((box) =>{
			sum += box.actualValue
		})
		return sum
	}

	const sumAllTotalValue = (boxList: Box[]): number => {
		let sum = 0
		boxList.forEach((box) =>{
			sum += box.finalValue
		})
		return sum
	}
	
	return (
		<div id="boxContainer">
			<label id="labelBoxes">
				<strong>Minhas caixinhas</strong>
			</label>
			{boxFlag === true ? (
				<>
					<ProgressBar
						valueCurrent={sumActualValue}
						valueMax={sumTotalValue}
						progress={1}
						height={2.92}
						width={28.99}
						top={7.91}
						backgroundStyle="var(--primaryColor)"
						labelStyle="var(--secondaryColor)"
					/>
					<div id="boxGridHome">{
						boxList
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
