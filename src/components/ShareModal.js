import React from 'react';
import styled from 'styled-components';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon,
} from 'react-share';
import { CopyToClipboard } from 'react-copy-to-clipboard';


const ShareModal = ({ open }) => {
  const currentUrl = window.location.href;

  return (
    <ShareModalBg onClick={() => { open(false)}}>
      <div className="share-container">
        <FacebookShareButton url={currentUrl} style={{ marginRight: '14px' }}>
          <FacebookIcon size={60} round={true} borderRadius={24}></FacebookIcon>
        </FacebookShareButton>
        <TwitterShareButton url={currentUrl} style={{ marginRight: '14px' }}>
          <TwitterIcon size={60} round={true} borderRadius={24}></TwitterIcon>
        </TwitterShareButton>
        <LineShareButton url={currentUrl} style={{ marginRight: '14px' }}>
          <LineIcon size={60} round={true} borderRadius={24}></LineIcon>
        </LineShareButton>
        <CopyToClipboard text={currentUrl}>
          <UrlshareButton>URL</UrlshareButton>
        </CopyToClipboard>
      </div>
    </ShareModalBg>
  );
}

const ShareModalBg = styled.article`
  width: 500px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 30;
  .share-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-64%);
    &:not(:first-child) {
    }
  }
`;

const UrlshareButton = styled.button`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 0px;
  font-weight: 800;
  font-size: 18px;
  background-color: #f9f9f9;
  cursor: pointer;
`;

export default ShareModal;