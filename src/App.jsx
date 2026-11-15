import { useState, useEffect } from 'react';
import Header from './components/Header';
import ExerciseExplorer from './components/ExerciseExplorer';
import RoutineBoard from './components/RoutineBoard';
import RoutineModal from './components/RoutineModal';
import './App.css';

function App() {
  // localStorage에서 저장된 루틴 불러오기
  const [routines, setRoutines] = useState(() => {
    const saved = localStorage.getItem('myfitlog_routines');
    return saved ? JSON.parse(saved) : [];
  });

  const [selectedDay, setSelectedDay] = useState('Day 1 (상체)');

  // 모달 상태 관리 (create: 직접 등록, edit: 기존 루틴 수정)
  const [modalState, setModalState] = useState({
    isOpen: false,
    mode: 'create',
    targetItem: null,
  });

  // 루틴 변경 시 localStorage에 자동 동기화
  useEffect(() => {
    localStorage.setItem('myfitlog_routines', JSON.stringify(routines));
  }, [routines]);

  // Open API 목록에서 바로 루틴 등록 (Create)
  const handleAddRoutine = (exercise) => {
    const newRoutine = {
      id: Date.now() + Math.floor(Math.random() * 1000),
      day: selectedDay,
      name: exercise.name,
      category: exercise.category,
      sets: 3,
      reps: 10,
      weight: 20,
      completed: false,
    };
    setRoutines((prev) => [...prev, newRoutine]);
  };

  // 모달 저장 처리 (직접 등록 Create 또는 기존 항목 수정 Update)
  const handleSaveModal = (formData) => {
    if (modalState.mode === 'create') {
      const newRoutine = {
        ...formData,
        id: Date.now() + Math.floor(Math.random() * 1000),
        completed: false,
      };
      setRoutines((prev) => [...prev, newRoutine]);
    } else if (modalState.mode === 'edit') {
      setRoutines((prev) =>
        prev.map((item) => (item.id === formData.id ? formData : item))
      );
    }
    setModalState({ isOpen: false, mode: 'create', targetItem: null });
  };

  // 운동 완료 토글 (Update)
  const handleToggleComplete = (id) => {
    setRoutines((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  // 루틴 삭제 (Delete)
  const handleDeleteRoutine = (id) => {
    setRoutines((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="app-container">
      <Header routines={routines} selectedDay={selectedDay} />

      <main className="main-grid">
        <ExerciseExplorer
          selectedDay={selectedDay}
          onAddRoutine={handleAddRoutine}
        />
        <RoutineBoard
          routines={routines}
          selectedDay={selectedDay}
          onSelectDay={setSelectedDay}
          onToggleComplete={handleToggleComplete}
          onDeleteRoutine={handleDeleteRoutine}
          onOpenCreateModal={() =>
            setModalState({ isOpen: true, mode: 'create', targetItem: null })
          }
          onOpenEditModal={(item) =>
            setModalState({ isOpen: true, mode: 'edit', targetItem: item })
          }
        />
      </main>

      {modalState.isOpen && (
        <RoutineModal
          mode={modalState.mode}
          selectedDay={selectedDay}
          initialData={modalState.targetItem}
          onClose={() =>
            setModalState({ isOpen: false, mode: 'create', targetItem: null })
          }
          onSave={handleSaveModal}
        />
      )}
    </div>
  );
}

export default App;