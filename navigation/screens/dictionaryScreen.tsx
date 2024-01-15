import * as React from 'react';
import {View, Text} from "react-native";


export default function DictionaryScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text onPress={() => navigation.navigate('Learning')}
                  style={{fontSize: 26, fontWeight: 'bold'}}>
                Dictionary Page
            </Text>
        </View>
    )
}
