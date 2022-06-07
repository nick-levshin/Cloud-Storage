import React, { useState } from 'react';
import './Popup.sass';
import Input from '../../utils/input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { setPopupDisplay } from '../../reducers/fileReducer';
import { createDir } from '../../actions/file';

const Popup = () => {
  const dispatch = useDispatch();
  const [dirName, setDirName] = useState('');
  const popupDisplay = useSelector((state) => state.files.popupDisplay);
  const currentDir = useSelector((state) => state.files.currentDir);

  const createHandler = () => {
    dispatch(createDir(currentDir, dirName));
    setDirName('');
    dispatch(setPopupDisplay('none'));
  };

  return (
    <div
      className="popup"
      style={{ display: popupDisplay }}
      onClick={() => dispatch(setPopupDisplay('none'))}
    >
      <div
        className="popup__content"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="popup__header">
          <div className="popup__title">Create new folder</div>
          <button
            className="popup__close"
            onClick={() => dispatch(setPopupDisplay('none'))}
          >
            &times;
          </button>
        </div>
        <Input
          type="text"
          placeholder="Name"
          value={dirName}
          setValue={setDirName}
        />
        <button className="popup__create" onClick={() => createHandler()}>
          Create
        </button>
      </div>
    </div>
  );
};

export default Popup;
