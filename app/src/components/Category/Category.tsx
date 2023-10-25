import "./Category.css";

function Category(props:{label:string, icon:string, typeIcon:string}){
    return(
        <div className="CategoryContainer">
            <div>
                <img src={props.icon} className="IconCategory" id={props.typeIcon} alt="" />
            </div>
            <label className="TypeCategory">{props.label}</label>
        </div>
    );
}

export default Category;