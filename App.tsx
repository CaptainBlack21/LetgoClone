import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigators/RootNavigator';
import { LogBox } from 'react-native';
import { Amplify } from 'aws-amplify';
import amplifyconfig from './src/amplifyconfiguration.json';
//import { withAuthenticator } from '@aws-amplify/ui-react-native';

// LogBox'u kullanarak logları gizleme
LogBox.ignoreLogs(['Warning: ...']);  // Belirli logları gizle
LogBox.ignoreAllLogs();  // Tüm logları gizle

// AWS Amplify yapılandırmasını yükleme
Amplify.configure(amplifyconfig);

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

// Uygulamanıza giriş doğrulaması ekleyin
// withAuthenticator(App);
