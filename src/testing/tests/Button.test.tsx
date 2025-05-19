import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@/components/ui/Button';

describe('Button component', () => {
  test('renders correctly with default props', () => {
    render(<Button>Click me</Button>);

    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('button');
    expect(button).toHaveClass('button--primary'); // Default variant
    expect(button).toHaveClass('button--md'); // Default size
    expect(button).not.toHaveClass('button--fullWidth');
    expect(button).not.toHaveAttribute('disabled');
  });

  test('applies variant classes correctly', () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>);
    expect(screen.getByText('Primary')).toHaveClass('button--primary');

    rerender(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByText('Secondary')).toHaveClass('button--secondary');

    rerender(<Button variant="outline">Outline</Button>);
    expect(screen.getByText('Outline')).toHaveClass('button--outline');

    rerender(<Button variant="ghost">Ghost</Button>);
    expect(screen.getByText('Ghost')).toHaveClass('button--ghost');
  });

  test('applies size classes correctly', () => {
    const { rerender } = render(<Button size="sm">Small</Button>);
    expect(screen.getByText('Small')).toHaveClass('button--sm');

    rerender(<Button size="md">Medium</Button>);
    expect(screen.getByText('Medium')).toHaveClass('button--md');

    rerender(<Button size="lg">Large</Button>);
    expect(screen.getByText('Large')).toHaveClass('button--lg');
  });

  test('applies fullWidth class when isFullWidth prop is true', () => {
    render(<Button isFullWidth>Full Width</Button>);
    expect(screen.getByText('Full Width')).toHaveClass('button--fullWidth');
  });

  test('disables the button when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByText('Disabled');
    expect(button).toBeDisabled();
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('does not call onClick when disabled', () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} disabled>
        Click me
      </Button>,
    );

    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  test('renders with additional class names when className is provided', () => {
    render(<Button className="custom-class">Custom Class</Button>);
    expect(screen.getByText('Custom Class')).toHaveClass('custom-class');
    expect(screen.getByText('Custom Class')).toHaveClass('button'); // Still has the base class
  });

  test('renders with loading state', () => {
    render(<Button isLoading>Loading</Button>);
    expect(screen.getByText('Loading').closest('button')).toHaveClass('button--loading');
    // You might also want to check for the presence of a spinner component
  });
});
