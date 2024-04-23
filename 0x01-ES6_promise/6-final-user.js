import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((resault) => (
      resault.map((obj) => ({
        status: obj.status,
        value: obj.status === 'fulfilled' ? obj.value : String(obj.reason)
      }))
    ));
}
