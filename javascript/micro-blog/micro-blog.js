//
// This is only a SKELETON file for the 'Micro-blog' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const truncate = (input) => {
  return input.length > 5 ? input.slice(0, 5) + '...' : input;
};
