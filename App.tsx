import React, { useEffect, useState } from 'react';
import { 
  StyleSheet, 
  FlatList, 
  SafeAreaView, 
  StatusBar, 
  Button 
} from 'react-native';
import axios from 'axios';

import { IFactItem } from './interfaces';
import Fact from './components/Fact';

const App: React.FC = () => {
  const [facts, setFacts] = useState<IFactItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFacts();
  }, []);

  const loadFacts = async () => {
    setLoading(true);
    const { data } = await axios.get('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=3')

    const newFacts = data.map(({text, _id}: {text:string, _id: string}) => ({
      text,
      id: _id,
    }));

    setFacts(prevFacts => [...prevFacts, ...newFacts]);
    setLoading(false);
  }

  const renderItem = ({ item }: {item: IFactItem}) => <Fact text={item.text} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={facts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Button
        disabled={loading}
        title={loading ? "Loading" : "Load more"}
        onPress={loadFacts}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default App;