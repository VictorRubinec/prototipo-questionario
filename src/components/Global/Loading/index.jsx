import { CircularProgress } from "@mui/material";
import { Box } from "@mui/material";
import { style } from "./style.js";

import EstructureLoading from "./EstructureLoading/index.jsx";

function Loading() {

    const logins = ['/', '/school', '/admin'];

    // if (logins.includes(window.location.pathname)) {
        return (
            <Box sx={style().loading}>
                <CircularProgress sx={style().loadingIcon} />
            </Box>
        );
    // } else {
    //     return (
    //         <>
    //             <EstructureLoading>
    //                 <Box sx={style().loading}>
    //                     <CircularProgress sx={style().loadingIcon} />
    //                 </Box>
    //             </EstructureLoading>
    //         </>
    //     );
    // }
}

export default Loading;