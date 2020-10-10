import React, { Component } from 'react';

import { View, Image, TouchableOpacity } from 'react-native';

// export default class ActionBarImage extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {

//     const { navigate } = this.props.navigation;
//     return (
//       <View style={{ flexDirection: 'row' }}>

//         <TouchableOpacity onPress={() => navigate.Navigate('Home')}>
//           <Image
//             source={require('../../assets/logo-small.png')}
//             style={{
//               width: 40,
//               height: 40,
//               borderRadius: 40 / 2,
//               marginLeft: 15,
//             }}
//           />

//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

ActionBarImage = () => {
  return (
    <View style={{ flexDirection: 'row' }}>

      <TouchableOpacity >
        <Image
          source={require('../../assets/logo-small.png')}
          style={{
            width: 40,
            height: 40,
            borderRadius: 40 / 2,
            marginLeft: 15,
          }}
        />

      </TouchableOpacity>
    </View>
  )
}
export default ActionBarImage;
