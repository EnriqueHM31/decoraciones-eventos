import { useLocation, useNavigate } from "react-router-dom";

export const useNavegaciones = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const goHome = () => {
        navigate("/");
    }

    return {
        goHome,
        location

    }
}