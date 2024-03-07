import { useEffect, useState } from "react";
import useAuthStore from "../store/authStore"
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import useShowToast from "./useShowToast";

const useGetNotifications = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [notifications, setNotifications] = useState([]);
    const authUser = useAuthStore(state => state.user);
    const showToast = useShowToast();

    useEffect(() => {
        const getNotifications = async () => {
            if(!authUser) return;

            setIsLoading(true);
            setNotifications([]);

            try {
                const notifications = [];
                if(authUser.notifications.length > 0) {
                    authUser.notifications.map(async (notification) => {
                        const userRef = doc(firestore, "users", notification.sentBy);
                        const userSnap = await getDoc(userRef);

                        if(notification.postId) {
                            const postRef = doc(firestore, "posts", notification.postId);
                            const postSnap = await getDoc(postRef);

                            if(notification.commentId) {
                                postSnap.data().comments.map(comment => {
                                    if(comment.id === notification.commentId) {
                                        notifications.push({
                                            ...notification, 
                                            sendername: userSnap.data().username,
                                            senderPicURL: userSnap.data().profilePicURL,
                                            postImageURL: postSnap.data().imageURL,
                                            comment: comment.comment
                                        });

                                        return;
                                    }
                                });
                                
                            } else {
                                notifications.push({
                                    ...notification, 
                                    sendername: userSnap.data().username,
                                    senderPicURL: userSnap.data().profilePicURL,
                                    postImageURL: postSnap.data().imageURL
                                });
                            }
                            

                        } else {
                            notifications.push({
                                ...notification,
                                sendername: userSnap.data().username,
                                senderPicURL: userSnap.data().profilePicURL,
                            });
                        }

                        setNotifications(notifications);
                    });

                }

            } catch (error) {
                showToast("Error", error.message, "error");
            } finally {
                setIsLoading(false);
            }
        }

        getNotifications();
    }, [ setNotifications, showToast]);

    return { isLoading, notifications };
}

export default useGetNotifications