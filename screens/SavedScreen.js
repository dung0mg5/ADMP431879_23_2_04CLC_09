import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context';

const SavedScreen = () => {
    const savedItems = [
        {
            id: 1,
            image: 'https://source.unsplash.com/random/200x200?sig=1',
            title: 'Hotel A',
            location: 'New York, USA',
            price: '$150',
        },
        {
            id: 2,
            image: 'https://source.unsplash.com/random/200x200?sig=2',
            title: 'Hotel B',
            location: 'Paris, France',
            price: '$200',
        },
        // Thêm các mục đã lưu khác
    ];

    const renderItem = ({ item }) => (
        <View className="flex-row items-center p-4 border-b border-gray-200">
            <Image source={{ uri: item.image }} className="w-24 h-16 rounded-md" />
            <View className="ml-4">
                <Text className="font-bold text-lg">{item.title}</Text>
                <Text className="text-gray-500">{item.location}</Text>
                <Text className="font-bold">{item.price}</Text>
            </View>
        </View>
    );

    return (
        <View className="flex-1">
            <LinearGradient
                colors={['#00FF94', '#2D6ADC']}
                className='flex-wrap justify-center'>
                    <SafeAreaView className='flex-row justify-center'>
                    <Text className="text-2xl font-bold text-white mb-5">Đã lưu</Text>
                    </SafeAreaView>
                    
            </LinearGradient>
            <FlatList
                    data={savedItems}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
        </View>
    );
};

export default SavedScreen;