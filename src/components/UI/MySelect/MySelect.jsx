import { useState } from "react";
import style from "./MySelect.module.scss";

export const MySelect = ({ options, defualtValue, ...props }) => {
  return (
    <select {...props} className={style.MySelect}>
      <option value="">{defualtValue}</option>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export const CustomSelect = ({ onChange, defualtValue, options }) => {
  const [data, setData] = useState({ value: "", name: defualtValue });
  const [status, setStatus] = useState(false);

  const optionStyle = status
    ? `${style.selectOption} ${style.show}`
    : style.selectOption;

  const selectOption = (option) => {
    setData({ value: option.value, name: option.name });
    onChange(data);
  };

  return (
    <ul className={style.select} onClick={() => setStatus(!status)}>
      <li className={style.selectDefault}>{data.name}</li>
      <ul className={optionStyle}>
        {options.map((option) => (
          <li
            key={option.value}
            onClick={() => selectOption(option)}
            className={style.selectOption}
          >
            {option.name}
          </li>
        ))}
        <li onClick={() => selectOption({ value: "", name: defualtValue })}>
          all gender
        </li>
      </ul>
    </ul>
  );
};
