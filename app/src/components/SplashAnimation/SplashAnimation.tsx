import "./SplashAnimation.css";

function SplashAnimation() {
    return (
        <div className="AnimationContainer">
            <img src="./icon-logo.png" className="LogoSplash"/>
            <div className="texts">
                <p className="text">Fine's Up</p>
                <p className="text2">Dê um <b>Up</b> nas suas finanças</p>
            </div>
            <div className="load"></div>
        </div>
    )
}

export default  SplashAnimation;
