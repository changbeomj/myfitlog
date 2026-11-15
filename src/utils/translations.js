// 운동 부위 영문 -> 한국어 매핑
const CATEGORY_MAP = {
  Abs: '복근',
  Arms: '팔',
  Back: '등',
  Calves: '종아리',
  Cardio: '유산소',
  Chest: '가슴',
  Legs: '하체',
  Shoulders: '어깨',
  Etc: '기타',
};

// 주요 운동 종목명 영문 -> 한국어 전문 용어 사전
const EXERCISE_NAME_MAP = {
  '2 Handed Kettlebell Swing': '투 핸드 케틀벨 스윙',
  'Abdominal Stabilization': '복부 안정화 운동',
  'Arnold Press': '아놀드 프레스',
  'Arnold Shoulder Press': '아놀드 숄더 프레스',
  'Axe Hold': '액스 홀드',
  'Back Squat': '백 스쿼트',
  'Barbell Ab Rollout': '바벨 앱 롤아웃',
  'Barbell Bench Press': '바벨 벤치 프레스',
  'Barbell Curl': '바벨 컬',
  'Barbell Deadlift': '바벨 데드리프트',
  'Barbell Hack Squat': '바벨 핵 스쿼트',
  'Barbell Hack Squats': '바벨 핵 스쿼트',
  'Barbell Lunge': '바벨 런지',
  'Barbell Lunges': '바벨 런지',
  'Barbell Row': '바벨 로우',
  'Barbell Shoulder Press': '바벨 숄더 프레스',
  'Barbell Triceps Extension': '바벨 트라이셉스 익스텐션',
  'Bear Walk': '베어 워크',
  'Bench Press': '벤치 프레스',
  'Bench Press Narrow Grip': '내로우 그립 벤치 프레스',
  'Benchpress Dumbbells': '덤벨 벤치 프레스',
  'Bent Over Barbell Row': '벤트 오버 바벨 로우',
  'Bent Over Dumbbell Row': '벤트 오버 덤벨 로우',
  'Bent-over Lateral Raises': '벤트 오버 래터럴 레이즈',
  'Bent Over Rowing': '벤트 오버 로우',
  'Bent Over Rowing Reverse': '벤트 오버 리버스 로우',
  'Biceps Curl': '바이셉스 컬 (이두 컬)',
  'Biceps Curls With Barbell': '바벨 이두 컬',
  'Biceps Curls With Dumbbell': '덤벨 이두 컬',
  'Biceps Curls With SZ-bar': '이지바 이두 컬',
  'Body-Ups': '바디업',
  'Bodyweight Squat': '맨몸 스쿼트',
  'Bulgarian Split Squat': '불가리안 스플릿 스쿼트',
  Burpees: '버피 테스트',
  Butterfly: '버터플라이 (펙 덱 플라이)',
  'Butterfly Narrow Grip': '내로우 그립 버터플라이',
  'Cable Cross-over': '케이블 크로스오버',
  'Cable Row': '케이블 로우',
  'Cable External Rotation': '케이블 익스터널 로테이션',
  'Cable Woodchoppers' : '케이블 우드쵸퍼',
  'Calf Press Using Leg Press Machine': '레그 프레스 카프 레이즈',
  'Calf Raises': '카프 레이즈',
  'Calf Raises on Hackenschmitt Machine': '하켄슈미트 머신 카프 레이즈',
  'Calf Raises - With Bands': '밴드 카프 레이즈',
  'Chin Up': '친업',
  'Chin-ups': '친업',
  'Close-grip Bench Press': '클로즈 그립 벤치 프레스',
  Crunches: '크런치',
  'Crunches With Legs Up': '레그업 크런치',
  Deadlift: '데드리프트',
  Deadlifts: '데드리프트',
  'Decline Bench Press': '디클라인 벤치 프레스',
  'Deficit Deadlift': '데피싯(발판 위) 데드리프트',
  Dips: '딥스',
  'Diagonal Shoulder Press': '다이애고날(대각선) 숄더 프레스',
  'Dips Between Two Benches': '벤치 딥스',
  'Dips Between Two Chairs': '체어 딥스',
  'Dumbbell Bench Press': '덤벨 벤치 프레스',
  'Dumbbell Curl': '덤벨 컬',
  'Dumbbell Fly': '덤벨 플라이',
  'Dumbbell Goblet Squat': '덤벨 고블릿 스쿼트',
  'Dumbbell Incline Bench Press': '인클라인 덤벨 벤치 프레스',
  'Dumbbell Lunges': '덤벨 런지',
  'Dumbbell Shoulder Press': '덤벨 숄더 프레스',
  'Face Pull': '페이스 풀',
  'Flat Bench Press': '플랫 벤치 프레스',
  'Flutter Kicks': '플러터 킥',
  'French Press': '프렌치 프레스',
  'Front Raises': '프론트 레이즈',
  'Front Squats': '프론트 스쿼트',
  'Full Can Lateral Raises': '풀 캔 래터럴 레이즈',
  'Glute Bridge': '글루트 브릿지',
  'Goblet Squat': '고블릿 스쿼트',
  'Good Mornings': '굿모닝',
  Hammercurls: '해머 컬',
  'Hammer Curls': '해머 컬',
  'Handstand Pushup': '물구나무 푸쉬업',
  'Hanging Leg Raises': '행잉 레그 레이즈',
  'High Knee Jumps': '하이 니 점프',
  'High Pull': '하이 풀',
  'Hip Thrust': '힙 쓰러스트',
  'Incline Bench Press': '인클라인 벤치 프레스',
  'Incline Dumbbell Press': '인클라인 덤벨 프레스',
  'Incline Pushups': '인클라인 푸쉬업',
  'Isometric Wipers': '아이소메트릭 와이퍼',
  'Kettlebell Swings': '케틀벨 스윙',
  'Lat Pulldown': '랫 풀다운',
  'Lateral Raises': '사이드 래터럴 레이즈',
  'Leg Curls (Laying)': '라잉 레그 컬',
  'Leg Curls (Sitting)': '시티드 레그 컬',
  'Leg Curls (Standing)': '스탠딩 레그 컬',
  'Leg Extensions': '레그 익스텐션',
  'Leg Press': '레그 프레스',
  'Leg Raises': '레그 레이즈',
  'Long-Pulley (Low Row)': '시티드 케이블 로우',
  'Low Box Squat - Heavy': '로우 박스 스쿼트',
  Lunges: '런지',
  'Military Press': '밀리터리 프레스',
  'Mountain Climbers': '마운틴 클라이머',
  'Negative Crunches': '네거티브 크런치',
  'Overhead Press': '오버헤드 프레스',
  'Overhead Triceps Extension': '오버헤드 트라이셉스 익스텐션',
  'Pause Bench Press': '퍼즈 벤치 프레스',
  'Pec Deck': '펙 덱 플라이',
  'Pendlay Rows': '펜들레이 로우',
  Plank: '플랭크',
  'Preacher Curls': '프리처 컬',
  'Prone Scapular Retraction - Arms at Side': '프론 견갑 후인 운동',
  'Pull-ups': '풀업 (턱걸이)',
  'Push-ups': '푸쉬업 (팔굽혀펴기)',
  Pushups: '푸쉬업 (팔굽혀펴기)',
  'Rack Pulls': '랙 풀',
  'Reverse Bar Curl': '리버스 바벨 컬',
  'Reverse Flyes': '리버스 플라이',
  'Romanian Deadlift': '루마니안 데드리프트',
  'Russian Twist': '러시안 트위스트',
  'Seated Calf Raise': '시티드 카프 레이즈',
  'Seated Hip Abduction': '시티드 힙 어브덕션',
  'Seated Hip Adduction': '시티드 힙 어덕션',
  'Seated Row': '시티드 로우',
  'Seated Triceps Press': '시티드 트라이셉스 프레스',
  'Shoulder Press, Barbell': '바벨 숄더 프레스',
  'Shoulder Press, Dumbbells': '덤벨 숄더 프레스',
  'Shoulder Shrug, Barbell': '바벨 슈러그',
  'Shoulder Shrug, Dumbbells': '덤벨 슈러그',
  'Side Crunch': '사이드 크런치',
  'Side Plank': '사이드 플랭크',
  'Side Raises': '사이드 레이즈',
  'Sit-ups': '싯업 (윗몸일으키기)',
  Skullcrusher: '스컬 크러셔',
  'Splitted Squats': '스플릿 스쿼트',
  Squat: '스쿼트',
  Squats: '스쿼트',
  'Standing Biceps Curl': '스탠딩 바이셉스 컬',
  'Standing Calf Raises': '스탠딩 카프 레이즈',
  'Sumo Deadlift': '스모 데드리프트',
  Superman: '슈퍼맨 (백 익스텐션)',
  'T-Bar Row': '티바 로우',
  'Triceps Bench Press One Barbell': '바벨 트라이셉스 벤치 프레스',
  'Triceps Dips': '트라이셉스 딥스',
  'Triceps Extensions on Cable': '케이블 트라이셉스 익스텐션',
  'Triceps Extensions on Cable With Bar': '케이블 바 트라이셉스 익스텐션',
  'Triceps Machine': '트라이셉스 머신',
  'Triceps Pushdown': '트라이셉스 푸쉬다운',
  'Underhand Lat Pull Down': '언더핸드 랫 풀다운',
  'Upper External Oblique': '외복사근 크런치',
  'Wall Pushup': '월 푸쉬업',
  'Wall Sit': '월 싯',
  'Weighted Russian Twist': '중량 러시안 트위스트',
  'Zottman Curl': '조트만 컬',
};

// 대소문자 무시 검색용 사전 생성
const LOWERCASE_NAME_MAP = Object.entries(EXERCISE_NAME_MAP).reduce(
  (acc, [key, val]) => {
    acc[key.toLowerCase()] = val;
    return acc;
  },
  {}
);

// 복합 종목명 키워드 치환 규칙
const KEYWORD_RULES = [
  [/Bench\s?Press(es|ing)?/gi, '벤치 프레스'],
  [/Shoulder\s?Press(es|ing)?/gi, '숄더 프레스'],
  [/Leg\s?Press(es|ing)?/gi, '레그 프레스'],
  [/Deadlifts?/gi, '데드리프트'],
  [/Squat(s|ting)?/gi, '스쿼트'],
  [/Barbell/gi, '바벨'],
  [/Dumbbells?/gi, '덤벨'],
  [/Kettlebell/gi, '케틀벨'],
  [/SZ-bar/gi, '이지바'],
  [/Cable/gi, '케이블'],
  [/Machine/gi, '머신'],
  [/Smith/gi, '스미스'],
  [/Lever/gi, '레버'],
  [/Hack/gi, '핵'],
  [/Overhead/gi, '오버헤드'],
  [/Incline/gi, '인클라인'],
  [/Decline/gi, '디클라인'],
  [/Seated|Sitting/gi, '시티드'],
  [/Standing/gi, '스탠딩'],
  [/Lying|Laying/gi, '라잉'],
  [/Bent[- ]?over/gi, '벤트 오버'],
  [/Lateral/gi, '래터럴'],
  [/Front/gi, '프론트'],
  [/Rear/gi, '리어'],
  [/Reverse/gi, '리버스'],
  [/Underhand/gi, '언더핸드'],
  [/Overhand/gi, '오버핸드'],
  [/Close[- ]?grip/gi, '클로즈 그립'],
  [/Wide[- ]?grip/gi, '와이드 그립'],
  [/Narrow[- ]?grip/gi, '내로우 그립'],
  [/Single[- ]?arm|One[- ]?arm/gi, '원암'],
  [/Single[- ]?leg|One[- ]?leg/gi, '원레그'],
  [/Biceps/gi, '바이셉스'],
  [/Triceps/gi, '트라이셉스'],
  [/Hip/gi, '힙'],
  [/Adduction/gi, '어덕션'],
  [/Abduction/gi, '어브덕션'],
  [/Glute/gi, '글루트'],
  [/Curl(s|ing)?/gi, '컬'],
  [/Extension(s|ing)?/gi, '익스텐션'],
  [/Rais(e|es|ing)/gi, '레이즈'],
  [/Fl(y|ies|yes|ying)/gi, '플라이'],
  [/Row(s|ing)?/gi, '로우'],
  [/Press(es|ing)?/gi, '프레스'],
  [/Pull[- ]?up(s|ping)?/gi, '풀업'],
  [/Push[- ]?up(s|ping)?/gi, '푸쉬업'],
  [/Pull[- ]?down(s|ing)?/gi, '풀다운'],
  [/Push[- ]?down(s|ing)?/gi, '푸쉬다운'],
  [/Crunch(es|ing)?/gi, '크런치'],
  [/Lung(e|es|ing)/gi, '런지'],
  [/Plank(s|ing)?/gi, '플랭크'],
  [/Dips?/gi, '딥스'],
  [/Shrugs?/gi, '슈러그'],
  [/Swings?/gi, '스윙'],
  [/Twists?/gi, '트위스트'],
  [/Bridges?/gi, '브릿지'],
  [/Thrusts?/gi, '쓰러스트'],
  [/Rollouts?/gi, '롤아웃'],
  [/Kicks?/gi, '킥'],
  [/Holds?/gi, '홀드'],
  [/Walks?/gi, '워크'],
  [/Jumps?/gi, '점프'],
  [/Weighted/gi, '중량'],
  [/Calf/gi, '카프'],
  [/Abdominal/gi, '복부'],
  [/\b(With|On|Using|The|And|In|Of|At)\b/gi, ''],
];

const CATEGORY_GUIDE_MAP = {
  가슴: '가슴(대흉근) 근력과 볼륨 향상을 위한 운동입니다. 어깨가 들리지 않도록 견갑을 고정하고 수행하세요.',
  등: '등(광배근·승모근) 근육 발달을 위한 운동입니다. 팔 힘이 아닌 등 근육의 수축과 이완에 집중하세요.',
  하체: '하체 전반의 근력과 기초대사량을 높이는 핵심 운동입니다. 무릎과 발끝 방향을 일치시켜 수행하세요.',
  어깨: '삼각근의 입체감과 어깨 안정성을 키우는 운동입니다. 반동을 줄이고 목표 부위 자극을 유지하세요.',
  팔: '상완이두근 및 상완삼두근을 집중 단련하는 운동입니다. 팔꿈치 위치를 고정한 상태에서 천천히 수행하세요.',
  복근: '코어 안정성과 복직근·복사근 강화를 위한 운동입니다. 호흡을 내쉬며 복부를 강하게 수축하세요.',
  종아리: '하퇴부(비복근·가자미근) 근지구력과 탄력을 기르는 운동입니다. 가동범위를 끝까지 활용해 수행하세요.',
  유산소: '심폐 지구력 향상과 체지방 연소에 효과적인 유산소성 운동입니다. 일정한 페이스를 유지하며 수행하세요.',
  기타: '전신 협응력과 기초 체력 증진에 도움이 되는 운동입니다. 바른 자세를 유지하며 목표 세트를 완수하세요.',
};

export function translateCategory(category) {
  return CATEGORY_MAP[category] || category || '기타';
}

export function translateExerciseName(rawName) {
  if (!rawName) return '이름 없는 운동';
  const trimmed = rawName.trim();
  const lower = trimmed.toLowerCase();
  const singular = lower.replace(/s$/, '');

  if (LOWERCASE_NAME_MAP[lower]) return LOWERCASE_NAME_MAP[lower];
  if (LOWERCASE_NAME_MAP[singular]) return LOWERCASE_NAME_MAP[singular];

  let translated = trimmed;
  KEYWORD_RULES.forEach(([regex, korean]) => {
    translated = translated.replace(regex, korean);
  });

  translated = translated
    .replace(/([가-힣])s\b/g, '$1')
    .replace(/[(),]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (/[a-zA-Z]{2,}/.test(translated)) {
    return trimmed;
  }

  return translated;
}

export async function translateRemainingNames(names) {
  if (!names || names.length === 0) return {};

  const CACHE_KEY = 'myfitlog_tr_cache_v1';
  let cache = {};
  try {
    cache = JSON.parse(localStorage.getItem(CACHE_KEY) || '{}');
  } catch {
    cache = {};
  }

  const uncached = [...new Set(names)].filter((name) => !cache[name]);
  if (uncached.length === 0) return cache;

  try {
    const query = uncached.join('\n');
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ko&dt=t&q=${encodeURIComponent(
      query
    )}`;
    const res = await fetch(url);
    if (!res.ok) return cache;

    const data = await res.json();
    const fullTranslated = data[0].map((seg) => seg[0]).join('');
    const lines = fullTranslated.split('\n');

    if (lines.length === uncached.length) {
      uncached.forEach((orig, idx) => {
        cache[orig] = lines[idx].trim() || orig;
      });
      localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
    }
  } catch {
    // 네트워크 제한 시 원문 유지
  }

  return cache;
}

export function getKoreanExerciseGuide(koreanCategory) {
  return CATEGORY_GUIDE_MAP[koreanCategory] || CATEGORY_GUIDE_MAP['기타'];
}