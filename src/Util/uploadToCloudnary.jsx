export const uploadToCloudinary = async(pics) => {
    const cloud_name = import.meta.env.VITE_CLOUD_NAME;
    const upload_preset = import.meta.env.VITE_UPLOAD_PRESET;

    console.log("Cloudinary Config:", {
        cloud_name,
        upload_preset
    });
    // const cloud_name = "dky5cdgsh"
    // const upload_preset = "prime-goods"

    if(pics){
        const data = new FormData();
        data.append("file",pics);
        data.append("upload_preset",upload_preset);
        data.append("cloud_name",cloud_name);

        const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
                method: "POST",
                body: data
            });

        const fileData = await res.json();
        return fileData.url;
    }
    else{
        console.log("error : pics not found");
    }



}