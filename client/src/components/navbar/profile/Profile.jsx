import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteAvatar, uploadAvatar } from '../../../actions/user';

const Profile = () => {
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    const file = e.target.files[0];
    dispatch(uploadAvatar(file));
  };

  return (
    <div>
      <button onClick={() => dispatch(deleteAvatar())}>Delete avatar</button>
      <input
        accept="image/jpg"
        onChange={changeHandler}
        type="file"
        placeholder="Upload avatar"
      />
    </div>
  );
};

export default Profile;
