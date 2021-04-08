import { useContext, useEffect } from 'react';
import { Box } from '@material-ui/core';
import ProfileDetails from '../ProfileDetails/ProfileDetails';
import ProfileImage from '../ProfileImage/ProfileImage';
import { AppContext } from '../../context/AppContext';
import { getProfile } from '../../context/Actions';

const ProfileCard = (): JSX.Element => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    getProfile(dispatch);
  }, [dispatch]);

  const { avatar_url: avatarUrl, ...details } = state.profile || {};

  return (
    <Box display="flex" flexDirection="row" alignItems="center">
      <ProfileImage avatar_url={avatarUrl} />
      <Box p={2} width={1}>
        <ProfileDetails isLoading={state.isProfileLoading} {...details} />
      </Box>
    </Box>
  );
};

export default ProfileCard;
