import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Button, Alert } from 'react-native';
import { auth } from '../../../firebaseConfig';
import { signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const [user, setUser] = useState(null);
  const navigation = useNavigation();

  // Kullanıcıyı almak için useEffect kullanıyoruz
  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
    } else {
      navigation.navigate('AuthenticationScreen'); // Eğer kullanıcı giriş yapmamışsa AuthenticationScreen'e yönlendir.
    }
  }, [navigation]);

  // Oturum kapatma işlemi
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        Alert.alert('Başarı', 'Oturum başarıyla kapatıldı.');
        navigation.navigate('Authentication'); // Oturum kapatıldığında HomeScreen'e yönlendir.
      })
      .catch((error) => {
        console.error(error);
        Alert.alert('Hata', 'Oturum kapatılırken bir hata oluştu.');
      });
  };

  if (!user) {
    return (
      <View style={styles.container}>
        <Text>Yükleniyor...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.profileImage}
        source={user.photoURL ? { uri: user.photoURL } : require('../../../assets/user.png')} // Kullanıcının profil resmi varsa, yoksa varsayılan resim göster
      />
      <Text style={styles.userName}>{user.displayName || 'Kullanıcı Adı'}</Text>
      <Text style={styles.userEmail}>{user.email}</Text>

      <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('EditProfile')}>
        <Text style={styles.buttonText}>Profili Düzenle</Text>
      </TouchableOpacity>

      <Button title="Oturum Kapat" onPress={handleSignOut} color="#FF3F57" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: 'gray',
    marginBottom: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  userEmail: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  editButton: {
    backgroundColor: '#FF3F57',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
