import * as React from 'react';
import { View, navigateTo, Image, Button } from 'remax/wechat';
import styles from './index.module.css';
import Block from '@/components/block';

export default () => {
  const handleNavigation = (route: string) => {
    navigateTo({ url: `/pages/${route}/index` });
  };

  return (
    <View className={styles.app}>
      <View className={styles.header}>
        <Image
          src='https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*OGyZSI087zkAAAAAAAAAAABkARQnAQ'
          className={styles.logo}
        />
        <View>Remax-Wechat-Typescript-Demo</View>
      </View>
      <View>
        <Block title={'Page List'}>
          <Button className={styles.btn} onClick={() => handleNavigation('hook')}>Hooks</Button>
          <Button className={styles.btn} onClick={() => handleNavigation('api')}>wxapp API</Button>
        </Block>
      </View>
    </View>
  );
};
