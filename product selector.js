// components/ProductSelector.js
import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

const products = [
    { id: '1', name: 'Product A' },
    { id: '2', name: 'Product B' },
    { id: '3', name: 'Product C' },
];

const ProductSelector = ({ selectedProduct, setSelectedProduct }) => {
    return (
        <View>
            <Text>Select a Product:</Text>
            <FlatList
                data={products}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => setSelectedProduct(item)}>
                        <Text style={{ padding: 10 }}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
            {selectedProduct && <Text>Selected: {selectedProduct.name}</Text>}
        </View>
    );
};

export default ProductSelector;