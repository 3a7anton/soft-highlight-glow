import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, Star, Heart, Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Product data - properly scoped at module level
const products = [
  {
    id: 1,
    name: "Soft Glow LED Strip",
    description: "Premium LED strip with warm white glow, perfect for ambient lighting",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop&auto=format",
    category: "LED Strips",
    rating: 4.8,
    reviews: 124,
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: "RGB Color Changing Kit",
    description: "16 million color options with smart app control and music sync",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop&auto=format",
    category: "RGB Kits",
    rating: 4.6,
    reviews: 89,
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: "Smart Controller Hub",
    description: "Central control hub for all your LED lighting systems",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=400&h=400&fit=crop&auto=format",
    category: "Controllers",
    rating: 4.9,
    reviews: 156,
    inStock: true,
    featured: false
  },
  {
    id: 4,
    name: "Wireless Dimmer Switch",
    description: "Touch-sensitive wireless dimmer with memory function",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=400&fit=crop&auto=format",
    category: "Accessories",
    rating: 4.7,
    reviews: 73,
    inStock: true,
    featured: false
  },
  {
    id: 5,
    name: "Outdoor Weather Strip",
    description: "Waterproof LED strip perfect for outdoor installations",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=400&fit=crop&auto=format",
    category: "LED Strips",
    rating: 4.5,
    reviews: 45,
    inStock: false,
    featured: false
  },
  {
    id: 6,
    name: "Motion Sensor Light",
    description: "Auto-activate LED strip with built-in motion detection",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1562113530-57ba9cea8dc7?w=400&h=400&fit=crop&auto=format",
    category: "Smart Sensors",
    rating: 4.4,
    reviews: 67,
    inStock: true,
    featured: true
  }
];

const categories = ["All", "LED Strips", "RGB Kits", "Controllers", "Accessories", "Smart Sensors"];

export default function Shop() {
  const heroRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [sortBy, setSortBy] = React.useState("featured");
  const [searchTerm, setSearchTerm] = React.useState("");

  useEffect(() => {
    // Hero section animation
    if (heroRef.current) {
      gsap.fromTo(heroRef.current.children, 
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out"
        }
      );
    }

    // Products grid animation
    if (productsRef.current) {
      gsap.fromTo(productsRef.current.children,
        {
          opacity: 0,
          y: 50,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: productsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  // Filter and sort products
  const filteredProducts = React.useMemo(() => {
    let filtered = products.filter(product => {
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "featured":
        default:
          return b.featured ? 1 : -1;
      }
    });

    return filtered;
  }, [selectedCategory, sortBy, searchTerm]);

  const handleAddToCart = (product: typeof products[0]) => {
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleAddToWishlist = (product: typeof products[0]) => {
    toast({
      title: "Added to Wishlist",
      description: `${product.name} has been added to your wishlist.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10"></div>
        <div className="container mx-auto relative z-10" ref={heroRef}>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Lighting Store
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 md:mb-8 leading-relaxed px-2">
              Transform your space with premium LED lighting solutions
            </p>
            <div className="flex flex-col gap-4 justify-center items-center max-w-lg mx-auto">
              <div className="relative w-full">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                />
              </div>
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 w-full sm:w-auto">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-6 md:py-8 px-4 border-b border-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-col gap-4 md:gap-6">
            {/* Category Filter */}
            <div className="order-1">
              <h3 className="text-white text-sm font-medium mb-3 md:hidden">Categories:</h3>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category 
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-xs sm:text-sm"
                      : "border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 text-xs sm:text-sm"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Sort Options */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 order-2">
              <div className="flex items-center gap-4">
                <span className="text-gray-300 text-sm">Sort by:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40 bg-gray-800/50 border-gray-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-600">
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="text-gray-400 text-sm">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4 text-white">
              {selectedCategory === "All" ? "All Products" : selectedCategory}
            </h2>
          </div>

          <div 
            ref={productsRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
          >
            {filteredProducts.map((product) => (
              <Card key={product.id} className="bg-gray-900/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 group">
                <CardHeader className="relative p-4">
                  {product.featured && (
                    <Badge className="absolute top-2 right-2 bg-gradient-to-r from-purple-600 to-blue-600 text-xs">
                      Featured
                    </Badge>
                  )}
                  {!product.inStock && (
                    <Badge variant="destructive" className="absolute top-2 left-2 text-xs">
                      Out of Stock
                    </Badge>
                  )}
                  <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardTitle className="text-white group-hover:text-purple-400 transition-colors text-lg md:text-xl leading-tight">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-4 pt-0">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 md:h-4 md:w-4 fill-yellow-500 text-yellow-500" />
                      <span className="text-yellow-500 text-xs md:text-sm font-medium">{product.rating}</span>
                    </div>
                    <span className="text-gray-500 text-xs md:text-sm">({product.reviews} reviews)</span>
                  </div>
                  <Separator className="bg-gray-700 mb-3" />
                  <div className="flex items-center justify-between">
                    <span className="text-xl md:text-2xl font-bold text-white">
                      ${product.price}
                    </span>
                    <Badge variant="secondary" className="bg-gray-700 text-gray-300 text-xs">
                      {product.category}
                    </Badge>
                  </div>
                </CardContent>

                <CardFooter className="flex flex-col sm:flex-row gap-2 p-4 pt-0">
                  <Button 
                    onClick={() => handleAddToCart(product)}
                    disabled={!product.inStock}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 text-sm"
                  >
                    <ShoppingCart className="mr-2 h-3 w-3 md:h-4 md:w-4" />
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleAddToWishlist(product)}
                    className="border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 w-full sm:w-auto"
                  >
                    <Heart className="h-3 w-3 md:h-4 md:w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12 md:py-16">
              <p className="text-gray-400 text-base md:text-lg mb-6">No products found matching your criteria.</p>
              <Button 
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchTerm("");
                }}
                variant="outline"
                className="border-gray-600 text-gray-300 hover:text-white hover:border-gray-500"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
