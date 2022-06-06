import { AnimatePresence } from 'framer-motion';
import React, { useCallback, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MenuElement,
  ProfileDropdownWrapper,
  UserInfoText,
  UserInfoWrapper,
  Username,
} from './style';
import { UserState } from '../../types';

const ProfileDropdown: React.FC<{
  isOpen: boolean;
  setIsOpen: (data: boolean) => void;
  userInfo: UserState;
  signOut: () => void;
}> = ({ isOpen, setIsOpen, signOut, userInfo }) => {
  const userMenuRef = useRef<HTMLDivElement>(null);

  const hoverMotion = {
    cursor: 'pointer',
    backgroundColor: '#E5E8EB',
  };

  const navigate = useNavigate();

  const handleClickOutside = useCallback(
    (e: Event) => {
      const target = e.target as Node;
      const username = document.getElementsByClassName('username')[0];
      if (isOpen && target.contains(username || target)) {
        setIsOpen(false);
        document.removeEventListener('click', handleClickOutside);
      }
    },
    [isOpen]
  );

  useEffect(() => {
    if (isOpen) {
      setTimeout(
        () => document.addEventListener('click', handleClickOutside),
        0
      );
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <ProfileDropdownWrapper
          ref={userMenuRef}
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <UserInfoWrapper>
            <Username>Jason</Username>
            <UserInfoText>jhjeong00@gmail.com</UserInfoText>
          </UserInfoWrapper>
          <MenuElement
            layout
            whileHover={hoverMotion}
            onClick={() => {
              setIsOpen(false);
              navigate('/profile/edit');
            }}
          >
            내 정보 수정
          </MenuElement>
          <MenuElement
            layout
            whileHover={hoverMotion}
            onClick={() => {
              setIsOpen(false);
              signOut();
            }}
          >
            로그아웃
          </MenuElement>
        </ProfileDropdownWrapper>
      )}
    </AnimatePresence>
  );
};

export default ProfileDropdown;
