export const getSizedImage = (imgUrl, size) => {
  return `${imgUrl}?param=${size}y${size}`;
};

export const getReadNum = (num) => {
  // 大于亿
  if (num > 10000 * 10000) {
    return Math.floor(num / 10000 / 10000) + '亿';
  } else if (num > 10000) {
    return Math.floor(num / 10000) + '万';
  }
  return num;
};
