export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    return 'Position outside range';
  }

  // Allocates memory space to store and maipulate data(). Basically Just a chunk of raw memory.
  const buffer = new ArrayBuffer(length);
  // To read/write to memory space created by ArrayBuffer,which reference is stored in buffer obj
  const int8Array = new Int8Array(buffer);
  //Stores data (value) into a specific position (position value as the index)
  int8Array[position] = value;

  return buffer;
}
