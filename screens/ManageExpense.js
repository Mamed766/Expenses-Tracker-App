import { useLayoutEffect } from "react";
import { View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import IconButton from "../components/UI/IconButton";

function ManageExpense({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  return (
    <View>
      {isEditing && (
        <IconButton
          name="trash"
          color={GlobalStyles.colors.error500}
          size={36}
        />
      )}
    </View>
  );
}

export default ManageExpense;
