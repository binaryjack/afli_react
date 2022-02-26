import './RowHeader.scss';

import { FC } from 'react';

import { RowDataModel } from 'core/model/DataGridModel';

export type RowHeaderProps = {
  row: RowDataModel;
};

const RowHeader: FC<RowHeaderProps> = ({ row }) => {
  const selectionHandler = () => { };

  return (
    <div className="row-header">
      <span>{row.id} </span>
      <span>{row.label} </span>
      <button onClick={selectionHandler} />
    </div>
  );
};

export default RowHeader;
