import { useEffect } from "react";
import { Coffee, TrendingUp, Users, ShoppingBag, Clock, DollarSign, ArrowLeft, Plus, Search } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface CafeDashboardProps {
  onBack: () => void;
}

export default function CafeDashboard({ onBack }: CafeDashboardProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const activeOrders = [
    { id: "001", table: "Table 5", items: ["Cappuccino", "Croissant"], status: "preparing", time: "5 min" },
    { id: "002", table: "Table 2", items: ["Latte", "Muffin"], status: "ready", time: "2 min" },
    { id: "003", table: "Table 8", items: ["Espresso", "Sandwich"], status: "preparing", time: "8 min" },
  ];

  const menuItems = [
    { name: "Cappuccino", category: "Hot Drinks", price: "$4.50", stock: "Available" },
    { name: "Iced Latte", category: "Cold Drinks", price: "$5.00", stock: "Available" },
    { name: "Croissant", category: "Pastries", price: "$3.50", stock: "Low Stock" },
    { name: "Club Sandwich", category: "Food", price: "$8.50", stock: "Available" },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950 via-neutral-950 to-orange-950" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
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
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <Coffee className="w-5 h-5 text-white" />
                  </div>
                  <h1 className="text-2xl">Cafe Management</h1>
                </div>
                <p className="text-neutral-500">Manage orders, menu & tables</p>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600">
              <Plus className="w-4 h-4 mr-2" />
              New Order
            </Button>
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-neutral-900/50 backdrop-blur-xl border-neutral-800 hover:border-amber-500/50 transition-all">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-white">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-green-400" />
                </div>
                <span>Today's Revenue</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl text-white mb-1">$1,245</div>
              <p className="text-green-400 flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                +12% from yesterday
              </p>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900/50 backdrop-blur-xl border-neutral-800 hover:border-amber-500/50 transition-all">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-white">
                <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-amber-400" />
                </div>
                <span>Active Orders</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl text-white mb-1">12</div>
              <p className="text-neutral-400">3 ready to serve</p>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900/50 backdrop-blur-xl border-neutral-800 hover:border-amber-500/50 transition-all">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-white">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-400" />
                </div>
                <span>Tables Occupied</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl text-white mb-1">8 / 15</div>
              <p className="text-neutral-400">7 tables available</p>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900/50 backdrop-blur-xl border-neutral-800 hover:border-amber-500/50 transition-all">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-white">
                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <Coffee className="w-5 h-5 text-orange-400" />
                </div>
                <span>Popular Item</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl text-white mb-1">Cappuccino</div>
              <p className="text-neutral-400">34 orders today</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="bg-neutral-900/50 backdrop-blur-xl border border-neutral-800">
            <TabsTrigger value="orders">Active Orders</TabsTrigger>
            <TabsTrigger value="menu">Menu Items</TabsTrigger>
            <TabsTrigger value="tables">Table Status</TabsTrigger>
          </TabsList>

          <TabsContent value="orders" className="space-y-4">
            <Card className="bg-neutral-900/50 backdrop-blur-xl border-neutral-800">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white">Active Orders</CardTitle>
                    <CardDescription className="text-neutral-400">Current orders being prepared</CardDescription>
                  </div>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-500" />
                    <Input 
                      placeholder="Search orders..." 
                      className="pl-10 bg-neutral-800 border-neutral-700 text-white w-64"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {activeOrders.map((order) => (
                    <div 
                      key={order.id} 
                      className="flex items-center justify-between p-5 border border-neutral-800 rounded-xl bg-neutral-800/50 hover:bg-neutral-800 transition-all"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-white">Order #{order.id}</span>
                          <Badge 
                            variant={order.status === "ready" ? "default" : "secondary"}
                            className={order.status === "ready" ? "bg-green-500/20 text-green-400 border-green-500/30" : "bg-amber-500/20 text-amber-400 border-amber-500/30"}
                          >
                            {order.status}
                          </Badge>
                        </div>
                        <div className="text-neutral-400">{order.table}</div>
                        <div className="text-white">{order.items.join(", ")}</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-neutral-400">
                          <Clock className="w-4 h-4" />
                          {order.time}
                        </div>
                        <Button 
                          size="sm" 
                          className={order.status === "ready" ? "bg-green-500 hover:bg-green-600" : "bg-neutral-700 hover:bg-neutral-600"}
                        >
                          {order.status === "ready" ? "Serve" : "View"}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="menu" className="space-y-4">
            <Card className="bg-neutral-900/50 backdrop-blur-xl border-neutral-800">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white">Menu Items</CardTitle>
                    <CardDescription className="text-neutral-400">Manage your cafe menu and inventory</CardDescription>
                  </div>
                  <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Item
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {menuItems.map((item) => (
                    <div 
                      key={item.name} 
                      className="flex items-center justify-between p-5 border border-neutral-800 rounded-xl bg-neutral-800/50 hover:bg-neutral-800 transition-all"
                    >
                      <div className="flex-1">
                        <div className="text-white mb-1">{item.name}</div>
                        <div className="text-neutral-400">{item.category}</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-white">{item.price}</span>
                        <Badge 
                          variant={item.stock === "Low Stock" ? "destructive" : "outline"}
                          className={item.stock === "Low Stock" ? "bg-red-500/20 text-red-400 border-red-500/30" : "bg-green-500/20 text-green-400 border-green-500/30"}
                        >
                          {item.stock}
                        </Badge>
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

          <TabsContent value="tables">
            <Card className="bg-neutral-900/50 backdrop-blur-xl border-neutral-800">
              <CardHeader>
                <CardTitle className="text-white">Table Status</CardTitle>
                <CardDescription className="text-neutral-400">Real-time table availability</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((num) => {
                    const isOccupied = num <= 8;
                    return (
                      <div
                        key={num}
                        className={`p-6 rounded-xl border-2 text-center cursor-pointer transition-all hover:scale-105 ${
                          isOccupied
                            ? "bg-amber-500/10 border-amber-500/50 hover:bg-amber-500/20"
                            : "bg-green-500/10 border-green-500/50 hover:bg-green-500/20"
                        }`}
                      >
                        <div className="text-white mb-1">Table {num}</div>
                        <div className={isOccupied ? "text-amber-400" : "text-green-400"}>
                          {isOccupied ? "Occupied" : "Available"}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
