function boxIcon(props:{width:string, height:string}) {
    return (
            <svg width={props.width} height={props.height} viewBox="0 0 224 183" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="11.6831" y="42.6841" width="201.486" height="140.016" fill="#F9BE89"/>
    <rect x="89.373" y="42.6841" width="49.5178" height="26.9549" fill="#747171" fill-opacity="0.46"/>
    <g filter="url(#filter0_d_466_147)">
        <mask id="path-3-outside-1_466_147" maskUnits="userSpaceOnUse" x="4" y="0" width="216" height="44" fill="black">
        <rect fill="white" x="4" width="216" height="44"/>
        <path d="M4 0H220V42.6878H4V0Z"/>
        </mask>
        <path d="M4 0H220V42.6878H4V0Z" fill="#F9BE89" shape-rendering="crispEdges"/>
        <path d="M220 42.1878H4V43.1878H220V42.1878Z" fill="black" fill-opacity="0.17" mask="url(#path-3-outside-1_466_147)"/>
    </g>
    <path d="M86.8149 29.8813H141.455V42.6877H86.8149V29.8813Z" fill="#747171" fill-opacity="0.46"/>
    <defs>
        <filter id="filter0_d_466_147" x="0" y="0" width="224" height="51.1877" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_466_147"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_466_147" result="shape"/>
        </filter>
    </defs>
    </svg>
    )
}

export default boxIcon