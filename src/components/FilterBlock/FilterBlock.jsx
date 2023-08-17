import { MyInput } from "../UI/MyInput/MyInput";
import { MySelect, CustomSelect } from "../UI/MySelect/MySelect";
import style from "./FilterBlock.module.scss";

export const FilterBlock = ({ param, setParam }) => {
  return (
    <div className={style.FilterBlock}>
      <MyInput
        value={param.find}
        onChange={(e) => setParam({ ...param, find: e.target.value })}
        placeholder="print name or surname"
      />

      <MySelect
        value={param.sort}
        onChange={(e) => setParam({ ...param, sort: e.target.value })}
        defualtValue="sort by..."
        options={[
          { value: "first", name: "sort by name" },
          { value: "last", name: "sort by surname" },
        ]}
      />

      <MySelect
        value={param.sort}
        onChange={(e) => setParam({ ...param, gender: e.target.value })}
        defualtValue="choose gender"
        options={[
          { value: "male", name: "only man" },
          { value: "female", name: "only woman" },
        ]}
      />

      {/* <CustomSelect
        onChange={() => setParam({ ...param, gender: e.target.value })}
        defualtValue="choose gender"
        options={[
          { value: "male", name: "only man" },
          { value: "female", name: "only woman" },
        ]}
      /> */}
    </div>
  );
};
