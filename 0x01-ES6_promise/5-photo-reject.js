export default function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
    if (typeof filename !== 'string') {
      resolve(filename);
    } else {
      reject(new Error('$fileName cannot be processed'));
    }
  });
}
