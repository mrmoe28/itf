"use client";
import AppShell from "@/components/AppShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, CheckSquare, AlertTriangle, Sun, Battery, Zap } from "lucide-react";

export default function Dashboard() {
  const stats = [
    { 
      title: "Active Jobs", 
      value: "0", 
      icon: Briefcase, 
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 border-blue-200"
    },
    { 
      title: "In Progress", 
      value: "0", 
      icon: CheckSquare, 
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50 border-amber-200"
    },
    { 
      title: "Blocked", 
      value: "0", 
      icon: AlertTriangle, 
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50 border-red-200"
    }
  ];

  return (
    <AppShell title="Dashboard">
      {/* Welcome Section */}
      <div className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 border border-orange-200/50">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg">
            <Sun className="h-8 w-8 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Welcome to ITF Solar CRM</h2>
            <p className="text-gray-600">Manage your solar installation projects efficiently</p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        {stats.map(({ title, value, icon: Icon, color, bgColor }) => (
          <Card key={title} className={`card-float ${bgColor} transition-all duration-200 hover:shadow-xl`}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-700">{title}</CardTitle>
                <div className={`p-2 rounded-lg bg-gradient-to-r ${color} shadow-md`}>
                  <Icon className="h-4 w-4 text-white" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-800">{value}</div>
              <p className="text-xs text-gray-500 mt-1">projects</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Main Content Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Jobs */}
        <Card className="card-float bg-white/80 backdrop-blur-sm border border-orange-200/50">
          <CardHeader className="border-b border-orange-100/50 bg-gradient-to-r from-amber-50/50 to-orange-50/50">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-r from-amber-400 to-orange-500">
                <Briefcase className="h-5 w-5 text-white" />
              </div>
              <CardTitle className="text-lg">Recent Jobs</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="p-4 rounded-full bg-amber-50 mb-4">
                <Briefcase className="h-8 w-8 text-amber-500" />
              </div>
              <p className="text-gray-500 mb-2">No jobs yet</p>
              <p className="text-sm text-gray-400">Start by creating your first solar installation project</p>
            </div>
          </CardContent>
        </Card>

        {/* My Tasks */}
        <Card className="card-float bg-white/80 backdrop-blur-sm border border-orange-200/50">
          <CardHeader className="border-b border-orange-100/50 bg-gradient-to-r from-amber-50/50 to-orange-50/50">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-r from-amber-400 to-orange-500">
                <CheckSquare className="h-5 w-5 text-white" />
              </div>
              <CardTitle className="text-lg">My Tasks</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="p-4 rounded-full bg-amber-50 mb-4">
                <CheckSquare className="h-8 w-8 text-amber-500" />
              </div>
              <p className="text-gray-500 mb-2">No tasks yet</p>
              <p className="text-sm text-gray-400">Tasks will appear here once jobs are created</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Quick Actions - Future Enhancement */}
      <section className="mt-8">
        <Card className="card-float bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50 border border-orange-200/50">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-r from-amber-400 to-orange-500">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center p-4 rounded-lg bg-white/60 backdrop-blur-sm border border-orange-200/30 hover:bg-white/80 transition-all duration-200 cursor-pointer">
                <Briefcase className="h-8 w-8 text-amber-600 mb-2" />
                <span className="text-sm font-medium text-gray-700">New Job</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-white/60 backdrop-blur-sm border border-orange-200/30 hover:bg-white/80 transition-all duration-200 cursor-pointer">
                <CheckSquare className="h-8 w-8 text-amber-600 mb-2" />
                <span className="text-sm font-medium text-gray-700">Add Task</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-white/60 backdrop-blur-sm border border-orange-200/30 hover:bg-white/80 transition-all duration-200 cursor-pointer">
                <Sun className="h-8 w-8 text-amber-600 mb-2" />
                <span className="text-sm font-medium text-gray-700">Site Survey</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-white/60 backdrop-blur-sm border border-orange-200/30 hover:bg-white/80 transition-all duration-200 cursor-pointer">
                <Battery className="h-8 w-8 text-amber-600 mb-2" />
                <span className="text-sm font-medium text-gray-700">Inventory</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </AppShell>
  );
}
