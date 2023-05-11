import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  Modal,
} from 'react-native';

const ProductsList = () => {
  const [product, setProduct] = useState('');
  const [products, setProducts] = useState([
    {id: '1', name: 'Product 1'},
    {id: '2', name: 'Product 2'},
    {id: '3', name: 'Product 3'},
    {id: '4', name: 'Product 4'},
  ]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addProductHandler = () => {
    setProducts(currentProducts => [
      ...currentProducts,
      {id: Math.random().toString(), name: product},
    ]);
    setProduct('');
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={{marginRight:10}}>Click to Add New Product ->></Text>
        <Button title="Add Product" onPress={() => setIsModalVisible(true)} />
      </View>
      <Text style={{marginBottom:10}}>Product List</Text>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text
              style={styles.textStyle}>
              {itemData.item.name}
            </Text>
          </View>
        )}
      />
      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Add New Product</Text>
          <TextInput
            style={styles.input}
            placeholder="Product Name"
            value={product}
            onChangeText={text => setProduct(text)}
          />
          <View style={styles.buttonContainer}>
            <Button title="Cancel" onPress={() => setIsModalVisible(false)} />
            <Button title="Add" onPress={addProductHandler} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
  formContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 20,
    padding:10
  },
  listItem: {
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 20,
    borderColor:'black',
    borderWidth: 1,
    borderRadius:10,
    color:'black'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  textStyle: {
    textAlign: 'center',
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ProductsList;
