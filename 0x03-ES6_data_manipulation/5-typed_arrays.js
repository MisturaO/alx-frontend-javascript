export default function createInt8TypedArray(length, position, value) {
/* checks if the position is valid:
    The an index less than zero or ggreater than or equal to lenght isn't
    valid(i.e. if the value of length is 5, the available index would be
    0,1,2,3,4 and not 0,1,2,3,4,5 or -1,0,1,2,3,4,5)
*/
  if (position < 0 || position >= length) {
    return 'Position outside range';
  }

  /* Allocates memory space to store and maipulate data(). Basically Just a chunk of raw memory.
  DataView object is used to create a view over an existing ArrayBuffer, providing a structured
  way to interact with the binary data stored in the ArrayBuffer, so we can have access to the
  '.set()' and '.get()' methods of the Dataview object. These methods allow us to read/write
  values of various data types at specific byte positions within the allocated memory space.
  */
  //   const buffer = new DataView(new ArrayBuffer(length), 0, length);
  const buffer = new ArrayBuffer(length);
  const dataView = new DataView(buffer);

  /* To read/write to memory space created by ArrayBuffer,which reference is stored in buffer obj.
  Stores data (value) into a specific position (position value as the index i.e the position the
    data (value) should be written in). //Sets an 8-bit integer at byte offset position(stores
    whole numbers within the range of -128 to 127) */
  dataView.setInt8(position, value);
  //   const int8Array = new Int8Array(buffer);
  //   int8Array[position] = value; //Another syntax to achieve this usig the bracket syntax

  return dataView;
}
