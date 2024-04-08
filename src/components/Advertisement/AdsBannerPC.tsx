import { AdsButton, AdsDetail, AdsImage, AdsInfoBanner, Advertisement } from '../../../public/styled'
import AdsImg3 from "../../assets/image/sub-banner-home-1.jpeg"

const AdsBannerPC = () => {
  return (
    <Advertisement>
      <AdsDetail>
        <AdsImage src={AdsImg3}></AdsImage>
        <AdsInfoBanner>
          <span>asd</span>
          <span>asd</span>
          <AdsButton to = "/best-sellers">SHOP NOW</AdsButton>
        </AdsInfoBanner>
      </AdsDetail>
    </Advertisement>
  )
}

export default AdsBannerPC