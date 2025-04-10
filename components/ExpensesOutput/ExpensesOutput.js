import { View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2005-12-09"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date("2004-01-30"),
  },
  {
    id: "e3",
    description: "Some bananas",
    amount: 20.3,
    date: new Date("2006-03-03"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 4,
    date: new Date("2016-06-06"),
  },
  {
    id: "e5",
    description: "Another book",
    amount: 44,
    date: new Date("2020-08-11"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList />
    </View>
  );
}

export default ExpensesOutput;
