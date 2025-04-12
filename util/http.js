import axios from "axios";

export function storeExpense(expenseData) {
  axios.post(
    "https://react-native-9c05a-default-rtdb.europe-west1.firebasedatabase.app/expenses.json",
    expenseData
  );
}
