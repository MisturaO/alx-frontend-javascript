// Using binary data (i.e. bits) to store and manipulate data in memory

export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    return 'Position outside range';
  }

  const buffer = new ArrayBuffer(length);
  const dataView = new DataView(buffer);

  dataView.setInt8(position, value);
  //   const int8Array = new Int8Array(buffer);
  //   int8Array[position] = value; //Another syntax to achieve this usig the bracket syntax
  return dataView;
}
