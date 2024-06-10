import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { addTask, editTask, deleteTask } from "../redux/tasksSlice";

export const useTask = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch: AppDispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [taskDescription, setTaskDescription] = useState('');
  const [currentTaskId, setCurrentTaskId] = useState<string | null>(null);

  const handleAddTask = () => {
    if (taskDescription) {
      dispatch(addTask(taskDescription));
      setTaskDescription('');
      setModalVisible(false);
    }
  };

  const handleEditTask = () => {
    if (taskDescription && currentTaskId) {
      dispatch(editTask({ id: currentTaskId, description: taskDescription }));
      setTaskDescription('');
      setCurrentTaskId(null);
      setModalVisible(false);
    }
  };

  const handleDeleteTask = (id: string) => {
    dispatch(deleteTask(id));
  };

  const openEditModal = (id: string, description: string) => {
    setCurrentTaskId(id);
    setTaskDescription(description);
    setModalVisible(true);
  };

  return {
    tasks,
    modalVisible,
    setModalVisible,
    taskDescription,
    setTaskDescription,
    currentTaskId,
    setCurrentTaskId,

    handleAddTask,
    handleEditTask,
    handleDeleteTask,
    openEditModal
  }
}