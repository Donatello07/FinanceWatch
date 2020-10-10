import React from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from "react-native";


export default BodyContent = ({ onpress, data }) => {
    const desc = data.Expense_Description === "" ?
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." :
        data.Expense_Description;

    return (
        <View style={BCStyle.Container} >
            <TouchableOpacity onPress={onpress}>
                <View style={BCStyle.contentView}>
                    <Text style={{
                        fontFamily: 'Livvic-Bold', color: '#ff9900', textTransform: 'uppercase', fontSize: 20, textShadowColor: 'rgba(0, 0, 0, 0.75)',
                        textShadowOffset: { width: -1, height: 1 },
                        textShadowRadius: 10
                    }}>{data.Category_Name}</Text>
                    <Text style={{ fontFamily: 'Livvic', color: '#ff9900', fontSize: 15 }}>{data.Expense_Name}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={BCStyle.contentView}>
                        <Text style={{ fontFamily: 'Livvic', color: '#ff9900', fontSize: 15 }}>{data.Payment_Name}</Text>
                    </View>
                    <View style={{ margin: 5 }}>
                        <Text style={{ fontFamily: 'Livvic-Bold', color: 'red', fontSize: 15 }}>  Rp. {data.Expense_Amount}</Text>
                    </View>
                </View>
                <View style={BCStyle.descriptionView}>
                    <Text style={{ fontFamily: 'Livvic', color: '#ff9900', fontSize: 15 }}>{desc}</Text>
                </View>
                <View style={BCStyle.contentView}>
                    <Text style={{
                        position: 'absolute',
                        fontFamily: 'Livvic',
                        color: '#ff9900',
                        right: 0
                    }}>{new Date(data.Expense_Date).toString()}</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
};

const BCStyle = StyleSheet.create({
    Container: {
        backgroundColor: '#004d4d',
        width: Dimensions.get('window').width - 25,
        padding: 20,
        marginBottom:30,
        borderRadius: 5,
        borderColor: '#0000',
        borderWidth: 2,
        shadowColor: '#ff9900',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    descriptionView: {
        marginBottom: 5,
        paddingLeft: 30,
        paddingRight: 10
    },
    contentView: {
        marginTop: 5,
        marginBottom: 5,
    }

})