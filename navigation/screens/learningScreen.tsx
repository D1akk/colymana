import * as React from 'react';
import {View, Text, Animated, ScrollView, StyleSheet, TouchableOpacity, Image} from "react-native";
import {SvgUri} from "react-native-svg";


const LearningScreen = () => {
    const scrollY = new Animated.Value(0);
    return (
        <ScrollView
            style={{flex: 1}}
            scrollEventThrottle={16}
            onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {y: scrollY}}}],
                {useNativeDriver: false}
            )}
        >
            <Animated.View
                style={{
                    height: 184,
                    backgroundColor: 'hsla(204, 100%, 62%, 1)',
                    // justifyContent: 'center',
                    // alignItems: 'center',
                    transform: [
                        {
                            translateY: scrollY.interpolate({
                                inputRange: [0, 200], // Интервал, на котором будет происходить анимация
                                outputRange: [0, -200], // Как будет изменяться translateY при прокрутке
                                extrapolate: 'clamp', // Ограничение выхода за границы интервала
                            }),
                        },
                    ],
                }}
            >
                <View style={styles.container}>
                    <SvgUri
                        height={10}
                        uri={require('../../assets/images/backButton.svg')}/>
                </View>
                {/*<Text style={{ color: 'white', fontSize: 24, width:210, }}>Привет, Никита!</Text>*/}
                {/*<Text></Text>*/}
            </Animated.View>

            {/* Контент страницы */}
            <View style={{padding: 20}}>
                {/* Ваш контент */}

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: "center",
        padding: 10,
    },
    backButton: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    }
})
export default LearningScreen;
