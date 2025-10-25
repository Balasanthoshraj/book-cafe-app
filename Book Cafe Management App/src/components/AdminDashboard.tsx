import { useEffect } from "react";
import { BarChart3, DollarSign, Users, TrendingUp, Calendar, Activity, ArrowLeft, Download } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Progress } from "./ui/progress";

interface AdminDashboardProps {
  onBack: () => void;
}

export default function AdminDashboard({ onBack }: AdminDashboardProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const revenueData = [
    { period: "Mon", cafe: 450, books: 320 },
    { period: "Tue", cafe: 520, books: 280 },
    { period: "Wed", cafe: 480, books: 410 },
    { period: "Thu", cafe: 610, books: 390 },
    { period: "Fri", cafe: 720, books: 560 },
    { period: "Sat", cafe: 890, books: 680 },
    { period: "Sun", cafe: 650, books: 520 },
  ];

  const staffMembers = [
    { name: "Alice Johnson", role: "Barista", shift: "Morning", status: "Active" },
    { name: "Bob Smith", role: "Book Manager", shift: "Full Day", status: "Active" },
    { name: "Carol Davis", role: "Cashier", shift: "Evening", status: "On Break" },
    { name: "David Lee", role: "Kitchen Staff", shift: "Morning", status: "Active" },
  ];

  const topProducts = [
    { name: "Cappuccino", category: "Cafe", sales: 156, revenue: "$702" },
    { name: "Atomic Habits", category: "Books", sales: 18, revenue: "$342" },
    { name: "Club Sandwich", category: "Cafe", sales: 45, revenue: "$382" },
    { name: "The Midnight Library", category: "Books", sales: 15, revenue: "$240" },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-neutral-950 to-blue-950" />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
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
                  <div className="w-10 h-10 bg-gradient-to-br from-slate-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <h1 className="text-2xl">Admin Dashboard</h1>
                </div>
                <p className="text-neutral-500">Analytics, reports & staff management</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="border-neutral-700 hover:bg-neutral-800">
                <Calendar className="w-4 h-4 mr-2" />
                This Week
              </Button>
              <Button className="bg-gradient-to-r from-slate-500 to-blue-500 hover:from-slate-600 hover:to-blue-600">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-neutral-900/50 backdrop-blur-xl border-neutral-800 hover:border-slate-500/50 transition-all">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-white">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-green-400" />
                </div>
                <span>Total Revenue</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl text-white mb-1">$8,547</div>
              <p className="text-green-400 flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                +18% this week
              </p>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900/50 backdrop-blur-xl border-neutral-800 hover:border-slate-500/50 transition-all">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-white">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Activity className="w-5 h-5 text-blue-400" />
                </div>
                <span>Total Orders</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl text-white mb-1">342</div>
              <p className="text-neutral-400">Last 7 days</p>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900/50 backdrop-blur-xl border-neutral-800 hover:border-slate-500/50 transition-all">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-white">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-purple-400" />
                </div>
                <span>Active Staff</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl text-white mb-1">12 / 15</div>
              <p className="text-neutral-400">3 on leave</p>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900/50 backdrop-blur-xl border-neutral-800 hover:border-slate-500/50 transition-all">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-white">
                <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-amber-400" />
                </div>
                <span>Growth Rate</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl text-white mb-1">+24%</div>
              <p className="text-green-400">vs last month</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-neutral-900/50 backdrop-blur-xl border border-neutral-800">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="staff">Staff</TabsTrigger>
            <TabsTrigger value="products">Top Products</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Revenue Chart */}
              <Card className="bg-neutral-900/50 backdrop-blur-xl border-neutral-800">
                <CardHeader>
                  <CardTitle className="text-white">Weekly Revenue</CardTitle>
                  <CardDescription className="text-neutral-400">Cafe vs Books performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {revenueData.map((day) => {
                      const total = day.cafe + day.books;
                      const cafePercentage = (day.cafe / total) * 100;
                      const booksPercentage = (day.books / total) * 100;
                      
                      return (
                        <div key={day.period} className="space-y-2">
                          <div className="flex items-center justify-between text-white">
                            <span className="text-neutral-400">{day.period}</span>
                            <span>${total}</span>
                          </div>
                          <div className="flex gap-2 h-3 rounded-full overflow-hidden bg-neutral-800">
                            <div
                              className="bg-gradient-to-r from-amber-500 to-orange-500 transition-all"
                              style={{ width: `${cafePercentage}%` }}
                              title={`Cafe: $${day.cafe}`}
                            />
                            <div
                              className="bg-gradient-to-r from-indigo-500 to-purple-500 transition-all"
                              style={{ width: `${booksPercentage}%` }}
                              title={`Books: $${day.books}`}
                            />
                          </div>
                        </div>
                      );
                    })}
                    <div className="flex gap-6 pt-4 border-t border-neutral-800">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500" />
                        <span className="text-neutral-400">Cafe</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
                        <span className="text-neutral-400">Books</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Performance Metrics */}
              <Card className="bg-neutral-900/50 backdrop-blur-xl border-neutral-800">
                <CardHeader>
                  <CardTitle className="text-white">Performance Metrics</CardTitle>
                  <CardDescription className="text-neutral-400">Key business indicators</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-neutral-400">Customer Satisfaction</span>
                      <span className="text-white">92%</span>
                    </div>
                    <Progress value={92} className="h-2 bg-neutral-800" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-neutral-400">Order Completion Rate</span>
                      <span className="text-white">98%</span>
                    </div>
                    <Progress value={98} className="h-2 bg-neutral-800" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-neutral-400">Staff Efficiency</span>
                      <span className="text-white">87%</span>
                    </div>
                    <Progress value={87} className="h-2 bg-neutral-800" />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-neutral-400">Inventory Turnover</span>
                      <span className="text-white">78%</span>
                    </div>
                    <Progress value={78} className="h-2 bg-neutral-800" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="staff" className="space-y-4">
            <Card className="bg-neutral-900/50 backdrop-blur-xl border-neutral-800">
              <CardHeader>
                <CardTitle className="text-white">Staff Members</CardTitle>
                <CardDescription className="text-neutral-400">Current staff status and shifts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {staffMembers.map((staff) => (
                    <div 
                      key={staff.name} 
                      className="flex items-center justify-between p-5 border border-neutral-800 rounded-xl bg-neutral-800/50 hover:bg-neutral-800 transition-all"
                    >
                      <div className="flex items-center gap-4 flex-1">
                        <div className="w-12 h-12 bg-gradient-to-br from-slate-500 to-blue-500 rounded-full flex items-center justify-center text-white">
                          {staff.name.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <div className="text-white mb-1">{staff.name}</div>
                          <div className="text-neutral-400">{staff.role}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="text-white mb-1">{staff.shift}</div>
                          <Badge 
                            variant={staff.status === "Active" ? "default" : "secondary"}
                            className={staff.status === "Active" ? "bg-green-500/20 text-green-400 border-green-500/30" : "bg-amber-500/20 text-amber-400 border-amber-500/30"}
                          >
                            {staff.status}
                          </Badge>
                        </div>
                        <Button size="sm" variant="outline" className="border-neutral-700 hover:bg-neutral-800">
                          View
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products">
            <Card className="bg-neutral-900/50 backdrop-blur-xl border-neutral-800">
              <CardHeader>
                <CardTitle className="text-white">Top Performing Products</CardTitle>
                <CardDescription className="text-neutral-400">Best sellers this week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topProducts.map((product, idx) => (
                    <div 
                      key={product.name} 
                      className="flex items-center justify-between p-5 border border-neutral-800 rounded-xl bg-neutral-800/50 hover:bg-neutral-800 transition-all"
                    >
                      <div className="flex items-center gap-4 flex-1">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white ${
                          idx === 0 ? "bg-gradient-to-br from-yellow-500 to-amber-500" :
                          idx === 1 ? "bg-gradient-to-br from-slate-500 to-gray-500" :
                          idx === 2 ? "bg-gradient-to-br from-orange-500 to-red-500" :
                          "bg-gradient-to-br from-blue-500 to-indigo-500"
                        }`}>
                          #{idx + 1}
                        </div>
                        <div className="flex-1">
                          <div className="text-white mb-1">{product.name}</div>
                          <Badge 
                            variant="outline" 
                            className={product.category === "Cafe" ? 
                              "bg-amber-500/20 text-amber-400 border-amber-500/30" : 
                              "bg-indigo-500/20 text-indigo-400 border-indigo-500/30"
                            }
                          >
                            {product.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-white mb-1">{product.revenue}</div>
                        <div className="text-neutral-400">{product.sales} sales</div>
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
