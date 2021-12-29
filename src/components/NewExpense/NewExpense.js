import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
	const [isEditing, setIsEditing] = useState(false);

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const saveExpenseData = {
			...enteredExpenseData,
			id: Math.floor(Math.random()).toString(),
		};
		props.onAddExpense(saveExpenseData);
		setIsEditing(false);
	};

	const startEditing = () => {
		setIsEditing(true);
	};

	const stopEditing = () => {
		setIsEditing(false);
	};

	return (
		<div className="new-expense">
			{!isEditing && <button onClick={startEditing}>Add Expense</button>}
			{isEditing && (
				<ExpenseForm
					onCancel={stopEditing}
					onSaveExpenseData={saveExpenseDataHandler}
				/>
			)}
		</div>
	);
};

export default NewExpense;
