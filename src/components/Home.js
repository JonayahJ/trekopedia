import React from "react";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

const Home = () => {
    const { logout, user } = useUserAuth();
    console.log(user)

    // Logout Fx
    const handleLogOut = async () => {
        try{
            await logout();
        }catch(err) {
            console.log(err.message)
        }
    }

    return (
        <>
            <div className="p-4 box mt-3 text-center">
                Welcome to Trekopedia, {user && user.email}!
            </div>
            <div className="d-grid gap-2">
                <Button variant="primary" onClick={handleLogOut}>
                    Log out
                </Button>
            </div>
        </>
    );
};

export default Home;