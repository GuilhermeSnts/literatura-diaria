import React, { useState } from "react";
import { EllipsisVertical } from "lucide-react";

export function PlannerOptions(): React.ReactElement {
  const [showOptions, setShowOptions] = useState<boolean>(false);

  function toggleOptions(): void {
    setShowOptions((prev) => !prev);
  }

  return (
    <>
      <button onClick={toggleOptions}>
        <EllipsisVertical size={18} />
      </button>
      {showOptions && (
        <ul>
          <li>Exportar em pdf</li>
          <li>Exportar em csv</li>
        </ul>
      )}
    </>
  );
}

export default PlannerOptions;
