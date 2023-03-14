import * as React from 'react';
import { createPortal } from "react-dom";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import style from "./loader.module.scss";

const loaderRoot = document.getElementById("loader-root");

// const CircularIndeterminate = () => {
//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CircularProgress />
//     </Box>
//   );
// }

// export default CircularIndeterminate; 



const CircularIndeterminate = () => {
  return createPortal(
    <div className={style.overlay}>
      <div className={style.loader}>
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      </div>
    </div>,
    loaderRoot
  );
};

export default CircularIndeterminate;