import './post-view.css'
import camera from './data/camera.png'
import logo from './data/logo.png'
import { useEffect, useState } from "react"
const PostView = () => {
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3004/user').then((data) => {
            return data.json();
        }).then((userData) => {
            setUserData(userData)
            console.log(userData);
        })
    }, []);
    return (
        <>
            <div className="container">
                <header>
                    <div className="nav">
                        <img src={logo} alt="instclone"></img>
                        <img src={camera} alt="camera"></img>
                    </div>
                </header>
                <hr />
                <div >
                    <div>
                        {
                            userData.map((user,i) => {
                                return (
                                    <div className='post'>
                                        <div className='userinformation' key={i}>
                                            <p className='p'><b>...</b></p>
                                            <h3>{user.name}</h3>
                                            <span>{user.location}</span>

                                        </div>
                                        <div className='user-image'>
                                            <img src={user.PostImage} alt='User-image'></img>

                                        </div>
                                        <div className='likes'>
                                            <span>&#x2764;</span>
                                            
                                        </div>
                                        <div className='user-meta'>
                                        <span>{user.date}</span>
                                        </div>
                                        <div className='user-like'>
                                            {user.likes} likes
                                        </div>
                                        <div className='user-description'>
                                            {user.description}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>

            </div>
        </>

    )
}
export default PostView;