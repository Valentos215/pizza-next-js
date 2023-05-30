import { useState } from "react";
import Image from "next/image";

import s from "./Sort.module.scss";

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
        <Image src="/Sort.svg" alt="Sort logo" height={24} width={24} />
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
