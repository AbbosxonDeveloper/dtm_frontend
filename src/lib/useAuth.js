import { useContext } from "react";
import { AuthContext } from "../contexts/auth-context";

export const useAuth = () => {
    const { token, faculties, setFaculties, block1, setBlock1, block2, setBlock2 } = useContext(AuthContext);


    return { token, faculties, setFaculties, block1, setBlock1, block2, setBlock2 };
}