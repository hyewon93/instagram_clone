import { Avatar, Button, Flex, Image, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Notification = ({ type }) => {
  return (
    <>
        {type === "follow" && (
            <>
            <Flex gap={4} mb={5}>
                <Link to={`/baehw93`}>
                    <Avatar src="/profilepic.jpg" size={"md"}/>
                </Link>

                <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
                    <Flex direction={"column"}>
                        <Text>baehw93 started following you.</Text>
                        <Text color={"gray"} fontSize={12}>1w ago</Text>
                    </Flex>
                    <Button 
                        bg={"blue.500"} 
                        color={"white"} 
                        _hover={{ bg: "blue.600" }} 
                        size={{ base:"xs", md: "sm"}}
                    >
                        Follow
                    </Button>
                </Flex>
            </Flex>
            <Flex gap={4} mb={5}>
                <Link to={`/baehw93`}>
                    <Avatar src="/profilepic.jpg" size={"md"}/>
                </Link>

                <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
                    <Flex direction={"column"}>
                        <Text>baehw93 started following you.</Text>
                        <Text color={"gray"} fontSize={12}>1w ago</Text>
                    </Flex>
                    <Button 
                        bg={"gray.300"} 
                        color={"black"} 
                        _hover={{ bg: "gray.400" }} 
                        size={{ base:"xs", md: "sm"}}
                    >
                        Unfollow
                    </Button>
                </Flex>
            </Flex>
            </>
        )}
        {type === "comment" && ( 
            <Flex gap={4} mb={5}>
                <Link to={`/baehw93`}>
                    <Avatar src="/profilepic.jpg" size={"md"}/>
                </Link>

                <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
                    <Flex direction={"column"}>
                        <Text>baehw93 commented: Hello!</Text>
                        <Text color={"gray"} fontSize={12}>1w ago</Text>
                    </Flex>
                    <Image src="/img1.png" w={"50px"} h={"50px"} />
                </Flex>
            </Flex>
        )}
        {type === "like" && ( 
            <Flex gap={4} mb={5}>
                <Link to={`/baehw93`}>
                    <Avatar src="/profilepic.jpg" size={"md"}/>
                </Link>

                <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
                    <Flex direction={"column"}>
                        <Text>baehw93 liked your post.</Text>
                        <Text color={"gray"} fontSize={12}>1w ago</Text>
                    </Flex>
                    <Image src="/img1.png" w={"50px"} h={"50px"} />
                </Flex>
            </Flex>
        )}
    </>
  )
}

export default Notification