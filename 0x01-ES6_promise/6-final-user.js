import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const pic = uploadPhoto(fileName);

  return Promise.allSettled([user, pic]).then((resualt) => {
    resualt.map((val) => ({
      status: val.status,
      value: val.status === 'fulfilled' ? val.value : String(val.reson),
    }));
  });
}
