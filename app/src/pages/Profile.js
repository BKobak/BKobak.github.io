import React from 'react'

function Profile() {
    return (
        <div className='App'>
            <header className='App-header'>
                <h1 style={{ marginBottom: "1rem", position: "relative" }}>ABOUT ME</h1>
                <p style={{ maxWidth: "70%", margin: "0 auto", lineHeight: "1.6", fontSize: "1.1rem" }}>
                    Hi! I’m <strong>Barbara</strong>, currently pursuing my <strong>MSc in Software Engineering </strong>
                    at King’s College London, after graduating with a <strong>First-Class BSc in Computer Science </strong> 
                    from the University of Roehampton.
                    <br /><br />
                    I am passionate about <strong>mobile app development, AI-driven applications, and cloud technologies</strong>. 
                    I have hands-on experience with <strong>Python, C++, C#, F#, HTML, CSS, JavaScript, React, SQL, Git, GitHub</strong>, 
                    as well as working in <strong>Agile and Scrum</strong> environments.  
                    <br /><br />
                    I enjoy solving real-world problems with technology, building clean and scalable solutions, 
                    and continuously learning new tools to improve my craft.
                </p>
            </header>
        </div>
    )
}

export default Profile;
