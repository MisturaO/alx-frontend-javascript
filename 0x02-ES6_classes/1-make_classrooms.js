import ClassRoom from './0-classroom';

export default function initializeRooms() {
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
  // Dynamic implementation
  // return [19, 20, 34].map((num) => new ClassRoom(num));
}
