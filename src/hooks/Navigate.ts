import { useLocation, useNavigate } from "react-router-dom";

export const useNavegaciones = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const goHome = () => {
        navigate("/");
    }

    const goInicio = () => {
        window.scrollTo(0, 0)
    }

    return {
        goHome,
        location,
        goInicio

    }
}