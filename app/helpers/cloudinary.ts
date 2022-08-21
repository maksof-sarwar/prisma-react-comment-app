import { v2 as cloudinary } from 'cloudinary';
cloudinary.config({ secure: true, cname: process.env.CLOUDINARY_URL });
type folder = 'attachments' | 'image' | 'video';
export const uploadToCloudinary = async (
	filePath: string,
	folder: folder = 'attachments'
) => {
	try {
		const options = {
			use_filename: true,
			unique_filename: false,
			overwrite: true,
			folder,
		};
		const { public_id: id, secure_url: url } = await cloudinary.uploader.upload(
			filePath,
			{ ...options }
		);
		return {
			id,
			url,
		};
	} catch (error: any) {
		throw new Error(error.message);
	}
};

export const deleteFromCloudinary = async (id: string) => {
	try {
		await cloudinary.uploader.destroy(id);
		return { message: `${id} file successfully deleted.` };
	} catch (error: any) {
		throw new Error(error.message);
	}
};
