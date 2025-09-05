import React from "react";
import Profile from "./Profile";
import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    const toProfile = () => {
        navigate("/profile");
    };

    return (
        <div className="App">
            <header className="App-header">
            <img
            className="App-logo"
            src="logo.png"
            width="1200"
            />
            
            <div className="icon-container">
            <a
                href="https://github.com/BKobak"
                target="_blank"
                rel="noopener noreferrer">
                <img
                className="cloud-icon"
                width="150"
                height="150"
                style={{top: "-100px",right:"230px" , position: "relative"}}
                src="https://img.icons8.com/clouds/100/github.png"
                />
            </a>
            <a
                target="_blank"
                rel="noopener noreferrer"
                onClick={toProfile}>
                <img
                className="cloud-icon"
                alt="AboutMe"
                width="150"
                height="150"
                style={{top: "15px", position: "relative"}}
                src="https://img.icons8.com/clouds/100/000000/user-female-circle.png"
                />
            </a>
            <a
                href="https://www.linkedin.com/in/barbara-kobak"
                target="_blank"
                rel="noopener noreferrer">
                <img
                className="cloud-icon"
                width="150"
                height="150"
                style={{top: "-100px",left:"230px" , position: "relative"}}
                src="https://img.icons8.com/clouds/100/linkedin.png"
                />
            </a>
        </div>
        {/* Download CV Button */}
        <div>
                <a 
                    href="/BarbaraKobak_CV.pdf"
                    download
                    style={{
                        position: "absolute",
                        top: "30px",
                        right: "35px",
                        padding: "12px 25px",
                        backgroundColor: "#27375B",
                        color: "lightgray",
                        fontSize: "15px",
                        fontWeight: "bold",
                        borderRadius: "25px",
                        textDecoration: "none",
                        boxShadow: "0 5px 15px rgba(0,0,0,0.8)",
                        transition: "all 0.3s ease",
                        zIndex: 10,
                    }}
                    onMouseOver={e => {
                        e.target.style.backgroundColor = "#27375B";
                        e.target.style.transform = "translateY(-3px)";
                    }}
                    onMouseOut={e => {
                        e.target.style.backgroundColor = "#27375B";
                        e.target.style.transform = "translateY(0)";
                    }}
                >
                    Download CV
                </a>

        </div>
      </header>
    </div>
    )
}
export default Home;