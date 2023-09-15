import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Modal,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const {width, height} = Dimensions.get('screen');
const TodoScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [todos, setTodos] = useState([]);
  const [showModal, setShowModal] = useState(false);
   

        /*add new todo*/
  const addTodo = () => {
    if (title.trim() !== '' && description.trim() !== '') {
      setTodos([
        ...todos,
        {id: Date.now().toString(), title, description, completed: false},
      ]);
      setTitle('');
      setDescription('');
      setShowModal(false);
    }
  };

      /*complete status function  */
  const toggleTodoCompletion = id => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? {...todo, completed: !todo.completed} : todo,
    );
    setTodos(updatedTodos);
  };
              
         /*remove todo function*/
  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <View>
      <View style={styles.maincontainer}>
        <Text style={styles.todolisttxt}>Todo List</Text>
        <Text style={styles.todoscounttext}>{todos.length} task </Text>
      </View>
      {todos.length > 0 ? (
        <View style={styles.alltodosbox}>
          <FlatList
            data={todos}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={styles.todostaskmaincontainer}>
                <View style={styles.checkbox}>
                  <BouncyCheckbox
                    fillColor="#3498db"
                    iconStyle={{borderColor: '#3498db'}}
                    value={item.completed}
                    onValueChange={() => toggleTodoCompletion(item.id)}
                  />
                </View>
                <View style={styles.todosanddeletebtn}>
                  <View style={styles.titleanddescbtn}>
                    <Text style={styles.titletxt}>{item.title}</Text>
                    <Text style={styles.desctxt}>{item.description}</Text>
                  </View>
                  <View style={styles.deletebtnbox}>
                    <TouchableOpacity
                      onPress={() => removeTodo(item.id)}
                      style={styles.deletebtn}>
                      <Text style={styles.deletebtntxt}>Delete</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      ) : (
                    /*Todo big icon*/

        <View style={styles.todoiconbox}>
          <Image
            style={styles.todoicon}
            source={require('../../assets/to-do-list.png')}
          />
        </View>
      )}
          
      <View style={styles.plusbtnbox}>
        <TouchableOpacity
          style={styles.addbtncircle}
          onPress={() => setShowModal(true)}>
          <Text style={styles.plusicon}>+</Text>
        </TouchableOpacity>
      </View>

     
      <Modal
        visible={showModal}
        animationType="slide"
        onRequestClose={() => setShowModal(false)}>
        <View style={styles.modelmaincontainer}>
          <Text style={styles.addtodotext}>Add TODOs</Text>
          <TextInput
            placeholder="Title"
            value={title}
            onChangeText={text => setTitle(text)}
            style={styles.titleinputbox}
          />

          <TextInput
            placeholder="Description"
            value={description}
            onChangeText={text => setDescription(text)}
            multiline={true}
            numberOfLines={6}
            style={styles.descriptioninputbox}
          />
          <View style={styles.addbtnbox}>
            <TouchableOpacity onPress={addTodo} style={styles.addbtn}>
              <Text style={styles.addbtntext}>ADD</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

         /*css part*/

const styles = StyleSheet.create({
  maincontainer: {
    marginHorizontal: 10,
  },
  todolisttxt: {
    fontSize: 25,
    color: '#000',
  },
  todoscounttext: {
    fontSize: 18,
    color: '#000',
  },
  alltodosbox: {
    height: height * 0.65,
  },
  todostaskmaincontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff',
    marginVertical: 10,
    width: width * 0.975,
    height: 'auto',
    borderRadius: 10,
    marginHorizontal: 7,
    borderWidth: 2,
    borderColor: '#3498db',
  },
  checkbox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  todosanddeletebtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.8,
    alignItems: 'center',
  },
  titleanddescbtn: {
    width: width * 0.65,
  },
  titletxt: {
    fontSize: 23,
    color: '#3498db',
    fontWeight: '500',
  },
  desctxt: {
    fontSize: 20,
    color: '#000',
    fontWeight: '400',
  },
  deletebtnbox: {
    marginVertical: 10,
    marginHorizontal: 5,
  },
  deletebtn: {
    backgroundColor: '#3498db',
    width: width * 0.15,
    height: height * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  deletebtntxt: {
    color: '#fff',
    fontWeight: 'bold',
  },
  todoiconbox: {
    height: height * 0.65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  todoicon: {
    resizeMode: 'contain',
    width: 400,
    height: 200,
  },
  plusbtnbox: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 10,
  },
  addbtncircle: {
    width: width * 0.15,
    height: height * 0.07,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  plusicon: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  modelmaincontainer: {
    marginHorizontal: 20,
  },
  addtodotext: {
    marginVertical: 20,
    fontSize: 25,
    fontWeight: '900',
  },
  titleinputbox: {
    backgroundColor: 'rgb(220,220,220)',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  descriptioninputbox: {
    backgroundColor: 'rgb(220,220,220)',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  addbtnbox: {
    marginVertical: 10,
  },
  addbtn: {
    backgroundColor: '#3498db',
    width: width * 0.17,
    height: height * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  addbtntext: {
    color: 'white',
    fontWeight: 'bold',
  },
});
export default TodoScreen;
