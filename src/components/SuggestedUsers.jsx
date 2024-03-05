import { Box, Flex, Text, VStack } from "@chakra-ui/react"
import SuggestedHeader from "./SuggestedHeader"
import { Link } from "@chakra-ui/react"
import SuggestedUser from "./SuggestedUser"

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
        <SuggestedHeader />

        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
            <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
                Suggested for you
            </Text>
            <Text fontSize={12} fontWeight={"bold"} _hover={{ color: "gray.400" }} cursor={"pointer"}>
                See All
            </Text>
        </Flex>

        <SuggestedUser name="dan" followers={1392} avatar='https://bit.ly/dan-abramov' />
        <SuggestedUser name="ryan" followers={567} avatar='https://bit.ly/ryan-florence' />
        <SuggestedUser name="christian" followers={759} avatar='https://bit.ly/code-beast' />

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