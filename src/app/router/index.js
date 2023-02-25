import * as React from 'react';
import {Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//ICONOS
import {tecnico, calidad, ingeniero} from '../../modules/resources/images';

///// INICIO
import SplashScreen from '../screens/Splash';
import LoginScreen from '../screens/Login';
import UsuarioScreen from '../screens/Usuario';
import EquipoScreen from '../screens/Equipo';
import GeneralesScreen from '../screens/Generales';
import PruebasScreen from '../screens/Pruebas';
import MedicionScreen from '../screens/Medicion';
import FotoScreen from '../screens/Foto';
import ViewerScreen from '../screens/Viewer';

//// CALIDAD
import Step1CalidadScreen from '../screens/Calidad/screens/Step1';
import Step2CalidadScreen from '../screens/Calidad/screens/Step2';
import Step3CalidadScreen from '../screens/Calidad/screens/Step3';
import Step4CalidadScreen from '../screens/Calidad/screens/Viewer';

//// INGENIERO
import Step1IngenieroScreen from '../screens/Ingeniero/screens/Step1';
import Step2IngenieroScreen from '../screens/Ingeniero/screens/Step2';
import Step3IngenieroScreen from '../screens/Ingeniero/screens/Viewer';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const {Navigator, Screen} = createNativeStackNavigator();

const Tab = createBottomTabNavigator();
const InicioStack = () => {
  return (
    <Navigator initialRouteName="Usuario" screenOptions={{headerShown: false}}>
      <Screen name={'Usuario'} component={UsuarioScreen} />
      <Screen name={'Equipo'} component={EquipoScreen} />
      <Screen name={'Generales'} component={GeneralesScreen} />
      <Screen name={'Pruebas'} component={PruebasScreen} />
      <Screen name={'Medicion'} component={MedicionScreen} />
      <Screen name={'Foto'} component={FotoScreen} />
      <Screen name={'Viewer'} component={ViewerScreen} />
    </Navigator>
  );
};

const CalidadStack = () => {
  return (
    <Navigator
      initialRouteName="step1Calidad"
      screenOptions={{headerShown: false}}>
      <Screen name="step1Calidad" component={Step1CalidadScreen} />
      <Screen name="step2Calidad" component={Step2CalidadScreen} />
      <Screen name="step3Calidad" component={Step3CalidadScreen} />
      <Screen name="step4Calidad" component={Step4CalidadScreen} />
    </Navigator>
  );
};

const IngenieroStack = () => {
  return (
    <Navigator
      initialRouteName="step1Ingeniero"
      screenOptions={{headerShown: false}}>
      <Screen name="step1Ingeniero" component={Step1IngenieroScreen} />
      <Screen name="step2Ingeniero" component={Step2IngenieroScreen} />
      <Screen name="step3Ingeniero" component={Step3IngenieroScreen} />
    </Navigator>
  );
};

const MainTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Inicio"
        component={InicioStack}
        options={{
          tabBarIcon: ({size, color}) => (
            <Image
              source={tecnico}
              style={{
                width: size,
                height: size,
                resizeMode: 'contain',
                tintColor: color,
              }}
            />
          ),
          tabBarLabel: 'Técnico',
          tabBarActiveTintColor: '#0B509C',
        }}
      />
      <Tab.Screen
        name="Calidad"
        component={CalidadStack}
        options={{
          tabBarIcon: ({size, color}) => (
            <Image
              source={calidad}
              style={{
                width: size,
                height: size,
                resizeMode: 'contain',
                tintColor: color,
              }}
            />
          ),
          tabBarActiveTintColor: '#0B509C',
        }}
      />
      <Tab.Screen
        name="Ingeniero"
        component={IngenieroStack}
        options={{
          tabBarIcon: ({size, color}) => (
            <Image
              source={ingeniero}
              style={{
                width: size,
                height: size,
                resizeMode: 'contain',
                tintColor: color,
              }}
            />
          ),
          tabBarActiveTintColor: '#0B509C',
        }}
      />
    </Tab.Navigator>
  );
};

function RootNavigator() {
  return (
    <Navigator
      initialRouteName="_splashScreen"
      screenOptions={{headerShown: false}}>
      <Screen name="_splashScreen" component={SplashScreen} />
      <Screen name={'LogIn'} component={LoginScreen} />
      <Screen name={'Usuario'} component={MainTab} />
      <Screen name={'UsuarioCalidad'} component={CalidadStack} />
      <Screen name={'UsuarioIngeniero'} component={IngenieroStack} />
      <Screen name={'UsuarioTecnico'} component={InicioStack} />
    </Navigator>
  );
}

export default RootNavigator;
