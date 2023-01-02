// import { Box, Text } from "@chakra-ui/react";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import AnchorLink from "react-anchor-link-smooth-scroll";
// // import Logo from "../Images/ok.webp"
// import { Nav } from "react-bootstrap";

// function Navbar() {
//   const [isscroll, setisscroll] = useState(false);

//   function isScrolling() {
//     if (window.scrollY > 80) {
//       setisscroll(true);
//     } else {
//       setisscroll(false);
//     }
//   }
//   useEffect(() => {
//     window.addEventListener("scroll", isScrolling);
//     return () => {
//       window.removeEventListener("scroll");
//     };
//   }, []);
   
//   return (
//     <Box
//       zIndex={1}
//       bg={isscroll ? "#bee7f6" : "white"}
//       w="100%"
//       p="10px 0px"
//       boxShadow="md"
//       color="#ffffff"
//       position="fixed"
//       border="1px solid red"
//     >
//       <Box
//         w="95%"
//         m="auto"
//         display={["inline", "flex", "flex"]}
//         justifyContent="space-between"
//         textAlign={["center", "", ""]}
//       >
//         <Box rounded="50%" ml={["45%", "0%", "0%"]} mt="5px" mb="5px"   border="1px solid red">
//           {/* <Image w={["30px", "30px", "40px"]} h={"50px"} src={Logo} alt="logo" /> */}
//           {/* <h1> &nbsp;   < &nbsp; Shubham jha &nbsp; /> &nbsp; </h1> */}
//           <Nav>
//           <Link to="/"> <Text
//                 fontWeight="500"
//                 fontSize={["sm", "sm", "lg"]}
//                 color={"black"}
//               >
//                VIVEKANJAN
//               </Text></Link>
         
//             {/* <p >
//                         <span className="code">&#x0003C;</span>
//                         <span className="first">&nbsp;v</span>
//                         <span className="last">anjan</span>
//                         <span className="first">&nbsp;J</span>
//                         <span className="last">ha&nbsp;</span>
//                         <span className="code">&#x0002F;&#x0003E;</span>
//                       </p> */}
//           </Nav>
//         </Box>
//         {/* <Text fontWeight="bold" ml={["15px", "2px", "10px"]} fontSize={['xl', '2xl', '3xl']}>Sanghamitra</Text> */}
//         <Box
//           display="flex"
//           gap={["auto", "15px", "20px"]}
//           justifyContent={["space-around", "space-between", "space-between"]}
//           ml="10px"
//           alignItems="center"
//           border="1px solid red"
//         >
//           <Link display="flex" to="/">
//             <AnchorLink href="#Home">
//               <Text
//                 fontWeight="500"
//                 fontSize={["sm", "sm", "lg"]}
//                 color={"black"}
//               >
//                 Home
//               </Text>
//             </AnchorLink>
//           </Link>
//           <Link display="flex" to="/about">
//             <AnchorLink href="#About">
//               <Text
//                 fontWeight="500"
//                 fontSize={["sm", "sm", "lg"]}
//                 color={"black"}
//               >
//                 About
//               </Text>
//             </AnchorLink>
//           </Link>
//           <Link display="flex" to="/skills">
//             <AnchorLink href="#Skills">
//               <Text
//                 fontWeight="500"
//                 fontSize={["sm", "sm", "lg"]}
//                 color={"black"}
//               >
//                 Skills
//               </Text>
//             </AnchorLink>
//           </Link>
//           <Link display="flex">
//             <AnchorLink href="#Project">
//               <Text
//                 fontWeight="500"
//                 _active={{ textDecoration: "underlined" }}
//                 fontSize={["sm", "sm", "lg"]}
//                 color={"black"}
//               >
//                 Project
//               </Text>
//             </AnchorLink>
//           </Link>
//           <Link display="flex">
//             <AnchorLink href="#Contact">
//               <Text
//                 fontWeight="500"
//                 fontSize={["sm", "sm", "lg"]}
//                 color={"black"}
//               >
//                 Contact
//               </Text>
//             </AnchorLink>
//           </Link>
          
//            <a href="https://drive.google.com/file/d/1hkQy2v3Pku-j8T6GmewOfYF-VmeV_dJI/view" rel="noreferrer" target="_blank" download><Text fontWeight="500" fontSize={['sm', 'sm', 'lg']} color={"black"} >Resume </Text>  </a> 
//         </Box>
//       </Box>
//     </Box>
//   );
// }

// export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Heading,
  TabList,
  Tabs,
  Tab,
  useMediaQuery,
  useDisclosure,
  Drawer,
  DrawerCloseButton,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Grid,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
//import MainRoutes from './MainRoutes'
const Navbar = () => {
  const [isSmall] = useMediaQuery("(min-width: 780px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  //const btnRef = React.useRef();
  return (
    <Box
      bg="rgb(19, 39, 95)"
      zIndex="1000"
      position="sticky"
      top="0px"
      padding="15px 30px "
      boxShadow="rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, skyblue 0px 4px 6px -2px;"
      justifyContent="space-between"
      display="flex"
    >
      <Box>
        <Heading fontStyle="italic" color="white">
        <Link to="/">VIVEKANJAN</Link>
        </Heading>
      </Box>
      {isSmall ? (
        //height='10vh' boxShadow=' rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;'
        <Box>
          <Tabs variant="solid-rounded">
            <TabList gap="8">
            <Link to="/"><Tab color="white">Home</Tab></Link> 
            <Link to="/about"><Tab color="white">About</Tab></Link>
            <Link to="/skills">  <Tab color="white">Skills</Tab></Link>
            <Link to="/project">  <Tab color="white">Project</Tab></Link>
            <Link to="/contact">  <Tab color="white">Contact</Tab></Link>
            <a href="https://drive.google.com/file/d/1hkQy2v3Pku-j8T6GmewOfYF-VmeV_dJI/view" rel="noreferrer" target="_blank" download><Tab fontWeight="500" fontSize={['sm', 'sm', 'lg']} color={"black"} >Resume </Tab>  </a> 
            </TabList>
          </Tabs>
        </Box>
      ) : (
        <Box>
          <Button
            //ref={btnRef}
            colorScheme="gold"
            backgroundColor="#F60A68"
            onClick={onOpen}
          >
            <HamburgerIcon />
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
           // finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />

              <DrawerBody bg="#F60A68">
                <Grid mt="19%" gap="10">
                  {/* <Box>
                            <Link><Heading>Home</Heading></Link>
                        </Box> */}
                  <Box onClick={onClose}>
                    <Heading
                      _hover={{ color: "rgb(19, 39, 95)" }}
                      color="white"
                      textAlign="left"
                      as="h3"
                      size="lg"
                    >
                  <Link to="/">Home</Link>  
                    </Heading>
                  </Box>
                  <Box onClick={onClose}>
                    <Heading
                      _hover={{ color: "rgb(19, 39, 95)" }}
                      color="white"
                      textAlign="left"
                      as="h3"
                      size="lg"
                    >
                      <Link to="/about">About</Link>
                    </Heading>
                  </Box>
                  <Box onClick={onClose}>
                    <Heading
                      _hover={{ color: "rgb(19, 39, 95)" }}
                      color="white"
                      textAlign="left"
                      as="h3"
                      size="lg"
                    >
                      {" "}
                      <Link to="/skillls">  Skills</Link>
                    </Heading>
                  </Box>
                  <Box onClick={onClose}>
                    <Heading
                      _hover={{ color: "rgb(19, 39, 95)" }}
                      color="white"
                      textAlign="left"
                      as="h3"
                      size="lg"
                    >
                      {" "}
                      <Link to="/project" >Project</Link>
                    </Heading>
                  </Box>
                  <Box onClick={onClose}>
                    <Heading
                      _hover={{ color: "rgb(19, 39, 95)" }}
                      color="white"
                      textAlign="left"
                      as="h3"
                      size="lg"
                    >
                    <Link to="/contact">Contact</Link> 
                    </Heading>
                  </Box>
                  <Box onClick={onClose}>
                    <Heading
                      _hover={{ color: "rgb(19, 39, 95)" }}
                      color="white"
                      textAlign="left"
                      as="h3"
                      size="lg"
                    >
                   <a href="https://drive.google.com/file/d/1hkQy2v3Pku-j8T6GmewOfYF-VmeV_dJI/view" rel="noreferrer" target="_blank" download>Resume   </a>  
                    </Heading>
                  </Box>
                </Grid>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
