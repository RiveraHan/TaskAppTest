import { View, Text, FlatList, Modal, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import PrimaryButton from '../components/shared/PrimaryButton';
import SecondaryButton from '../components/shared/SecondaryButton';
import TertiaryButton from '../components/shared/TertiaryButton';
import { globalColors } from '../theme/theme';
import { useTask } from '../hooks/useTask';

const TasksScreen = () => {
  const {
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
  } = useTask();

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskCard}>
            <Text style={styles.taskDescription}>{item.description}</Text>
            <View style={[styles.taskActions, styles.linearDivider]}>
              <TouchableOpacity onPress={() => openEditModal(item.id, item.description)}>
                <Text style={styles.actionUpdateText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
                <Text style={styles.actionDeleteText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <PrimaryButton label="Add new task" onPress={() => setModalVisible(true)} />
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>{currentTaskId ? 'Edit Task' : 'New Task'}</Text>
            <TextInput
              style={styles.input}
              placeholder="Task Description"
              value={taskDescription}
              onChangeText={setTaskDescription}
            />
            <View style={styles.buttonContainer}>
              {currentTaskId ? (
                <SecondaryButton label="Save Changes" onPress={handleEditTask} />
              ) : (
                <SecondaryButton label="Add" onPress={handleAddTask} />
              )}
              <TertiaryButton label="Cancel" onPress={() => {
                setTaskDescription('');
                setCurrentTaskId(null);
                setModalVisible(false);
              }} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  taskCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  linearDivider: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  taskDescription: {
    fontSize: 16,
    color: '#333',
  },
  taskActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  actionDeleteText: {
    color: globalColors.danger,
    fontWeight: 'bold',
  },
  actionUpdateText: {
    color: globalColors.warning,
    fontWeight: 'bold',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
  },
});

export default TasksScreen;
