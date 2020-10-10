import React from 'react';
import { Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';


export default MyPieChart = () => {
    return (
        <PieChart
            data={[
                { name: 'CASH', population: 60000, color: '#ff9900', legendFontColor: 'orange', legendFontSize: 10 },
                { name: 'GO-PAY', population: 30000, color: '#00AA13', legendFontColor: 'green', legendFontSize: 10 },
                { name: 'OVO', population: 40000, color: '#4D3394', legendFontColor: 'blue', legendFontSize: 10 }
            ]}
            width={Dimensions.get('window').width - 30}
            height={220}
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
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
        />
    )
}