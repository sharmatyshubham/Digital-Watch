
// import React, { useState, useEffect } from "react";
// import Box from '@mui/material/Box';
// import theams from "./video/theams.jpeg";

// export default function Watch() {
//   const [second, setSecond] = useState(0);
//   const [minute, setMinute] = useState(0);
//   const [hour, setHour] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setSecond((prevSecond) => {
//         if (prevSecond === 59) {
//           setMinute((prevMinute) => {
//             if (prevMinute === 59) {
//               setHour((prevHour) => prevHour + 1);
//               return 0;
//             }
//             return prevMinute + 1;
//           });
//           return 0;
//         }
//         return prevSecond + 1;
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div>
//       <Box
//         sx={{
//           border: "4px solid red",
//           height: "80px",
//           width: "100%",
//           backgroundColor: "seagreen"
//         }}
//       >
//         <Box
//           sx={{
//             marginLeft: "600px",
//             marginTop: "20px",
//             fontSize: "30px"
//           }}
//         >
//           <i>
//             <b> DIGITAL WATCH </b>
//           </i>
//         </Box>
//       </Box>

//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           height: "100vh"
//         }}
//       >
//         <Box
//           sx={{
//             border: "5px solid red",
//             height: "350px",
//             width: "350px",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             borderRadius: "25px",
//             '&:hover': {
//               backgroundColor: "pink"
//             }
//           }}
//         >
//           <Box
//             sx={{
//               border: "5px solid green",
//               height: "300px",
//               width: "300px",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               backdropFilter: "blur(10px)", 
//               background: "pink", 
//               backgroundImage: `url(${require("./video/wallpaper.jpg")})`, 
//               backgroundSize: "cover",
//               borderRadius: "20px"
//             }}
//           >
//             <Box
//               sx={{
//                 fontSize: "50px",
//                 textShadow: "2px 2px 4px #000000", 
//                 transform: "perspective(300px)"
//               }}
//             >
//               <b>
//                 {hour} : {minute} : {second}
//               </b>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </div>
//   );
// }




import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import theams from "./video/theams.jpeg";

export default function Watch() {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecond((prevSecond) => {
        if (prevSecond === 59) {
          setMinute((prevMinute) => {
            if (prevMinute === 59) {
              setHour((prevHour) => prevHour + 1);
              return 0;
            }
            return prevMinute + 1;
          });
          return 0;
        }
        return prevSecond + 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <Box
        sx={{
          border: "4px solid red",
          height: "80px",
          width: "100%",
          backgroundColor: "seagreen",
          boxShadow: "0px 0px 10px rgba(255, 0, 0, 0.8)", // Red border shadow
        }}
      >
        <Box
          sx={{
            marginLeft: "600px",
            marginTop: "20px",
            fontSize: "30px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)", // Text shadow for 3D effect
          }}
        >
          <i>
            <b> DIGITAL WATCH </b>
          </i>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}
      >
        <Box
          sx={{
            border: "5px solid red",
            height: "350px",
            width: "350px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "25px",
            boxShadow: "0px 0px 20px rgba(255, 0, 0, 0.8)", // Red border shadow
            background: "linear-gradient(145deg, #ff0000, #ff5757)", // Gradient effect
            '&:hover': {
              backgroundColor: "pink"
            }
          }}
        >
          <Box
            sx={{
              border: "5px solid green",
              height: "300px",
              width: "300px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backdropFilter: "blur(10px)",
              background: "pink",
              backgroundImage: `url(${require("./video/wallpaper.jpg")})`,
              backgroundSize: "cover",
              borderRadius: "20px",
              boxShadow: "0px 0px 20px rgba(0, 255, 0, 0.8)",
              background: "linear-gradient(145deg, #00ff00, #57ff57)", 
            }}
          >
            <Box
              sx={{
                fontSize: "50px",
                textShadow: "2px 2px 4px #000000",
                transform: "perspective(300px)"
              }}
            >
              <b>
                {hour} : {minute} : {second}
              </b>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
