import './Heading.css'
export default function Heading(){


    return (

        <>
       <div className="heading">
        <div className="logo">
            <img src="/src/images/wix.jpg" alt="This is a logo" height="50px" width="100px" />
        </div>
        <div className="icons">
        <div className="desktop">
            <a href=""><img src="/src/images/desktop.png" alt="This is a image" height="40px" width="70px"/></a>
        </div>
        <div className="phone">
            <a href=""><img src="/src/images/mobile.png" alt="This is a image" height="40px" width="70px"/></a>
        </div>
        </div>
        <div className="text">Click edit and create your own amazing website</div>
        <div className="text">Read more</div>
        <button className='button'>Click here to Edit</button>

        </div> 
        </>
    )

}