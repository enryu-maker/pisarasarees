import React from 'react'
import { Link } from 'react-router-dom';
import { colors } from '../../Assets/Theme';
import useMediaQuery from '../../Components/useMediaQuery';
import ReactPlayer from "react-player/lazy";
import FlatList from 'flatlist-react/lib';
import { useSelector } from 'react-redux';
export default function Blog() {
    const mobile = useMediaQuery('(max-width: 768px)');
    const blogs = useSelector(state => state.Reducers.blogs)
    console.log(blogs)
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%"
            }}
        >
            <div style={{
                width: "88%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                color: colors.darkGrey,
                fontFamily: "Bold",
                fontSize: 16
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
                <p>Blog</p>
            </div>
            <p style={{
                fontFamily: "Black",
                fontSize: mobile?25: 40,
                letterSpacing: 2,
                marginBlock: 0,
                color:colors.Primary2
            }}>
                Blogs .
            </p>
            <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "88%",
              flexWrap: "wrap",
            }}
          >
            <FlatList
              list={blogs}
              keyExtractor={(item) => `${item.id}`}
              renderItem={(item, index) => {
                return (
                    <ReactPlayer style={{
                        marginBlock:10,
                        marginInline:0
                    }} height={200} width={mobile?"90vw":300}  url={item?.description} />
                );
              }}
              renderWhenEmpty={() => <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  width: "100%",
                  alignSelf: "center",
                }}
              >
                <p style={{
                  fontFamily: "Bold",
                  fontSize: mobile ? 25 : 35,
                  letterSpacing: 2,
                  marginBlockStart: 0,
                  alignSelf: "center",
                  color: colors.Primary2
                }}>
                  No Blogs Available
                </p>
              </div>
              }
            />
          </div>
        </div>
    )
}
