import { ChangeEvent} from "react";
import "./BoxDescriptionEditable.css";

function BoxDescriptionEditable(props: { descriptionCurrent: string; setDescription: (description: string) => void }) {

	const handleBoxDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
		props.setDescription(e.target.value);
	};

	return (
		<div id="boxDescriptionEditable">
			<label id="boxlabelDescriptionEditable">
				<strong>Descrição:</strong>
			</label>
			<textarea id="boxInputDescriptionEditable" value={props.descriptionCurrent} onChange={handleBoxDescription} />
		</div>
	);
}

export default BoxDescriptionEditable;
