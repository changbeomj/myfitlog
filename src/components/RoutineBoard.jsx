import { useState } from 'react';
import RestTimer from './RestTimer';

const DAYS = ['Day 1 (상체)', 'Day 2 (하체)', 'Day 3 (전신/코어)'];

function RoutineBoard({
  routines,
  selectedDay,
  onSelectDay,
  onToggleComplete,
  onDeleteRoutine,
  onOpenCreateModal,
  onOpenEditModal,
}) {
  const [routineSearch, setRoutineSearch] = useState('');

  // 선택된 분할 요일 + 내 루틴 내 검색어 필터링
  const currentDayRoutines = routines.filter((item) => {
    const matchesDay = item.day === selectedDay;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(routineSearch.toLowerCase());
    return matchesDay && matchesSearch;
  });

  return (
    <section className="panel">
      <div className="panel-title">
        <span>나만의 분할 루틴</span>
        <button
          type="button"
          className="btn-custom-add"
          onClick={onOpenCreateModal}
        >
          + 직접 운동 등록
        </button>
      </div>

      {/* 분할 요일 선택 탭 */}
      <div className="day-tabs">
        {DAYS.map((day) => (
          <button
            key={day}
            type="button"
            className={`day-tab ${selectedDay === day ? 'active' : ''}`}
            onClick={() => onSelectDay(day)}
          >
            {day}
          </button>
        ))}
      </div>

      {/* 세트 간 휴식 타이머 위젯 */}
      <RestTimer />

      {/* 내 루틴 내 검색 */}
      <div className="filter-bar">
        <input
          type="text"
          className="search-input"
          placeholder={`${selectedDay} 내 운동 검색...`}
          value={routineSearch}
          onChange={(e) => setRoutineSearch(e.target.value)}
        />
      </div>

      {/* 등록된 루틴 목록 */}
      <div className="routine-list">
        {currentDayRoutines.length === 0 ? (
          <div className="status-message">
            등록된 운동이 없습니다. 왼쪽 API 목록에서 추가하거나 직접 등록해 보세요!
          </div>
        ) : (
          currentDayRoutines.map((item) => (
            <div
              key={item.id}
              className={`routine-item ${item.completed ? 'completed' : ''}`}
            >
              <div className="routine-info">
                <div>
                  <span className="routine-title">{item.name}</span>{' '}
                  <span className="badge">{item.category}</span>
                </div>
                <span className="routine-meta">
                  {item.weight}kg × {item.reps}회 × {item.sets}세트 (볼륨:{' '}
                  {(item.weight * item.reps * item.sets).toLocaleString()}kg)
                </span>
              </div>

              <div className="routine-actions">
                <button
                  type="button"
                  className="btn-edit"
                  onClick={() => onOpenEditModal(item)}
                >
                  수정
                </button>
                <button
                  type="button"
                  className="btn-check"
                  onClick={() => onToggleComplete(item.id)}
                >
                  {item.completed ? '취소' : '완료'}
                </button>
                <button
                  type="button"
                  className="btn-delete"
                  onClick={() => onDeleteRoutine(item.id)}
                >
                  삭제
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default RoutineBoard;