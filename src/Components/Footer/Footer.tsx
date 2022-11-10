import './Footer.css'
import lever from '../../Assets/FooterAssets/leverlogo.svg'
const Footer = () => {
    return(
        <>
            <div className="footerSection">
                <p className="footerPara">Render Home Page</p>
                <span className="footerSpan">
                Jobs Powered by 
                    <img src={lever} className="footerImage"/>
                </span>

            </div>
        </>
    );
}

export default Footer;