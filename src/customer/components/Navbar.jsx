import React, { useEffect, useState } from 'react';
import { Logo } from '../../assets/logo/Logos';
import { Avatar, Box, Button, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, useMediaQuery, useTheme, Collapse } from '@mui/material';
import { Menu, FaceRetouchingNatural, FavoriteBorder, AddShoppingCart, Storefront, ExpandLess, ExpandMore } from '@mui/icons-material';
import CategorySheet from './CategorySheet';
import { useNavigate } from 'react-router';
import { mainCategory } from '../../data/category/mainCategory';
import { useAppDispatch, useAppSelector } from '../../state/store';
import { fetchUserProfile } from '../../state/authSlice';

// Category Data Imports
import { menLevelTwo } from '../../data/category/level two/menLevelTwo';
import { womenLevelTwo } from "../../data/category/level two/womenLevelTwo";
import { electronicsLevelTwo } from '../../data/category/level two/electronicLevelTwo';
import { furnitureLevelTwo } from '../../data/category/level two/furnitureLevelTwo';
import { womenLevelThree } from '../../data/category/level three/womenLevelThree';
import { menLevelThree } from '../../data/category/level three/menLevelThree';
import { electronicsLevelThree } from '../../data/category/level three/electronicLevelThree';
import { furnitureLevelThree } from '../../data/category/level three/furnitureLevelThree';

// Data objects for categories
const categoryTwo = {
    men: menLevelTwo,
    women: womenLevelTwo,
    electronics: electronicsLevelTwo,
    home_furniture: furnitureLevelTwo,
};

const categoryThree = {
    men: menLevelThree,
    women: womenLevelThree,
    electronics: electronicsLevelTwo, // Corrected from `electronicsLevelThree`
    home_furniture: furnitureLevelTwo // Corrected from `furnitureLevelThree`
};

// Inject improved mobile drawer (sidebar) styles for attractiveness
const _enhancedDrawerStyles = `
  .MuiDrawer-paper {
    background: linear-gradient(145deg,#0f172a 0%, #1e293b 50%, #334155 100%);
    color: #f1f5f9;
    padding-top: 12px;
    border-right: 1px solid rgba(255,255,255,0.08);
  }
  .MuiDrawer-paper::-webkit-scrollbar {
    width: 6px;
  }
  .MuiDrawer-paper::-webkit-scrollbar-track {
    background: transparent;
  }
  .MuiDrawer-paper::-webkit-scrollbar-thumb {
    background: rgba(255,255,255,0.15);
    border-radius: 20px;
  }
  .MuiDrawer-paper .MuiList-root {
    padding-top: 4px;
  }
  .MuiDrawer-paper .MuiListItemButton-root {
    margin: 4px 10px;
    padding: 10px 14px;
    border-radius: 12px;
    backdrop-filter: blur(4px);
    position: relative;
    overflow: hidden;
    transition: background .35s, transform .25s;
  }
  .MuiDrawer-paper .MuiListItemButton-root:before {
    content:"";
    position:absolute;
    inset:0;
    background: radial-gradient(circle at 0% 0%, rgba(255,255,255,0.18), transparent 70%);
    opacity:0;
    transition: opacity .4s;
  }
  .MuiDrawer-paper .MuiListItemButton-root:hover:before {
    opacity:1;
  }
  .MuiDrawer-paper .MuiListItemButton-root:hover {
    background: rgba(255,255,255,0.08);
    transform: translateX(4px);
  }
  .MuiDrawer-paper .MuiListItemButton-root .MuiListItemText-primary {
    font-weight: 500;
    letter-spacing:.4px;
  }
  .MuiDrawer-paper .MuiListItemButton-root:active {
    transform: translateX(2px) scale(.98);
  }
  @media (max-width: 420px){
    .MuiDrawer-paper {
      width: 82vw !important;
    }
  }
`;
if (typeof document !== 'undefined' && !document.getElementById('enhanced-mobile-drawer-styles')) {
  const styleTag = document.createElement('style');
  styleTag.id = 'enhanced-mobile-drawer-styles';
  styleTag.innerHTML = _enhancedDrawerStyles;
  document.head.appendChild(styleTag);
  if (!document.getElementById('enhanced-mobile-drawer-theme-sync')) {
    const themeStyle = document.createElement('style');
    themeStyle.id = 'enhanced-mobile-drawer-theme-sync';
    const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const txt = dark ? '#f1f5f9' : '#1e293b';
    const start = dark ? '#0f172a' : '#ffffff';
    const mid = dark ? '#1e293b' : '#f5f7fa';
    const end = dark ? '#334155' : '#e2e8f0';
    themeStyle.innerHTML = `
      .MuiDrawer-paper {
        background: linear-gradient(145deg,${start} 0%, ${mid} 50%, ${end} 100%) !important;
        color: ${txt} !important;
      }
    `;
    document.head.appendChild(themeStyle);
  }
}

// NestedList component for mobile drawer
const NestedList = ({ item, navigate, setDrawerOpen }) => {
    const [openLevelTwo, setOpenLevelTwo] = useState(false);
    const [openLevelThree, setOpenLevelThree] = useState({});

    const childCategory = (category, parentCategoryId) => {
        return category.filter((child) => child.parentCategoryId === parentCategoryId);
    };

    const handleLevelTwoClick = () => {
        setOpenLevelTwo(!openLevelTwo);
    };

    const handleLevelThreeClick = (categoryId) => {
        setOpenLevelThree(prevState => ({
            ...prevState,
            [categoryId]: !prevState[categoryId]
        }));
    };

    return (
        <React.Fragment>
            {/* Level 1: Main Category */}
            <ListItemButton onClick={handleLevelTwoClick} sx={{ paddingLeft: '16px' }}>
                <ListItemText primary={item.name} />
                {openLevelTwo ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openLevelTwo} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {childCategory(categoryTwo[item.categoryId], item.categoryId).map((levelTwoItem) => (
                        <React.Fragment key={levelTwoItem.categoryId}>
                            {/* Level 2: Second-level Category */}
                            <ListItemButton sx={{ pl: 4 }} onClick={() => handleLevelThreeClick(levelTwoItem.categoryId)}>
                                <ListItemText primary={levelTwoItem.name} />
                                {openLevelThree[levelTwoItem.categoryId] ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Collapse in={openLevelThree[levelTwoItem.categoryId]} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {/* Level 3: Third-level Category */}
                                    {childCategory(categoryThree[item.categoryId], levelTwoItem.categoryId).map((levelThreeItem) => (
                                        <ListItemButton
                                            key={levelThreeItem.categoryId}
                                            sx={{ pl: 6 }}
                                            onClick={() => {
                                                navigate(`/products/${levelThreeItem.categoryId}`);
                                                setDrawerOpen(false);
                                            }}
                                        >
                                            <ListItemText primary={levelThreeItem.name} />
                                        </ListItemButton>
                                    ))}
                                </List>
                            </Collapse>
                        </React.Fragment>
                    ))}
                </List>
            </Collapse>
        </React.Fragment>
    );
};

// Main Navbar Component
const Navbar = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
    const [selectedCategory, setSelectedCategory] = useState("men");
    const [showCategorySheet, setShowCategorySheet] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const { auth } = useAppSelector(store => store);

    useEffect(() => {
        dispatch(fetchUserProfile(localStorage.getItem("jwt")))
    }, [])

    // Drawer content for mobile
    const drawerList = (
        <Box sx={{ width: 250 }} role="presentation">
            <List>
                {mainCategory.map((item) => (
                    <ListItem key={item.categoryId} disablePadding>
                        <NestedList item={item} navigate={navigate} setDrawerOpen={setDrawerOpen} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <Box sx={{ zIndex: 2 }} className="fixed top-0 left-0 right-0 bg-[#eef0f3]">
                <div className='flex items-center justify-between py-2 px-5 lg:px-10 border-b'>
                    <div className='flex items-center gap-1.5 h-full'>
                        {!isLarge && (
                            <>
                                <IconButton onClick={() => setDrawerOpen(true)}>
                                    <Menu />
                                </IconButton>
                                <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                                    {drawerList}
                                </Drawer>
                            </>
                        )}
                        <img onClick={() => navigate("/")} src={Logo} width={80} alt="Logo" />
                        {isLarge && (
                            <div className='relative h-full'>
                                <ul className='flex gap-7 font-medium items-center ml-3 h-full'>
                                    {mainCategory.map((item, index) => (
                                        <div className='h-[100%]' key={index}
                                            onMouseLeave={() => setShowCategorySheet(false)}
                                            onMouseEnter={() => { setShowCategorySheet(true); setSelectedCategory(item.categoryId) }}>
                                            <li className="text-[#504B38] cursor-pointer h-full relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[var(--primary-color)] after:transition-all after:duration-300 hover:after:w-full hover:text-[var(--primary-color)]">
                                                {item.name}
                                            </li>
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className='flex gap-1.5 lg:gap-2.5'>
                        {auth.user ? (
                            <Button onClick={() => navigate("account/orders")} className='flex items-center gap-1'>
                                <Avatar sx={{ width: 29, height: 29 }} src={Logo} />
                                <h1 className='font-semibold hidden lg:block'>{auth.user?.fullName}</h1>
                            </Button>
                        ) : (
                            <Button variant="contained" onClick={() => navigate("/login")}>
                                Login
                            </Button>
                        )}
                        <IconButton onClick={() => navigate("/wishlist")}>
                            <FavoriteBorder />
                        </IconButton>
                        <IconButton onClick={() => { navigate("/cart") }}>
                            <AddShoppingCart />
                        </IconButton>
                        {isLarge && (
                            <Button onClick={() => navigate("/become-seller")} variant='outlined' startIcon={<Storefront />}>
                                Become Merchant
                            </Button>
                        )}
                    </div>
                </div>
                {showCategorySheet && isLarge && (
                    <div className='absolute -mt-4'>
                        <div onMouseEnter={() => setShowCategorySheet(true)} onMouseLeave={() => setShowCategorySheet(false)} className='categorySheet w-full pl-3 pr-3 '>
                            <CategorySheet selectedCategory={selectedCategory} showCategorySheet={setShowCategorySheet} />
                        </div>
                    </div>
                )}
            </Box>
        </div>
    )
}

export default Navbar;