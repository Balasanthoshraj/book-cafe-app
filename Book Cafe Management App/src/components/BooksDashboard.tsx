import { useEffect } from "react";
import { BookOpen, TrendingUp, Package, Star, Search, Plus, ArrowLeft, Filter } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface BooksDashboardProps {
  onBack: () => void;
}

export default function BooksDashboard({ onBack }: BooksDashboardProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const inventory = [
    { title: "The Midnight Library", author: "Matt Haig", category: "Fiction", stock: 12, price: "$15.99" },
    { title: "Atomic Habits", author: "James Clear", category: "Self-Help", stock: 8, price: "$18.99" },
    { title: "Project Hail Mary", author: "Andy Weir", category: "Sci-Fi", stock: 5, price: "$16.99" },
    { title: "The Psychology of Money", author: "Morgan Housel", category: "Finance", stock: 15, price: "$14.99" },
  ];

  const categories = [
    { name: "Fiction", count: 145, trending: true },
    { name: "Self-Help", count: 89, trending: true },
    { name: "Sci-Fi", count: 67, trending: false },
    { name: "Biography", count: 54, trending: false },
    { name: "Finance", count: 43, trending: true },
    { name: "Mystery", count: 72, trending: false },
  ];

  const recentSales = [
    { title: "Atomic Habits", customer: "John Doe", time: "10 min ago", price: "$18.99" },
    { title: "The Midnight Library", customer: "Sarah Smith", time: "25 min ago", price: "$15.99" },
    { title: "Project Hail Mary", customer: "Mike Johnson", time: "1 hour ago", price: "$16.99" },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-neutral-950 to-purple-950" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative z-10 border-b border-neutral-800 bg-neutral-900/50 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Button 
                variant="ghost" 
                onClick={onBack}
                className="hover:bg-neutral-800"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <h1 className="text-2xl">Books Management</h1>
                </div>
                <p className="text-neutral-500">Manage inventory, categories & sales</p>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600">
              <Plus className="w-4 h-4 mr-2" />
              Add Book
            </Button>
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-neutral-900/50 backdrop-blur-xl border-neutral-800 hover:border-indigo-500/50 transition-all">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-white">
                <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-indigo-400" />
                </div>
                <span>Total Books</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl text-white mb-1">1,247</div>
              <p className="text-neutral-400">Across 6 categories</p>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900/50 backdrop-blur-xl border-neutral-800 hover:border-indigo-500/50 transition-all">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-white">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                </div>
                <span>Sales Today</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl text-white mb-1">23 books</div>
              <p className="text-green-400 flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                +15% from yesterday
              </p>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900/50 backdrop-blur-xl border-neutral-800 hover:border-indigo-500/50 transition-all">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-white">
                <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <Package className="w-5 h-5 text-red-400" />
                </div>
                <span>Low Stock Items</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl text-white mb-1">7 items</div>
              <p className="text-red-400">Need restock</p>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900/50 backdrop-blur-xl border-neutral-800 hover:border-indigo-500/50 transition-all">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-white">
                <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <Star className="w-5 h-5 text-yellow-400" />
                </div>
                <span>Top Seller</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl text-white mb-1">Atomic Habits</div>
              <p className="text-neutral-400">18 sold this week</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="inventory" className="space-y-6">
          <TabsList className="bg-neutral-900/50 backdrop-blur-xl border border-neutral-800">
            <TabsTrigger value="inventory">Inventory</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="sales">Recent Sales</TabsTrigger>
          </TabsList>

          <TabsContent value="inventory" className="space-y-4">
            <Card className="bg-neutral-900/50 backdrop-blur-xl border-neutral-800">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white">Book Inventory</CardTitle>
                    <CardDescription className="text-neutral-400">Manage your book collection</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-500" />
                      <Input 
                        placeholder="Search books..." 
                        className="pl-10 bg-neutral-800 border-neutral-700 text-white w-64"
                      />
                    </div>
                    <Button variant="outline" className="border-neutral-700 hover:bg-neutral-800">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {inventory.map((book) => (
                    <div 
                      key={book.title} 
                      className="flex items-center justify-between p-5 border border-neutral-800 rounded-xl bg-neutral-800/50 hover:bg-neutral-800 transition-all"
                    >
                      <div className="flex-1">
                        <div className="text-white mb-1">{book.title}</div>
                        <div className="text-neutral-400 mb-2">{book.author}</div>
                        <Badge 
                          variant="outline" 
                          className="bg-indigo-500/20 text-indigo-400 border-indigo-500/30"
                        >
                          {book.category}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="text-white mb-1">{book.price}</div>
                          <div className={`${book.stock < 10 ? "text-red-400" : "text-green-400"}`}>
                            Stock: {book.stock}
                          </div>
                        </div>
                        <Button size="sm" variant="outline" className="border-neutral-700 hover:bg-neutral-800">
                          Edit
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="categories" className="space-y-4">
            <Card className="bg-neutral-900/50 backdrop-blur-xl border-neutral-800">
              <CardHeader>
                <CardTitle className="text-white">Book Categories</CardTitle>
                <CardDescription className="text-neutral-400">Browse by category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categories.map((category) => (
                    <div
                      key={category.name}
                      className="p-6 border-2 border-neutral-800 rounded-xl bg-neutral-800/50 hover:border-indigo-500/50 hover:bg-neutral-800 transition-all cursor-pointer group"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="text-xl text-white">{category.name}</div>
                        {category.trending && (
                          <Badge className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-0">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            Trending
                          </Badge>
                        )}
                      </div>
                      <div className="text-neutral-400">{category.count} books</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sales">
            <Card className="bg-neutral-900/50 backdrop-blur-xl border-neutral-800">
              <CardHeader>
                <CardTitle className="text-white">Recent Sales</CardTitle>
                <CardDescription className="text-neutral-400">Latest book transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentSales.map((sale, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center justify-between p-5 border border-neutral-800 rounded-xl bg-neutral-800/50 hover:bg-neutral-800 transition-all"
                    >
                      <div className="flex items-center gap-4 flex-1">
                        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white">
                          {idx + 1}
                        </div>
                        <div className="flex-1">
                          <div className="text-white mb-1">{sale.title}</div>
                          <div className="text-neutral-400">{sale.customer}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-white mb-1">{sale.price}</div>
                        <div className="text-neutral-400">{sale.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
