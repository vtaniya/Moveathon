import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const App = () => {
    const [report, setReport] = React.useState('');

    const handleSubmit = () => {
        fetch('http://localhost:3000/api/collect', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ type: 'report', location: 'Main Road', severity: 7, description: report, timestamp: new Date().toISOString() }),
        });
    };

    return (
        <View>
            <Text>Evacuation Report</Text>
            <TextInput
                value={report}
                onChangeText={setReport}
                placeholder="Describe the situation"
            />
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

export default App;
