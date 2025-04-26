interface Task {
  _id: string;
  task: string;
  completed: boolean;
}

interface TaskListProps {
  notes: Task[];
}

export default function TaskList({ notes }: TaskListProps) {
  return (
    <div className="h-[250px] overflow-y-auto border-t-2 border-gray-200 mt-2 custom-scrollbar">
      {notes.map((item) => (
        <div key={item._id} className="p-2 border-b-2 border-gray-200">
          {item.task}
        </div>
      ))}
    </div>
  );
}
