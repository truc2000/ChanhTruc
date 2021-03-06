import React from 'react';
import {StyleSheet, View, StatusBar, FlatList, Text} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../components/HeaderComponent';

const NotificationItem = ({item}) => (
  <View style={styles.itemContainer}>
    <View style={styles.itemTopContainer}>
      <View
        style={[
          styles.itemTypeContainer,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            backgroundColor: item.type === 1 ? '#fc820a' : '#dc3988',
          },
        ]}>
        <MaterialCommunityIcons
          name={item.type === 1 ? 'sale' : 'backup-restore'}
          color="#fff"
          size={22}
        />
      </View>
      <View style={styles.itemTopTextContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDate}>{item.date}</Text>
      </View>
    </View>
    <View>
      <Text style={styles.itemDetail}>{item.detail}</Text>
    </View>
  </View>
);

const NotificationScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.bodyContainer}>
        <View>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={[
              {
                id: 1,
                type: 1,
                name: 'Giảm Giá Cực Sốc nhân dịp Quốc Khánh 2/9',
                date: '02/09/2021',
                detail:
                  'Tất Cả Sản Phẩm Được Giảm Giá 50% - Số Lượng Có Hạn',
              },
              {
                id: 2,
                type: 2,
                name: 'GỢI Ý QUÀ TẶNG 20.10',
                date: '20/10/2021',
                detail:
                  'NHẬP MÃ UUDAIT10 GIẢM 50K CHO ĐƠN HÀNG 700K. Áp dụng cho sản phẩm ngành Điện Gia Dụng',
              },
              {
                id: 3,
                type: 1,
                name: 'Anker Giảm Khủng 40% Duy Nhất Hôm Nay 13/11',
                date: '13/11/2021',
                detail:
                  'Anker Giảm Khủng 40% Duy Nhất Hôm Nay 13/11 - Số Lượng Có Hạn',
              },
              {
                id: 4,
                type: 2,
                name: 'TRI ÂN THẦY CÔ 20/11',
                date: '20/11/2021',
                detail:
                  'MUA 1 TẶNG 1 - SỐ LƯỢNG CÓ HẠN - NHANH TAY LÊN',
              },
              {
                id: 5,
                type: 1,
                name: 'MỪNG GIÁNG SINH',
                date: '24/12/2021',
                detail:
                  'Anker Giảm Khủng 40% Duy Nhất Hôm Nay 24/12 - Số Lượng Có Hạn',
              },
              {
                id: 6,
                type: 2,
                name: 'SALE CỰC KHỦNG CHO DỊP TẾT NGUYÊN ĐÁN 2022',
                date: '02/11/2018',
                detail:
                  'GIÁ TỐT KHUYẾN MÃI LÊN ĐẾN 70% !',
              },
            ]}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <NotificationItem item={item} />}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: '#ededed',
    flexDirection: 'row',
  },
  buttonActiveContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  buttonInactiveContainer: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  activeMark: {
    backgroundColor: '#1e88e5',
    width: 4,
  },
  activeIcon: {
    padding: 12,
    // trick
    marginLeft: -4,
  },
  //
  listContainer: {
    flex: 1,
    borderLeftWidth: 1,
    borderLeftColor: '#e5e5e5',
  },
  //
  itemContainer: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomColor: '#ededed',
    borderBottomWidth: 1,
  },
  itemTopContainer: {
    flexDirection: 'row',
  },
  itemTypeContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTopTextContainer: {
    marginRight: 40,
    marginLeft: 4,
  },
  itemName: {
    color: '#000',
    fontWeight: '500',
  },
  itemDate: {
    color: '#787878',
    fontSize: 12,
    marginTop: 8,
  },
  itemDetail: {
    color: '#787878',
    // fontSize: 12,
    marginTop: 12,
  },
});

export default NotificationScreen;
