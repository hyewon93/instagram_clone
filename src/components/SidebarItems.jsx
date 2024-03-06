import CreatePost from "./CreatePost";
import ProfileLink from "./ProfileLink";
import Search from "./Search";
import Home from "./SidebarItem_Home";
import Notification from "./SidebarItem_Notifications";

const SidebarItems = () => {
  return (
    <>
        <Home />
        <Search />
        <Notification />
        <CreatePost />
        <ProfileLink />
    </>
  )
}

export default SidebarItems