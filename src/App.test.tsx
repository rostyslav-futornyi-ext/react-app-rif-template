import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import App from './App';

describe('App', () => {
  it('renders the header with the RIF logo', () => {
    render(<App />);

    expect(screen.getByAltText('RIF logo')).toBeInTheDocument();
    expect(screen.getByText('RIF React App Template')).toBeInTheDocument();
  });

  it('shows the welcome tab by default', () => {
    render(<App />);

    expect(screen.getByText('Welcome to RIF React App Template')).toBeInTheDocument();
    expect(screen.getByText(/This is a modern React template/)).toBeInTheDocument();
  });

  it('can switch between tabs', () => {
    render(<App />);

    // Click on Features tab
    fireEvent.click(screen.getByRole('tab', { name: 'Features' }));
    expect(screen.getByText('Template Features')).toBeInTheDocument();
    expect(screen.getByText('⚡️ Vite - Lightning fast builds')).toBeInTheDocument();

    // Click on Counter Demo tab
    fireEvent.click(screen.getByRole('tab', { name: 'Counter Demo' }));
    expect(screen.getByText('Counter Example')).toBeInTheDocument();
    expect(screen.getByText('count is 0')).toBeInTheDocument();
  });

  it('increments counter when button is clicked', () => {
    render(<App />);

    // Go to counter tab
    fireEvent.click(screen.getByRole('tab', { name: 'Counter Demo' }));

    // Click the counter button and check if it increments
    const counterButton = screen.getByText('count is 0');
    fireEvent.click(counterButton);
    expect(screen.getByText('count is 1')).toBeInTheDocument();

    // Click again to make sure it keeps incrementing
    fireEvent.click(counterButton);
    expect(screen.getByText('count is 2')).toBeInTheDocument();
  });
});
