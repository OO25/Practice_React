// TypeScript interface defining structure of individual inventory items
interface InventoryItem {
  id: number;                 // Unique identifier for each inventory item
  name: string;               // Display name of the product
  lastEdit: string;           // Date when item was last modified
  editedBy: string;           // Name of user who made the last edit
  stock: number;              // Current available stock quantity
  previousStock: number;      // Stock quantity from previous period
  needsStockCheck: boolean;   // Flag indicating if stock verification is needed
}

// TypeScript interface defining props accepted by InventoryTable component
interface InventoryTableProps {
  inventory: InventoryItem[];               // Array of all inventory items
  searchTerm: string;                       // Current search filter text
  onSearchChange: (term: string) => void;   // Callback function when search changes
}

// Main InventoryTable component that displays the product inventory interface
export default function InventoryTable({ inventory, searchTerm, onSearchChange }: InventoryTableProps) {
  // Filter inventory items based on search term (case-insensitive)
  const filteredInventory = inventory.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    // Main container taking remaining space with light gray background and padding
    <div className="flex-1 bg-gray-50 p-8 overflow-y-auto">
      {/* Top Section - Page header with title, branch info, and controls */}
      <div className="flex items-center justify-between mb-8">
        
        {/* Left side - Title and branch information */}
        <div className="flex items-center gap-8">
          {/* Main page title */}
          <h1 className="text-2xl font-semibold text-gray-900">Manage Inventory</h1>
          
          {/* Branch and date information */}
          <div className="flex items-center gap-6 text-sm text-gray-500">
            {/* Current branch */}
            <span className="font-medium">Branch #1</span>
            {/* Current period */}
            <span className="font-medium">Sep 2025</span>
          </div>
        </div>
        
        {/* Right side - Search and action buttons */}
        <div className="flex items-center gap-4">
          
          {/* Search input with icon */}
          <div className="relative">
            {/* Text input for searching inventory items */}
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 pr-4 py-2.5 w-64 border border-gray-300 rounded-lg text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {/* Search icon positioned inside input */}
            <svg 
              className="w-4 h-4 absolute left-3 top-3.5 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          
          {/* Scan button with barcode icon */}
          <button 
            className="bg-gray-900 text-white px-4 py-2.5 rounded-lg text-sm font-medium flex items-center gap-3 hover:bg-gray-800 transition-colors"
            type="button"
            aria-label="Scan barcode"
          >
            {/* Button text */}
            <span>Scan</span>
            {/* Barcode-style icon made with div elements */}
            <div className="flex flex-col gap-1">
              <div className="w-4 h-0.5 bg-white rounded-full"></div>
              <div className="w-4 h-0.5 bg-white rounded-full"></div>
              <div className="w-4 h-0.5 bg-white rounded-full"></div>
              <div className="w-4 h-0.5 bg-white rounded-full"></div>
            </div>
          </button>
        </div>
      </div>

      {/* Vegetables Section - Main content card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        
        {/* Card header with title and action button */}
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            {/* Section title with dynamic count of filtered items */}
            <h2 className="text-lg font-semibold text-gray-900">
              Vegetables ({filteredInventory.length})
            </h2>
            {/* Action button for showing stock-checked items */}
            <button 
              className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-600 transition-colors"
              type="button"
              aria-label="Show stock checked items"
            >
              Show stock checked (10)
            </button>
          </div>
        </div>
        
        {/* Inventory Table Container */}
        <div className="overflow-hidden">  {/* Prevents horizontal overflow */}
          {/* Table rows container with divider lines */}
          <div className="divide-y divide-gray-200">
            {/* Map through filtered inventory to create table rows */}
            {filteredInventory.map((item, index) => (
              <div 
                key={item.id}
                className={`flex items-center px-6 py-4 hover:bg-gray-50 transition-colors ${
                  index === 0 ? 'bg-gray-50/50' : ''
                }`}
              >
                
                {/* Product Image Placeholder */}
                <div className="w-12 flex-shrink-0">
                  {/* Gray placeholder rectangle for product image */}
                  <div className="w-10 h-10 bg-gray-200 rounded-lg"></div>
                </div>
                
                {/* Product Info Section */}
                <div className="flex-1 min-w-0 px-4">
                  <div className="flex items-center gap-3">
                    {/* Product name display */}
                    <span className="text-gray-900 font-medium text-base">{item.name}</span>
                    
                    {/* Edit button with pencil icon */}
                    <button 
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                      aria-label={`Edit ${item.name}`}
                      type="button"
                    >
                      {/* SVG pencil icon for editing */}
                      <svg 
                        className="w-4 h-4" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Conditional display of last edit info */}
                  {item.lastEdit && (
                    <div className="text-xs text-gray-500 mt-1">
                      Last Edit {item.lastEdit} by {item.editedBy}
                    </div>
                  )}
                </div>
                
                {/* Stock Info Section - Center column */}
                <div className="flex-1 text-center px-4">
                  {/* Conditional display based on stock check status */}
                  {item.needsStockCheck ? (
                    <span className="text-red-500 text-sm font-medium">
                      Needs stock check for this month
                    </span>
                  ) : (
                    <span className="text-2xl font-bold text-gray-900">{item.stock}</span>
                  )}
                </div>
                
                {/* Previous Stock Section - Right column */}
                <div className="w-48 text-right px-4">
                  <div className="text-xs text-gray-500">
                    {/* Previous month stock information */}
                    Previous month stock: <span className="font-medium">{item.previousStock} units</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End of main container */}
    </div>
  );
}
