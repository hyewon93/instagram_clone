import { Container, Flex, Link, Skeleton, SkeletonCircle, Text, VStack } from "@chakra-ui/react";
import ProfileHeader from "../components/ProfileHeader";
import ProfileTabs from "../components/ProfileTabs";
import ProfilePosts from "../components/ProfilePosts";
import useGetUserProfileByUsername from "../hooks/useGetUserProfileByUsername";
import { useParams, Link as RouterLink } from "react-router-dom";

const ProfilePage = ({ tab }) => {

  const { username } = useParams();
  const { isLoading, userProfile } = useGetUserProfileByUsername(username);

  const userNotFound = !isLoading && !userProfile;
  if(userNotFound) {
    return <UserNotFound />;
  }

  return (
    <Container maxW={"container.lg"} py={5}>
        <Flex py={10} px={4} pl={{ base: 4, md: 10}} w={"full"} mx={"auto"} flexDirection={"column"}>
            {!isLoading && userProfile && <ProfileHeader />}
            {isLoading && <ProfileHeaderSkeleton />}
        </Flex>
        <Flex px={{ base: 2, sm: 4 }} maxW={"full"} mx={"auto"} borderTop={"1px soild"} borderColor={"blackAlpha.200"} direction={"column"}>
            <ProfileTabs username={username} userProfile={userProfile} />
            <ProfilePosts tab={tab} />
        </Flex>
    </Container>
  )
}

export default ProfilePage;

const ProfileHeaderSkeleton = () => {
  return (
    <Flex gap={{base: 4, sm: 10}} py={10} direction={{base: "column", sm: "row"}} justifyContent={"center"} alignItems={"center"}>
      <SkeletonCircle size={24} />
      <VStack alignItems={{base: "center", sm: "flex-start"}} gap={2} mx={"auto"} flex={1}>
        <Skeleton height="12px" width={150} />
        <Skeleton height="12px" width={100} />
      </VStack>
    </Flex>
  )
};

const UserNotFound = () => {
  return (
    <Flex flexDir={"column"} textAlign={"center"} mx={"auto"}>
      <Text fontSize={"2x1"}>User Not Found</Text>
      <Link as={RouterLink} to={"/"} color={"blue.500"} w={"max-content"} mx={"auto"}>
        Go Home
      </Link>
    </Flex>
  )
};