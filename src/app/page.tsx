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
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${priorityColors[task.priority]}`} />
          <span className="text-xs text-muted-foreground">{task.priority}</span>
        </div>
        <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>

      <h3 className="font-medium text-foreground mb-2 line-clamp-2">
        {task.title}
      </h3>
      
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {task.description}
      </p>

      {task.progress && (
        <div className="mb-4">
          <div className="flex justify-between text-xs text-muted-foreground mb-1">
            <span>Progress</span>
            <span>{task.progress}%</span>
          </div>
          <div className="w-full bg-accent rounded-full h-1.5">
            <div 
              className="bg-primary h-1.5 rounded-full transition-all"
              style={{ width: `${task.progress}%` }}
            />
          </div>
        </div>
      )}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Calendar className="h-3 w-3 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">{task.date}</span>
        </div>
        
        <div className="flex items-center gap-3">
          {task.comments > 0 && (
            <div className="flex items-center gap-1">
              <MessageSquare className="h-3 w-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">{task.comments}</span>
            </div>
          )}
          {task.attachments > 0 && (
            <div className="flex items-center gap-1">
              <Paperclip className="h-3 w-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">{task.attachments}</span>
            </div>
          )}
          
          <div className="flex -space-x-2">
            {task.assignees.map((assignee, index: number) => (
              <div
                key={index}
                className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium border-2 border-card"
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
    <div className="kanban-column p-4 min-w-80">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h2 className="font-medium text-foreground">{title}</h2>
          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
            {tasks.length}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={onAddTask}>
            <Plus className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
        
        <Button 
          variant="ghost" 
          className="w-full justify-start text-muted-foreground hover:text-foreground"
          onClick={onAddTask}
        >
          <Plus className="h-4 w-4 mr-2" />
          Add New Task
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
        <header className="border-b border-border p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-foreground">Monicca - Saas Product</h1>
              <p className="text-sm text-muted-foreground">Project management workspace</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium border-2 border-background"
                  >
                    {i}
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground text-sm flex items-center justify-center font-medium border-2 border-background">
                  +3
                </div>
              </div>
              <Button>Invite Member</Button>
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
