import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import { useState } from "react";

function ExpenseForm() {
  const [amountValue, setAmountValue] = useState("");

  function amountChangedHandler(enteredAmount) {
    setAmountValue(enteredAmount);
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>

      <View style={styles.inputsRow}>
        <Input
          label="Amount"
          style={styles.rowInput}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: amountChangedHandler,
            value: amountValue,
          }}
        />
        <Input
          label="Date"
          style={styles.rowInput}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: () => {},
          }}
        />
      </View>
      <View>
        <Input
          label="Description"
          textInputConfig={{
            multiline: true,
            //   autoCapitalize: none
            // autoCorrect: false,
          }}
        />
      </View>
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  form: {
    marginTop: 40,
  },
  title: {
    fontWeight: "bold",
    color: "white",
    fontSize: 24,
    marginVertical: 24,
    textAlign: "center",
  },
  rowInput: {
    flex: 1,
  },
});
