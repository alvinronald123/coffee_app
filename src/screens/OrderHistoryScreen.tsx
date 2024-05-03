import {
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useState } from 'react';
import { useStore } from '../store/store';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import {
    BORDERRADIUS,
    COLORS,
    FONTFAMILY,
    FONTSIZE,
    SPACING,
} from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import EmptyListAnimation from '../components/EmptyListAnimation';
import PopUpAnimation from '../components/PopUpAnimation';
import OrderHistoryCard from '../components/OrderHistoryCard';
import RNFS from 'react-native-fs'; // Import react-native-fs for file system operations


const OrderHistoryScreen = ({ navigation }: any) => {
    const OrderHistoryList = useStore((state: any) => state.OrderHistoryList);
    const tabBarHeight = useBottomTabBarHeight();
    const [showAnimation, setShowAnimation] = useState(false);

    const navigationHandler = ({ index, id, type }: any) => {
        navigation.push('Details', {
            index,
            id,
            type,
        });
    };

    const buttonPressHandler = () => {
        setShowAnimation(true);

        // Generate PDF content (dummy content for demonstration)
        const pdfContent = 'This is the content of the PDF file for order history.';

        // Define the path where the PDF file will be saved
        const filePath = `${RNFS.ExternalDirectoryPath}/order_history.pdf`;

        // Write the PDF content to the file
        RNFS.writeFile(filePath, pdfContent, 'utf8')
            .then(() => {
                // PDF file is successfully created
                console.log('PDF file saved:', filePath);

                // Set a timeout to hide the animation after 2 seconds
                setTimeout(() => {
                    setShowAnimation(false);
                }, 2000);
            })
            .catch((error) => {
                // An error occurred while writing the file
                console.error('Error writing PDF file:', error);
                setShowAnimation(false);
            });
    };

    return (
        <View style={styles.ScreenContainer}>
            <StatusBar backgroundColor={COLORS.primaryBlackHex} />

            {showAnimation ? (
                <PopUpAnimation
                    style={styles.LottieAnimation}
                    source={require('../lottie/download.json')}
                />
            ) : (
                <></>
            )}

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.ScrollViewFlex}>
                <View
                    style={[styles.ScrollViewInnerView, { marginBottom: tabBarHeight }]}>
                    <View style={styles.ItemContainer}>
                        <HeaderBar title="Order History" />

                        {OrderHistoryList.length == 0 ? (
                            <EmptyListAnimation title={'No Order History'} />
                        ) : (
                            <View style={styles.ListItemContainer}>
                                {OrderHistoryList.map((data: any, index: any) => (
                                    <OrderHistoryCard
                                        key={index.toString()}
                                        navigationHandler={navigationHandler}
                                        CartList={data.CartList}
                                        CartListPrice={data.CartListPrice}
                                        OrderDate={data.OrderDate}
                                    />
                                ))}
                            </View>
                        )}
                    </View>
                    {OrderHistoryList.length > 0 ? (
                        <TouchableOpacity
                            style={styles.DownloadButton}
                            onPress={() => {
                                buttonPressHandler();
                            }}>
                            <Text style={styles.ButtonText}>Download</Text>
                        </TouchableOpacity>
                    ) : (
                        <></>
                    )}
                    <TouchableOpacity
                        style={styles.DownloadButton}
                        onPress={() => {

                        }}>
                        <Text style={styles.ButtonText}>Clear History</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    ScreenContainer: {
        flex: 1,
        backgroundColor: COLORS.primaryBlackHex,
    },
    LottieAnimation: {
        height: 250,
    },
    ScrollViewFlex: {
        flexGrow: 1,
    },
    ScrollViewInnerView: {
        flex: 1,
        justifyContent: 'space-between',
    },
    ItemContainer: {
        flex: 1,
    },
    ListItemContainer: {
        paddingHorizontal: SPACING.space_20,
        gap: SPACING.space_30,
    },
    DownloadButton: {
        margin: SPACING.space_20,
        backgroundColor: COLORS.primaryOrangeHex,
        alignItems: 'center',
        justifyContent: 'center',
        height: SPACING.space_36 * 2,
        borderRadius: BORDERRADIUS.radius_20,
    },
    ButtonText: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_18,
        color: COLORS.primaryWhiteHex,
    },
});

export default OrderHistoryScreen;
