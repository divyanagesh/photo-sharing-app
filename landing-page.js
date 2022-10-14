import { Link } from 'react-router-dom';
import './index.css';
import "landing-page.css"
const LandingPage = () => {

    return (
        <>
            <div className="img">
               <img src="https://th.bing.com/th/id/OIP.0eQ151pvCZEUJH9DHFMwUAHaJ4?pid=ImgDet&rs=1" alt="img"></img>
                <div className='second'>
                    <h2>10x Team 04</h2>
                    <Link to='Post'><button>Enter</button></Link>
                </div>

            </div>


        </>
    )
}
export default LandingPage;