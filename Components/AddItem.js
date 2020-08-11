import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddItem = ({addItem}) => {
  const [text, setText] = useState('');
  const onChange = (textValue) => setText(textValue);
  const clearText = () => setText('');

  return (
    <View>
      <TextInput
        placeholder="Add Item..."
        style={styles.input}
        onChangeText={onChange}
        value={text}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          addItem(text);
          clearText();
        }}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} color="blue" />
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 18,
  },
  btn: {
    padding: 9,
    margin: 5,
    backgroundColor: '#c2bad8',
  },
  btnText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'blue',
  },
});

export default AddItem;
