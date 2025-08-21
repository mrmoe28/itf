"use client";
import { Plus, MoreHorizontal, Calendar, MessageSquare, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/Sidebar";

interface Task {
  id: number;
  title: string;
  description: string;
  priority: string;
  date: string;
  assignees: Array<{ name: string; avatar: string }>;
  comments: number;
  attachments: number;
  progress?: number;
}

// Sample task data matching the reference design
const tasks = {
  todo: [
    {
      id: 1,
      title: "New Task",
      description: "Involves creating and assigning a new task within the project management system. The...",
      priority: "Medium",
      date: "Sep 09, 2024",
      assignees: [{ name: "User", avatar: "U" }],
      comments: 0,
      attachments: 0
    }
  ],
  inProgress: [
    {
      id: 2,
      title: "Planning meeting for second option of the dashboard",
      description: "Focus on strategizing and outlining the development of the second option for the dashboard...",
      priority: "Medium",
      date: "Sep 09, 2024",
      assignees: [{ name: "User", avatar: "U" }, { name: "Team", avatar: "T" }],
      comments: 2,
      attachments: 7
    },
    {
      id: 3,
      title: "Finish the ideation",
      description: "The team will conclude the ideation phase by finalizing and refining concepts that have been d...",
      priority: "High",
      date: "Sep 19, 2024",
      assignees: [{ name: "User", avatar: "U" }],
      comments: 12,
      attachments: 34,
      progress: 50
    },
    {
      id: 4,
      title: "Preparation low - fidelity for mobile",
      description: "Involves creating low-fidelity wireframes specifically for the mobile version of the project...",
      priority: "Low",
      date: "Sep 16, 2024",
      assignees: [{ name: "Team", avatar: "T" }],
      comments: 0,
      attachments: 0
    }
  ],
  inReview: [
    {
      id: 5,
      title: "Business model canvas of product",
      description: "Developing a comprehensive Business Model Canvas for the product, outlining the key com...",
      priority: "Low",
      date: "Sep 01, 2024",
      assignees: [{ name: "User", avatar: "U" }, { name: "Team", avatar: "T" }],
      comments: 0,
      attachments: 0
    }
  ]
};

const priorityColors: Record<string, string> = {
  Low: "bg-gray-500",
  Medium: "bg-yellow-500",
  High: "bg-red-500"
};

function TaskCard({ task }: { task: Task }) {
  return (
    <div className="task-card group cursor-pointer">
      {/* Priority and Menu */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full shadow-sm ${priorityColors[task.priority]} group-hover:scale-110 transition-transform duration-200`} />
          <span className="text-xs font-medium text-white/60 tracking-wide uppercase">{task.priority}</span>
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          className="opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/10 rounded-lg"
        >
          <MoreHorizontal className="h-4 w-4 text-white/70" />
        </Button>
      </div>

      {/* Task Title */}
      <h3 className="font-semibold text-white mb-3 line-clamp-2 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-200">
        {task.title}
      </h3>
      
      {/* Task Description */}
      <p className="text-xs text-white/50 mb-4 line-clamp-3 leading-relaxed">
        {task.description}
      </p>

      {/* Progress Bar */}
      {task.progress && (
        <div className="mb-4">
          <div className="flex justify-between text-xs mb-2">
            <span className="text-white/60 font-medium">Progress</span>
            <span className="text-white/80 font-semibold">{task.progress}%</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden backdrop-blur-sm">
            <div 
              className="modern-progress h-2 transition-all duration-500 ease-out"
              style={{ width: `${task.progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-white/10">
        <div className="flex items-center gap-2">
          <Calendar className="h-3 w-3 text-white/40" />
          <span className="text-xs text-white/50 font-medium">{task.date}</span>
        </div>
        
        <div className="flex items-center gap-4">
          {task.comments > 0 && (
            <div className="flex items-center gap-1.5">
              <MessageSquare className="h-3 w-3 text-white/40" />
              <span className="text-xs text-white/60 font-medium">{task.comments}</span>
            </div>
          )}
          {task.attachments > 0 && (
            <div className="flex items-center gap-1.5">
              <Paperclip className="h-3 w-3 text-white/40" />
              <span className="text-xs text-white/60 font-medium">{task.attachments}</span>
            </div>
          )}
          
          <div className="flex -space-x-1.5">
            {task.assignees.map((assignee, index: number) => (
              <div
                key={index}
                className="w-7 h-7 rounded-full bg-gradient-to-br from-primary/80 to-primary text-white text-xs flex items-center justify-center font-bold border-2 border-white/20 shadow-lg backdrop-blur-sm hover:scale-110 transition-transform duration-200"
              >
                {assignee.avatar}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function KanbanColumn({ title, tasks, onAddTask }: { title: string; tasks: Task[]; onAddTask: () => void }) {
  return (
    <div className="kanban-column p-6 min-w-80">
      {/* Column Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <h2 className="font-semibold text-white text-base tracking-wide">{title}</h2>
          <span className="text-xs font-bold text-white/80 bg-white/20 px-2.5 py-1 rounded-full backdrop-blur-sm border border-white/20">
            {tasks.length}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onAddTask}
            className="hover:bg-white/10 rounded-lg transition-all duration-200 hover:scale-110"
          >
            <Plus className="h-4 w-4 text-white/70 hover:text-white" />
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            className="hover:bg-white/10 rounded-lg transition-all duration-200 hover:scale-110"
          >
            <MoreHorizontal className="h-4 w-4 text-white/70 hover:text-white" />
          </Button>
        </div>
      </div>

      {/* Tasks */}
      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
        
        {/* Add New Task Button */}
        <Button 
          variant="ghost" 
          className="w-full justify-start text-white/50 hover:text-white/80 hover:bg-white/5 rounded-xl py-4 border-2 border-dashed border-white/20 hover:border-white/40 transition-all duration-300 group"
          onClick={onAddTask}
        >
          <Plus className="h-4 w-4 mr-3 group-hover:scale-110 transition-transform duration-200" />
          <span className="font-medium">Add New Task</span>
        </Button>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const handleAddTask = () => {
    // TODO: Implement add task functionality
    console.log("Add task clicked");
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 overflow-hidden">
        {/* Header */}
        <header className="border-b border-white/10 p-8 relative">
          <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent tracking-tight">
                Monicca - Saas Product
              </h1>
              <p className="text-sm text-white/60 font-medium mt-1 tracking-wide">Project management workspace</p>
            </div>
            <div className="flex items-center gap-4">
              {/* Team Avatars */}
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/80 to-primary text-white text-sm flex items-center justify-center font-bold border-2 border-white/20 shadow-lg backdrop-blur-sm hover:scale-110 hover:z-10 transition-all duration-200"
                  >
                    {i}
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full bg-white/20 text-white/80 text-sm flex items-center justify-center font-bold border-2 border-white/20 backdrop-blur-sm hover:scale-110 hover:z-10 transition-all duration-200">
                  +3
                </div>
              </div>
              
              {/* Invite Button */}
              <Button className="glass-button text-white font-semibold px-6 py-2.5 tracking-wide hover:scale-105 transition-all duration-300">
                Invite Member
              </Button>
            </div>
          </div>
        </header>

        {/* Kanban Board */}
        <div className="flex overflow-x-auto h-[calc(100vh-73px)]">
          <KanbanColumn 
            title="To Do" 
            tasks={tasks.todo} 
            onAddTask={handleAddTask} 
          />
          <KanbanColumn 
            title="In Progress" 
            tasks={tasks.inProgress} 
            onAddTask={handleAddTask} 
          />
          <KanbanColumn 
            title="In Review" 
            tasks={tasks.inReview} 
            onAddTask={handleAddTask} 
          />
        </div>
      </main>
    </div>
  );
}
