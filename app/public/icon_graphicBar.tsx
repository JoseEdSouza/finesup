
function icon_graphicBar(props:{color:string}) {
    return(
        <svg width="30" height="30" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1120_220)">
            <path d="M12.2704 32.333H2.39452V13.9997H12.2704V32.333ZM25.4382 2.33301H15.5624V32.333H25.4382V2.33301ZM38.6061 20.6663H28.7302V32.333H38.6061V20.6663ZM40.2521 35.6663H0.748535V38.9997H40.2521V35.6663Z" fill={props.color}/>
        </g>
        <defs>
            <clipPath id="clip0_1120_220">
            <rect width="39.5035" height="40" fill="white" transform="translate(0.748535 0.666504)"/>
            </clipPath>
        </defs>
        </svg>
    )
}

export default icon_graphicBar