import { Box, Tooltip, Button, Drawer, useDisclosure, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, Flex, Avatar, Text, VStack, Spinner } from "@chakra-ui/react";
import { NotificationsLogo } from "../assets/constants";
import { useRef } from "react";
import Notification from "./Notification";
import useGetNotifications from "../hooks/useGetNotifications";

const SidebarItem_Notifications = () => {

  const {isOpen, onOpen, onClose} = useDisclosure();
  const drawerButtonRef = useRef();
  const {isLoading, notifications} = useGetNotifications();

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
          {isLoading && <Spinner />}
          {!isLoading && 
            notifications.map((notification, idx) => (
              <Notification key={idx} notification={notification} />
            ))
          }
          
        </DrawerBody>
      </DrawerContent>
    </Drawer>
    </>
  )
}

export default SidebarItem_Notifications