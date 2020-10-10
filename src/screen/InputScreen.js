import React from 'react'
import {
    StyleSheet,
    KeyboardAvoidingView,
    View,
    TextInput,
    Dimensions,
    Image
} from 'react-native'
import DatePicker from 'react-native-datepicker'
import PaymentDropdown from '../component/dropdown'
import CategoryDropdown from '../component/categoryDropdown'
import Loading from '../component/LoadingScreen'
import ActionBarImage from '../component/ActionBarLeft';
import * as Font from 'expo-font'
import ConfirmationModal from '../component/ConfirmationModal';

export default class InputScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            payment: [],
            category: [],
            isFontLoaded: false,
            itype: "",
            inama: "",
            iharga: 0,
            ideskripsi: "",
            ipayment: "",
            idate: "Select Date",
            icreateddte: new Date().toJSON(),
        }
    }
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#004d4d',
        },
        headerLeft: <ActionBarImage />

    }


    componentWillMount() {
        fetch('http://192.168.1.5:852/account')
            .then(respon => respon.json())
            .then(data => { this.setState({ payment: data, ipayment: data[0].Texpense_Category_Id }); })

        fetch('http://192.168.1.5:852/Category')
            .then(respon => respon.json())
            .then(data => { this.setState({ category: data, itype: data[0].Payment_ID }); })

        Font.loadAsync({ 'Livvic': require('../../assets/Fonts/Livvic-Light.ttf') })
            .then(() => this.setState({ isFontLoaded: true }))
    }

    onSubmitClick = () => {
        if (this.state.itype == null || this.state.ipayment == null) {
            alert('Please Select Category And Payment');
            return;
        }
        else {
            fetch('http://192.168.1.5:852/expense', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Expense_Id: "eeb2f0cc-cee7-465e-8c31-ec3216617de2",
                    Expense_Name: this.state.inama,
                    Expense_Amount: this.state.iharga,
                    Expense_Date: this.state.idate,
                    Expense_CreatedDate: this.state.icreateddte,
                    Expense_Description: this.state.ideskripsi,
                    Expense_Image: "",
                    Expense_Category_Id: this.state.itype,
                    Expense_Payment_ID: this.state.ipayment
                }),
            }).then(respon => respon.json()).then(data => { this.setState({ isModalVisible: true, modalBody: data }) })

        }


    }

    categoryDropdownChange = (itemValue, itemIndex) => {
        this.setState({ itype: itemValue })
    }

    paymentDropdownChange = (itemValue, itemIndex) => {
        this.setState({ ipayment: itemValue })
    }

    getcurrentdatetime = () => {
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds
        var x = new Date(`${date}-${month}-${year} ${hours}:${min}:${sec}`)
        var newDate = new Date(Date.UTC(year, month, year, hours, min, sec));
        return '/Date(' + newDate.getTime() + ')/';

    }

    render() {
        const { payment, category, itype, ideskripsi, iharga, inama, ipayment } = this.state
        const logo = require("../../assets/logo-small.png");

        if (payment.length && category.length && this.state.isFontLoaded) {
            return (
                <View style={inputForm.container}>
                    <View style={inputForm.formHeaderContainer}>

                        <Image source={logo} style={{ width: 80, height: 80, alignSelf: 'center', position: "relative", top: -40 }} />
                        <View style={inputForm.view}>

                            <DatePicker
                                style={inputForm.datetime}
                                onDateChange={(datePicker) => { this.setState({ idate: datePicker }) }}
                                mode="datetime"
                                placeholder={this.state.idate}
                                format="YYYY-MM-DD hh:mm:ss"
                                minDate="2018-05-01"
                                maxDate={new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()}
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    dateIcon: {
                                        position: 'absolute',
                                        left: 0,
                                        top: 4,
                                        marginLeft: 0
                                    },
                                    dateInput: {
                                        marginLeft: 36
                                    }
                                }}
                            />
                        </View>

                    </View>

                    <KeyboardAvoidingView behavior="padding" enabled>
                        <View style={inputForm.formBodyContainer}>

                            <TextInput placeholder="What do you do ?" style={inputForm.inputText} onChangeText={(nama) => { this.setState({ inama: nama }) }} />
                            <KeyboardAvoidingView behavior="padding" enabled>
                                <TextInput placeholder="How much do you pay ?" style={inputForm.inputText} keyboardType={'numeric'} onChangeText={(harga) => { this.setState({ iharga: harga }) }} />
                            </KeyboardAvoidingView>
                            <TextInput placeholder="Tell me more" style={inputForm.inputText} onChangeText={(Descripsi) => { this.setState({ ideskripsi: Descripsi }) }} />
                            <CategoryDropdown categories={category} dropdownvalue={this.categoryDropdownChange} selected={itype} />
                            <View
                                style={{
                                    borderTopColor: 'black',
                                    borderBottomWidth: 1,
                                    width: '100%',
                                    borderRadius: 10,
                                    marginLeft: 5,
                                    marginBottom: 10,
                                }}
                            />
                            <PaymentDropdown payments={payment} paymentvalue={this.paymentDropdownChange} selected={ipayment} />
                            <View
                                style={{
                                    borderTopColor: 'black',
                                    borderBottomWidth: 1,
                                    width: '100%',
                                    borderRadius: 10,
                                    marginLeft: 5,
                                    marginBottom: 10,
                                }}
                            />

                        </View>

                    </KeyboardAvoidingView>
                    <View style={{ width: 80, height: 60, marginTop: 20, position: 'relative' }}>
                        <ButtonSubmit title="Submit" onpress={this.onSubmitClick} />
                    </View>


                </View>
            );
        }
        else {
            return (
                <View style={inputForm.container}>
                    <View style={inputForm.formHeaderContainer}>

                        <Image source={logo} style={{ width: 80, height: 80, alignSelf: 'center', position: "relative", top: -40 }} />

                    </View>
                    <View style={inputForm.formBodyContainer}>

                    </View>
                </View>
            )
        }
    }
}

const inputForm = StyleSheet.create({
    formHeaderContainer: {
        width: Dimensions.get('window').width - 40,
        borderRadius: 15,
        height: 100,
        position: "relative",
        top: 0,
        backgroundColor: "#004d4d",
        paddingLeft: 20,
        paddingRight: 20
    },
    formBodyContainer: {
        width: Dimensions.get('window').width - 40,
        borderRadius: 15,
        minHeight: 300,
        position: "relative",
        top: -5,
        backgroundColor: "#004d4d",
        zIndex: 1,
        borderTopColor: '#0000',
        borderTopWidth: 0.5,
        borderStyle: 'dashed',
        paddingLeft: 20,
        paddingRight: 20

    },
    container: {
        flex: 1,
        alignItems: 'center',
        opacity: 50,
        justifyContent: 'center',
        backgroundColor: '#0000'
    },
    view: {
        height: 60,
        flex: 0.1,
        flexDirection: "column",
        position: "relative",
        top: -40

    },
    datetime: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        borderColor: '#0078B8',
        borderRadius: 10,
        marginBottom: 20
    },
    inputText: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        borderColor: '#000',
        borderBottomWidth: 1,
        textAlign: 'center',
        fontFamily: 'Livvic',
        marginBottom: 20
    },
})

