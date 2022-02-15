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
