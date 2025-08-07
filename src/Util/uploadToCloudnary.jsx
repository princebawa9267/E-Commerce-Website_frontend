export const uploadToCloudinary = async(pics) => {
    const cloud_name = "dky5cdgsh"
    const upload_preset = "prime-goods"

    if(pics){
        const data = new FormData();
        data.append("file",pics);
        data.append("upload_preset",upload_preset);
        data.append("cloud_name",cloud_name);

        const res = await fetch("https://api.cloudinary.com/v1_1/dky5cdgsh/image/upload",{
            method : "POST",
            body : data
        })

        const fileData = await res.json();
        return fileData.url;
    }
    else{
        console.log("error : pics not found");
    }



}