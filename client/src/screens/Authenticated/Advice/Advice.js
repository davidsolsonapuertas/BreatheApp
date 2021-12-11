import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  View,
  FlatList,
  Linking,
} from 'react-native';
import { fetchArticles } from '../../../utils/Helpers';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Advice() {
  const [articles, setArticles] = useState([]);

  useEffect(async () => {
    let articlesRes = await fetchArticles();
    const newD = articlesRes?.articles.map((art) => ({
      ...art,
      title: art?.title.slice(0, 35) + '...',
      description: art?.description.slice(0, 120) + '...',
    }));
    setArticles(newD);
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      key={item?.url}
      style={styles.article}
      onPress={() => Linking.openURL(item?.url)}
    >
      <Image
        source={{ uri: item.urlToImage }}
        style={{ width: 100, height: 100 }}
      />
      <View style={styles.details}>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.text}>{item?.author}</Text>
        <Text style={styles.text}>{item?.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={renderItem}
        keyExtractor={(item) => item?.url}
      />
    </SafeAreaView>
  );
}

Advice.propTypes = {
  navigation: PropTypes.shape(),
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontWeight: '700',
  },
  details: {
    paddingHorizontal: 20,
    flexShrink: 1,
  },
  article: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    flexShrink: 1,
    maxWidth: '100%',
    marginVertical: 5,
  },
  image: {
    width: 400,
    height: 200,
  },
});
