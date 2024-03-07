import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";
import { firestore } from "../firebase/firebase";

const useNotifications = () => {

    const authUser = useAuthStore(state => state.user);
    const showToast = useShowToast();

    const handleNotification = async (type, recipientId, postId = null, commentId = null) => {
        if(!authUser) return;

        const newNotification = {
            type,
            createdAt: Date.now(),
            sentBy: authUser.uid,
            postId,
            commentId
        };

        try {
            await updateDoc(doc(firestore, "users", recipientId), {
                notifications: arrayUnion(newNotification)
            });

        } catch (error) {
            showToast("Error", error.message, "error");
        } 
    };

    return {handleNotification};
}

export default useNotifications