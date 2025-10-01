// TypeScript interface defining the props this component accepts
interface SidebarProps {
  selectedCategory: string;                          // Currently selected navigation item
  onCategoryChange: (category: string) => void;     // Callback function when category changes
}

// Static array of navigation menu items
const navigationItems = [
  { id: "Manage Inventory", label: "Manage Inventory" },   // Inventory management page
  { id: "Manage Products", label: "Manage Products" },     // Product management page
  { id: "Manage User", label: "Manage User" }              // User management page
];

// Static array of product categories with their counts and active status
const categories = [
  { name: "All products", count: 500, isActive: false },   // Shows all products
  { name: "Vegetable", count: 52, isActive: true },        // Currently active category
  // Generate 9 additional categories dynamically using Array.from
  ...Array.from({ length: 9 }, (_, i) => ({ 
    name: `Category #${i + 2}`,    // Creates Category #2, #3, etc.
    count: 500,                    // Each has 500 items
    isActive: false                // None are active by default
  }))
];

// Main Sidebar component that handles navigation and categories
export default function Sidebar({ selectedCategory, onCategoryChange }: SidebarProps) {
  return (
    // Sidebar container with fixed width, white background, and right border
    <div className="w-80 bg-white shadow-sm border-r border-gray-200">
      {/* Inner container with padding for all sidebar content */}
      <div className="p-6">
        {/* Dashboard title with small, uppercase, gray styling */}
        <div className="text-gray-400 text-xs uppercase tracking-wider mb-6">Dashboard</div>
        
        {/* Navigation Items Section */}
        <div className="space-y-1 mb-8">
          {/* Map through navigation items to create buttons */}
          {navigationItems.map((item) => (
            <button 
              key={item.id} // React key for efficient re-rendering
              type="button" // Explicit button type
              // Dynamic className based on whether item is selected
              className={`w-full text-left px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
                selectedCategory === item.id 
                  ? "bg-gray-900 text-white"       // Selected: dark background, white text
                  : "text-gray-700 hover:bg-gray-100"  // Unselected: gray text, light hover
              }`}
              // When clicked, call the callback function with item's id
              onClick={() => onCategoryChange(item.id)}
              aria-pressed={selectedCategory === item.id} // Accessibility state
            >
              {item.label}  {/* Display the navigation label */}
            </button>
          ))}
        </div>  
      </div>
    </div>
  );
}
