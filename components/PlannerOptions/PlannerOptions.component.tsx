import React, { useState } from "react";
import style from "./PlannerOptions.module.css";
import { EllipsisVertical } from "lucide-react";

export function PlannerOptions(): React.ReactElement {
  const [showOptions, setShowOptions] = useState<boolean>(false);

  function toggleOptions(): void {
    setShowOptions((prev) => !prev);
  }

  return (
    <>
      <button onClick={toggleOptions} className={style.actionButton}>
        <EllipsisVertical size={18} />
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

export default PlannerOptions;
