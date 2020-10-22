import React from "react";
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


test('button is only shown in Open', () => {
    //Given
    const givenStatus = 'OPEN';
    const {getByRole} = render(<Todo status={givenStatus}/>);

    //When
    const actual = getByRole('button', {name:/Advance/});

    //Then
    expect(actual).toBeVisible();
})

/*test('button is not shown in done', () => {
    //Given
    const givenStatus = 'DONE';
    const {getByRole} = render(<Todo status={givenStatus}/>);

    //When
    const actual = getByRole('button', {name:/Advance/i});

    //Then
    !expect(actual).toBeVisible();
})

 */

