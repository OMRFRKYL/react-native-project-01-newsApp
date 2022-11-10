import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import news_data from './news_data.json';
import NewsCard from './components/NewsCard/NewsCard';
import news_banner_data from './news_banner_data.json';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header_text}>News</Text>
      <FlatList
        ListHeaderComponent={() => (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {news_banner_data.map(bannerNews => (
              <Image
                source={{uri: bannerNews.imageUrl}}
                style={styles.banner_image}
              />
            ))}
          </ScrollView>
        )}
        data={news_data}
        renderItem={({item}) => <NewsCard news={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
  },
  header_text:{
    fontWeight:"bold",
    fontSize:40,
    color:"#B52300"
  }
});

export default App;
