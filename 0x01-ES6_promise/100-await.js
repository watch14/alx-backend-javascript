import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photoPromise = uploadPhoto();
    const userPromise = createUser();
    const [pic, user] = await Promise.all([photoPromise, userPromise]);

    return {
      photo: pic,
      user,
    };
  } catch (error) {
    console.error(error);

    return {
      photo: null,
      user: null,
    };
  }
}
