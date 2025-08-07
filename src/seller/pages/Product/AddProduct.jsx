import React, { useState } from "react";
// import menLevelTwo from '../../../data/category/level two/menLevelTwo'
// import 
import { AddPhotoAlternate, Close } from "@mui/icons-material";
import {
  Button,
  CircularProgress,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";

import { menLevelTwo } from "../../../data/category/level two/menLevelTwo"
import { womenLevelTwo } from "../../../data/category/level two/womenLevelTwo"
import { electronicsLevelTwo } from "../../../data/category/level two/electronicLevelTwo"
import { furnitureLevelTwo } from "../../../data/category/level two/furnitureLevelTwo"

import { menLevelThree } from "../../../data/category/level three/menLevelThree"
import { womenLevelThree } from "../../../data/category/level three/womenLevelThree"
import { electronicsLevelThree } from "../../../data/category/level three/electronicLevelThree"
import { furnitureLevelThree } from "../../../data/category/level three/furnitureLevelThree"

import colors from "../../../data/Filters/colors"

import { uploadToCloudinary } from "../../../Util/uploadToCloudnary";
import { useAppDispatch, useAppSelector } from "../../../state/store";
import { createProduct } from "../../../state/seller/sellerProductSlice";
import { mainCategory } from "../../../data/category/mainCategory";

const categoryTwo = {
  men: menLevelTwo,
  women: womenLevelTwo,
  kids: [],
  home_furniture: furnitureLevelTwo,
  beauty: [],
  electronics: electronicsLevelTwo
}

const categoryThree = {
  men: menLevelThree,
  women: womenLevelThree,
  kids: [],
  home_furniture: furnitureLevelThree,
  beauty: [],
  electronics: electronicsLevelThree
}

const AddProduct = () => {
  const [uploadImage, setUploadImage] = useState(false);
  const { sellerProduct } = useAppSelector(store => store)

  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      mrpPrice: "",
      sellingPrice: "",
      quantity: "",
      color: "",
      images: [],
      category: "",
      category2: "",
      category3: "",
      sizes: "",
    },

    onSubmit: (values,{resetForm}) => {
      dispatch(createProduct({ request: values, jwt: localStorage.getItem("jwt") }));
      resetForm();
    },
  });

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    setUploadImage(true);
    const image = await uploadToCloudinary(file);
    console.log(image);
    formik.setFieldValue("images", [...formik.values.images, image]);
    console.log(formik.values.images);
    setUploadImage(false);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...formik.values.images];
    updatedImages.splice(index, 1);
    console.log(index);
    formik.setFieldValue("images", updatedImages);
  };

  const childCategory = (category, parentCategoryId) => {
    return (Array.isArray(category) ? category : []).filter((child) => {
      return child.parentCategoryId === parentCategoryId;
    });
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="space-y-4 p-4">
        <Grid container spacing={2}>

          {/* Image */}
          <Grid className="flex flex-wrap gap-5">
            <input
              type="file"
              accept="image/*"
              id="fileInput"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            <label className="flex justify-center items-center relative border w-24 h-24 rounded-md cursor-pointer" htmlFor="fileInput">
              <AddPhotoAlternate className="text-gray-700" />
              {uploadImage && (
                <CircularProgress className="absolute" />
              )}
            </label>
            <div className="flex flex-wrap gap-2">
              {formik.values.images.map((images, index) => (
                <div className="relative">
                  <img
                    className="w-24 h-24 object-cover rounded-md"
                    key={index}
                    src={images}
                    alt={`ProductImage ${index + 1}`}
                  />
                  <IconButton onClick={() => handleRemoveImage(index)} className="bg-white" color="error" sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    outline: "none",

                  }}>
                    <Close sx={{ fontSize: "1rem" }} />
                  </IconButton>
                </div>
              ))}
            </div>
          </Grid>

          {/* Title */}
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              id="title"
              name="title"
              label="Title"
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
              required
            />
          </Grid>

          {/* Description */}
          <Grid size={{ xs: 12 }}>
            <TextField
              multiline
              rows={4}
              fullWidth
              id="description"
              name="description"
              label="Description"
              value={formik.values.description}
              onChange={formik.handleChange}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
              required
            />
          </Grid>

          {/* Mrp Price */}
          <Grid size={{ xs: 12, md: 4, lg: 3 }}>
            <TextField
              fullWidth
              id="mrp_price"
              name="mrpPrice"
              label="MRP Price"
              type="number"
              value={formik.values.mrpPrice}
              onChange={formik.handleChange}
              error={formik.touched.mrpPrice && Boolean(formik.errors.mrpPrice)}
              helperText={formik.touched.mrpPrice && formik.errors.mrpPrice}
              required
            />
          </Grid>

          {/* Selling Price */}
          <Grid size={{ xs: 12, md: 4, lg: 3 }}>
            <TextField
              fullWidth
              id="sellingPrice"
              name="sellingPrice"
              label="Selling Price"
              type="number"
              value={formik.values.sellingPrice}
              onChange={formik.handleChange}
              error={
                formik.touched.sellingPrice &&
                Boolean(formik.errors.sellingPrice)
              }
              helperText={
                formik.touched.sellingPrice && formik.errors.sellingPrice
              }
              required
            />
          </Grid>

          {/* Colors */}
          <Grid size={{ xs: 12, md: 4, lg: 3 }}>
            <FormControl
              fullWidth
              error={formik.touched.color && Boolean(formik.errors.color)}
              required
            >
              <InputLabel id="color-label">Color</InputLabel>
              <Select
                labelId="color-label"
                id="color"
                name="color"
                value={formik.values.color}
                onChange={formik.handleChange}
                label="Color"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>

                {colors.map((color, index) =>
                  <MenuItem key={index} value={color.name}>
                    <div className="flex gap-3">
                      <span style={{ backgroundColor: color.hex }} className={`h-5 w-5 rounded-full ${["White", "Beige", "Off White", "Lavender", "Nude", "Cream", "Peach"].includes(color.name) ? "border" : ""}`}>
                      </span>
                      <p>{color.name}</p>
                    </div>
                  </MenuItem>)}
              </Select>
              {
                formik.touched.color && formik.errors.color && (
                  <FormHelperText>{formik.errors.color}</FormHelperText>
                )
              }
            </FormControl>
          </Grid>

          {/* Sizes */}
          <Grid size={{ xs: 12, md: 4, lg: 3 }}>
            <FormControl
              fullWidth
              error={formik.touched.sizes && Boolean(formik.errors.sizes)}
              required
            >
              <InputLabel id="sizes-label">Size</InputLabel>
              <Select
                labelId="sizes-label"
                id="sizes"
                name="sizes"
                value={formik.values.sizes}
                onChange={formik.handleChange}
                label="Size"
              >
                <MenuItem value=" ">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="FREE">FREE</MenuItem>
                <MenuItem value="S">S</MenuItem>
                <MenuItem value="M">M</MenuItem>
                <MenuItem value="L">l</MenuItem>
                <MenuItem value="XL">XL</MenuItem>
              </Select>
              {
                formik.touched.sizes && formik.errors.sizes && (
                  <FormHelperText>{formik.errors.sizes}</FormHelperText>
                )
              }
            </FormControl>
          </Grid>

          {/* Category One */}
          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <FormControl
              fullWidth
              error={formik.touched.category && Boolean(formik.errors.category)}
              required
            >
              <InputLabel id="category1">Category</InputLabel>
              <Select
                labelId="category1"
                id="category1"
                name="category"
                value={formik.values.category}
                onChange={formik.handleChange}
                label="Category"
              >

                <MenuItem value="">
                  <em>none</em>
                </MenuItem>

                {mainCategory.map((category1) =>
                  <MenuItem value={category1.categoryId}>
                    <div className="flex gap-3">
                      <p>{category1.name}</p>
                    </div>
                  </MenuItem>)}
              </Select>
              {
                formik.touched.category && formik.errors.category && (
                  <FormHelperText>{formik.errors.category}</FormHelperText>
                )
              }
            </FormControl>
          </Grid>

          {/* Category Two */}
          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <FormControl
              fullWidth
              error={formik.touched.category2 && Boolean(formik.errors.category2)}
              required
            >
              <InputLabel id="category2">Second Category</InputLabel>
              <Select
                labelId="category2"
                id="category2"
                name="category2"
                value={formik.values.category2}
                onChange={formik.handleChange}
                label="Category2"
              >

                <MenuItem disabled value="">
                  <em>none</em>
                </MenuItem>

                {/* {formik.values.category2 && childCategory(categoryTwo[formik.values.category] || [], formik.values.category).map((category2, index) => { */}
                {childCategory(categoryTwo[formik.values.category] || [], formik.values.category).map((category2, index) =>
                    <MenuItem value={category2.categoryId}>
                      {category2.name}
                    </MenuItem>)
                }

              </Select>
              {
                formik.touched.category2 && formik.errors.category2 && (
                  <FormHelperText>{formik.errors.category2}</FormHelperText>
                )
              }
            </FormControl>
          </Grid>

          {/* Category Three */}
          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <FormControl
              fullWidth
              error={formik.touched.category && Boolean(formik.errors.category)}
              required
            >
              <InputLabel id="third-category">Third Category</InputLabel>
              <Select
                labelId="third-category"
                id="category3"
                name="category3"
                value={formik.values.category3}
                onChange={formik.handleChange}
                label="Third Category"
              >

                <MenuItem disabled value="">
                  <em>none</em>
                </MenuItem>

                {childCategory(categoryThree[formik.values.category], formik.values.category2).map((category3, index) =>
                  <MenuItem value={category3.categoryId}>
                    {category3.name}
                  </MenuItem>)}
              </Select>
              {
                formik.touched.category && formik.errors.category && (
                  <FormHelperText>{formik.errors.category}</FormHelperText>
                )
              }
            </FormControl>
          </Grid>

          {/* Add product button */}
          <Grid size={12} xs={12}>
            <Button
              sx={{ p: "14px" }}
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
            >
              {

              }
              {
                sellerProduct?.loading
                  ? <CircularProgress className="rounded-md" size="small" sx={{ width: "27px", height: "27px" }} />
                  : "Add Product"
              }
            </Button>
          </Grid>

        </Grid>
      </form>
    </div >
  );
};

export default AddProduct;
