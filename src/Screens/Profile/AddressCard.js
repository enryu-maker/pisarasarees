import React from 'react'
import { colors } from '../../Assets/Theme'
import { useDispatch } from 'react-redux'
import { getActiveAddress, getAddress, setActiveAddress } from '../../Store/actions'
import { Oval } from 'react-loader-spinner'
import useMediaQuery from '../../Components/useMediaQuery'
export default function AddressCard({
    item,
    containerStyle,
    activeAddress
}) {
    const dispatch = useDispatch()
    const [loading, setLoading] = React.useState(false)
  const mobile = useMediaQuery('(max-width: 768px)');

    return (
        <div
            style={{
                display: "flex",
                height: 100,
                backgroundColor: colors.white,
                width: mobile?"100%":"47%",
                boxShadow: "5px 5px 10px #88888850",
                borderRadius: 10,
                justifyContent: "space-evenly",
                alignItems: "flex-start",
                alignSelf:"center",
                paddingInline: 10,
                border: activeAddress?.id === item?.id ? '2px solid green' : null,
                flexDirection: "column",
                ...containerStyle,
                cursor: "pointer",
                marginBlock:10
            }}
            onClick={() => {
                dispatch(setActiveAddress(item?.id, setLoading))
                dispatch(getActiveAddress())
                dispatch(getAddress())
                setLoading(false)
            }}
        >
            {
                loading ?
                    <Oval />
                    :
                    <>
                        <p
                            style={{
                                fontFamily: "Bold",
                                marginBlock: 0,
                            }}>
                            {item?.address_type}
                        </p>
                        <p
                            style={{
                                fontFamily: "Regular",
                                fontSize:14,
                                marginBlock: 0,
                                width:"100%",
                                textAlign:"justify"
                            }}>
                            {`${item?.address_line_1 + item?.address_line_2},${item?.city}, ${item?.state}, ${item?.state}, ${item?.country}, ${item?.pin_code}`}
                        </p>
                    </>
            }
        </div>
    )
}
