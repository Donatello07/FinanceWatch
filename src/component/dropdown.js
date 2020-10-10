import React from 'react';
import { Picker, StyleSheet, Dimensions } from 'react-native';


export default PaymentDropdown = ({ payments, paymentvalue, selected }) => {

    return (
        <Picker
            selectedValue={selected}
            onValueChange={paymentvalue}
            textStyle={{color:"#ff9900"}}
            style={styleDropdown.dropdown}>

            <Picker.Item key={0} label="Select Payment -- " value="" />
            {
                payments.map((x, i) => {
                    return (
                        <Picker.Item key={i + 1} label={payments[i].Payment_Name} value={payments[i].Payment_ID} />

                    )
                })
            }
        </Picker>
    );
}

const styleDropdown = StyleSheet.create({

    dropdown: {
        height: 40,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily:'Livvic',
        width: '100%',
        borderColor: '#000',
        borderRadius: 10,
        borderBottomWidth: 1,
    }
})