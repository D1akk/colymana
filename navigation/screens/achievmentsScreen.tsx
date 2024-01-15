import * as React from 'react';
import {View, Text} from "react-native";


export default function AchievmentsScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text onPress={() => navigation.navigate('Learning')}
                  style={{fontSize: 26, fontWeight: 'bold'}}>
                Achievments Page
            </Text>
        </View>
    )
}
