import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView, Button } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

// Dữ liệu mô phỏng
const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 123 456 7890',
    address: '123 Main Street, Anytown USA',
};

const menuItems = [
    { id: 1, title: 'Đặt phòng của tôi' },
    { id: 2, title: 'Ưu đãi' },
    { id: 3, title: 'Cài đặt' },
    { id: 4, title: 'Trợ giúp' },
    { id: 5, title: 'Liên hệ dịch vụ khách hàng' },
    { id: 6, title: 'Bài viết du lịch' },
    { id: 7, title: 'Đăng chỗ nghỉ' },
];

const ProfileScreen = () => {
    const renderMenuItem = ({ item }) => (
        <TouchableOpacity className='flex-row items-center p-4 border-b border-gray-200'>
            <Text className='text-lg'>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <View className="flex-1">
            <LinearGradient
                colors={['#00FF94', '#2D6ADC']}
                className='flex-1 justify-center'>
                <View className='flex-col justify-center content-center' >
                    <View className='flex-row justify-center' >
                        <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>Yami Booking</Text>
                        <Feather name="bell" size={24} color="white" />
                    </View>
                    <View className='flex-row justify-center mt-3' >
                        <FontAwesome name="user-circle-o" size={50} color="#2D6ADC" />
                    </View>
                    <View className='flex-row justify-center mt-3' >
                        <Text className='text-sm text-white'>Đăng nhập để quản lý chuyến đi của bạn</Text>
                    </View>
                    <View className='flex-row justify-center mt-3' >
                    <Button className="w-1/2 rounded-3xl" title="Đăng nhập để xem đánh giá của bạn" color="#00FF94" />
                    </View>
                </View>
            </LinearGradient>

            {/* <View className="flex-1 justify-center">
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{userData.name}</Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 10 }}>Thông tin cá nhân</Text>
                <Text>{userData.email}</Text>
                <Text>{userData.phone}</Text>
                <Text>{userData.address}</Text>
            </View> */}
            <View className='flex-wrap'>
            <FlatList
                data={menuItems}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderMenuItem}
            />
            </View>
            
        </View>

        // <View className='flex-1'>
        //     <View className='flex-1 bg-sky-600 justify-center'>
        //         <View className='flex-row justify-center' >
        //             {/* Header */}
        //             <Text className="text-lg font-bold text-white"> Yami Booking</Text>
        //             <Feather name="bell" size={24} color="white" style={{ marginRight: 12 }} />
        //         </View>
        //     </View>
        //     {/* Thông tin người dùng */}
        //     <View className='p-4'>
        //         <Text className='text-lg font-bold'>{userData.name}</Text>
        //         <Text className='text-lg font-bold mb-2'>Thông tin cá nhân</Text>
        //         <Text>{userData.email}</Text>
        //         <Text>{userData.phone}</Text>
        //         <Text>{userData.address}</Text>
        //     </View>

        //     {/* Menu điều hướng */}
        //     <FlatList
        //         data={menuItems}
        //         keyExtractor={(item) => item.id.toString()}
        //         renderItem={renderMenuItem}
        //         className='mt-4'
        //     />

        // </View>
    );
};

export default ProfileScreen

const styles = StyleSheet.create({})