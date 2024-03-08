import { useEffect, useState } from "react"
import usePostStore from "../store/postStore";
import useShowToast from "./useShowToast";
import useUserProfileStore from "../store/userProfileStore";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useGetUserPosts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [savedPosts, setSavedPosts] = useState(true);
  const showToast = useShowToast();
  const {userProfile} = useUserProfileStore();


  useEffect(() => {
    const getSavedPosts = async () => {
        if(!userProfile) return;

        setIsLoading(true);
        setPosts([]);

        try {
            const q = query(collection(firestore, "posts"), where("id", "in", userProfile.savedPosts));
            const querySnapshot = await getDocs(q);

            const savedPosts = [];
            querySnapshot.forEach(doc => {
                savedPosts.push({...doc.data(), id: doc.id});
            });

            savedPosts.sort((a,b) => b.createdAt - a.createdAt);

            setSavedPosts(savedPosts);

        } catch (error) {
            showToast("Error", error.message, "error");
            setSavedPosts([]);

        } finally {
            setIsLoading(false);
        }
    }

    getSavedPosts();
  }, [ setSavedPosts, userProfile, showToast ]);

  return {isLoading, savedPosts};
}

export default useGetUserPosts