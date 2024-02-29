import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    Image,
    Alert
} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

import Header from '../Components/Header';

import { Feather } from '@expo/vector-icons';

import { LinearGradient } from 'expo-linear-gradient';
import DatePicker from "react-native-date-ranges";
import Ionicons from '@expo/vector-icons/Ionicons';

import Modal from 'react-native-modals';


import { BottomModal } from "react-native-modals";
import { ModalFooter } from "react-native-modals";
import { ModalButton } from "react-native-modals";
import { ModalTitle } from "react-native-modals";
import { SlideAnimation } from "react-native-modals";
import { ModalContent } from "react-native-modals";

const HomeScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [rooms, setRooms] = useState(1);
    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState(0);
    const [modalVisibile, setModalVisibile] = useState(false);
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
            headerTitleAlign: 'center',
            title: "Yami Booking",
            headerTitleStyle: {
                fontFamily: "Roboto",
                fontSize: 20,
                fontWeight: "bold",
                color: "white"
            },
            headerStyle: {
                backgroundColor: '#00FF94',
                height: 110,
            },
            headerRight: () => (
                <Feather name="bell" size={24} color="white" style={{ marginRight: 12 }} />
            )

        })
    })
    const customButton = (onConfirm) => {
        return (
            <Button
                onPress={onConfirm}
                style={{
                    container: { width: "80%", marginHorizontal: "3%" },
                    text: { fontSize: 20 },
                }}
                primary
                title="Submit"
            />
        );
    };
    // console.log(route.params);

    return (
        <View>
            <LinearGradient
                colors={['#00FF94', '#2D6ADC']}
                style={styles.container}
            >
                <View style={{
                    flexDirection: "row", height: 80, alignItems: "center",
                    justifyContent: "center",
                }}>
                    <Text style={{
                        textAlign: 'center',
                        fontFamily: "Roboto",
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "white",
                    }}>Yami Booking</Text>
                    <Feather name="bell" size={24} color="white" style={{ position: 'absolute', right: 0 }} />
                </View>
                <View>
                    <Header />
                </View>
            </LinearGradient>
            <ScrollView>
                <View
                    style={{
                        margin: 20,
                        borderColor: "#FFC72C",
                        borderWidth: 3,
                        borderRadius: 6,
                    }}
                >
                    {/* Destination */}
                    <Pressable
                        onPress={() => navigation.navigate("Search")}
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 10,
                            paddingHorizontal: 10,
                            borderColor: "#FFC72C",
                            borderWidth: 2,
                            paddingVertical: 15,
                        }}
                    >
                        <Feather name="search" size={24} color="black" />
                        <TextInput
                            placeholderTextColor="black"
                            placeholder={
                                route?.params ? route.params.input : "Chọn địa điểm đến"
                            }
                        />
                    </Pressable>

                    {/* Selected Dates */}
                    <Pressable
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 10,
                            paddingHorizontal: 10,
                            borderColor: "#FFC72C",
                            borderWidth: 2,
                            paddingVertical: 15,
                        }}
                    >
                        <Feather name="calendar" size={24} color="black" />
                        <DatePicker
                            style={{
                                width: 350,
                                height: 30,
                                borderRadius: 0,
                                borderWidth: 0,
                                borderColor: "transparent",
                            }}
                            customStyles={{
                                placeholderText: {
                                    fontSize: 15,
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginRight: "auto",
                                },
                                headerStyle: {
                                    backgroundColor: "#003580",
                                },
                                contentText: {
                                    fontSize: 15,
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginRight: "auto",
                                },
                            }}
                            selectedBgColor="#0047AB"
                            customButton={(onConfirm) => customButton(onConfirm)}
                            onConfirm={(startDate, endDate) =>
                                setSelectedDates(startDate, endDate)
                            }
                            allowFontScaling={false}
                            placeholder={"Chọn thời gian"}
                            mode={"range"}
                        />
                    </Pressable>

                    {/* Rooms and Guests */}
                    <Pressable
                        onPress={() => setModalVisibile(!modalVisibile)}
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 10,
                            paddingHorizontal: 10,
                            borderColor: "#FFC72C",
                            borderWidth: 2,
                            paddingVertical: 15,
                        }}
                    >
                        <Ionicons name="person-outline" size={24} color="black" />
                        <TextInput
                            placeholderTextColor="gray"
                            placeholder={` ${rooms} phòng • ${adults} người lớn • ${children} trẻ em`}
                        />
                    </Pressable>

                    {/* Search Button */}
                    <Pressable
                        onPress={() => searchPlaces(route?.params.input)}
                        style={{
                            paddingHorizontal: 10,
                            borderColor: "#FFC72C",
                            borderWidth: 2,
                            paddingVertical: 15,
                            backgroundColor: "#2a52be",
                        }}
                    >
                        <Text
                            style={{
                                textAlign: "center",
                                fontSize: 15,
                                fontWeight: "500",
                                color: "white",
                            }}
                        >
                            Tìm kiếm
                        </Text>
                    </Pressable>
                </View>

                <Text
                    style={{ marginHorizontal: 20, fontSize: 17, fontWeight: "500" }}
                >
                    Du lịch tiết kiệm hơn
                </Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <Pressable
                        style={{
                            width: 200,
                            height: 150,
                            marginTop: 10,
                            backgroundColor: "#003580",
                            borderRadius: 10,
                            padding: 20,
                            marginHorizontal: 20,
                        }}
                    >
                        <Text
                            style={{
                                color: "white",
                                fontSize: 15,
                                fontWeight: "bold",
                                marginVertical: 7,
                            }}
                        >
                            Genius
                        </Text>
                        <Text style={{ color: "white", fontSize: 15, fontWeight: "500" }}>
                            You are ate genius level one in our loyalty program
                        </Text>
                    </Pressable>

                    <Pressable
                        style={{
                            width: 200,
                            height: 150,
                            marginTop: 10,
                            borderColor: "#E0E0E0",
                            borderWidth: 2,
                            borderRadius: 10,
                            padding: 20,
                            marginHorizontal: 10,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 15,
                                fontWeight: "bold",
                                marginVertical: 7,
                            }}
                        >
                            15% Discounts
                        </Text>
                        <Text style={{ fontSize: 15, fontWeight: "500" }}>
                            Complete 5 stays to unlock level 2
                        </Text>
                    </Pressable>

                    <Pressable
                        style={{
                            width: 200,
                            height: 150,
                            marginTop: 10,
                            borderColor: "#E0E0E0",
                            borderWidth: 2,
                            borderRadius: 10,
                            padding: 20,
                            marginHorizontal: 20,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 15,
                                fontWeight: "bold",
                                marginVertical: 7,
                            }}
                        >
                            10% Discounts
                        </Text>
                        <Text style={{ fontSize: 15, fontWeight: "500" }}>
                            Enjoy Discounts at participating at properties worldwide
                        </Text>
                    </Pressable>
                </ScrollView>

                <Pressable
                    style={{
                        marginTop: 40,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Image
                        style={{ width: 200, height: 50, resizeMode: "cover" }}
                        source={{
                            uri: "https://assets.stickpng.com/thumbs/5a32a821cb9a85480a628f8f.png",
                        }}
                    />
                </Pressable>
            </ScrollView>

            <BottomModal
                swipeThreshold={200}
                onBackdropPress={() => setModalVisibile(!modalVisibile)}
                swipeDirection={["up", "down"]}
                footer={
                    <ModalFooter>
                        <ModalButton
                            text="Áp dụng"
                            style={{
                                marginBottom: 20,
                                color: "white",
                                backgroundColor: "#003580",
                            }}
                            onPress={() => setModalVisibile(!modalVisibile)}
                        />
                    </ModalFooter>
                }
                modalTitle={<ModalTitle title="Chọn phòng và số khách" />}
                modalAnimation={
                    new SlideAnimation({
                        slideFrom: "bottom",
                    })
                }
                onHardwareBackPress={() => setModalVisibile(!modalVisibile)}
                visible={modalVisibile}
                onTouchOutside={() => setModalVisibile(!modalVisibile)}
            >
                <ModalContent style={{ width: "100%", height: 310 }}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginVertical: 15,
                        }}
                    >
                        <Text style={{ fontSize: 16, fontWeight: "500" }}>Số phòng</Text>
                        <Pressable
                            style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
                        >
                            <Pressable
                                onPress={() => setRooms(Math.max(1, rooms - 1))}
                                style={{
                                    width: 26,
                                    height: 26,
                                    borderRadius: 13,
                                    borderColor: "#BEBEBE",
                                    backgroundColor: "#E0E0E0",
                                }}
                            >
                                <Text
                                    style={{
                                        textAlign: "center",
                                        fontSize: 20,
                                        fontWeight: "600",
                                        paddingHorizontal: 6,
                                    }}
                                >
                                    -
                                </Text>
                            </Pressable>

                            <Pressable>
                                <Text
                                    style={{
                                        textAlign: "center",
                                        fontSize: 18,
                                        fontWeight: "500",
                                        paddingHorizontal: 6,
                                    }}
                                >
                                    {rooms}
                                </Text>
                            </Pressable>

                            <Pressable
                                onPress={() => setRooms((c) => c + 1)}
                                style={{
                                    width: 26,
                                    height: 26,
                                    borderRadius: 13,
                                    borderColor: "#BEBEBE",
                                    backgroundColor: "#E0E0E0",
                                }}
                            >
                                <Text
                                    style={{
                                        textAlign: "center",
                                        fontSize: 20,
                                        fontWeight: "600",
                                        paddingHorizontal: 6,
                                    }}
                                >
                                    +
                                </Text>
                            </Pressable>
                        </Pressable>
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginVertical: 15,
                        }}
                    >
                        <Text style={{ fontSize: 16, fontWeight: "500" }}>Người lớn</Text>
                        <Pressable
                            style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
                        >
                            <Pressable
                                onPress={() => setAdults(Math.max(1, adults - 1))}
                                style={{
                                    width: 26,
                                    height: 26,
                                    borderRadius: 13,
                                    borderColor: "#BEBEBE",
                                    backgroundColor: "#E0E0E0",
                                }}
                            >
                                <Text
                                    style={{
                                        textAlign: "center",
                                        fontSize: 20,
                                        fontWeight: "600",
                                        paddingHorizontal: 6,
                                    }}
                                >
                                    -
                                </Text>
                            </Pressable>

                            <Pressable>
                                <Text
                                    style={{
                                        textAlign: "center",
                                        fontSize: 18,
                                        fontWeight: "500",
                                        paddingHorizontal: 6,
                                    }}
                                >
                                    {adults}
                                </Text>
                            </Pressable>

                            <Pressable
                                onPress={() => setAdults((c) => c + 1)}
                                style={{
                                    width: 26,
                                    height: 26,
                                    borderRadius: 13,
                                    borderColor: "#BEBEBE",
                                    backgroundColor: "#E0E0E0",
                                }}
                            >
                                <Text
                                    style={{
                                        textAlign: "center",
                                        fontSize: 20,
                                        fontWeight: "600",
                                        paddingHorizontal: 6,
                                    }}
                                >
                                    +
                                </Text>
                            </Pressable>
                        </Pressable>
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginVertical: 15,
                        }}
                    >
                        <Text style={{ fontSize: 16, fontWeight: "500" }}>Trẻ em</Text>
                        <Pressable
                            style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
                        >
                            <Pressable
                                onPress={() => setChildren(Math.max(0, children - 1))}
                                style={{
                                    width: 26,
                                    height: 26,
                                    borderRadius: 13,
                                    borderColor: "#BEBEBE",
                                    backgroundColor: "#E0E0E0",
                                }}
                            >
                                <Text
                                    style={{
                                        textAlign: "center",
                                        fontSize: 20,
                                        fontWeight: "600",
                                        paddingHorizontal: 6,
                                    }}
                                >
                                    -
                                </Text>
                            </Pressable>

                            <Pressable>
                                <Text
                                    style={{
                                        textAlign: "center",
                                        fontSize: 18,
                                        fontWeight: "500",
                                        paddingHorizontal: 6,
                                    }}
                                >
                                    {children}
                                </Text>
                            </Pressable>

                            <Pressable
                                onPress={() => setChildren((c) => c + 1)}
                                style={{
                                    width: 26,
                                    height: 26,
                                    borderRadius: 13,
                                    borderColor: "#BEBEBE",
                                    backgroundColor: "#E0E0E0",
                                }}
                            >
                                <Text
                                    style={{
                                        textAlign: "center",
                                        fontSize: 20,
                                        fontWeight: "600",
                                        paddingHorizontal: 6,
                                    }}
                                >
                                    +
                                </Text>
                            </Pressable>
                        </Pressable>
                    </View>
                </ModalContent>
            </BottomModal>

        </View>


    )
}

export default HomeScreen

const styles = StyleSheet.create({})