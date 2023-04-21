import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";

const Landing = () => {
    return (
        <main>
            <nav>
                <img src={logo} alt="" className="logo" />
            </nav>
            <div className="container page">
                <div className="info">
                    <h1>
                        job <span>tracking</span> app
                    </h1>
                    <p>
                        This is the app where the job seekers and the employers can connect and get to be fixed.
                        A more like an avenue.
                        This is the app where the job seekers and the employers can connect and get to be fixed.
                        A more like an avenue.
                        This is the app where the job seekers and the employers can connect and get to be fixed.
                        A more like an avenue.
                        This is the app where the job seekers and the employers can connect and get to be fixed.
                        A more like an avenue.
                    </p>
                    <button className="btn bth-hero"> Login/Regitser</button>
                </div>
                <img src={main} alt='landing pag img' className="img" />
            </div>
        </main>
    )
}
export default Landing