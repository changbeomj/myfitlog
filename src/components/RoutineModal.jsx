import { useState } from 'react';
import { translateCategory } from '../utils/translations';

const CATEGORIES = ['가슴', '등', '하체', '어깨', '팔', '복근', '유산소'];

function RoutineModal({ mode, selectedDay, initialData, onClose, onSave }) {
  const [name, setName] = useState(initialData ? initialData.name : '');
  const [category, setCategory] = useState(
    initialData ? translateCategory(initialData.category) : '가슴'
  );
  const [weight, setWeight] = useState(initialData ? initialData.weight : 20);
  const [reps, setReps] = useState(initialData ? initialData.reps : 10);
  const [sets, setSets] = useState(initialData ? initialData.sets : 3);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert('운동 종목명을 입력해 주세요.');
      return;
    }

    onSave({
      ...initialData,
      day: initialData ? initialData.day : selectedDay,
      name: name.trim(),
      category,
      weight: Math.max(0, Number(weight)),
      reps: Math.max(1, Number(reps)),
      sets: Math.max(1, Number(sets)),
    });
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>
            {mode === 'edit'
              ? '운동 루틴 수정'
              : `${selectedDay} 새 운동 직접 등록`}
          </h3>
          <button type="button" className="modal-close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label>운동 종목명</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="예: 인클라인 덤벨 프레스"
              required
            />
          </div>

          <div className="form-group">
            <label>운동 부위</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>중량 (kg)</label>
              <input
                type="number"
                min="0"
                step="0.5"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>목표 횟수 (회)</label>
              <input
                type="number"
                min="1"
                value={reps}
                onChange={(e) => setReps(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>목표 세트</label>
              <input
                type="number"
                min="1"
                value={sets}
                onChange={(e) => setSets(e.target.value)}
              />
            </div>
          </div>

          <div className="modal-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              취소
            </button>
            <button type="submit" className="btn-save">
              {mode === 'edit' ? '수정 완료' : '루틴에 등록'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RoutineModal;