// TypeScript interface defining the props (properties) this component accepts
interface HeaderProps {
  userName?: string;    // Optional user name (? makes it optional)
  userRole?: string;    // Optional user role (? makes it optional)
}

// Header component that displays the top navigation bar
// Uses destructuring with default values if props aren't provided
export default function Header({ userName = "Andrew", userRole = "Admin" }: HeaderProps) {
  return (
    // Header element with white background, subtle shadow, and bottom border
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-3">
      {/* Container using flexbox to space items apart */}
      <div className="flex items-center justify-between">
        {/* Logo text on the left side */}
        <div className="text-lg font-bold text-gray-900">LOGO</div>
        
        {/* User info section on the right side */}
        <div className="flex items-center gap-6">
          {/* Welcome message with dynamic user name */}
          <span className="text-gray-900 font-medium">Welcome {userName}!</span>
          {/* User role badge with smaller, lighter text */}
          <span className="text-gray-600 text-sm">{userRole}</span>
        </div>
      </div>
    </header>
  );
}
