import { Children } from 'react'
import Swiper from 'react-native-swiper'
import styles from './style'


export const Swiper = () => {
    return <Swiper
        loop={false}
        index={0}
        style={styles.wrapper}
        autoplay
        autoplayTimeout={2}
        dotColor={color.light}
        activeDotColor={color.app}
    >
        {Children}
    </Swiper>
}