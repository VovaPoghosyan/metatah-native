import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { styles } from "./styles";

function Notes(props) {
        const {
            titleValue,
            noteValue,
            onChangeValue,
            onChangeTitle
        } = props;
  
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.titleLabel}>title:</Text>
                    <TextInput
                        style={styles.inputTitle}
                        onChangeText={onChangeTitle}
                        value={titleValue}
                        placeholder="title"
                    />
                </View>
                <View style={styles.content}>
                    <TextInput
                        style={styles.input}
                        multiline
                        onChangeText={onChangeValue}
                        value={noteValue}
                        placeholder="notes"
                    />
                </View>
            </View>
        );
}

export default Notes;