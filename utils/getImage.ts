import { Icon } from '@root/interfaces/Icon';

export const getImage = (imageUrl: Icon): string => {
  return `${process.env.PUBLIC_URL}${imageUrl?.attributes.image.data.attributes.url}`;
};
