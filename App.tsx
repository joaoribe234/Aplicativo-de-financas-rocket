import 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold, } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/app.routes';
import { Signin } from './src/screens/Signin';
import { AuthProvider } from './src/hooks/auth'

export default function App() {
const [fontsLoaded] = useFonts({ 
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
 });

 if(!fontsLoaded) { 
   return <AppLoading />
  }

  return ( 
  <ThemeProvider theme={theme}>
  <NavigationContainer>
  <AuthProvider >
  <Signin />
  </AuthProvider>
  </NavigationContainer>
  </ThemeProvider>
  )
  }
