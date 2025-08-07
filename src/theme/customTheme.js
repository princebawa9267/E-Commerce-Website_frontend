import { createTheme } from "@mui/material";
import { main } from "motion/react-client";

const customTheme = createTheme({
    palette:{
        mode:"light",
        primary :{
            main:"#0056b3"
        },
        secondary:{
            main:"#357ABD"
        },
        button_bg : {
            main : "#eef0f3"
        }
    }
})

export default customTheme;