import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function useVerifyUserPermissions(permissions) {
  const navigate = useNavigate();
  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    const userPermissions = sessionStorage.getItem("permissions");

    if (!user || userPermissions !== permissions) {
      switch (userPermissions) {
        case "student":
          navigate("/");
          break;
        case "admin":
          navigate("/admin");
          break;
        case "school":
          navigate("/school");
          break;
        default:
          navigate("/");
          break;
      }
    } else {
      setHasPermission(true);
    }
  }, [permissions, navigate]);

  return hasPermission;
}

export default useVerifyUserPermissions;
