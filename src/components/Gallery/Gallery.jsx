import { nanoid } from 'nanoid'
import css from "./Gallery.module.css"

const GalleryItem = ({ original, description }) => (
  <li className={css.gallery__item}>
    <img className={css.gallery__image} src={original} alt={description} />
  </li>
);

export const Gallery = ({ friends }) => (
  <ul className={css.gallery}>
    {friends.map(({ original, description }) => (
      <GalleryItem key={nanoid()} original={original} description={description} />
    ))}
  </ul>
);

