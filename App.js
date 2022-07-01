import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';



const App = () => {
  const [toggle, setToggle] = useState (false);
 
  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle) ;

  useEffect(()=> {
    Torch.switchState(toggle);
    
}, [toggle]);

  useEffect(() => {
   
    const subcription = RNShake.addListener(() => {
      setToggle(oldToggle => !oldToggle);
    });

    
  return () => subcription.remove();
  
}, []);

  return ( 
  <View style={toggle ? style.containerLight : style.container} >
    <TouchableOpacity onPress={handleChangeToggle} >  
    
    <Image 
      style={toggle ? style.lightingOn : style.lightOff}
      source={
        toggle
          ? require('./icones/eco-light.png') 
          : require('./icones/Bebela.png')

      }
    />

<Image 
      style={style.dioLogo}
      source={
       toggle
       ? require('./icones/color.png')
       : require('./icones/cabecao.jpg') 
        

      }
    />
     </TouchableOpacity>
    </View>
    
  );
};

const style =StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  lightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  lightOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150, 

  },
   dioLogo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    
    width: 150,
    height: 150, 

  },

});



export default App;