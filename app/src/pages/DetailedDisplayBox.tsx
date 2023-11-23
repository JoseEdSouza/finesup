import { useLocation } from "react-router-dom";
import BoxDetails from "../components/BoxDetails/BoxDetails";
import BoxProgressDetails from "../components/BoxProgressDetails/BoxProgressDetails";
import NavBarDefault from "../components/NavBarDefault/NavBarDefault";
import { useState } from "react";

function DetailedDisplayBox() {
  const location = useLocation();
  const data = location.state;

  const [valueBoxChange, setValueBox] = useState<number>(0);

  const handleValueBox = (valueBox: number) => {
    let valueToUpdate = valueBox

    if (valueToUpdate > data.valueMax) valueToUpdate = data.valueMax;
    else if (valueToUpdate < 0) valueToUpdate = 0;
    return updateBoxValue(valueToUpdate)
  };


  const updateBoxValue = (value:number):number => {
    setValueBox(value)
    data.valueCurrent = value
    return value
  }

  const updateProgress = (): number => {
    return data.valueCurrent;
  };

  return (
    <>
      <NavBarDefault name="Caixinha" backTo="2" />
      <BoxProgressDetails
        name={data.name}
        valueCurrent={updateProgress()}
        valueMax={data.valueMax}
      />
      <BoxDetails
        valueMax={data.valueMax}
        onValueBox={(value:number) => handleValueBox(value)}
        currentValue = {data.valueCurrent}
      />
    </>
  );
}

export default DetailedDisplayBox;
