import React, { useEffect, useState } from "react";
import { Button, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import colors from "../../data/Filters/colors";
import { useSearchParams } from "react-router";
import price from "../../data/Filters/price";
import brand from "../../data/Filters/brand";
import discount from "../../data/Filters/discount";

const FilterSection = () => {

  const [expendColor, setExpendColor] = useState(false);
  const [expendPrice, setExpendPrice] = useState(false);
  // const [expendBrand, setExpendBrand] = useState(false);
  const [expendDiscount, setExpendDiscount] = useState(false);
  const [colorRadio, setColorRadio] = useState("");
  const [priceRadio, setPriceRadio] = useState("");
  // const [brandRadio, setBrandRadio] = useState("");
  const [discountRadio, setDiscountRadio] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  const updateFilterParams = (e) => {
    const { value, name } = e;
    if (value) {
      searchParams.set(name, value);
    }
    else {
      searchParams.delete(name);
    }
    setSearchParams(searchParams);
  };

  useEffect(() => {
    clearAllFilter()
  }, [])

  const clearAllFilter = () => {
    console.log("ClearAllFilter")
    setColorRadio("");
    setPriceRadio("");
    // setBrandRadio("");
    setDiscountRadio("");
    searchParams.forEach((value, key) => {
      searchParams.delete(key)
    }
    );
    setSearchParams(searchParams);
  };

  return (
    <div className="-z-50 space-y-5">
      <div className="flex items-center justify-between h-[40px] px-9 lg:border-r-1">
        <p className="text-lg font-bold">Filter</p>
        <Button
          size="small"
          className="text-teal-600 cursor-pointer font-semibold "
          onClick={clearAllFilter}
        >
          Clear All
        </Button>
      </div>
      <Divider />

      <div className="px-9 space-y-6 py-4">
        <section>
          <FormControl>
            <FormLabel sx={{ fontSize: "16px", fontWeight: "bold", color: "var(--primary-color)", paddingBottom: "3px" }} className="text-2xl font-semibold" id="color">Color</FormLabel>
            <RadioGroup
              aria-labelledby="color"
              // defaultValue=""
              value={colorRadio}
              name="color"
              onClick={(e) => {
                const value = e.target.value;
                setColorRadio((prev) => {
                  const newValue = prev === value ? "" : value; // toggle: if same -> clear, else -> set
                  console.log(newValue)
                  updateFilterParams({ name: "color", value: newValue });
                  return newValue;
                });
              }}
            >
              {colors.slice(0, expendColor ? colors.length : 5).map((item, index) => (
                <FormControlLabel key={index} value={item.name} control={<Radio size="small" />} label={<div className="flex gap-3 items-center"><p>{item.name}</p><p style={{ backgroundColor: item.hex }} className={`h-5 w-5 rounded-full ${item.name == "Lavender" ? "border" : ""}`}></p></div>} />
              ))}
            </RadioGroup>
          </FormControl>
          <div>
            <button onClick={() => setExpendColor(!expendColor)} className="text-[var(--primary-color)]  hover:text-[#004494] cursor-pointer">
              {expendColor ? <>hide</> : <>+ {colors.length - 5} more</>}
            </button>
          </div>
        </section>
      </div>

      {/* Price */}
      <div className="px-9 space-y-6 py-4">
        <section>
          <FormControl>
            <FormLabel sx={{ fontSize: "16px", fontWeight: "bold", color: "var(--primary-color)", paddingBottom: "3px" }} className="text-2xl font-semibold" id="price">Price</FormLabel>
            <RadioGroup
              aria-labelledby="price"
              // defaultValue=""
              name="price"
              value={priceRadio}
              onClick={(e) => {
                const value = e.target.value;
                setPriceRadio((prev) => {
                  const newValue = prev === value ? "" : value; // toggle: if same -> clear, else -> set
                  console.log(newValue)
                  updateFilterParams({ name: "price", value: newValue });
                  return newValue;
                });
              }}
            >
              {price.slice(0, expendPrice ? price.length : 5).map((item, index) => (
                <FormControlLabel key={index} value={item.value} control={<Radio size="small" />} label={item.name} />
              ))}
            </RadioGroup>
          </FormControl>
          <div>
            <button onClick={() => setExpendPrice(!expendPrice)} className="text-[var(--primary-color)]  hover:text-[#004494] cursor-pointer">
              {expendPrice ? <>hide</> : <>+ {price.length - 5} more</>}
            </button>
          </div>
        </section>
      </div>

      {/* Brand */}
      {/* <div className="px-9 space-y-6 py-4">
        <section>
          <FormControl>
            <FormLabel sx={{ fontSize: "16px", fontWeight: "bold", color: "var(--primary-color)", paddingBottom: "3px" }} className="text-2xl font-semibold" id="brand">Brand</FormLabel>
            <RadioGroup
              aria-labelledby="brand"
              // defaultValue=""
              value={brandRadio}
              name="brand"
              onClick={(e) => {
                const value = e.target.value;
                setBrandRadio((prev) => {
                  const newValue = prev === value ? "" : value;
                  updateFilterParams({ name: "brand", value: newValue });
                  return newValue;
                });
              }}
            >
              {brand.slice(0, expendBrand ? brand.length : 5).map((item, index) => (
                <FormControlLabel key={index} value={item.value} control={<Radio size="small" />} label={item.name} />
              ))}
            </RadioGroup>
          </FormControl>
          <div>
            <button onClick={() => setExpendBrand(!expendBrand)} className="text-[var(--primary-color)]  hover:text-[#004494] cursor-pointer">
              {expendBrand ? <>hide</> : <>+ {brand.length - 5} more</>}
            </button>
          </div>
        </section>
      </div> */}

      {/* Discount */}
      <div className="px-9 space-y-6 py-4">
        <section>
          <FormControl>
            <FormLabel sx={{ fontSize: "16px", fontWeight: "bold", color: "var(--primary-color)", paddingBottom: "3px" }} className="text-2xl font-semibold" id="color">Discount</FormLabel>
            <RadioGroup
              aria-labelledby="discount"
              // defaultValue=""
              value={discountRadio}
              name="discount"
              onClick={(e) => {
                const value = e.target.value;
                setDiscountRadio((prev) => {
                  const newValue = prev === value ? "" : value;
                  updateFilterParams({ name: "discount", value: newValue });
                  return newValue;
                });
              }}
            >
              {discount.slice(0, expendDiscount ? discount.length : 5).map((item, index) => (
                <FormControlLabel key={index} value={item.value} control={<Radio size="small" />} label={item.name} />
              ))}
            </RadioGroup>
          </FormControl>
          <div>
            <button onClick={() => setExpendDiscount(!expendDiscount)} className="text-[var(--primary-color)]  hover:text-[#004494] cursor-pointer">
              {expendDiscount ? <>hide</> : <>+ {discount.length - 5} more</>}
            </button>
          </div>
        </section>
      </div>

    </div>
  );
};

export default FilterSection;




// import React, { useEffect, useState } from "react";
// import { Button, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
// import { useSearchParams } from "react-router-dom";
// import colors from "../../data/Filters/colors";
// import price from "../../data/Filters/price";
// import brand from "../../data/Filters/brand";
// import discount from "../../data/Filters/discount";

// const FilterSection = () => {
//   const [expendColor, setExpendColor] = useState(false);
//   const [expendPrice, setExpendPrice] = useState(false);
//   const [expendBrand, setExpendBrand] = useState(false);
//   const [expendDiscount, setExpendDiscount] = useState(false);

//   const [colorRadio, setColorRadio] = useState("");
//   const [priceRadio, setPriceRadio] = useState("");
//   const [brandRadio, setBrandRadio] = useState("");
//   const [discountRadio, setDiscountRadio] = useState("");

//   const [searchParams, setSearchParams] = useSearchParams();

//   // Function to update filters in URL
//   const updateFilterParams = ({ name, value }) => {
//     if (value) {
//       searchParams.set(name, value);
//     } else {
//       searchParams.delete(name);
//     }
//     setSearchParams(searchParams);
//   };

//   useEffect(() => {
//     clearAllFilter();
//   }, []);

//   const clearAllFilter = () => {
//     searchParams.forEach((_, key) => {
//       searchParams.delete(key);
//     });
//     setColorRadio("");
//     setPriceRadio("");
//     setBrandRadio("");
//     setDiscountRadio("");
//     setSearchParams(searchParams);
//   };

//   return (
//     <div className="-z-50 space-y-5">
//       <div className="flex items-center justify-between h-[40px] px-9 lg:border-r-1">
//         <p className="text-lg font-bold">Filter</p>
//         <Button
//           size="small"
//           className="text-teal-600 cursor-pointer font-semibold"
//           onClick={clearAllFilter}
//         >
//           Clear All
//         </Button>
//       </div>
//       <Divider />

//       {/* Color */}
//       <div className="px-9 space-y-6 py-4">
//         <FormControl>
//           <FormLabel>Color</FormLabel>
//           <RadioGroup
//             name="color"
//             value={colorRadio}
//             onClick={(e) => {
//               const value = e.target.value;
//               setColorRadio(prev => {
//                 const newValue = prev === value ? "" : value;
//                 updateFilterParams({ name: "color", value: newValue });
//                 return newValue;
//               });
//             }}
//           >
//             {colors.slice(0, expendColor ? colors.length : 5).map((item, index) => (
//               <FormControlLabel
//                 key={index}
//                 value={item.name}
//                 control={<Radio size="small" />}
//                 label={
//                   <div className="flex gap-3 items-center">
//                     <p>{item.name}</p>
//                     <p
//                       style={{ backgroundColor: item.hex }}
//                       className={`h-5 w-5 rounded-full ${item.name === "Lavender" ? "border" : ""}`}
//                     />
//                   </div>
//                 }
//               />
//             ))}
//           </RadioGroup>
//           <button onClick={() => setExpendColor(!expendColor)} className="text-[var(--primary-color)] hover:text-[#004494] cursor-pointer">
//             {expendColor ? "Hide" : `+${colors.length - 5} more`}
//           </button>
//         </FormControl>
//       </div>

//       {/* Price */}
//       <div className="px-9 space-y-6 py-4">
//         <FormControl>
//           <FormLabel>Price</FormLabel>
//           <RadioGroup
//             name="price"
//             value={priceRadio}
//             onClick={(e) => {
//               const value = e.target.value;
//               setPriceRadio((prev) => {
//                 const newValue = prev === value ? "" : value;
//                 updateFilterParams({ name: "price", value: newValue });
//                 return newValue;
//               });
//             }}
//           >
//             {price.slice(0, expendPrice ? price.length : 5).map((item, index) => (
//               <FormControlLabel key={index} value={item.value} control={<Radio size="small" />} label={item.name} />
//             ))}
//           </RadioGroup>
//           <button onClick={() => setExpendPrice(!expendPrice)} className="text-[var(--primary-color)] hover:text-[#004494] cursor-pointer">
//             {expendPrice ? "Hide" : `+${price.length - 5} more`}
//           </button>
//         </FormControl>
//       </div>

//       {/* Brand */}
//       <div className="px-9 space-y-6 py-4">
//         <FormControl>
//           <FormLabel>Brand</FormLabel>
//           <RadioGroup
//             name="brand"
//             value={brandRadio}
//             onClick={(e) => {
//               const value = e.target.value;
//               setBrandRadio(prev => {
//                 const newValue = prev === value ? "" : value;
//                 updateFilterParams({ name: "brand", value: newValue });
//                 return newValue;
//               });
//             }}
//           >
//             {brand.slice(0, expendBrand ? brand.length : 5).map((item, index) => (
//               <FormControlLabel key={index} value={item.value} control={<Radio size="small" />} label={item.name} />
//             ))}
//           </RadioGroup>
//           <button onClick={() => setExpendBrand(!expendBrand)} className="text-[var(--primary-color)] hover:text-[#004494] cursor-pointer">
//             {expendBrand ? "Hide" : `+${brand.length - 5} more`}
//           </button>
//         </FormControl>
//       </div>

//       {/* Discount */}
//       <div className="px-9 space-y-6 py-4">
//         <FormControl>
//           <FormLabel>Discount</FormLabel>
//           <RadioGroup
//             name="discount"
//             value={discountRadio}
//             onClick={(e) => {
//               const value = e.target.value;
//               setDiscountRadio(prev => {
//                 const newValue = prev === value ? "" : value;
//                 updateFilterParams({ name: "discount", value: newValue });
//                 return newValue;
//               });
//             }}
//           >
//             {discount.slice(0, expendDiscount ? discount.length : 5).map((item, index) => (
//               <FormControlLabel key={index} value={item.value} control={<Radio size="small" />} label={item.name} />
//             ))}
//           </RadioGroup>
//           <button onClick={() => setExpendDiscount(!expendDiscount)} className="text-[var(--primary-color)] hover:text-[#004494] cursor-pointer">
//             {expendDiscount ? "Hide" : `+${discount.length - 5} more`}
//           </button>
//         </FormControl>
//       </div>
//     </div>
//   );
// };

// export default FilterSection;

