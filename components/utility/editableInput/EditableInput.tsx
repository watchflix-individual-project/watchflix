//import Link from 'next/link';
import React, { useState } from 'react';
export interface IEditableInput {
  field: string;
  value: string;
  link: string;
}

const EditableInput: React.FC<IEditableInput> = ({ field, value }) => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className="w-full grid grid-cols-3 gap-5 text-left my-10">
      <p className="uppercase">{field}</p>
      {!isEditing ? <p className="">{value}</p> : <div className="">tes</div>}
      <button
        className={!isEditing ? 'bg-blue-500' : ''}
        onClick={() => setIsEditing(true)}
      >
        Click me : {isEditing}
      </button>
    </div>
  );
};

export default EditableInput;
