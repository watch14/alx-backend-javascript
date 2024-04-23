import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let rasault = {};
  try {
    const pix = await uploadPhoto();
    const user = await createUser();
    rasault = { photo, user };
  }
  catch (err) {
    rasault = { photo: null,user: null };
  }
  return rasault;
}
