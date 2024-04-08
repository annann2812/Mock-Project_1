import Layout from '../../Layout/Layout'
import Headphone from '../../components/Advertisement/Headphone'
import Watches from '../../components/Advertisement/Watches'
import AdsBannerPC from '../../components/Advertisement/AdsBannerPC'
import AdsBannerCamera from '../../components/Advertisement/AdsBannerCamera'
import Categories from '../../components/QuickCategories/Categories'
import Filter from '../../components/FilterSearch/Filter'

const Home = () => {
  return (
    <Layout>
      <Filter/>
      <Headphone/>
      <Watches />
      <AdsBannerPC />
      <AdsBannerCamera/>
      <Categories />
    </Layout>
  )
}

export default Home