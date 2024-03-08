import { Box, Button, Flex, Text, VStack, useDisclosure } from "@chakra-ui/react"
import SuggestedHeader from "./SuggestedHeader"
import { Link } from "@chakra-ui/react"
import SuggestedUser from "./SuggestedUser"
import useGetSuggestedUsers from "../hooks/useGetSuggestedUsers"
import SeeAllModal from "./SeeAllModal"

const SuggestedUsers = () => {

    const { isLoading, suggestedUsers } = useGetSuggestedUsers();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const allSuggestedUsers = suggestedUsers;
    const limitSuggestedUsers = suggestedUsers.slice(0,3);

    if(isLoading) return null;

    return (
        <VStack py={8} px={6} gap={4}>
            <SuggestedHeader />

            {suggestedUsers.length !== 0 && (
                <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
                    <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
                        Suggested for you
                    </Text>
                    <Button onClick={onOpen} bg={"transparent"} pr={0} fontSize={12} fontWeight={"bold"} _hover={{ color: "gray.400", bg: "transparent" }} cursor={"pointer"}>
                        See All
                    </Button>
                </Flex>
            )}
            {isOpen ? <SeeAllModal isOpen={isOpen} onClose={onClose} suggestedUsers={allSuggestedUsers} /> : null}

            {limitSuggestedUsers.map((user) => (
                <SuggestedUser user={user} key={user.id} />
            ))}

            <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
                @ 2024 Build By{" "}
                <Link href="https://github.com/hyewon93" target="_blank" color="blue.500" fontSize={14}>
                    Hyewon Bae
                </Link>
            </Box>
        </VStack>
    )
}

export default SuggestedUsers