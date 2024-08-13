import { apiUrl } from '../_data/api.url';

export const uploadImage = async (formData: FormData) => {
  const imageBBResponse = await fetch(apiUrl.imageBBUrl, {
    method: 'POST',
    body: formData,
  });

  const imageData = await imageBBResponse.json();
  if (!imageData.success) return { error: imageData?.message };

  return { success: imageData?.data?.url };
};
