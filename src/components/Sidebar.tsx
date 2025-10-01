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
        
        {/* Category Section */}
        <div>
          {/* Category section title */}
          <div className="text-gray-900 font-semibold mb-4 text-sm">Category</div>
          
          {/* Container for category items with spacing */}
          <div className="space-y-1">
            {/* Map through categories to create category items */}
            {categories.map((category, index) => (
              <div 
                key={index} // React key using array index
                // Dynamic styling based on category status
                className={`flex items-center justify-between py-2.5 px-4 rounded-md cursor-pointer ${
                  category.isActive 
                    ? "bg-gray-700 text-white"          // Active: dark background
                    : index === 0 
                      ? "bg-gray-100"                   // First item: light gray background
                      : "text-gray-700 hover:bg-gray-50"  // Others: hover effect
                }`}
              >
                {/* Category name with conditional styling */}
                <span className={`text-sm ${category.isActive ? 'font-medium' : ''}`}>
                  {category.name}
                </span>
                
                {/* Category count with conditional coloring */}
                <span className={`text-xs font-medium ${
                  category.isActive ? 'text-gray-300' : 'text-gray-500' // Lighter color if active
                }`}>
                  {category.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
