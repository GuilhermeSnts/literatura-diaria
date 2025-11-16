import { useState } from "react";
import style from "./PlannerOptions.module.css";
import { EllipsisVertical } from "lucide-react";

function PlannerOptions() {
  const [showOptions, setShowOptions] = useState(false);

  function toggleOptions() {
    setShowOptions(!showOptions);
  }
  return (
    <>
      <button onClick={toggleOptions} className={style.actionButton}>
        <EllipsisVertical size="18px" />
      </button>
      {showOptions && (
        <ul className={style.popmenu}>
          <li>Exportar em pdf</li>
          <li>Exportar em csv</li>
        </ul>
      )}
    </>
  );
}

export { PlannerOptions };
