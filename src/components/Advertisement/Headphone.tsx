import AdsImg1 from "../../assets/image/left-banner-home.jpeg";
import { Advertisement, AdsDetail, AdsImage, AdsButton, AdsInfo } from "../../../public/styled"


const Headphone = () => {
  return (
    <Advertisement>
        <AdsDetail>
            <AdsImage src={AdsImg1}></AdsImage>
            <AdsInfo>
                <span>abc</span>
                <span>abc</span>
                <AdsButton to="/best-sellers">SHOP NOW</AdsButton>
            </AdsInfo>
        </AdsDetail>
    </Advertisement>
  )
}

export default Headphone