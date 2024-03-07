import { Avatar, Button, Flex, Image, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import useAuthStore from "../store/authStore"
import { timeAgo } from "../utils/timeAgo";

const Notification = ({ notification }) => {
    const authUser = useAuthStore(state => state.user);
    const isFollowing = authUser.following.length > 0 && authUser.following.includes(notification.sentBy);

    return (
        <>
            {notification.type === "follow" && (
                <>
                {isFollowing && (
                    <Flex gap={4} mb={5}>
                        <Link to={`/${notification.sendername}`}>
                            <Avatar src={notification.senderPicURL} size={"md"}/>
                        </Link>

                        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
                            <Flex direction={"column"}>
                                <Text><b>{notification.sendername}</b> started following you.</Text>
                                <Text color={"gray"} fontSize={12}>{timeAgo(notification.createdAt)}</Text>
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
                )}
                {!isFollowing && (
                    <Flex gap={4} mb={5}>
                        <Link to={`/${notification.sendername}`}>
                            <Avatar src={notification.senderPicURL} size={"md"}/>
                        </Link>

                        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
                            <Flex direction={"column"}>
                                <Text><b>{notification.sendername}</b> started following you.</Text>
                                <Text color={"gray"} fontSize={12}>{timeAgo(notification.createdAt)}</Text>
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
                )}
                </>
            )}
            {notification.type === "comment" && ( 
                <Flex gap={4} mb={5}>
                    <Link to={`/${notification.sendername}`}>
                        <Avatar src={notification.senderPicURL} size={"md"}/>
                    </Link>

                    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
                        <Flex direction={"column"}>
                            <Text><b>{notification.sendername}</b> commented: {notification.comment}</Text>
                            <Text color={"gray"} fontSize={12}>{timeAgo(notification.createdAt)}</Text>
                        </Flex>
                        <Link to={`/${authUser.username}`}>
                            <Image src={notification.postImageURL} objectFit={"cover"} minW={"50px"} minH={"50px"} w={"50px"} h={"50px"} />
                        </Link>
                    </Flex>
                </Flex>
            )}
            {notification.type === "like" && ( 
                <Flex gap={4} mb={5}>
                    <Link to={`/${notification.sendername}`}>
                        <Avatar src={notification.senderPicURL} size={"md"}/>
                    </Link>

                    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
                        <Flex direction={"column"}>
                            <Text><b>{notification.sendername}</b> liked your post.</Text>
                            <Text color={"gray"} fontSize={12}>{timeAgo(notification.createdAt)}</Text>
                        </Flex>
                        <Link to={`/${authUser.username}`}>
                            <Image src={notification.postImageURL} objectFit={"cover"} minW={"50px"} minH={"50px"} w={"50px"} h={"50px"}/>
                        </Link>
                    </Flex>
                </Flex>
            )}
        </>
    )
}

export default Notification