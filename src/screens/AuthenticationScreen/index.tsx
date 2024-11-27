import React, { useState } from 'react';
import { TextInput, Button, View, Dimensions, Text, Image, ScrollView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { auth } from '../../../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';


const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const navigation=useNavigation()

  // Kayıt işlemi
  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Kullanıcı kaydedildi: ', user);
        // Kayıt işlemi başarılı olduğunda bir Alert göster
        navigation.navigate('HomeScreen');
      })
      .catch((error) => {
        console.error(error.message);
        Alert.alert("Hata", "Kayıt işlemi sırasında bir hata oluştu.", [{ text: "Tamam" }]);
      });
  };

  // Giriş işlemi
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Kullanıcı giriş yaptı: ', user);
        // Giriş işlemi başarılı olduğunda bir Alert göster
        Alert.alert("Başarı", "Giriş başarılı!", [{ text: "Tamam" }]);
        navigation.navigate('Home');
      })
      .catch((error) => {
        console.error(error.message);
        Alert.alert("Hata", "Giriş işlemi sırasında bir hata oluştu.", [{ text: "Tamam" }]);
      });
  };

  const { width } = Dimensions.get('window');

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 50 }}>
          <Image style={{ width: 200, height: 200, borderRadius: 100, borderWidth: 2, borderColor: "gray", padding: 10 }} source={require("../../../assets/user.png")} />

          <View style={{ marginVertical: 20 }}>
            <Text style={{ color: "#595656", fontWeight: "bold", fontSize: 16, marginBottom: 10, marginLeft: 10 }}>
              Email
            </Text>
            <TextInput
              style={{
                width: width * 0.8,
                height: width * 0.12,
                borderRadius: 10,
                backgroundColor: "#E5E5E5",
                paddingHorizontal: 10,
              }}
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              keyboardType="email-address"
              placeholderTextColor="#9a9a9a"
            />
          </View>

          <View style={{ marginBottom: 20 }}>
            <Text style={{ color: "#595656", fontWeight: "bold", fontSize: 16, marginBottom: 10, marginLeft: 10 }}>
              Şifre
            </Text>
            <TextInput
              style={{
                width: width * 0.8,
                height: width * 0.12,
                borderRadius: 10,
                backgroundColor: "#E5E5E5",
                paddingHorizontal: 10,
              }}
              value={password}
              onChangeText={setPassword}
              placeholder="Şifre"
              secureTextEntry
              placeholderTextColor="#9a9a9a"
            />
          </View>

          {/* Kayıt veya giriş butonunu dinamik olarak gösteriyoruz */}
          <View style={{ marginTop: 20, width: width * 0.5, borderRadius: 10, backgroundColor: "#FF3F57" }}>
            <Button
              color={"white"}
              title={isLogin ? "Giriş Yap" : "Kayıt Ol"}
              onPress={isLogin ? handleLogin : handleRegister}
            />
          </View>

          {/* Kayıt ve giriş arasında geçiş yapmak için bir bağlantı */}
          <View style={{ marginTop: 20 }}>
            <Text
              style={{ color: "#595656", fontSize: 14 }}
              onPress={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Hesabınız yok mu? Kayıt olun" : "Zaten hesabınız var mı? Giriş yapın"}
            </Text>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};  

export default RegisterScreen;
