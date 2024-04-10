import Layout from '../../Layout/Layout'
import Headphone from '../../components/Advertisement/Headphone'
import Watches from '../../components/Advertisement/Watches'
import AdsBannerPC from '../../components/Advertisement/AdsBannerPC'
import AdsBannerCamera from '../../components/Advertisement/AdsBannerCamera'
import Filter from '../../components/FilterSearch/Filter'
import Header from '../../components/Header_Footer/Header'
import Footer from '../../components/Header_Footer/Footer'

const Home = () => {
  return (
    <>
      <Header/>
      <Filter/>
      <Headphone/>
      <Watches />
      <AdsBannerPC />
      <AdsBannerCamera/>
      <Footer/>
    </>
  )
}

export default Home