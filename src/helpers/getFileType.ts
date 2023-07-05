export const getFileType = (fileType: string) => {
	if (['image/jpeg', 'image/png', 'image/gif'].includes(fileType))
		return 'image';
	if (['video/webm', 'video/mp4'].includes(fileType)) return 'video';
	if (['audio/mpeg', 'audio/x-wav', 'audio/wav'].includes(fileType))
		return 'audio';
	return null;
};
