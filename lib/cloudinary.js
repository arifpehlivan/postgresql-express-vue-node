import cloudinary from 'cloudinary';

cloudinary.config({
    cloud_name: 'dv27uc7w1',
    api_key: '859851928621432',
    api_secret: '7pXWZPrcUwV7Q6TUEmBAL_Ab_x8',
});

module.exports = async (file)=>{
    try {
        const res = await cloudinary.uploader.upload(file);
        return res.secure_url;
    } catch (error) {
        return error;
    }
}