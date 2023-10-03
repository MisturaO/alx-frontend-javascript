// Using binary data (i.e. bits) to store and manipulate data in memory

export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    return 'Position outside range';
  }

  const buffer = new DataView(new ArrayBuffer(length), 0, length);
  //   const buffer = new ArrayBuffer(length);
  //   const dataView = new DataView(buffer);

  buffer.setInt8(position, value);
  //   const int8Array = new Int8Array(buffer);
  //   int8Array[position] = value; //Another syntax to achieve this usig the bracket syntax
  return buffer;
}
