import { useEffect, useState } from "react"
import usePostStore from "../store/postStore";
import useShowToast from "./useShowToast";
import useUserProfileStore from "../store/userProfileStore";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useGetUserPosts = ({ type }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { posts, setPosts } = usePostStore();
  const showToast = useShowToast();
  const {userProfile} = useUserProfileStore();

  useEffect(() => {
    const getPosts = async () => {
        if(!userProfile) return;

        setIsLoading(true);
        setPosts([]);

        try {

            if(type === "saved") {

                const savedPosts = [];
                if(userProfile.savedPosts) {
                    let promises = userProfile.savedPosts.map( async (savedPost) => {
                        const docRef = doc(firestore, "posts", savedPost);
                        const docSnap = await getDoc(docRef);

                        savedPosts.push({...docSnap.data(), id: docSnap.id});
                    });

                    Promise.all(promises)
                    .then(() => {
                        savedPosts.sort((a,b) => b.createdAt - a.createdAt);
                        
                        setPosts(savedPosts);

                        setIsLoading(false);
                    });
                }

            } else if(type === "likes") {

                const likedPosts = [];
                if(userProfile.likedPosts) {
                    let promises = userProfile.likedPosts.map( async (likePost) => {
                        const docRef = doc(firestore, "posts", likePost);
                        const docSnap = await getDoc(docRef);

                        likedPosts.push({...docSnap.data(), id: docSnap.id});
                    });

                    Promise.all(promises)
                    .then(() => {
                        likedPosts.sort((a,b) => b.createdAt - a.createdAt);
                        
                        setPosts(likedPosts);

                        setIsLoading(false);
                    });
                }

            } else {
                const q = query(collection(firestore, "posts"), where("createdBy", "==", userProfile.uid));
                const querySnapshot = await getDocs(q);
    
                const posts = [];
                querySnapshot.forEach(doc => {
                    posts.push({...doc.data(), id: doc.id});
                });
    
                posts.sort((a,b) => b.createdAt - a.createdAt);
    
                setPosts(posts);

                setIsLoading(false);
            }

        } catch (error) {
            showToast("Error", error.message, "error");
            setPosts([]);
            setIsLoading(false);
        }
    }

    getPosts();
  }, [ type, setPosts, userProfile, showToast ]);

  return {isLoading, posts};
}

export default useGetUserPosts