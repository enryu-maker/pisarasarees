import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { colors } from '../Assets/Theme'
import useMediaQuery from './useMediaQuery'
import { AccountDetails, Address, OrderHistory } from '../Screens/Profile/AccountSection'
import { getActiveAddress, getAddress, getProfile } from '../Store/actions'
import { useDispatch } from 'react-redux'
export default function MoreInfo() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const mobile = useMediaQuery('(max-width: 768px)');
  const dispatch = useDispatch()
  function switchActive(active) {
    switch (active) {
      case 0:
        return <AccountDetails />;
      case 1:
        return <Address />;
      case 2:
        return <OrderHistory />;
      default:
        break;
    }
  }
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
    dispatch(getProfile())
    dispatch(getAddress())
    dispatch(getActiveAddress())
  }, [])
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height:"100%"
    }}>
      <div style={{
        width: "88%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        color: colors.darkGrey,
        fontFamily: "Bold",
        fontSize: mobile ? 12 : 16
      }}>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: colors.darkGrey,
          }}
          onMouseEnter={(e) => {
            e.target.style.color = colors.Primary2;
          }}
          onMouseLeave={(e) => {
            e.target.style.color = colors.darkGrey;
          }}
        >
          Home
        </Link>
        <p>/</p>
        <p
          style={{
            textDecoration: "none",
            color: colors.darkGrey,
          }}
          onMouseEnter={(e) => {
            e.target.style.color = colors.Primary2;
          }}
          onMouseLeave={(e) => {
            e.target.style.color = colors.darkGrey;
          }}
          onClick={() => {
            navigate(-1)
          }}
        >
          More
        </p>
        <p>/</p>
        <p>{state?.name}</p>
      </div>
      <div style={{
        height:"100vh",
        width:"100vw"
      }}>
      {switchActive(state?.id)}
      </div>
    </div>
  )
}
