enum Directions {
  Up,
  Right,
  Down,
  Left
};

Directions.Up; // 0
Directions.Right; // 1
Directions.Down; // 2
Directions.Left; // 3

// but we also can get a value of this items by index like in array:
Directions[0]; // "Up"
Directions[1]; // "Right"
Directions[2]; // "Down"
Directions[3]; // "Left"

// custom index of enum elements:

enum Seasons {
  Winter = 2,
  Spring = 4,
  Summer = 6,
  Autumn = 8
};

Seasons.Winter; // 2
Seasons.Summer; // 6
Seasons[4]; // "Spring"
Seasons[8]; // "Autumn"

// example:
// custom name for keys
enum links {
  youtube = 'https://www.youtube.com/',
  vk = 'https://www.vk.com/',
  facebook = 'https://www.facebook.com/'
};

// using:
links.vk; // 'https://www.vk.com/'
links.youtube; // 'https://www.youtube.com/'

// we can also use const with enum to minimize our code capacity costs:
const enum MyEnum {
  youtube = 'https://www.youtube.com/',
  vk = 'https://www.vk.com/',
  facebook = 'https://www.facebook.com/'
};

const arr = [MyEnum.vk, MyEnum.youtube];