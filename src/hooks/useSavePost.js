import { useEffect, useState } from "react";
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useSavePost = (post) => {

    const [isUpdating, setIsUpdating] = useState(false);
	const authUser = useAuthStore((state) => state.user);
    const setAuthUser = useAuthStore((state) => state.setUser);
    const [isSaved, setIsSaved] = useState(authUser.savedPosts.includes(post.id));
    const showToast = useShowToast();

    const handleSavePost = async () => {
        if (isUpdating) return;
		if (!authUser) return showToast("Error", "You must be logged in to like a post", "error");

		setIsUpdating(true);

        try {

            const currentUserRef = doc(firestore, "users", authUser.uid);
            await updateDoc(currentUserRef, {
                savedPosts: isSaved ? arrayRemove(post.id) : arrayUnion(post.id)
            });

            if(isSaved) {
                // Unsave

                setAuthUser({
                    ...authUser,
                    savedPosts: authUser.savedPosts.filter(id => id !== post.id)
                });

                localStorage.setItem("user-info", JSON.stringify({
                    ...authUser,
                    savedPosts: authUser.savedPosts.filter(id => id !== post.id)
                }));

            } else {
                // Save

                setAuthUser({
                    ...authUser,
                    savedPosts: [...authUser.savedPosts, post.id]
                });

                localStorage.setItem("user-info", JSON.stringify({
                    ...authUser,
                    savedPosts: [...authUser.savedPosts, post.id]
                }));
            }

            setIsSaved(!isSaved);

		} catch (error) {
			showToast("Error", error.message, "error");
		} finally {
			setIsUpdating(false);
		}
    };

    useEffect(() => {
        if(authUser) {
            const isSaved = authUser.savedPosts.includes(post.id);
            setIsSaved(isSaved);
        }
    }, [authUser, post.id]);

    return { handleSavePost, isSaved };
}

export default useSavePost