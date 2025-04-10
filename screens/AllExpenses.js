import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

function AllExpenses() {
  return <ExpensesOutput expensesPeriod="TOTAL" />;
}

export default AllExpenses;
