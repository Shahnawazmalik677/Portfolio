import './About.css'
export default function About(){
 

    return (

        <>
        <div className="about">

            <div className="leftBackground"></div>
            
            <div className="middleContent">
            <div className="details">
                <div className="photo">
                    <img className="image" src="/src/images/image.JPG" alt="This is a image" />
                </div>
                <div className="name">Mohammad</div>
                <div className="name">Shahnawaz</div>
                <div className="name">Malik</div>
                <br/>
                <div className="line"></div>
                <div className="role">Software Quality Enginner</div>
                <div className="social">
                    <div className="svg">
                       <a href=''><img src='/src/images/instagram.png' width="25" height="25"/></a>
                    </div>
                    <div className="svg">
                    <a href='https://www.linkedin.com/in/mohammadshahnawaz677/' target="_blank"><img src='/src/images/linkdin.png' width="25" height="25"/></a>
                    </div>
                    <div className="svg">
                    <a href='https://leetcode.com/msmshahnawaz/' target="_blank"><img src='/src/images/leetcode.png' width="25" height="25"/></a>
                    </div>
                    <div className="svg">
                    <a href='https://github.com/Shahnawazmalik677' target="_blank"><img src='/src/images/github.png' width="25" height="25"/></a>
                    </div>
                </div>
            </div>
            <div className="aboutme">
                    <div className="text1">Hello</div>
                    <div className="text2">Here's who I am & what I do</div>
                    <div className="buttons">
                        <button className='button'>RESUME</button>
                        <button className='button'>PROJECTS</button>
                    </div>
                    <div className="me">A software Quality Enginner Who logs bugs in dayTime and Resolve them at nights</div>

                </div>
            </div>
        </div>
        
        </>
    )

}