import React from 'react';
import { Picker, StyleSheet, Dimensions } from 'react-native';


export default CategoryDropdown = ({ categories, dropdownvalue, selected }) => {

    return (

        <Picker
            selectedValue={selected}
            style={styleDropdown.dropdown}
            onValueChange={dropdownvalue}
        >
            <Picker.Item key={0} label="Select Category -- " value="" />
            {
                categories.map((x, i) => {
                    return (
                        <Picker.Item key={i + 1} label={categories[i].Category_Name} value={categories[i].Texpense_Category_Id} />

                    )
                })
            }

        </Picker>

    );
}

const styleDropdown = StyleSheet.create({

    dropdown: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        borderColor: '#000',
        borderRadius: 10,
        borderWidth: 1,
        textAlign: 'center',
    }
})