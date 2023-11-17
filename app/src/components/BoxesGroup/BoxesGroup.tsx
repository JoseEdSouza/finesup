import Box from "../Box/Box";
import "./BoxesGroup.css";
import { Link } from "react-router-dom";

function BoxesGroup(){
    const boxes =[
        {
            id:1,
            name: "Jetski que eu vou comprar ano que vem pra minha irma teresa em belo horizonte",
            valueCurrent: 1000,
            valueMax: 2900
        },
        {
            id:2,
            name: "Frigobar",
            valueCurrent: 100,
            valueMax: 500
        },
        {
            id:3,
            name: "Geladeira",
            valueCurrent: 1250,
            valueMax: 2500
        },
        {
            id:4,
            name: "Mesa",
            valueCurrent: 1500,
            valueMax: 4000
        },
    ]

    return(
        <div id="containerBoxes">
            {
                boxes.map((box)=>{
                    return (
                        <Box name={box.name} valueCurrent={box.valueCurrent} valueMax={box.valueMax}/>
                    )
                })
            }
            <Link to="/1/addBoxes">
                <button id="plus">
                    <img src="./plus_icon.svg" id="icon"/>
                </button>
            </Link>
        </div>
    );
}

export default BoxesGroup;