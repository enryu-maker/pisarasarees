import React from 'react'
import HeadBanner from './Components/HeadBanner'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Index from './Nav/Index'
import { colors } from './Assets/Theme'
import Tab from './Components/Tab'
import useMediaQuery from './Components/useMediaQuery'
import { useDispatch, useSelector } from 'react-redux'
import { Init, getBannerAction, getBlogs, getFeatured, getHomeBanner, getLocation, getProduct } from './Store/actions'
import { Oval } from 'react-loader-spinner'
import { ToastContainer } from 'react-toastify'
import Maintain from './Screens/Home/Maintain'
export default function App() {
  const mobile = useMediaQuery('(max-width: 768px)');
  const [loading, setLoading] = React.useState(true)
  const dispatch = useDispatch()
  const init = async () => {
    setLoading(true)
    await dispatch(Init())
    await dispatch(getHomeBanner())
    await dispatch(getBannerAction())
    await dispatch(getFeatured())
    await dispatch(getProduct())
    // await dispatch(getLocation())
    // await dispatch(getBlogs())
    setLoading(false)
  }
  const cart = useSelector(state => state.Reducers.cart)
  React.useEffect(() => {
    init()
  }, []);
  if (loading) {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}>
        <Oval
          height={mobile ? 50 : 80}
          width={mobile ? 50 : 80}
          color={colors.Primary1}
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel='oval-loading'
          secondaryColor={colors.Primary1}
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    )
  }
  else {
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.white
      }}>
        <ToastContainer />
        <HeadBanner />
        <Header />
        <Index />
        <Footer />
      </div>
    )
  }
}
