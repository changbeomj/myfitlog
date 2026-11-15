function Header({ routines, selectedDay }) {
  // 현재 선택된 분할 요일의 루틴만 필터링
  const dayRoutines = routines.filter((item) => item.day === selectedDay);

  // 총 볼륨 계산 (중량 × 횟수 × 세트)
  const totalVolume = dayRoutines.reduce(
    (sum, item) => sum + Number(item.weight) * Number(item.reps) * Number(item.sets),
    0
  );

  // 완료된 운동 수 및 달성률 계산
  const completedCount = dayRoutines.filter((item) => item.completed).length;
  const completionRate =
    dayRoutines.length > 0
      ? Math.round((completedCount / dayRoutines.length) * 100)
      : 0;

  return (
    <header className="app-header">
      <div className="header-top">
        <div>
          <h1>MyFitLog</h1>
          <p>Open API 기반 운동 종목 탐색 및 나만의 분할 루틴 플래너</p>
        </div>
        <span className="header-day-badge">{selectedDay}</span>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-label">총 운동 볼륨</span>
          <strong className="stat-value">{totalVolume.toLocaleString()} kg</strong>
        </div>
        <div className="stat-card">
          <span className="stat-label">등록 종목 수</span>
          <strong className="stat-value">{dayRoutines.length} 종목</strong>
        </div>
        <div className="stat-card">
          <span className="stat-label">루틴 달성률</span>
          <strong className="stat-value">
            {completionRate}% ({completedCount}/{dayRoutines.length})
          </strong>
        </div>
      </div>
    </header>
  );
}

export default Header;