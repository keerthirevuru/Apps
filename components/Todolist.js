import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native'

const dummyData = [
  {
    id: "43",
    title: "karish",
  },
];

const Todolist = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState(dummyData);
  const [editingItem, setEditingItem] = useState(null); // State to track the item being edited
  const [editedTitle, setEditedTitle] = useState(""); // State to hold the edited title

  const handleAddTodo = () => {
    if (todo.trim() !== "") {
      setTodoList([...todoList, { id: Date.now().toString(), title: todo }]);
      setTodo("");
    }
  };

  const handleDeleteTodo = (id) => {
    setTodoList(todoList.filter(item => item.id !== id));
  };

  const handleEditStart = (id, title) => {
    setEditingItem(id);
    setEditedTitle(title);
  };

  const handleEditSave = () => {
    setTodoList(todoList.map(item => item.id === editingItem ? { ...item, title: editedTitle } : item));
    setEditingItem(null);
    setEditedTitle("");
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      {editingItem === item.id ? (
        <TextInput
          style={styles.editInput}
          value={editedTitle}
          onChangeText={text => setEditedTitle(text)}
          onBlur={handleEditSave}
          autoFocus
        />
      ) : (
        <Text style={styles.title}>{item.title}</Text>
      )}
      {editingItem === item.id ? (
        <TouchableOpacity onPress={handleEditSave}>
          <Text style={styles.saveButton}>update</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => handleEditStart(item.id, item.title)}>
          <Text style={styles.editButton}>Edit</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={() => handleDeleteTodo(item.id)}>
        <Text style={styles.deleteButton}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>To Do List</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Add a text'
          value={todo}
          onChangeText={(userText) => setTodo(userText)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
          <Text style={styles.addText}>Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={todoList}
        renderItem={renderItem}
        keyExtractor={item => item.id} //when we change the data that time it helps to updatate and idetify the data and chage new data
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#e8e8e8',
    marginVertical: 10,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'red',
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: 'black',
    marginLeft: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 5,
  },
  addText: {
    color: 'white',
    fontSize: 16,
  },
  item: {
    backgroundColor: 'lightblue',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    flex: 1,
    fontWeight: 'bold',
    color: 'black',
  },
  editInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'blue',
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  editButton: {
    color: 'blue',
    marginRight: 10,
  },
  saveButton: {
    color: 'green',
    marginRight: 10,
  },
  deleteButton: {
    color: 'red',
  },
});

export default Todolist;
