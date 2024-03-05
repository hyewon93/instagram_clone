import { Avatar, Flex, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from  "react-router-dom";

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Flex alignItems={"center"} gap={2}>
            <Avatar name="hyewonb" size={"md"} src="/profilepic.jpg" />
            <Text fontSize={12} fontWeight={"bold"}>
                hyewonb
            </Text>
        </Flex>
        <Link to={"/auth"} as={RouterLink} fontSize={14} fontWeight={"medium"} color={"blue.400"} cursor={"pointer"} style={{ textDecoration: "none" }}>
            Logout
        </Link>
    </Flex>
  )
}

export default SuggestedHeader