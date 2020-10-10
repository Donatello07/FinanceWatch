import React from 'react';
import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

// filterMounth = (data) => {
//     let lineChartData = [];
//     const currentDate = new Date().getDate();
//     for (var i = currentDate; i > currentDate - 7 || i > 0; i--) {
//         let day = i;
//         let amountPerDay = 0;
//         data.map((item) => {
//             if (new Date(item.Expense_Date).getDate() == day) {
//                 amountPerDay += parseInt(item.Expense_Amount)
//             }
//         }).then(lineChartData.push({ 'day': day, 'amountperday': amountPerDay }))
//     }
// }


export default MyLineChart = ({ data }) => {
    let ChartAmount = [];
    let ChartLabel = [];
    const currentDate = new Date().getDate();
    const startDate = new Date().getDate()-7
    for (var i = currentDate - 7; i <= currentDate; i++) {
        let day = i;
        let dayname = '';
        let amountPerDay = 0;
        data.map((item) => {
            if (new Date(item.Expense_Date).getDate() == day) {
                amountPerDay += parseInt(item.Expense_Amount);
                if (dayname == '') {
                    dayname = new Date(item.Expense_Date).toString().split(' ')[0];
                }

            }
        })
        if (amountPerDay > 0) {
            ChartAmount.push(amountPerDay)
            ChartLabel.push(dayname)
        }

    }

    return (
        <LineChart
            data={{
                labels: ChartLabel,
                datasets: [{ data: ChartAmount }]
            }}
            width={Dimensions.get('window').width - 30} // from react-native
            height={180}
            yAxisLabel={'Rp.'}
            chartConfig={{
                backgroundColor: '#004d4d',
                backgroundGradientFrom: '#fb8c00',
                backgroundGradientTo: '#003333',
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 10
                }
            }}
            style={{
                marginVertical: 8,
                borderRadius: 16
            }}
            animate
        />
    )
}