import { Box, Flex, Text } from "@chakra-ui/react";
import { BsBookmark, BsGrid3X3, BsSuitHeart } from "react-icons/bs";
import { Link, useLocation, useParams } from "react-router-dom";

const ProfileTabs = ({ tab, username }) => {

    const {pathname} = useLocation();

    return (
        <Flex w={"full"} justifyContent={"center"} gap={{ base: 4, sm: 10}} textTransform={"bold"} fontWeight={"bold"}>
            
            <Link to={`/${username}`}>
                <Flex borderTop={ !pathname.split("/")[2] ? "1px solid gray" : null} alignItems={"center"} p={3} gap={1} cursor={"pointer"}>
                    <Box fontSize={20}>
                        <BsGrid3X3 />
                    </Box>
                    <Text fontSize={12} display={{ base: "none", sm: "block"}}>POSTS</Text>
                </Flex>
            </Link>
            
            <Link to={`/${username}/saved`}>
                <Flex borderTop={ pathname.split("/")[2] === "saved" ? "1px solid gray" : null} alignItems={"center"} p={3} gap={1} cursor={"pointer"}>
                    <Box fontSize={20}>
                        <BsBookmark />
                    </Box>
                    <Text fontSize={12} display={{ base: "none", sm: "block"}}>SAVED</Text>
                </Flex>
            </Link>
            <Link to={`/${username}/likes`}>
                <Flex borderTop={ pathname.split("/")[2] === "likes" ? "1px solid gray" : null} alignItems={"center"} p={3} gap={1} cursor={"pointer"}>
                    <Box fontSize={20}>
                        <BsSuitHeart fontWeight={"bold"} />
                    </Box>
                    <Text fontSize={12} display={{ base: "none", sm: "block"}}>LIKES</Text>
                </Flex>
            </Link>
        </Flex>
    )
}

export default ProfileTabs