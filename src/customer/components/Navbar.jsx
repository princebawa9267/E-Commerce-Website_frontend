// import React, { useEffect, useState } from 'react'
// import { Logo } from '../../assets/logo/Logos';
// import { Avatar, Box, Button, IconButton, useMediaQuery, useTheme } from '@mui/material';
// import { MenuOpen, Search, FavoriteBorder, AddShoppingCart, Storefront } from '@mui/icons-material';
// import CategorySheet from './CategorySheet';
// import { useNavigate } from 'react-router';
// import { mainCategory } from '../../data/category/mainCategory';
// import { useAppDispatch, useAppSelector } from '../../state/store';
// import { fetchUserProfile } from '../../state/authSlice';

// const Navbar = () => {
//   const theme = useTheme();
//   const navigate = useNavigate();
//   const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
//   const [selectedCategory, setSelectedCategory] = useState("men");
//   const [showCategorySheet, setShowCategorySheet] = useState(false);

//   const {auth} = useAppSelector(store => store);
//   const dispatch = useAppDispatch();

//   useEffect(() => {
//     dispatch(fetchUserProfile(localStorage.getItem("jwt")))
//   },[])

//   return (
//     <div>
//       <Box sx={{zIndex:2}} className="sticky top-0 left-0 right-0">
//         <div className='sticky flex items-center justify-between py-2 px-5 lg:px-10 border-b' >

//           <div className='flex items-center flex-row gap-1.5 h-full'>
//             {
//               (!isLarge) ? <IconButton>
//                 {/* <MenuOpenIcon/> */}
//                 <MenuOpen />
//               </IconButton> : <></>
//             }

//             <img onClick={()=>navigate("/")} src={Logo} width={80} />
//             <div className='h-full' >
//               <ul className='flex gap-7 font-medium items-center ml-3 h-full'>
//                 {/* hover:text-[#7D0A0A] */}
//                 {mainCategory.map((item,index) => <div className='h-[100%]' key={index} onMouseLeave={() => setShowCategorySheet(false)}  onMouseEnter={() => {setShowCategorySheet(true); setSelectedCategory(item.categoryId)}}> <li className="text-[#504B38] cursor-pointer h-full relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[var(--primary-color)] after:transition-all after:duration-300 hover:after:w-full hover:text-[var(--primary-color)]">
//                   {item.name}
//                 </li> </div>)}
//                 {/* <p className="relative text-xl font-bold after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full">
//                   Center Expand
//                 </p> */}
//                 {/* <p className="relative text-xl font-bold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
//                   Hover Me
//                 </p> */}
//               </ul>
//             </div>

//           </div>
//           <div className='flex gap-1.5 lg:gap-2.5'>
//             <IconButton>
//               <Search />
//             </IconButton>
//             {
//               auth.user ? <Button onClick={()=> navigate("account/orders")} className='flex items-center gap-1'>
//                 <Avatar sx={{width : 29, height : 29}} src={Logo}/>
//                 <h1 className='font-semibold hidden lg:block'>{auth.user?.fullName}</h1>
//               </Button> : 
//             <Button variant="contained" onClick={() => navigate("/login")}>
//               Login
//             </Button>
//             }
//             <IconButton onClick={() => navigate("/wishlist")}>
//               <FavoriteBorder/>
//             </IconButton>
//             <IconButton onClick={() => navigate("/cart")}>
//               <AddShoppingCart />
//             </IconButton>
//             {
//               isLarge ? <Button onClick={() => navigate("/become-seller")} variant='outlined' startIcon={<Storefront />}>
//                 Become Merchant
//               </Button> : <span></span>
//             }
//           </div>
//         </div>
//         { showCategorySheet && <div onMouseEnter={() => setShowCategorySheet(true)} onMouseLeave={() => setShowCategorySheet(false)} className='categorySheet absolute w-full pl-3 pr-3 '>
//           <CategorySheet selectedCategory={selectedCategory} />
//         </div>}
//       </Box>
//     </div>
//   )
// }

// export default Navbar;


import React, { useEffect, useState } from 'react'
import { Logo } from '../../assets/logo/Logos';
import { Avatar, Box, Button, Drawer, IconButton, InputAdornment, inputBaseClasses, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField, useMediaQuery, useTheme } from '@mui/material';
import { MenuOpen, Search, FavoriteBorder, AddShoppingCart, Storefront, List } from '@mui/icons-material';
import CategorySheet from './CategorySheet';
import { useNavigate } from 'react-router';
import { mainCategory } from '../../data/category/mainCategory';
import { useAppDispatch, useAppSelector } from '../../state/store';
import { fetchUserProfile } from '../../state/authSlice';

const Navbar = () => {

    const [search , setSearch] = useState("");

  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const [selectedCategory, setSelectedCategory] = useState("men");
  const product = useAppSelector(store => store.product);
  const [showCategorySheet, setShowCategorySheet] = useState(false);

  const { auth,seller } = useAppSelector(store => store);

  const handleSearch = {
  //   dispatch(searchProduct())
  }

  // const toggleDrawer = (anchor, open) => (event) => {
  //   if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
  //     return;
  //   }

  //   setState({ ...state, [anchor]: open });
  // };

  useEffect(() => {
    dispatch(fetchUserProfile(localStorage.getItem("jwt")))
  }, [])

  // const list = (anchor) => (
  //   <Box
  //     sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
  //     role="presentation"
  //     onClick={toggleDrawer(anchor, false)}
  //     onKeyDown={toggleDrawer(anchor, false)}
  //     >
  //     <List>
  //       {mainCategory.map((item, index) => (
  //         <ListItem key={item} disablePadding>
  //           <ListItemButton>
  //             <ListItemIcon>
  //               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //             </ListItemIcon>
  //             <ListItemText primary={item} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //     <Divider />
  //     <List>
  //       {['All mail', 'Trash', 'Spam'].map((text, index) => (
  //         <ListItem key={text} disablePadding>
  //           <ListItemButton>
  //             <ListItemIcon>
  //               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //             </ListItemIcon>
  //             <ListItemText primary={text} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //   </Box>
  // );


  return (
    <div>
      <Box sx={{ zIndex: 2 }} className="fixed top-0 left-0 right-0 bg-[#eef0f3]">
        <div className='sticky flex items-center justify-between py-2 px-5 lg:px-10 border-b' >

        {/* <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer> */}

          <div className='flex items-center flex-row gap-1.5 h-full'>
            {
              (!isLarge) ? <IconButton>
                {/* <MenuOpenIcon/> */}
                <MenuOpen />
              </IconButton> : <></>
            }

            <img onClick={() => navigate("/")} src={Logo} width={80} />
            <div className=' relative h-full' >
              <ul className=' flex gap-7 font-medium items-center ml-3 h-full'>
                {/* hover:text-[#7D0A0A] */}
                {mainCategory.map((item, index) => <div className='h-[100%]' key={index} onMouseLeave={() => setShowCategorySheet(false)} onMouseEnter={() => { setShowCategorySheet(true); setSelectedCategory(item.categoryId) }}> <li className="text-[#504B38] cursor-pointer h-full relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[var(--primary-color)] after:transition-all after:duration-300 hover:after:w-full hover:text-[var(--primary-color)]">
                  {item.name}
                </li>
                </div>)}
              </ul>

            </div>
          </div>
         
          <div className='flex gap-1.5 lg:gap-2.5'>

             {/* Search Feature */}
            {/* <TextField
            id="outlined-suffix-shrink"
            label={`Search 🔍`}
            variant="outlined"
            size='small'
            sx={{width:"120px"}}
            onChange={(e) => {setSearch(e.target.value)}}
      />
      <Button onClick={() => handleSearch()}>
        <Search/>
      </Button> */}
            {
              auth.user ? <Button onClick={() => navigate("account/orders")} className='flex items-center gap-1'>
                <Avatar sx={{ width: 29, height: 29 }} src={Logo} />
                <h1 className='font-semibold hidden lg:block'>{auth.user?.fullName}</h1>
              </Button> : 
                <Button variant="contained" onClick={() => navigate("/login")}>
                  Login
                </Button>
            }
            <IconButton onClick={() => navigate("/wishlist")}>
              <FavoriteBorder />
            </IconButton>
            <IconButton onClick={() => {navigate("/cart")}}>
              <AddShoppingCart />
            </IconButton>
            {
              isLarge ? <Button onClick={() => navigate("/become-seller")} variant='outlined' startIcon={<Storefront />}>
                Become Merchant
              </Button> : <span></span>
            }
          </div>
        </div>
        {showCategorySheet && <div className='absolute -mt-4'>
          <div onMouseEnter={() => setShowCategorySheet(true)} onMouseLeave={() => setShowCategorySheet(false)} className='categorySheet w-full pl-3 pr-3 '>
            <CategorySheet selectedCategory={selectedCategory} showCategorySheet={setShowCategorySheet} />
          </div>
        </div>
        }
      </Box>
    </div>
  )
}

export default Navbar;
