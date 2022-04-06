import { useState } from "react";


export const useFetchUsers = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const getUsersData = async () => {
    setIsLoading(true);
    try {
        const usersResponse = await fetch("https://api.github.com/users");
        const users = await usersResponse.json();
        setUsers(users)
    // console.log(users)
    //   const userResponse = await fetch("https://api.github.com/users/" + input);
    //   const user = await userResponse.json();
    //   props.setUser(user);
        setIsLoading(false);
    } catch (err) {
        console.log("err", err);
    }
    };

    return {isLoading, users}
}
