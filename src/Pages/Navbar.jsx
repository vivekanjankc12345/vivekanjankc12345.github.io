import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
//import Resume from "../Images/Shubham.pdf"
// import Logo from "../Images/ok.webp"
import { Nav } from "react-bootstrap";

function Navbar() {
  const [isscroll, setisscroll] = useState(false);

  function isScrolling() {
    if (window.scrollY > 80) {
      setisscroll(true);
    } else {
      setisscroll(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", isScrolling);
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <Box
      zIndex={1}
      bg={isscroll ? "#4f0045" : "white"}
      w="100%"
      p="10px 0px"
      boxShadow="md"
      color="#ffffff"
      position="fixed"
    >
      <Box
        w="95%"
        m="auto"
        display={["inline", "flex", "flex"]}
        justifyContent="space-between"
        textAlign={["center", "", ""]}
      >
        <Box rounded="50%" ml={["45%", "0%", "0%"]} mt="5px" mb="5px">
          {/* <Image w={["30px", "30px", "40px"]} h={"50px"} src={Logo} alt="logo" /> */}
          {/* <h1> &nbsp;   < &nbsp; Shubham jha &nbsp; /> &nbsp; </h1> */}
          <Nav>
          <Link to="/"> <Text
                fontWeight="500"
                fontSize={["sm", "sm", "lg"]}
                color={"black"}
              >
                POTFOLIO
              </Text></Link>
         
            {/* <p >
                        <span className="code">&#x0003C;</span>
                        <span className="first">&nbsp;v</span>
                        <span className="last">anjan</span>
                        <span className="first">&nbsp;J</span>
                        <span className="last">ha&nbsp;</span>
                        <span className="code">&#x0002F;&#x0003E;</span>
                      </p> */}
          </Nav>
        </Box>
        {/* <Text fontWeight="bold" ml={["15px", "2px", "10px"]} fontSize={['xl', '2xl', '3xl']}>Sanghamitra</Text> */}
        <Box
          display="flex"
          gap={["auto", "15px", "20px"]}
          justifyContent={["space-around", "space-between", "space-between"]}
          ml="10px"
          alignItems="center"
        >
          <Link display="flex" to="/">
            <AnchorLink href="#Home">
              <Text
                fontWeight="500"
                fontSize={["sm", "sm", "lg"]}
                color={"black"}
              >
                Home
              </Text>
            </AnchorLink>
          </Link>
          <Link display="flex" to="/about">
            <AnchorLink href="#About">
              <Text
                fontWeight="500"
                fontSize={["sm", "sm", "lg"]}
                color={"black"}
              >
                About
              </Text>
            </AnchorLink>
          </Link>
          <Link display="flex" to="/skills">
            <AnchorLink href="#Skills">
              <Text
                fontWeight="500"
                fontSize={["sm", "sm", "lg"]}
                color={"black"}
              >
                Skills
              </Text>
            </AnchorLink>
          </Link>
          <Link display="flex">
            <AnchorLink href="#Project">
              <Text
                fontWeight="500"
                _active={{ textDecoration: "underlined" }}
                fontSize={["sm", "sm", "lg"]}
                color={"black"}
              >
                Project
              </Text>
            </AnchorLink>
          </Link>
          <Link display="flex">
            <AnchorLink href="#Contact">
              <Text
                fontWeight="500"
                fontSize={["sm", "sm", "lg"]}
                color={"black"}
              >
                Contact
              </Text>
            </AnchorLink>
          </Link>
          
           <a href={"resume"} rel="noreferrer" target="_blank" download><Text fontWeight="500" fontSize={['sm', 'sm', 'lg']} color={"black"} >Resume </Text>  </a> 
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
