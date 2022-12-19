import { DownloadIcon } from "@chakra-ui/icons";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import About from "./About";
import Calender from "./Calender";
import Contacts from "./Contact";
import Project from "./Project";
import Skills from "./Skillls";
import Stats from "./Stats";
import image from "../Images/img035.jpg";
import Resume from "../Images/vivek-anjan-resume.pdf"
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
//#13022C
function Homepage() {
  return (
    <Box bg="white">
      <Box
        id="Home"
        w="100.1156%"
        ml="-1.069px"
        pt={["100px", "50px", "50px"]}
        color="#e1cefd"
        bg="white"
      >
        <Box
          h="620px"
          w="85%"
          color="black"
          m="auto"
          display={["inline", "inline", "flex"]}
          alignItems="center"
         
          justifyContent="space-around"
        >
          <Box mt={["50px", "50px", "0px"]} w={["100%", "100%", "60%"]}>
            <Box textAlign="left" pl={["20px", "60px", "20px"]}>
              <Text
                fontWeight="500"
                fontFamily="sans-serif"
                display="flex"
                alignItems="center"
                fontSize={["2xl", "3xl", "4xl"]}
              >
                Hi{" "}
                <Image
                  boxSize={["30px", "40px", "50px"]}
                  src="https://emojipedia-us.s3.amazonaws.com/source/noto-emoji-animations/344/waving-hand_1f44b.gif"
                  alt="img"
                />
                , this is
              </Text>
              <Text fontFamily="cursive" fontSize={["4xl", "5xl", "6xl"]}>
                Vivek Anjan
              </Text>
              <Box fontFamily="sans-serif" fontSize={["2xl", "3xl", "4xl"]}>
                <Typewriter
                  options={{
                    strings: [
                      "I'm a Full Stack Web Developer.",
                      "I'm a Good Problem Solver.",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 150,
                  }}
                />
              </Box>
              <a href={Resume} download><button >Download CV</button> </a>

              <a href={Resume} download>   
                            <Button _hover={{bg:"white", color:"black"}} mt="10px" p={["15px 15px", "20px 20px", "25px 25px"]} fontSize={["md", "lg", "xl"]} bg="black" color="white" border="none" variant='solid' leftIcon={<DownloadIcon />}>
                            Resume</Button>
                             </a>

              <Box mt="15px" gap="15px" display="flex" color="#13022c">
                <a
                  href="https://github.com/vivekanjankc12345"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Button
                    _hover={{ bg: "white", color: "black" }}
                    pr="0px"
                    pl="5px"
                    fontSize={["2xl", "3xl", "4xl"]}
                    bg="black"
                    color="white"
                    border="none"
                    variant="solid"
                    leftIcon={<AiOutlineGithub />}
                  ></Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/vivek-anjan-1b625a170/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Button
                    _hover={{ bg: "white", color: "black" }}
                    pr="0px"
                    pl="5px"
                    fontSize={["2xl", "3xl", "4xl"]}
                    bg="black"
                    color="white"
                    border="none"
                    variant="solid"
                    leftIcon={<AiOutlineLinkedin />}
                  ></Button>
                </a>
              </Box>
            </Box>
            {/* <Image position="absolute" top={["-10", "-10", "-20"]} left={["", "", "-8"]} src="https://www.wallpaperuse.com/wallp/56-561836_m.png" alt="img" /> */}
          </Box>
          <Box
            bg="white"
            p="5px"
            w={["45%", "35%", "25%"]}
            m="20px auto 40px auto"
            square={["50%", "50%", "50%"]}
            border-radius="10px"
          >
            <Image
              boxShadow="xl"
              w="100%"
              square={["50%", "50%", "50%"]}
              src={image}
              alt="img"
            />
          </Box>
          {/* <Image w="400px" h="200px" src="https://res.cloudinary.com/practicaldev/image/fetch/s--2bZIjPGC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/d4tvukbt5mra37cvwklk.gif" alt="img" /> */}
        </Box>
      </Box>
      <About />
      <Skills />
      <Calender />
      <Stats />
      <Project />
      <Contacts />
    </Box>
  );
}

export default Homepage;
