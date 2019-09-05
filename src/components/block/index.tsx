import React, { ReactNode } from 'react';
import { View,
         navigateTo } from 'remax/wechat';
import styles from './index.module.css';

type Props = {
  children?: ReactNode,
  title?: string
} & typeof defaultProps;

const defaultProps = {
  title: 'block'
};

const Block = (props: Props) => {
  const { title } = props;

  return (
    <View className={styles.block}>
      <View className={styles.title}>{title}</View>
      {props.children}
    </View>
  );
};

Block.defaulyProps = defaultProps;

export default Block;