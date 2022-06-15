import React, { useState, useCallback, useEffect, useRef } from 'react';
import { View, SafeAreaView, TouchableOpacity, FlatList, Text, TouchableWithoutFeedback, Keyboard, Dimensions } from 'react-native';
import styles from './style';
import Controller from './controller';
import { Heading, SubHeading, SearchBar, LoadingBar } from '../../../components/Card'
import { GifsCard } from './Card'
import { useSelector, useDispatch } from 'react-redux';
import { getGifs, resetData } from 'redux-store/Gifs';
import { ArrowUp, ExploreIconUnSelected, } from 'SVG'
export default Home = ({ route, navigation, ...props }) => {
  const [backToTop, setbackToTop] = useState(false)
  const scrollRef = useRef();
  const { gifs } = useSelector(state => state)
  const [searchText, setsearchText] = useState('')
  const [isReadyToGetMore, setisReadyToGetMore] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(resetData(searchText))
    setisReadyToGetMore(true)
  }, [searchText]);
  const renderItem = ({ item, index }) => { return (<GifsCard item={item} />) }
  const goToTop = () => {
    setbackToTop(false)
    scrollRef.current.scrollToOffset({ animated: true, offset: 0 });
  }
  const controller = new Controller();
  return <TouchableWithoutFeedback
    style={styles.container} onPress={() => Keyboard.dismiss()}>
    <SafeAreaView style={styles.container}>
      {gifs?.isLoading && <LoadingBar isImage />}
      <Heading
        style={styles.screenHeadingText}
        text={'GIFS'}
      />
      <SearchBar
        Icon={ExploreIconUnSelected}
        onChangeText={(text) => setsearchText(text.replace(/[^\w ]/g, ''))}
        isIcon
        placeholder={"Search the gifs"}
        value={searchText}
      />
      {gifs?.gifsData?.length ? <FlatList
        ref={scrollRef}
        onScroll={async (e) => {
          var windowHeight = Dimensions.get('window').height,
            height = e.nativeEvent.contentSize.height,
            onScrollOffset = e.nativeEvent.contentOffset.y;
          if ((windowHeight / 2) < onScrollOffset) {
            setbackToTop(true)
          } else {
            setbackToTop(false)
          }
          if (isReadyToGetMore) {
            if (windowHeight + onScrollOffset >= height && windowHeight / 2 < height) {
              setisReadyToGetMore(false)
              await dispatch(getGifs(searchText))
              setisReadyToGetMore(true)
            }
          }
        }}
        keyExtractor={(item, index) => `key-${item.id + index}`}
        data={gifs?.gifsData}
        showsVerticalScrollIndicator={false}
        // ListFooterComponent={<TouchableOpacity
        //   onPress={async () => { await dispatch(getGifs(searchText)) }}
        //   style={styles.listFooter}><Text style={styles.listFooterText}>
        //     Load more
        //   </Text></TouchableOpacity>}
        renderItem={renderItem}
      /> : null}
      {gifs?.isError && !gifs?.gifsData?.length ? <Text style={styles.errorMsgText}>{gifs?.errMsg}</Text> : null}
      {backToTop ? <TouchableOpacity
        style={styles.backToTopBlock}
        onPress={goToTop}
      >
        <ArrowUp />
        <Text style={styles.backToTopBlockText}>BACK TO TOP</Text>
      </TouchableOpacity> : null}
    </SafeAreaView>
  </TouchableWithoutFeedback>

};

