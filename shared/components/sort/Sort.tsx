import { useState, memo } from "react";

import sortLogo from "assets/Sort.svg";

import s from "./Sort.module.scss";
import Image from "next/image";

interface ISortProps {
  sortCriteria: string[];
  setSort: (value: number) => void;
}

const Sort = ({ sortCriteria, setSort }: ISortProps) => {
  const [expanded, setExpanded] = useState(false);

  const itemClick = (optionNum: number) => {
    if (!expanded) {
      return;
    }
    setSort(optionNum);
    setExpanded(false);
  };

  const expandClassName = expanded ? `${s.options} ${s.active}` : s.options;

  return (
    <div className={s.sort} tabIndex={3} onBlur={() => setExpanded(false)}>
      <div className={s.button} onClick={() => setExpanded(!expanded)}>
        <span>Sort</span>
        <Image src={sortLogo} alt="" />
      </div>
      <div className={expandClassName}>
        {sortCriteria &&
          sortCriteria.map((option, i) => (
            <div key={option} className={s.option} onClick={() => itemClick(i)}>
              <p>{option.charAt(0).toUpperCase() + option.slice(1)}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Sort;
