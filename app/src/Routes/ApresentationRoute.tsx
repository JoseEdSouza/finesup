import { useState } from "react"
import SplashScreen from "../pages/SplashScreen"
import HomeApresentation from "../pages/HomeApresentation"

function ApresentationRoute() {
    const [apresentation, setApresentation] = useState(0)

    setTimeout(() => {
        setApresentation(1)
    }, 5000)

    return (
        <>
            {apresentation === 0 ?
                <SplashScreen />
                : <HomeApresentation />
            }
        </>
    )
}

export default ApresentationRoute