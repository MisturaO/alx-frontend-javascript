import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((values) => {
    const arr = [];
    for (const item of values) {
      arr.push({ status: item.status, value: item.value || item.reason });
    }
    console.log(arr);
  });
}

// import signUpUser from './4-user-promise';
// import uploadPhoto from './5-photo-reject';

// export default async function handleProfileSignup(firstName, lastName, fileName) {
//   return Promise
//     .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
//     .then((res) => (
//         console.log(res),
//       res.map((o) => ({
//         status: o.status,
//         value: o.status === 'fulfilled' ? o.value : String(o.reason),
//       }))
//     ));
// }
