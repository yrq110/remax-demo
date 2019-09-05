import React, { useState, useEffect, useRef } from 'react';
import { View, Button, navigateTo, showToast, showModal } from 'remax/wechat';
import Block from '@/components/block';
import './index.scss';

export default () => {
  const handleHome = () => {
    navigateTo({ url: `/pages/index/index` });
  }
  const handlePopup = async (type: string) => {
    switch (type) {
      case 'toast': {
        await showToast({title: 'I\'m a toast'})
        break;
      }
      case 'modal': {
        await showModal({
          title: 'warn',
          showCancel: true,
          content:
            'Do you study today?'
        })
      }
    }
  }
  return (
    <View className={'container'}>
      <Block title={'Navigation'}>
        <Button onClick={() => handleHome()}>Return to home page</Button>
      </Block>
      <Block title={'Popup'}>
        <Button className={'btn'} onClick={() => handlePopup('toast')}>showToast</Button>
        <Button className={'btn'} onClick={() => handlePopup('modal')}>showModal</Button>
      </Block>
    </View>
  );
};
