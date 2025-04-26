import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

// Define a proper Task type matching backend response
export interface Task {
  _id: string;
  task: string;
  completed: boolean;
}

// Fetch all tasks
export const fetchNotes = async (): Promise<Task[]> => 
  axios.get<Task[]>(BASE_URL)
    .then(response => response.data)
    .catch(error => {
      console.error("Failed to fetch notes:", error);
      return []; // return empty array on error
    });

// Add a new task
export const addNote = async (note: string): Promise<void> => {
  if (note.trim().length === 0) return;

  try {
    const payload = { task: note };
    await axios.post(`${BASE_URL}/addTask`, payload);
  } catch (error) {
    console.error("Failed to add note:", error);
  }
};
