import { useNavigate } from "react-router-dom";

export const useNavegaciones = () => {

    const navigate = useNavigate();

    const goHome = () => {
        navigate("/");
    }

    return {
        goHome
    }
}