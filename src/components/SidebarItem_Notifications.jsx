import { Box, Tooltip, Link, Button, Drawer, useDisclosure, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, Flex, Avatar, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { NotificationsLogo } from "../assets/constants";
import { useRef } from "react";
import Notification from "./Notification";

const SidebarItem_Notifications = () => {

  const {isOpen, onOpen, onClose} = useDisclosure();
  const drawerButtonRef = useRef();

  return (
    <>
    <Tooltip hasArrow label="Notifications" placement="right" ml={1} openDelay={500} display={{ base: 'block', md: 'none'}}>
        <Button
          ref={drawerButtonRef}
          onClick={onOpen}
          display={"flex"}
          alignItems={"center"}
          gap={4}
          _hover={{ bg: "blackAlpha.200" }}
          borderRadius={6}
          p={2}
          w={{ base: 10, md: "full" }}
          justifyContent={{ base: "center", md: "flex-start"}}
          fontWeight={"none"}
        >
          <NotificationsLogo />
          <Box display={{ base: "none", md: "block" }}>
              Notifications
          </Box>
        </Button>
    </Tooltip>

    <Drawer isOpen={isOpen} onClose={onClose} finalFocusRef={drawerButtonRef} size={"sm"} placement="left">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader fontWeight={"bold"}>Notifications</DrawerHeader>

        <DrawerBody maxH={"90vh"} overflowY={"auto"}>
          
          <Notification type={"follow"} />
          <Notification type={"comment"} />
          <Notification type={"like"} />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
    </>
  )
}

export default SidebarItem_Notifications