//import Link from 'next/link';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
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
      {!isEditing ? (
        <>
          <p className="">{value}</p>
          <Button onClick={() => setIsEditing(true)}>Edit</Button>
        </>
      ) : (
        <>
          <input
            type="text"
            className="border px-3 py-2 rounded-l"
            value={value}
            placeholder={field}
          />
          <div className="d-flex">
            <Button className="mr-3" onClick={() => setIsEditing(false)}>
              Save
            </Button>
            <Button onClick={() => setIsEditing(false)}>Cancel</Button>
          </div>
        </>
      )}
      {/* <Button
        className={!isEditing ? 'bg-blue-500' : ''}
        onClick={() => setIsEditing(true)}
      >
        Click me : {isEditing}
      </Button> */}
    </div>
  );
};

export default EditableInput;
