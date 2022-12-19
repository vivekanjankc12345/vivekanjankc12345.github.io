import { Box, Icon, Text } from "@chakra-ui/react";
import { AiOutlineMail,AiFillGithub,  AiOutlineLinkedin, AiOutlineLink,AiTwotonePhone } from "react-icons/ai";
import "./Page.css";

function Contacts(){
    return <Box id="Contact" bg="white" color="black" p="60px 0px" pt="75px">
        <Box w={["85%", "85%", "85%"]} m="auto" textAlign="center" p="60px auto" display={["inline", "inline", "flex"]} justifyContent="space-between">
            <Box>
                <Box p={["15px", "38px", "15px"]}>
                    <Text fontWeight="400" fontSize={["3xl", "4xl", "5xl"]} textAlign={["center", "left", "left"]}>Contact Me</Text>
                    <Box display={["inline", "flex", "flex"]} gap={["", "10px", "15px"]} alignItems="center">
                        <Icon as={AiTwotonePhone} w={["40px", "30px", "40px"]} h="50px" color='black' />
                        <Text  fontSize={["sm", "md", "xl"]}>7759952654</Text>
                    </Box>
                    <Box display={["inline", "flex", "flex"]} gap={["", "10px", "15px"]} alignItems="center">
                        <Icon as={AiOutlineMail} w={["40px", "30px", "40px"]} h="50px" color='black' />
                        <Text fontSize={["sm", "md", "xl"]} textDecoration="underline"><a href="https://mail.google.com/mail/u/0/?hl=en/#inbox?compose=new">vivekanjankc12345@gamil.com</a></Text>
                    </Box>
                    <Box display={["inline", "flex", "flex"]} gap={["", "10px", "15px"]} alignItems="center">
                    <Icon as={AiFillGithub} w={["40px", "30px", "40px"]} h="50px" color='black' />
                        <Text textDecoration="underline" fontSize={["sm", "md", "xl"]}><a href="https://github.com/vivekanjankc12345" rel="noreferrer" target="_blank">https://github.com/vivekanjankc12345</a></Text>
                    </Box>
                    <Box display={["inline", "flex", "flex"]} gap={["", "7px", "15px"]} alignItems="center">
                        <Icon as={AiOutlineLinkedin} w={["40px", "30px", "40px"]} h="50px" color='black' />
                        <Text textDecoration="underline" fontSize={["sm", "md", "lg"]}><a href="https://www.linkedin.com/in/vivek-anjan-1b625a170/" rel="noreferrer" target="_blank">https://www.linkedin.com/in/vivek-anjan-1b625a170/</a></Text>
                    </Box>
                    <Box display={["inline", "flex", "flex"]} gap={["", "10px", "15px"]} alignItems="center">
                        <Icon as={AiOutlineLink} w={["40px", "30px", "40px"]} h="50px" color='black' />
                        <Text textDecoration="underline" fontSize={["sm", "md", "xl"]}><a href="https://vivekanjankc12345.github.io/" rel="noreferrer" target="_blank">https://vivekanjankc12345.github.io/</a></Text>
                    </Box>
                   
                </Box>
            </Box>
        </Box>
    </Box>
}

export default Contacts;