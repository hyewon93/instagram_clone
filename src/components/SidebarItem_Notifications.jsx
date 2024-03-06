import { Box, Tooltip, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { NotificationsLogo } from "../assets/constants";

const SidebarItem_Notifications = () => {
  return (
    <Tooltip hasArrow label="Notifications" placement="right" ml={1} openDelay={500} display={{ base: 'block', md: 'none'}}>
        <Link
            display={"flex"}
            to="/"
            as={RouterLink}
            alignItems={"center"}
            gap={4}
            _hover={{ bg: "blackAlpha.200" }}
            borderRadius={6}
            p={2}
            w={{ base: 10, md: "full" }}
            justifyContent={{ base: "center", md: "flex-start"}}
        >
            <NotificationsLogo />
            <Box display={{ base: "none", md: "block" }}>
                Notifications
            </Box>
        </Link>
    </Tooltip>
  )
}

export default SidebarItem_Notifications