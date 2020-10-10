import React from 'react';
import { View, Text, Dimensions } from "react-native";

export default TodayExpense = ({ data }) => {
    let amount = 0
    data.map((item, i) => {
        return (amount += parseInt(data[i].Expense_Amount))

    })
    return (
        <View style={{
            justifyContent: 'center', padding: 5,
            width: Dimensions.get('window').width - 25
        }}>
            <Text style={{
                alignSelf: 'flex-end',
                fontFamily: 'Livvic-Bold', color: 'red', fontSize: 20, textShadowColor: 'rgba(0, 0, 0, 0.75)',
                textShadowOffset: { width: -1, height: 1 },
                textShadowRadius: 10
            }}>
                Rp. {amount}
            </Text>
        </View>
    )
}
