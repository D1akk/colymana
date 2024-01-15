import * as React from 'react';
import {View, Text, Animated, ScrollView} from "react-native";


export default function LearningScreen({navigation}) {
    const scrollY = new Animated.Value(0);

    return (
        <ScrollView
            style={{ flex: 1 }}
            scrollEventThrottle={16}
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                { useNativeDriver: false }
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
                <Text style={{ color: 'white', fontSize: 24, width:210, }}>Привет, Никита!</Text>
                <Text></Text>
            </Animated.View>

            {/* Контент страницы */}
            <View style={{ padding: 20 }}>
                {/* Ваш контент */}

            </View>
        </ScrollView>
    )
}
