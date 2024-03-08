import { useEffect, useState } from "react";
import useShowToast from "./useShowToast";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useGetUserById = (userId) => {
    const [isLoading, setIsLoading] = useState(true);
    const [searchedUser, setUser] = useState(null);
    const showToast = useShowToast();

    useEffect(() => {

        const getUser = async () => {
            setIsLoading(true);
            setUser(null);

            try {

                const userRef = await getDoc(doc(firestore, "users", userId));
                if(userRef.exists()) {
                    setUser(userRef.data());
                }

            } catch (error) {
                showToast("Error", error.message, "error");
            } finally {
                setIsLoading(false);
            }
        };

        getUser();

    }, [showToast, setUser, userId]);

    return { isLoading, searchedUser };
}

export default useGetUserById