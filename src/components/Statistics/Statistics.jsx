import css from "./Statistics.module.css";

export const Statistics = ({ data }) => (
  <table className={css.statistics__list}>
    <tbody>
      {data.map(item => (
        <tr key={item.title} className={css.statistics__item}>
          <td className={css.statistics__text}>{item.title}</td>
          <td className={css.statistics__value}>{item.value}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

