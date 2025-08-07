import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const ShopByCategoryCard = ({image,name}) => {
  return (
    // <div className="group cursor-pointer flex justify-center">
    //   <Card className="w-[200px] sm:w-[150px] xs:w-[100px] max-w-[200px] sm:max-w-[150px] xs:max-w-[100px] overflow-hidden">
    //     <CardActionArea className="flex flex-col items-center">
    //       {/* Circular Image */}
    //       <div className="w-[200px] h-[200px] sm:w-[150px] sm:h-[150px] xs:w-[100px] xs:h-[100px] rounded-full bg-white p-2 flex items-center justify-center transition-transform duration-700 group-hover:scale-95">
    //         <CardMedia
    //           component="img"
    //           image="https://ik.imagekit.io/2xkwa8s1i/consumer-react/More-Category/Dining-Furniture/Dining-set.jpg?tr=w-640"
    //           alt="Smartwatch"
    //           style={{
    //             width: "100%",
    //             height: "100%",
    //             borderRadius: "50%",
    //             objectFit: "contain",
    //           }}
    //         />
    //       </div>
    //       {/* Text Content */}
    //       <CardContent className="p-2">
    //         <Typography
    //           gutterBottom
    //           variant="h6"
    //           component="div"
    //           className="text-center text-lg sm:text-base xs:text-sm"
    //         >
    //           Watches
    //         </Typography>
    //       </CardContent>
    //     </CardActionArea>
    //   </Card>
    // </div>

    <div className="group cursor-pointer">
    <div className="relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-lg">
      <div className=" w-[20vw] aspect-square overflow-hidden">
        <div className="h-full w-full transform transition-transform duration-500 group-hover:scale-110">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover"
          />
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      
      {/* Category Name */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-lg font-semibold text-white transform translate-y-11 transition-transform duration-300 group-hover:translate-y-0">
          {name}
        </h3>
      </div>
    </div>
  </div>

  );
};

export default ShopByCategoryCard;
