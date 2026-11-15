import { useState, useEffect } from 'react';
import {
  translateCategory,
  translateExerciseName,
  translateRemainingNames,
  getKoreanExerciseGuide,
} from '../utils/translations';

function ExerciseExplorer({ selectedDay, onAddRoutine }) {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('전체');

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          'https://wger.de/api/v2/exerciseinfo/?limit=60'
        );
        if (!response.ok) {
          throw new Error('운동 데이터를 불러오는 데 실패했습니다.');
        }
        const data = await response.json();

        // 1단계: EXERCISE_NAME_MAP 사전 및 키워드 규칙 우선 적용
        const initialList = data.results
          .map((item) => {
            const engTranslation = item.translations?.find(
              (t) => t.language === 2
            );
            if (!engTranslation || !engTranslation.name) return null;

            const koreanCategory = translateCategory(item.category?.name);
            const mappedName = translateExerciseName(engTranslation.name);

            return {
              id: item.id,
              name: mappedName,
              originalName: engTranslation.name,
              category: koreanCategory,
              description: getKoreanExerciseGuide(koreanCategory),
            };
          })
          .filter(Boolean);

        // 2단계: 1단계에서 번역되지 않은(원문 그대로인) 항목만 자동 번역 적용
        const untranslated = initialList
          .filter((ex) => ex.name === ex.originalName)
          .map((ex) => ex.originalName);

        if (untranslated.length > 0) {
          const translatedMap = await translateRemainingNames(untranslated);
          const completedList = initialList.map((ex) => ({
            ...ex,
            name:
              ex.name === ex.originalName
                ? translatedMap[ex.originalName] || ex.name
                : ex.name,
          }));
          setExercises(completedList);
        } else {
          setExercises(initialList);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchExercises();
  }, []);

  const categories = ['전체', ...new Set(exercises.map((ex) => ex.category))];

  const filteredExercises = exercises.filter((ex) => {
    const keyword = searchTerm.toLowerCase();
    const matchesSearch =
      ex.name.toLowerCase().includes(keyword) ||
      ex.originalName.toLowerCase().includes(keyword);
    const matchesCategory =
      selectedCategory === '전체' || ex.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="panel">
      <div className="panel-title">
        <span>운동 종목 탐색 (Open API)</span>
        <span className="badge">{filteredExercises.length}개 종목</span>
      </div>

      <div className="filter-bar">
        <input
          type="text"
          className="search-input"
          placeholder="운동 종목명 검색 (예: 벤치 프레스, 스쿼트...)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="category-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat === '전체' ? '전체 부위' : cat}
            </option>
          ))}
        </select>
      </div>

      {loading && <div className="status-message">운동 데이터를 불러오는 중...</div>}
      {error && <div className="status-message">오류: {error}</div>}

      {!loading && !error && (
        <div className="exercise-list">
          {filteredExercises.length === 0 ? (
            <div className="status-message">검색 조건에 맞는 운동이 없습니다.</div>
          ) : (
            filteredExercises.map((exercise) => (
              <div key={exercise.id} className="exercise-card">
                <div className="exercise-card-header">
                  <span className="exercise-name">{exercise.name}</span>
                  <span className="badge">{exercise.category}</span>
                </div>
                <p className="exercise-desc">{exercise.description}</p>
                <button
                  className="add-btn"
                  onClick={() => onAddRoutine(exercise)}
                >
                  + {selectedDay}에 추가
                </button>
              </div>
            ))
          )}
        </div>
      )}
    </section>
  );
}

export default ExerciseExplorer;