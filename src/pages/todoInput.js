import { Button, StyleSheet, TextInput, View, Modal, Image } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-ico-material-design';

function TodoInput(props) {
    const [todoValue, setTodoValue] = useState("");
    const [todoHeaderValue, setTodoHeaderValue] = useState("");

    function todoInputHandler(value) {
        setTodoValue(value);
    }

    function handleChangeNotesHeader(value) {
        setTodoHeaderValue(value);
    }

    function passValueToProps() {
        var value={header:todoHeaderValue, message:todoValue};
        props.addTodoHandler(value);
        props.closeModal();
    }

    return (
        <Modal visible={props.modalVisible} animationType='slide'>
            <View style={styles.header}>
                <Icon onPress={props.closeModal} name="go-back-left-arrow" height="20" width="20" />
                <Icon onPress={passValueToProps} name="check-symbol" height="20" width="20" />
            </View>

            <View style={styles.inputContainer}>
                <TextInput onChangeText={handleChangeNotesHeader} style={styles.textInputHeader} placeholder='Heading' />
                <TextInput onChangeText={todoInputHandler} style={styles.textInput} placeholder='Input....' />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-between',
        padding:12
    },
    inputContainer: {
        flex: 20,
        flexDirection: 'column',
        alignItems: 'center',
        padding:8
    },
    textInput: {
        width: '100%',
        padding: 2,
        marginTop:5,
        paddingBottom:90,
        borderRadius: 6,
        fontSize:18
    },
    textInputHeader: {
        width: '100%',
        padding: 2,
        borderRadius: 6,
        fontSize:25
    },
    image: {
        width: '100%',
        height: '40%',
        margin: 20
    }
})

module.exports = TodoInput;