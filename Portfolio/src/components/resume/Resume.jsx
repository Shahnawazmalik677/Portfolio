import './Resume.css'
export default function Resume(){
         



    return (

        <>
         <div className="container">

            <div className="resume">
                <div className="resumeBox"></div>
                <div className="resumeText">Resume</div>
            </div>
            <div className="resumeButton">
                <div className="experience">Experience</div>
                <div className="downloadCv">
                    <button className='button'>DOWNLOAD CV</button>
                </div>
            </div>
            <div className="cards">
                <div className="card"></div>
                <div className="card"></div>
                <div className="education">Education</div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card last"></div>         
            </div>
            <div className="footer">
                <div className="copyright">© 2035 by Maya Nelson<br/>
                 Powered and secured by Wix</div>
            </div>
         </div>
        
        
        </>
    )
}