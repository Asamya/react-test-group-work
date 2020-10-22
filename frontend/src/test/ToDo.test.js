import React from "react";
import userEvent from "@testing-library/user-event";
import {render} from "@testing-library/react";
import Todo from "../components/Todo";

/*
// Finds the first element with role 'heading', this was not required

test('render description', () => {
    //Given
    const {getByRole} = render(<Todo />);

    //When
    const actual = getByRole('heading');

    //Then
    expect(actual).toBeInTheDocument();
})

 */

test('render description', () => {
    //Given
    const descriptionText = 'Hallo du.';
    const {getByText} = render(<Todo description={descriptionText}/>);

    //When
    const actual = getByText(/Hallo du./i);

    expect(actual).toBeInTheDocument();

})

/*
//Similar to 'heading'

test('render status', ()=> {
    //Given
    const {getByRole} = render(<Todo />);

    //When
    const actual = getByRole('generic');

    //Then
    expect(actual).toBeInTheDocument();
})

 */

test('render status open', () => {
    //Given
    const searchedStatus = 'WHADA';
    const {getByText} = render(<Todo status={searchedStatus}/>);

    //When
    const actual = getByText(/WHADA/);

    //Then
    expect(actual).toBeInTheDocument();
})


test('button is shown in Open', () => {
    //Given
    const givenStatus = 'OPEN';
    const {getByRole} = render(<Todo status={givenStatus}/>);

    //When
    const actual = getByRole('button', {name:/Advance/});

    //Then
    expect(actual).toBeVisible();
})

test('button is shown in In_Progress', () => {
    //Given
    const givenStatus = 'IN_PROGRESS';
    const {getByRole} = render(<Todo status={givenStatus}/>);

    //When
    const actual = getByRole('button', {name:/Advance/});

    //Then
    expect(actual).toBeVisible();
})

test('button is not shown in done', () => {
    //Given
    const givenStatus = 'DONE';
    const {queryByRole} = render(<Todo status={givenStatus}/>);

    //When
    const actual = queryByRole('button', {name:/Advance/i});

    //Then
    expect(actual).not.toBeInTheDocument();
})

test('no button to see when showbutton is false', () => {
    //Given
    const statusShowButtons = false;
    const {queryAllByRole} = render(<Todo showButtons={statusShowButtons}/>);

    //When
    const actual = queryAllByRole('button');

    //Then
    expect(actual).toHaveLength(0);
})

it('data is calles by click on advance', () => {
    //Given
    //const todoData = {id: 'asldfjlsdj', description: 'Hallo', status:'IN_PROGRESS'}
    const handlerOnClick = jest.fn();
    const {getByRole} = render(<Todo onAdvance={handlerOnClick}
                                      id={'asldfjlsdj'}
                                      description={'Hallo'}
                                      status={'IN_PROGRESS'}
    />);

    //When
    const button = getByRole('button',{name:'Advance'});
    userEvent.click(button);

    //Then
    expect(handlerOnClick).toHaveBeenCalledWith({'id':'asldfjlsdj', 'description':'Hallo', 'status':'IN_PROGRESS'});
})




