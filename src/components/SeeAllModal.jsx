import { Button, Flex, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import SuggestedUser from "./SuggestedUser";

const SeeAllModal = ({ isOpen, onClose, suggestedUsers }) => {

  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInLeft">
        <ModalOverlay />
        <ModalContent bg={"white"} border={"1px solid gray"} maxW={"400px"}>
          <ModalHeader>Suggested for you</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Flex mb={4} gap={4} flexDir={"column"} maxH={"250px"} overflowY={"auto"}>
                {suggestedUsers.map((user) => (
                    <SuggestedUser user={user} key={user.id} />
                ))}
            </Flex>
          </ModalBody>
        </ModalContent>
    </Modal>
  )
}

export default SeeAllModal