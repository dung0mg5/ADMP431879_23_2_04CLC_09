import { StyleSheet, Text, View, TextInput, Pressable,ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Button } from 'react-native'
import { Feather, Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [usermail, setUsermail] = useState('');
    const [userphone, setUserphone] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View>
            <LinearGradient colors={['#00FF94', '#2D6ADC']} style={styles.container}>
                <ScrollView className="h-full w-ful" contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>
                    <View className="flex-1 justify-center items-center">
                        <Text className="text-white text-2xl mb-2">Đăng ký</Text>
                        <View className="bg-white h-3/4 w-3/4 rounded-3xl p-6">
                            <View className="mb-4">
                                <Text className="text-gray-700 font-bold mb-2">Họ và tên</Text>
                                <View className="flex-row justify-start border border-gray-300 rounded-3xl px-3 py-2">
                                    <Feather name="user" size={24} color="#2D6ADC" />
                                    <TextInput className="pl-2"
                                        value={username}
                                        onChangeText={setUsername}
                                        placeholder="Nhập họ và tên"
                                    />
                                </View>
                            </View>
                            <View className="mb-4">
                                <Text className="text-gray-700 font-bold mb-2">Email</Text>
                                <View className="flex-row justify-start border border-gray-300 rounded-3xl px-3 py-2">
                                    <Fontisto name="email" size={24} color="#2D6ADC" />
                                    <TextInput className="pl-2"
                                        value={usermail}
                                        onChangeText={setUsermail}
                                        placeholder="Nhập email"
                                    />
                                </View>
                            </View>
                            <View className="mb-4">
                                <Text className="text-gray-700 font-bold mb-2">Số điện thoại</Text>
                                <View className="flex-row justify-start border border-gray-300 rounded-3xl px-3 py-2">
                                    <FontAwesome name="mobile-phone" size={24} color="#2D6ADC" />
                                    <TextInput className="pl-2"
                                        value={userphone}
                                        onChangeText={setUserphone}
                                        placeholder="Nhập số điện thoại"
                                    />
                                </View>
                            </View>
                            <View>
                                <Text className="text-gray-700 font-bold mb-2">Mật khẩu</Text>
                                <View className="flex-row justify-start border border-gray-300 rounded-3xl px-3 py-2">
                                    <Entypo name="lock" size={24} color="#2D6ADC" />
                                    <TextInput className="pl-2"
                                        value={password}
                                        onChangeText={setPassword}
                                        secureTextEntry
                                        placeholder="Nhập mật khẩu"
                                    />
                                </View>
                            </View>
                            <View className="flex justify-center mt-5">
                                <TouchableOpacity className="bg-sky-400 p3 rounded-2xl mb-3 h-9">
                                    <Text className="text-xl font-bold text-white text-center">Đăng ký</Text>
                                </TouchableOpacity>
                            </View>
                            <View className="flex-row justify-center">
                                <Text className="text-gray-700">Bạn đã có tài khoản? </Text>
                                <Text className="text-sky-400">Đăng nhập</Text>
                            </View>
                            <View className="flex-row justify-center mt-3">
                                <Text className="text-gray-700">Hoặc đăng nhập với</Text>
                            </View>
                            <View className="flex-row justify-center my-2">
                                <TouchableOpacity className="bg-blue-600 p3 rounded-2xl m-2 h-9 w-1/2">
                                    <Text className="text-xl text-white text-center">Facebook</Text>
                                </TouchableOpacity>
                                <TouchableOpacity className="bg-rose-600 p3 rounded-2xl m-2 h-9 w-1/2">
                                    <Text className="text-xl text-white text-center">Google</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </LinearGradient>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})