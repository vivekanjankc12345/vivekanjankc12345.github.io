import { Box, Button, Image, Text } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";

function Project() {
  let projectdata = [
    {
      name: "Jio Mart",
      img: "https://1.bp.blogspot.com/-PAUPB0dNZ1U/XtpRKK_kaiI/AAAAAAAAESY/TKTWcqD9IQsYwZliwYCvvdIFZCBZ8E9TwCK4BGAsYHg/s1923/PicsArt_06-04-05.32.54.jpg",
      type: "Group",
      desc: "A clone of the conservative new world of online shopping , Free Home Delivery in 200+ cities,Buy Grocery Online in Mumbai, Pune, Bangalore at JioMart online grocery store. Best price on fresh fruits & vegetables, dairy & bakery, packaged food. ",
      techstack: "HTML, CSS, JavaScript",
      livelink: "https://gucci1909.github.io/Jio-Mart-Website-Clone/",
      gitlink: "https://github.com/gucci1909/Jio-Mart-Website-Clone",
    },
    {
      name: "Monkey Survey",
      img: "https://tse3.mm.bing.net/th?id=OIP.LBhChqzHt5_tlS-nHG4BcwHaDt&pid=Api&P=0",
      type: "Individual",
      desc: "Use SurveyMonkey to drive your business forward by using our free onlinesurvey tool to capture the voices and opinions of the people who matter most to you. SurveyMonkey ",
      techstack: "React, CHakra UI, JavaScript, CSS",
      livelink: "https://heartfelt-creponne-02f101.netlify.app/",
      gitlink: "https://github.com/vivekanjankc12345/rural-error-930/tree/main/myapp",
    },
  
  ];

  return (
    <Box
      id="Project"
      w="full"
      bg="white"
      color="black"
      p="30px 0px"
      textAlign="center"
    >
      <Box w="85%" m="auto">
        <Text
          mb="25px"
          textAlign="center"
          fontWeight="400"
          fontSize={["3xl", "4xl", "5xl"]}
        >
          Projects
        </Text>
        <Box display="grid" gap="50px" gridTemplateColumns="repeat(1, 1fr)">
          {projectdata &&
            projectdata.map((project) => {
              return (
                <Box className="projectouter">
                  <Box
                    display={["inline", "inline", "flex"]}
                    justifyContent="space-between"
                  >
                    <Image
                      w={["100%", "97%", "60%"]}
                      m="auto"
                      src={project.img}
                      alt="project-thumbnail"
                    />
                    <Box w={["100%", "97%", "39%"]} m="auto">
                      <Text fontSize={["2xl", "3xl", "4xl"]}>
                        {project.name}
                      </Text>
                      <Text fontSize={["xl", "2xl", "3xl"]}>
                        ( {project.type} )
                      </Text>
                      <Text
                        w={["100%", "90%", "70%"]}
                        m="auto"
                        fontSize={["sm", "md", "md"]}
                      >
                        {project.desc}
                      </Text>
                      <Text
                        w="85%"
                        m="auto"
                        fontSize={["md", "mlgd", "xl"]}
                        fontWeight="bold"
                      >
                        Techstacks :-{project.techstack}
                      </Text>
                      <Box
                        display="flex"
                        w={["100%", "80%", "100%"]}
                        m="auto"
                        justifyContent="space-around"
                      >
                        {/* <Button  _hover={{bg:"#4E406F", color:"#ffffff"}} mt="10px" p={["5px 5px", "10px 10px", "10px 10px"]} fontSize={["md", "lg", ";g"]} bg="#C1B6DB" color="#13022c" border="none" variant='solid' leftIcon={<BiLinkExternal />}><a href={project.livelink} rel="noreferrer" target="_blank">Live</a></Button>
                                            <Button _hover={{bg:"#4E406F", color:"#ffffff"}} mt="10px" p={["5px 5px", "10px 10px", "10px 10px"]} fontSize={["md", "lg", "lg"]} bg="#C1B6DB" color="#13022c" border="none" variant='solid' leftIcon={<BsGithub />}><a href={project.gitlink} rel="noreferrer" target="_blank">Github</a></Button> */}
                        <Button
                          as="a"
                          target="_blank"
                          href={project.livelink}
                          _hover={{ bg: "#4f0045", color: "white" }}
                          mt="10px"
                          p={["5px 5px", "10px 10px", "10px 10px"]}
                          fontSize={["md", "lg", "lg"]}
                          bg="#4f0045"
                          color="white"
                          border="none"
                          variant="solid"
                          leftIcon={<BiLinkExternal />}
                        >
                          Live
                        </Button>
                        <Button
                          as="a"
                          target="_blank"
                          href={project.gitlink}
                          _hover={{ bg: "#4f0045", color: "#ffffff" }}
                          mt="10px"
                          p={["5px 5px", "10px 10px", "10px 10px"]}
                          fontSize={["md", "lg", "lg"]}
                          bg="#4f0045"
                          color="white"
                          border="none"
                          variant="solid"
                          leftIcon={<BsGithub />}
                        >
                          Github
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              );
            })}
        </Box>
      </Box>
    </Box>
  );
}

export default Project;
