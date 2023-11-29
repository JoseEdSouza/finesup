import { useLocation } from "react-router-dom";
import CreateButtons from "../CreateButtons/CreateButtons";
import BoxDescriptionEditable from "../BoxDescriptionEditable/BoxDescriptionEditable";
import BoxNameEditable from "../BoxNameEditable/BoxNameEditable";
import BoxValueEditable from "../BoxValueEditable/BoxValueEditable";
import "./BoxEditableContainer.css";
import { useEffect, useRef, useState } from "react";
import BoxController from "../../controllers/BoxController";
import Box from "../../models/Box";

function BoxEditableContainer() {
	const location = useLocation();
	const data = location.state;

	// useStates for older box
	const [nameBox, setNameBox] = useState("");
	const [valueBox, setValueBox] = useState(0);
	const [descriptionBox, setDescriptionBox] = useState("");
	const [isLoading, setIsLoading] = useState(true); // set loading to true on component mount

	// useStates for box update
	const [actualBoxName, setActualBoxName] =  useState("");

	const boxController = new BoxController();

	const refLoadDatas = useRef(false);

	const loadData = async () => {
		try {
			await boxController.get(data.name).then((fetchBox) => {
				setNameBox(fetchBox.name);
				setValueBox(fetchBox.finalValue);
				setDescriptionBox(fetchBox.description);
                setActualBoxName(fetchBox.name);
                setIsLoading(false);
                console.log(actualBoxName);
			});
		} catch (error) {
			console.log(error);
		}
	};

	const updateBox = async () => {
		const box = new Box(nameBox, descriptionBox, valueBox);
		return await boxController.update(actualBoxName, box);
	};

	useEffect(() => {
		if (refLoadDatas.current === false) {
			loadData();
			refLoadDatas.current = true;
            console.log(actualBoxName);
		}
	}, []);

	return (
		<div id="editableBoxContainer">
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<>
					<BoxNameEditable boxNameCurrent={nameBox} setName={setNameBox} />
					<BoxValueEditable valueMax={valueBox} setValue={setValueBox} />
					<BoxDescriptionEditable descriptionCurrent={descriptionBox} setDescription={setDescriptionBox} />
					<CreateButtons nameButton="Editar e salvar caixinha" backTo="/1" functionOnCreate={updateBox} />
				</>
			)}
		</div>
	);
}

export default BoxEditableContainer;
