import React, { useState } from 'react';
import { TextField, Typography, Container, Box, Grid } from '@mui/material';

const BudgetCalculator = () => {
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState({
    rent: '',
    groceries: '',
    utilities: '',
    transportation: '',
    fun: '',
  });

  const handleIncomeChange = (e) => {
    setIncome(e.target.value);
  };

  const handleExpenseChange = (e) => {
    const { name, value } = e.target;
    setExpenses({
      ...expenses,
      [name]: value,
    });
  };

  const calculateTotalExpenses = () => {
    return Object.values(expenses).reduce((acc, expense) => acc + (parseFloat(expense) || 0), 0);
  };

  const totalExpenses = calculateTotalExpenses();
  const remainingBalance = income - totalExpenses;


  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Monthly Budget Calculator
      </Typography>
      <Box component="form" noValidate>
        <TextField
          label="Monthly Income"
          value={income}
          onChange={handleIncomeChange}
          fullWidth
          margin="normal"
          variant="outlined"
          type="number"
          required
        />

        <Typography variant="h6" sx={{ mt: 2 }}>
          Expenses
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Rent"
              name="rent"
              value={expenses.rent}
              onChange={handleExpenseChange}
              fullWidth
              margin="normal"
              variant="outlined"
              type="number"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Utilities"
              name="utilities"
              value={expenses.utilities}
              onChange={handleExpenseChange}
              fullWidth
              margin="normal"
              variant="outlined"
              type="number"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Groceries"
              name="groceries"
              value={expenses.groceries}
              onChange={handleExpenseChange}
              fullWidth
              margin="normal"
              variant="outlined"
              type="number"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Transportation"
              name="transportation"
              value={expenses.transportation}
              onChange={handleExpenseChange}
              fullWidth
              margin="normal"
              variant="outlined"
              type="number"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Fun"
              name="fun"
              value={expenses.fun}
              onChange={handleExpenseChange}
              fullWidth
              margin="normal"
              variant="outlined"
              type="number"
              required
            />
          </Grid>
        </Grid>

        <Box sx={{ mt: 3 }}>
          <Typography variant="body1">
            Total Expenses: ${totalExpenses.toFixed(2)}
          </Typography>
          <Typography variant="body1">
            Savings: ${remainingBalance.toFixed(2)}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default BudgetCalculator;
