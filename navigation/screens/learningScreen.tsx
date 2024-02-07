import * as React from 'react';
import {View, Text, Animated, ScrollView, StyleSheet, TouchableOpacity, Image} from "react-native";
// import {BackButton} from "../../assets/images";
import BackButton from "../../assets/images/BackButton.svg"
import HeaderLogo from "../../assets/images/HeaderLogo.svg"

const LearningScreen = ({navigation}) => {
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
                    height: 200,
                    backgroundColor: 'hsla(204, 100%, 62%, 1)',
                    // justifyContent: 'space-between',
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
                    <View style={styles.header}>
                        <View style={styles.header_left}>
                            <View style={styles.back_button_container}>
                                <BackButton style={styles.back_button}/>
                            </View>
                            <View>
                                <Text style={{color: 'white', fontSize: 24, width: 210, fontWeight: "500"}}>Привет,
                                    Никита!</Text>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 13,
                                    fontWeight: "400",
                                    marginTop: 14,
                                    lineHeight: 20
                                }}>Начнешь сегодня {"\n"}обучение?</Text>
                            </View>
                        </View>
                        <View style={styles.header_right}>
                            <View style={styles.header_logo}>
                                <Image source={require("../../assets/images/Books.png")}
                                       style={{height: 128, width: 128}}></Image>
                            </View>
                        </View>
                    </View>
                </View>
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
        paddingRight: 20,
        paddingLeft: 20,
    },
    back_button_container: {
        marginTop: 10,
        marginLeft: 0,
        width: 42,
        height: 42,
        // backgroundColor:"red",
        justifyContent: "center",
        alignItems: "center",
    },
    header:{
        flexDirection: "row",
        justifyContent: "space-between",
    }


})
export default LearningScreen;
