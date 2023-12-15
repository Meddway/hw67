import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CalculatorState{
  values: string;
}

const initialState: CalculatorState = {
  values: '',
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    addNumber: (state, action: PayloadAction<string>) => {
      state.values += action.payload;
    },
    addOperator: (state, action: PayloadAction<string>) => {
      state.values += `${action.payload}`;
    },
    calculate: (state) => {
      try {
        state.values = eval(state.values).toString();
      }catch (error){
        state.values = 'Error';
      }
    },
    reset: (state) => {
      state.values = '';
    },
  },
});

export const {addNumber, addOperator,calculate, reset } = calculatorSlice.actions;
export const calculatorReducer = calculatorSlice.reducer;

