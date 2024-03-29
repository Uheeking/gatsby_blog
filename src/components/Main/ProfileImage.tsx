import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import profile from './profile.png'

const ProfileImageWrapper = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`

const ProfileImage: FunctionComponent = function () {
  return <ProfileImageWrapper src={profile} alt="Profile Image" />
}

export default ProfileImage
