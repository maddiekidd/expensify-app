import moment from "moment"; 
import { 
    setStartDate, 
    setEndDate, 
    sortByDate, 
    sortByAmount, 
    setTextFilter 
} from "../../actions/filters"; 

test("should generate set start date action object", () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_START_DATE",
        startDate: moment(0)
    })
});

test("should generate set end date action object", () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: "SET_END_DATE", 
        endDate: moment(0)
    })
});

test("should filter items by date", () => {
    const action = sortByDate(); 
    expect(action).toEqual({
        type: "SORT_BY_DATE"
    })
});

test("should filter items by amount", () => {
    const action = sortByAmount(); 
    expect(action).toEqual({
        type: "SORT_BY_AMOUNT"
    })
});

test("should set up text filter with text input", () => {
    const text = "water"
    const action = setTextFilter(text)
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text
    })
});

test("should set up text filter with text input", () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ""
    })
});
