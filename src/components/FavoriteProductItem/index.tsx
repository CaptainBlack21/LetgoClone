import React from 'react';
import { View, TouchableOpacity, Text, Image } from "react-native";
import { Product } from '../../models';
import styles from "./styles";
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";
import {DataStore} from "@aws-amplify/datastore";
import { FavoriteProduct } from '../../models';
import { getAuth } from 'firebase/auth'; // Firebase'den auth'u almak için gerekli import

type productProps = {
    product: Product,
    prodType: string,
};

function Index({ product, prodType }: productProps) {
    const navigation = useNavigation();

    // Favorite ürünü veritabanına ekleme işlemi
    const addToCart = async () => {
        const auth = getAuth();
        const userData = auth.currentUser;
    
        if (!userData) return;
    
        // Yeni favori ürün objesini oluşturuyoruz
        const newFavoriteProduct = new FavoriteProduct({
            userSub: userData.uid,  // Firebase'den alınan uid
            productID: product.id
        });
    
        try {
            // Favori ürünü DataStore'a kaydediyoruz
            await DataStore.save(newFavoriteProduct);
            console.log('Favori ürün başarıyla kaydedildi');
        } catch (error) {
            console.error('Favori ürünü kaydederken hata oluştu:', error);
        }
    };
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("ProductDetails", { id: product.id })}
            style={prodType === "favorite" ? styles.favorite : styles.main}
        >
            <View style={prodType === "favorite" ? styles.favoriteView : styles.mainView}>
                <Image
                    source={{ uri: product.image }}
                    resizeMode="stretch"
                    style={prodType === "favorite" ? styles.favoriteImage : styles.mainImg}
                />
                {prodType === "favorite" && parseInt(product.id) % 2 === 1 && (
                    <View style={styles.labeledFav}>
                        <Text style={{ fontSize: 9, fontWeight: '500' }}>Öne Çıkan</Text>
                    </View>
                )}

                <TouchableOpacity onPress={() => addToCart()}>
                    <AntDesign
                        style={{ position: 'absolute', right: 4, bottom: 5 }}
                        name="heart"
                        size={24}
                        color="white"
                    />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
}

export default Index;
