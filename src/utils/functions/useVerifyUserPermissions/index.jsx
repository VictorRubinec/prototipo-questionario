import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function useVerifyUserPermissions(requiredPermissions) {
  // const navigate = useNavigate();
  // const [hasPermission, setHasPermission] = useState(false);

  // useEffect(() => {
  //   const user = sessionStorage.getItem("user");
  //   const userPermissions = sessionStorage.getItem("permissions");

  //   if (!user) {
  //     navigate("/login");
  //     return;
  //   }

  //   if (!requiredPermissions) {
  //     switch (userPermissions) {
  //       case "student":
  //         navigate("/login");
  //         break;
  //       case "admin":
  //         navigate("/admin");
  //         break;
  //       case "school":
  //         navigate("/school");
  //         break;
  //       default:
  //         navigate("/login");
  //         break;
  //     }
  //   } else {
  //     const hasRequiredPermissions = requiredPermissions.includes(userPermissions);
  //     setHasPermission(hasRequiredPermissions);

  //     if (!hasRequiredPermissions) {
  //       navigate("/login");
  //     }
  //   }
  // }, [requiredPermissions, navigate]);

  // return hasPermission;
}

export default useVerifyUserPermissions;
