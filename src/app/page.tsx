// This tells Next.js that this component runs on the client side (not server-side)
"use client";

// Import React's useState hook for managing component state
import { useState } from "react";
// Import our custom components using Next.js path alias
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import InventoryTable from "@/components/InventoryTable";

// TypeScript interface that defines the structure of an inventory item
interface InventoryItem {
  id: number;                 // Unique identifier for each item
  name: string;               // Display name of the vegetable
  lastEdit: string;           // Date when item was last edited
  editedBy: string;           // Name of person who last edited
  stock: number;              // Current stock quantity
  previousStock: number;      // Previous month's stock quantity
  needsStockCheck: boolean;   // Whether item needs stock verification
}

// Extended array of sample inventory data (increased from 8 to 20 items)
const initialInventory: InventoryItem[] = [

  // Additional items 9-20 with varied stock status for more realistic data
  { id: 1, name: "Tomatoes", lastEdit: "02/09/2025", editedBy: "Admin", stock: 35, previousStock: 40, needsStockCheck: false },
  { id: 2, name: "Carrots", lastEdit: "01/09/2025", editedBy: "Manager", stock: 28, previousStock: 30, needsStockCheck: false },
  { id: 3, name: "Broccoli", lastEdit: "", editedBy: "", stock: 0, previousStock: 25, needsStockCheck: true },
  { id: 4, name: "Spinach", lastEdit: "04/09/2025", editedBy: "Name", stock: 42, previousStock: 45, needsStockCheck: false },
  { id: 5, name: "Bell Peppers", lastEdit: "", editedBy: "", stock: 0, previousStock: 60, needsStockCheck: true },
  { id: 6, name: "Cucumbers", lastEdit: "03/09/2025", editedBy: "Admin", stock: 18, previousStock: 22, needsStockCheck: false },
  { id: 7, name: "Lettuce", lastEdit: "", editedBy: "", stock: 0, previousStock: 35, needsStockCheck: true },
  { id: 8, name: "Onions", lastEdit: "02/09/2025", editedBy: "Manager", stock: 67, previousStock: 70, needsStockCheck: false },
  { id: 9, name: "Potatoes", lastEdit: "01/09/2025", editedBy: "Name", stock: 89, previousStock: 95, needsStockCheck: false },
  { id: 10, name: "Zucchini", lastEdit: "", editedBy: "", stock: 0, previousStock: 28, needsStockCheck: true },
  { id: 11, name: "Cauliflower", lastEdit: "04/09/2025", editedBy: "Admin", stock: 15, previousStock: 20, needsStockCheck: false },
  { id: 12, name: "Green Beans", lastEdit: "", editedBy: "", stock: 0, previousStock: 38, needsStockCheck: true },
];

// Main component that serves as the home page of the application
export default function Home() {
  // State to store the complete inventory list - useState manages this data
  const [inventory] = useState<InventoryItem[]>(initialInventory);
  
  // State to store the current search term entered by user
  const [searchTerm, setSearchTerm] = useState("");
  
  // State to track which navigation category is currently selected
  const [selectedCategory, setSelectedCategory] = useState("Manage Inventory");

  return (
    // Main container with full screen height, light gray background, and sans-serif font
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header component with user name and role props */}
      <Header userName="Name" userRole="Admin" />
      
      {/* Main layout container using flexbox, height calculated to fill screen minus header */}
      <div className="flex h-[calc(100vh-65px)]">
        {/* Sidebar component with current selection and callback function */}
        <Sidebar 
          selectedCategory={selectedCategory}           // Current selected nav item
          onCategoryChange={setSelectedCategory}        // Function to update selection
        />
        
        {/* Main content area component with inventory data and search */}
        <InventoryTable 
          inventory={inventory}                         // Complete inventory data
          searchTerm={searchTerm}                      // Current search filter
          onSearchChange={setSearchTerm}               // Function to update search
        />
      </div>
    </div>
  );
}
