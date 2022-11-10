import './Header.css'
import headImg  from '../../Assets/HeaderAssets/headerImage.png'

const Header = () => {
    return(
        <>
            <div className="head">
                <img src={headImg} className="img"/>
            </div>
            <div className="heading">
                <h2 className="">Full-Stack Engineer</h2>
                <p className="">REMOTE OPTIONAL /PRODUCT – ENGINEERING /FULL-TIME</p>
            </div>
        </>
    )
}

export default Header; 