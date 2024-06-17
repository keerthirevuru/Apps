import { Picker } from '@react-native-picker/picker';
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
 // Import correct Picker
// Consider using an appropriate icon component for React Native

const Gst = () => {
  const [amount, setAmount] = useState('');
  const [gstRate, setGstRate] = useState('5');
  const [taxType, setTaxType] = useState('exclusive');
  const [gstAmount, setGstAmount] = useState(0); // Initialize with number
  const [totalAmount, setTotalAmount] = useState(0); // Initialize with number
  const [actualAmount, setActualAmount] = useState(null); // Initialize with null or undefined

  useEffect(() => {
    calculateGST();
  }, [amount, gstRate, taxType]);

  const calculateGST = () => {
    const amt = parseFloat(amount);
    const rate = parseFloat(gstRate) / 100;

    if (!isNaN(amt) && !isNaN(rate)) {
      let gstAmt, totalAmt, actAmt;

      if (taxType === 'exclusive') {
        gstAmt = amt * rate;
        totalAmt = amt + gstAmt;
        actAmt = amt;
      } else {
        gstAmt = (amt * rate) / (1 + rate);
        totalAmt = amt;
        actAmt = amt - gstAmt;
      }

      setGstAmount(gstAmt.toFixed(2));
      setTotalAmount(totalAmt.toFixed(2));
      setActualAmount(actAmt.toFixed(2));
    } else {
      resetAmounts();
    }
  };

  const resetAmounts = () => {
    setGstAmount(0);
    setTotalAmount(0);
    setActualAmount(null);
  };

  return (
    <View style={styles.container}>
    <View style={styles.whiteBackground}>
        <Text style={styles.headerText}>GST Calculator</Text>
        <Text style={styles.Textarea}>
          Rekonsys introduces a free GST calculator made just for small
          businesses !! with this tool, you will be able to calculate GST in
          minuts without any complex math
        </Text>
      </View>
      <View style={styles.blueCard}>
        <Text style={styles.inputtext}>Enter Amount:</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setAmount(text)}
          value={amount}
          keyboardType="numeric"
        />
        <Text style={styles.inputtext}>Select GST Rate (%):</Text>
        <View style={styles.input}>
          <Picker
            selectedValue={gstRate}
            onValueChange={itemValue => setGstRate(itemValue)}
            mode="dropdown">
            <Picker.Item label="2%" value="2" />
            <Picker.Item label="5%" value="5" />
            <Picker.Item label="8%" value="8" />
            <Picker.Item label="12%" value="12" />
          </Picker>
        </View>
        <Text style={styles.inputtext}>Tax Type:</Text>
        <View style={styles.input}>
          <Picker
            selectedValue={taxType}
            onValueChange={itemValue => setTaxType(itemValue)}
            mode="dropdown">
            <Picker.Item label="Exclusive" value="exclusive" />
            <Picker.Item label="Inclusive" value="inclusive" />
          </Picker>
        </View>
      </View>
      <View style={styles.resultsContainer}>
        <View style={styles.result1}>
          <View style={styles.inner}>
            <Text style={styles.textsize}>
              ₹ {taxType === 'exclusive' ? amount : actualAmount}
            </Text>
            <Text style={styles.textsize}>Actual Amount</Text>
          </View>
          <View style={styles.inner}>
            <Text style={styles.textsize}>+</Text>
          </View>
          <View style={styles.inner}>
            <Text style={styles.textsize}>₹ {gstAmount}</Text>
            <Text style={styles.textsize}>GST Amount</Text>
          </View>
          <View style={styles.inner}>
            <Text style={styles.textsize}>=</Text>
          </View>
          <View style={styles.inner}>
            <Text style={styles.textsize}>₹ {totalAmount}</Text>
            <Text style={styles.textsize}>Total Amount</Text>
          </View>
        </View>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '50%',
    backgroundColor: 'lightgreen',
    //justifyContent: 'center',
    alignItems: 'center',
  },
  blueCard: {
    marginTop: '25%',
    width: '90%',
    backgroundColor: 'grey', // Change background color to black
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    alignItems: 'center',
  },
  resultsContainer: {
    margin: 20,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 5,
    backgroundColor: 'white',
  },
  result1: {
    width: '100%',
    height: 150,
    flexDirection: 'row',
    backgroundColor: '#ffffff', // Change background color to white
    borderRadius: 10, // Add border radius
    elevation: 3, // Add elevation
    marginTop: 20, // Add margin top
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
  },
  textsize: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
  },
  Textarea: {
    fontSize: 23,
    color: 'black',
  },
  inputtext: {
    color: 'white',
  },
});

export default Gst;
