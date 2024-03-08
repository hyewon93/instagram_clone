import { useState } from "react"
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import usePostStore from "../store/postStore";
import useNotifications from "./useNotifications";

const usePostComments = () => {
    const [isCommenting, setIsCommenting] = useState(false);
    const showToast = useShowToast();
    const authUser = useAuthStore(state => state.user);
    const addComment = usePostStore(state => state.addComment);
    const {handleNotification} = useNotifications();

    const handlePostComment = async (postId, comment) => {
        if(isCommenting) return;
        if(!authUser) return showToast("Error", "You must be logged in to comment", "error");

        const newComment = {
            id: "C-" + postId + "-" + authUser.uid + (new Date()).getTime(),
            comment,
            createdAt: Date.now(),
            createdBy: authUser.uid,
            postId
        };

        try {
            await updateDoc(doc(firestore, "posts", postId), {
                comments: arrayUnion(newComment)
            });

            const postRef = doc(firestore, "posts", postId);
            const postSnap = await getDoc(postRef);

            if(authUser.uid !== postSnap.data().createdBy) {
                handleNotification("comment", postSnap.data().createdBy, postId, newComment.id);
            }

            addComment(postId, newComment);

        } catch (error) {
            showToast("Error", error.message, "error");
        } finally {
            setIsCommenting(false);
        }
    }

    return { isCommenting, handlePostComment };
}

export default usePostComments