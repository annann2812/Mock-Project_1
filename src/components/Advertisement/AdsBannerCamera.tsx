import { AdsButton, AdsDetail, AdsImage, AdsInfoBanner, Advertisement } from "../../../public/styled"
import AdsImg4 from "../../assets/image/sub-banner-home-2.jpeg"
const AdsBannerCamera = () => {
  return (
    <Advertisement>
        <AdsDetail>
            <AdsImage src={AdsImg4}></AdsImage>
            <AdsInfoBanner>
              <span>asdfghjk</span>
              <span>asdfghjk</span>
              <AdsButton to = "/best-sellers">SHOP NOW</AdsButton>
            </AdsInfoBanner>
        </AdsDetail>

    </Advertisement>
  )
}

export default AdsBannerCamera