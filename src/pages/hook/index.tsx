import React, { useState, useEffect, useRef } from 'react';
import { View, Button, Input } from 'remax/wechat';
import { useShow, useHide, usePageScroll, useReachBottom, useTitleClick } from 'remax';
import styles from './index.module.css';
import Block from '@/components/block';

export default () => {
  /**
   * Lifecycle hooks
   */
  const [isReachBottom, setReachBottom] = useState(false);
  const [isPageScroll, setPageScroll] = useState(false);
  const [isTitleClick, setTitleClick] = useState(false);
  const springState = (setter: Function) => {
    setter(true);
    setTimeout(() => setter(false), 1000);
  };
  useShow(() => console.log('page onShow'));
  useHide(() => console.log('page onHide'));
  useTitleClick(() => springState(setTitleClick));
  usePageScroll(() => springState(setPageScroll));
  useReachBottom(() => springState(setReachBottom));

  /**
   * useState and useEffect
   */
  const [square, setSquare] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setSquare(count * count);
    return () => {
      setSquare(0);
    };
  }, [count]);

  /**
   * useRef
   */
  const [isEditing, setEditing] = useState(false);
  const inputRef = useRef(undefined);
  const toggleEditing = () => {
    setEditing(!isEditing);
  };
  useEffect(() => {
    console.log(isEditing, inputRef.current);
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <View>
      <Block title={'Lifecycle'}>
        <Block title={'usePageScroll'}>
          <View>isPageScroll: {String(isPageScroll)}</View>
        </Block>
        <Block title={'useTitleClick'}>
          <View>isTitleClick: {String(isTitleClick)}</View>
        </Block>
        <Block title={'useReachBottom'}>
          <View>isReachBottom: {String(isReachBottom)}</View>
        </Block>
      </Block>
      <Block title={'Counter'}>
        <Button onClick={() => setCount(count + 1)} className={styles.btn}>Click me!</Button>
        <Block title={'useState'}>
          <View>current count is : {count}</View>
        </Block>
        <Block title={'useEffect'}>
          <View>count square is: {square}</View>
        </Block>
      </Block>
      <Block title={'Focus input'}>
        <Block title={'useRef'}>
          {isEditing && <Input ref={inputRef} />}
          <Button onClick={toggleEditing}>Edit</Button>
        </Block>
      </Block>
    </View>
  );
};
