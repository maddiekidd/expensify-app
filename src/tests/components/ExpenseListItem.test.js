import React from "react"; 
import { shallow } from "enzyme";
import ExpenseListItem from "../../components/ExpenseListItem.js";
import expenses from "../fixtures/expenses"; 

test("should render ExpenseListItem correctly", () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[1]}/>);
    expect(wrapper).toMatchSnapshot(); 
});