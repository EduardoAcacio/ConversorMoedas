import { render, screen } from '@testing-library/react';
import ConversorMoedas from './ConversorMoedas';

test('Deve renderizar o component sem erros', () => {
  render(<ConversorMoedas />);
  const linkElement = screen.getByText(/Conversor de Moedas/i);
  expect(linkElement).toBeInTheDocument();
});
