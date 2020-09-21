import { v4 as uuidv4 } from 'uuid';
let items = [
    {
      id: uuidv4(),
      name: "Chạy bộ",
      level: 0 //0=>small 1=>medium 2=>high
    },
    {
      id: uuidv4(),
      name: "An sáng",
      level: 2 //0=>small 1=>medium 2=>high
    },
    {
      id: uuidv4(),
      name: "Đi làm",
      level: 2 //0=>small 1=>medium 2=>high
    },
    {
      id: uuidv4(),
      name: "Đi nhậu",
      level: 1 //0=>small 1=>medium 2=>high
    }
  ];
  export default items;