import AdsImg2 from "../../assets/image/right-banner-home.jpeg";
import { Advertisement, AdsDetail, AdsImage, AdsButton, AdsInfo } from "../../../public/styled"


const Watches = () => {
  return (
    <Advertisement>
        <AdsDetail>
            <AdsImage src={AdsImg2}></AdsImage>
            <AdsInfo>
                <span>abc</span>
                <span>abc</span>
                <AdsButton to="/new-arrivals">SHOP NOW</AdsButton>
            </AdsInfo>
        </AdsDetail>
    </Advertisement>
  )
}

export default Watches