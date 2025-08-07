    import { Divider, ListItemIcon, ListItemText } from "@mui/material";
    import React from "react";
    import { useLocation, useNavigate } from "react-router";
    import { useAppDispatch } from "../state/store";
    import { sellerLogout } from "../state/seller/sellerSlice";

    const DrawerList = ({ menu, menu2, toggleDrawer }) => {
        const location = useLocation();
        const navigate = useNavigate();
        const dispatch = useAppDispatch();

        const handleLogout = () =>{
            dispatch(sellerLogout(navigate))
        }

        return (
            <div className="h-full">
                <div>
                    <div className="flex flex-col justify-between h-full w-[300px] border-r py-5 ">
                        <div className="space-y-1">
                            {menu.map((item, index) => (
                                <div key={index} className="pr-9 cursor-pointer" onClick={() => navigate(item.path)}>
                                    <div
                                        className={`${item.path == location.pathname
                                            ? "bg-[var(--primary-color)] text-white"
                                            : "text-[var(--primary-color)]"
                                            } flex items-center rounded-r-full px-5 py-2`}
                                    >

                                        <ListItemIcon>{item.path == location.pathname ? item.activeIcon : item.icon}</ListItemIcon>
                                        <ListItemText primary={item.name} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Divider />
                        
                        <div className="space-y-1">
                            {menu2.map((item, index) => (
                                <div key={index} className="pr-9 cursor-pointer" onClick={() => {
                                    if(item.path=="/") handleLogout()
                                }}>
                                    <div
                                        className={`${item.path == location.pathname
                                            ? "bg-[var(--primary-color)] text-white"
                                            : "text-[var(--primary-color)]"
                                            } flex items-center rounded-r-full px-5 py-2`}
                                    >

                                        <ListItemIcon>{item.path == location.pathname ? item.activeIcon : item.icon}</ListItemIcon>
                                        <ListItemText primary={item.name} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    export default DrawerList;
