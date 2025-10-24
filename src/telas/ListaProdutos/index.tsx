import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StatusBar } from 'react-native';
import { supabase } from '../../../utils/supabase';
import { Card } from 'react-native-paper';

import Texto from '../../componentes/Texto'
import styles from './estilosListaProdutos'

export default function Index() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const { data: todos, error } = await supabase.from('produtos').select();

        if (error) {
          console.error('Error fetching table:', error.message);
          return;
        }

        if (todos && todos.length > 0) {
          setTodos(todos);
        }
      } catch (error) {
        console.error('Error fetching table:', error.message);
      }
    };

    getTodos();
  }, []);
    //Monta o layout de cada item da lista
    const cadaItem = ({item}) => {
    return <View style={styles.cardContainer}>
        <Card mode='contained' style={styles.card} >
        <Card.Content>
            <Texto style={styles.titulo}>{item.nome}</Texto>
        </Card.Content>
        </Card>
    </View>
    }
    return (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: '15%' }}>
    <StatusBar barStyle='dark-content'/>
    <Text>Lista de Produtos</Text>
    <FlatList
      data={todos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => cadaItem({ item })}
      numColumns={2}
    />
  </View>
);
};