import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('button turns blue when clicked', () => {
 render(<App/>)

 const colorButton = screen.getByRole('button', {name: 'Change to blue'})

 // expect the button color is red
 expect(colorButton).toHaveStyle({backgroundColor: 'red'})

 // click button`
 fireEvent.click(colorButton)

 // expect the button color is blue
 expect(colorButton).toHaveStyle({backgroundColor: 'blue'})

 // expect the button text to be  'Change to red'
 expect(colorButton.textContent).toBe('Change to red')
});

test('initial condition', () => {
    render(<App />)

    const colorButton = screen.getByRole('button', {
        name: 'Change to blue'
    });

    // check if the button is enabled
    expect(colorButton).toBeEnabled();

    // check the checkbox starts out unchecked
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
})

test('button disabled on checkbox checked, and ', () => {
    render (<App/>)

    const buttonColor = screen.getByRole('button')
    const checkbox = screen.getByRole('checkbox');

    // click on checkbox to check
    fireEvent.click(checkbox);

    // expect the button to be disable
    expect(buttonColor).toBeDisabled();

    // click on checkbox to uncheck
    fireEvent.click(checkbox);

    // expect the button to be enabled
    expect(buttonColor).toBeEnabled();

        // no need to redefine the checkbox in between two clicks
    // once it's defined, it's there unless the component dissappeared

     
})
