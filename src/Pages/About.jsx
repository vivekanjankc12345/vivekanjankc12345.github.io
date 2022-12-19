import { Box, Image, Text } from "@chakra-ui/react";


function About(){
    return <Box id="About" bg="white" color="black" p="30px 0px" mt="-2px" pt="80px" h="600">
        <Box w="97%" m="auto" display={["inline", "inline", "flex"]} justifyContent="space-between" alignItems="center">
            <Box w={["90%", "80%", "40%"]} m="auto">
                <Text textAlign="center"  fontWeight="400" mt="20px" fontSize={["3xl", "4xl", "5xl"]}>About Me</Text>
                <Text fontFamily="calibri" mt="5px" fontSize={["md", "lg", "xl"]}>
                Motivated and innovative aspiring full-stack web developer with hands-on
                         experience in building websites with MERN stack and various web
                 technologies including HTML, CSS, and JS. Curious to learn about
                   emerging web technologies. Looking forward to making a significant
                           contribution to an organization through dedicated effort.

                </Text>
            </Box>
            <Image w={400} m="auto" src="https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15818.jpg?size=626&ext=jpg" alt="img" />
        </Box>
    </Box>
}

export default About;