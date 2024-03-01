import { Box, Container, Flex, Image, VStack } from '@chakra-ui/react'
import React from 'react'
import AuthForm from '../components/AuthForm'

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding={0} alignItems={"center"} gap={10}>
        <Flex justifyContent={"center"}>
          <Box display={{ base: "none", md: "block" }}>
            <Image src="/auth.png" h={650} alt="Phone img" />
          </Box>
          <VStack spacing={4} align={"stretch"}>
            <AuthForm />
          </VStack>
        </Flex>
      </Container>
    </Flex>
  )
}

export default AuthPage