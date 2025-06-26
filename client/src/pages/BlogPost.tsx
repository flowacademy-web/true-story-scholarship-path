
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import { ArrowLeft, Calendar, User } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();
  
  const blogPosts = {
    'cc-transfer-complete-guide': {
      title: '미국 CC 편입 완벽 가이드: 학비 절감부터 UC 버클리 진학까지',
      author: 'Flow Prep 편집팀',
      date: '2024년 12월 26일',
      content: `
        <p>미국 유학을 꿈꾸시나요? 하지만 학비와 입시 경쟁이 걱정되시나요? 그렇다면 "커뮤니티 칼리지(CC) 편입"이 여러분의 미래를 열어줄 수 있는 전략적 루트가 될 수 있습니다.</p>
        
        <h2>🎓 CC 편입이란?</h2>
        <p>미국 CC 편입은 2년제 커뮤니티 칼리지에서 교양 및 전공 기초 과목을 이수한 후, 4년제 대학교 3학년으로 편입해 학사 학위를 취득하는 제도입니다.</p>
        
        <h2>💰 학비 절감 효과</h2>
        <p>미국 사립 대학의 연간 학비가 $40,000 이상인 반면, 대부분의 커뮤니티 칼리지 학비는 연 $10,000 내외입니다. 2년간 CC에서 공부 후 편입하면 수천만 원의 학비 절약이 가능합니다.</p>
        
        <h2>🏆 어떤 학생에게 적합할까?</h2>
        <ul>
          <li>내신이 낮지만 영어 실력(TOEFL)에는 자신 있는 학생</li>
          <li>학비 부담을 덜고 미국 유학을 하고 싶은 학생</li>
          <li>미국 명문대 편입을 노리는 전략적 유학생</li>
          <li>아직 전공을 확정하지 못했지만 유연한 진로 설계를 원하는 학생</li>
        </ul>
        
        <h2>📈 UC 편입 성공률과 전략</h2>
        <p>UC 편입 시스템은 "TAG(Transfer Admission Guarantee)" 제도를 통해 일정 GPA 이상이면 UC 계열 일부 캠퍼스에 편입 보장을 제공합니다.</p>
        
        <h2>🏫 인기 있는 CC 추천</h2>
        <h3>1. Santa Monica College (SMC)</h3>
        <ul>
          <li>학비: $9,264/year</li>
          <li>TOEFL: 45+, 조건부 입학 가능</li>
          <li>재정서류: $29,000 이상</li>
        </ul>
        
        <h3>2. Diablo Valley College (DVC)</h3>
        <ul>
          <li>학비: $9,840/year</li>
          <li>TOEFL: 61+</li>
          <li>UC 편입률 상위권 CC 중 하나</li>
        </ul>
      `
    },
    'why-choose-cc-after-csat': {
      title: '수능 끝, CC 유학을 선택한 이유',
      author: 'Flow Prep 편집팀',
      date: '2024년 12월 25일',
      content: `
        <p>김민준 씨는 중경외시 경영학과에 입학했던 1학기만에 휴학계를 냈습니다. 수능에서 기대만큼 성과를 얻지 못했지만, 더 큰 도전을 위해 미국 CC 유학을 결정했기 때문입니다.</p>
        
        <h2>🎯 왜 CC를 선택했을까?</h2>
        <p>"한국에서 재수를 하거나 현재 대학에 안주하기보다는, 미국에서 새로운 기회를 만들고 싶었어요."</p>
        
        <h2>📚 준비 과정</h2>
        <ul>
          <li>TOEFL 점수 준비 (목표: 80점 이상)</li>
          <li>재정 증명서 준비</li>
          <li>고등학교 성적 증명서 영문 발급</li>
          <li>Personal Statement 작성</li>
        </ul>
        
        <h2>💪 도전과 성과</h2>
        <p>첫 학기 GPA 3.8을 달성하며 UC 편입 준비에 박차를 가하고 있습니다. "처음엔 영어 수업이 어려웠지만, 튜터링 센터와 스터디 그룹 활용으로 적응할 수 있었어요."</p>
        
        <h2>🌟 후배들에게 전하는 조언</h2>
        <p>"수능 결과가 전부가 아닙니다. CC 유학은 새로운 시작점이 될 수 있어요. 중요한 건 도전하는 용기입니다."</p>
      `
    },
    'yonsei-to-cc-transfer-consideration': {
      title: '연고대 경영학과에서 CC 편입을 고민하는 이유',
      author: 'Flow Prep 편집팀',
      date: '2024년 12월 24일',
      content: `
        <p>연세대 경영학과 1학년 최지우 씨의 글로벌 진로 고민. 명문대 재학 중이지만 더 넓은 세계를 보고 싶어 CC 편입을 고려하고 있습니다.</p>
        
        <h2>🤔 고민의 시작</h2>
        <p>"연세대 경영학과는 분명 좋은 학과지만, 미국에서 경영학을 공부하고 글로벌 기업에서 일하고 싶은 꿈이 있어요."</p>
        
        <h2>🌍 글로벌 경험의 가치</h2>
        <ul>
          <li>다양한 문화적 배경의 동급생들과 네트워킹</li>
          <li>실무 중심의 미국식 교육 시스템</li>
          <li>인턴십 기회의 다양성</li>
          <li>글로벌 취업 시장에서의 경쟁력</li>
        </ul>
        
        <h2>📊 비용 대비 효과 분석</h2>
        <p>연세대 등록금과 생활비 vs CC 2년 + UC 2년 비용을 비교했을 때, 장기적으로 투자 가치가 높다고 판단했습니다.</p>
        
        <h2>⚖️ 현실적 고려사항</h2>
        <ul>
          <li>휴학 vs 자퇴의 선택</li>
          <li>가족과의 논의</li>
          <li>영어 실력 보완 계획</li>
          <li>전공 선택의 유연성</li>
        </ul>
        
        <h2>🎯 최종 결정</h2>
        <p>"아직 최종 결정을 내리지는 않았지만, Flow Prep 상담을 통해 구체적인 계획을 세워보려고 합니다."</p>
      `
    },
    'low-gpa-high-toefl-cc-option': {
      title: '내신 낮고 토플은 높은 우리 아이, CC가 답일까?',
      author: 'Flow Prep 편집팀',
      date: '2024년 12월 23일',
      content: `
        <p>고3 학부모 이지은 씨의 자녀 유학 고민과 해결책. 내신 성적은 아쉽지만 영어 실력이 뛰어난 자녀를 위한 최적의 선택을 찾고 있습니다.</p>
        
        <h2>🎭 우리 아이 프로필</h2>
        <ul>
          <li>내신: 4등급 후반</li>
          <li>TOEFL: 95점</li>
          <li>특기사항: 영어 토론, 글쓰기 특화</li>
          <li>성격: 자기주도적, 도전적</li>
        </ul>
        
        <h2>🤷‍♀️ 학부모의 고민</h2>
        <p>"아이가 영어는 정말 잘하는데 내신이 아쉬워서 국내 대학 진학이 제한적이에요. 미국 유학을 고려하고 있지만 어떤 경로가 좋을지 모르겠어요."</p>
        
        <h2>✅ CC가 적합한 이유</h2>
        <h3>1. 영어 실력 활용</h3>
        <p>높은 TOEFL 점수로 조건부 입학 없이 바로 정규 과정 입학 가능</p>
        
        <h3>2. 내신 부담 해소</h3>
        <p>CC는 한국 내신보다는 영어 실력과 적응력을 더 중시</p>
        
        <h3>3. 명문대 편입 기회</h3>
        <p>CC에서 좋은 GPA 유지 시 UC 버클리, UCLA 등 편입 가능</p>
        
        <h2>📋 준비 계획</h2>
        <ol>
          <li>목표 CC 선정 (SMC, DVC 등)</li>
          <li>원서 준비 (성적증명서, Personal Statement)</li>
          <li>재정 증명서 준비</li>
          <li>비자 준비</li>
        </ol>
        
        <h2>💡 성공을 위한 조언</h2>
        <p>"영어 실력이 뛰어난 학생에게 CC는 새로운 기회의 문이 될 수 있습니다. 중요한 것은 체계적인 준비와 명확한 목표 설정입니다."</p>
      `
    },
    'uc-berkeley-transfer-success-interview': {
      title: 'UC Berkeley 편입 성공자 인터뷰',
      author: 'Flow Prep 편집팀',
      date: '2024년 12월 22일',
      content: `
        <p>Diablo Valley College에서 UC Berkeley Economics 편입에 성공한 이정현 씨의 생생한 경험담을 공유합니다.</p>
        
        <h2>🎓 성공자 프로필</h2>
        <ul>
          <li>이름: 이정현</li>
          <li>출신: 서울 일반고</li>
          <li>CC: Diablo Valley College (2년)</li>
          <li>편입: UC Berkeley Economics</li>
          <li>CC GPA: 3.89</li>
        </ul>
        
        <h2>💭 CC 선택 이유</h2>
        <p>"한국에서 재수를 고려했지만, 미국에서 새로운 도전을 해보고 싶었어요. DVC는 UC 편입률이 높아서 선택했습니다."</p>
        
        <h2>📚 학습 전략</h2>
        <h3>1. 첫 학기 적응</h3>
        <ul>
          <li>영어 수업 집중 이수</li>
          <li>Math, Biology 등 기초 과목부터 시작</li>
          <li>Office Hours 적극 활용</li>
        </ul>
        
        <h3>2. 편입 준비</h3>
        <ul>
          <li>UC transferable 과목 위주 선택</li>
          <li>IGETC (일반교육과정) 완수</li>
          <li>Economics 전공 준비 과목 이수</li>
        </ul>
        
        <h2>🏆 성공 포인트</h2>
        <ol>
          <li><strong>꾸준한 GPA 관리:</strong> 매 학기 3.8 이상 유지</li>
          <li><strong>활동 참여:</strong> Economics Club, Tutor 활동</li>
          <li><strong>Personal Statement:</strong> 진정성 있는 스토리텔링</li>
          <li><strong>교수님과의 관계:</strong> 추천서를 위한 네트워킹</li>
        </ol>
        
        <h2>😅 어려웠던 점</h2>
        <p>"처음엔 문화 차이와 언어 장벽이 컸어요. 하지만 Study Group에 참여하고 American 친구들과 교류하면서 극복했습니다."</p>
        
        <h2>🌟 후배들에게</h2>
        <p>"CC에서 UC 편입은 충분히 가능합니다. 중요한 건 목표를 명확히 하고 꾸준히 노력하는 것입니다. Flow Prep 같은 전문 컨설팅의 도움도 큰 힘이 되었어요."</p>
      `
    },
    'private-university-transfer-scholarship-success': {
      title: 'CC 후 사립대 편입 + 장학금 성공 사례',
      author: 'Flow Prep 편집팀',
      date: '2024년 12월 21일',
      content: `
        <p>Santa Monica College에서 NYU Gallatin School로 장학금과 함께 편입한 박서연 씨의 특별한 성공 스토리입니다.</p>
        
        <h2>🌟 성공자 소개</h2>
        <ul>
          <li>이름: 박서연</li>
          <li>출신: 부산 외국어고</li>
          <li>CC: Santa Monica College</li>
          <li>편입: NYU Gallatin School of Individualized Study</li>
          <li>장학금: $25,000/년 (Merit-based)</li>
        </ul>
        
        <h2>🎯 NYU 선택 이유</h2>
        <p>"Gallatin School은 학제간 연구가 가능해서 저의 관심 분야인 '디지털 미디어와 사회학'을 융합한 커리큘럼을 만들 수 있었어요."</p>
        
        <h2>💰 장학금 획득 전략</h2>
        <h3>1. 학업 성취</h3>
        <ul>
          <li>SMC GPA: 3.95 유지</li>
          <li>Phi Theta Kappa Honor Society 가입</li>
          <li>Dean's List 4학기 연속</li>
        </ul>
        
        <h3>2. 특별 활동</h3>
        <ul>
          <li>SMC 학생회 International Student Representative</li>
          <li>지역 NGO에서 소셜미디어 마케팅 인턴</li>
          <li>독립 영화 프로젝트 참여</li>
        </ul>
        
        <h3>3. 에세이 전략</h3>
        <p>"개발도상국의 디지털 격차 해소"라는 명확한 목표와 이를 위한 학업 계획을 구체적으로 제시</p>
        
        <h2>📊 재정 계획</h2>
        <ul>
          <li>SMC 2년: 약 $40,000 (학비+생활비)</li>
          <li>NYU 2년: $50,000/년 → 장학금으로 $25,000/년</li>
          <li>총 비용 절약: 약 $50,000</li>
        </ul>
        
        <h2>🔑 성공의 핵심</h2>
        <ol>
          <li><strong>차별화된 스토리:</strong> 개인적 경험과 학업 목표의 연결</li>
          <li><strong>지속적인 네트워킹:</strong> 교수, 동료들과의 관계 구축</li>
          <li><strong>전략적 과목 선택:</strong> 편입 대학 요구사항 충족</li>
          <li><strong>조기 준비:</strong> 1학년부터 편입 계획 수립</li>
        </ol>
        
        <h2>💡 조언</h2>
        <p>"CC에서도 충분히 훌륭한 기회들을 만들 수 있어요. 중요한 건 적극적인 자세와 명확한 목표의식입니다. 장학금도 불가능한 꿈이 아니에요!"</p>
      `
    },
    '5-strategies-cc-study-abroad-success': {
      title: 'CC 유학 실패하지 않기 위한 5가지 전략',
      author: 'Flow Prep 편집팀',
      date: '2024년 12월 20일',
      content: `
        <p>성공적인 CC 유학을 위한 필수 전략들을 Flow Prep의 노하우와 함께 정리했습니다.</p>
        
        <h2>🎯 전략 1: 명확한 목표 설정</h2>
        <h3>✅ 해야 할 것</h3>
        <ul>
          <li>편입하고 싶은 4년제 대학 리스트 작성</li>
          <li>희망 전공과 career path 구체화</li>
          <li>학기별 GPA 목표 설정</li>
        </ul>
        
        <h3>❌ 하지 말아야 할 것</h3>
        <ul>
          <li>"일단 가서 생각해보자" 식의 막연한 계획</li>
          <li>너무 많은 대학을 목표로 하는 산만함</li>
        </ul>
        
        <h2>📚 전략 2: 체계적인 학업 관리</h2>
        <h3>첫 학기 과목 선택 팁</h3>
        <ul>
          <li>영어 수업 + 기초 수학 + 관심 분야 입문 과목</li>
          <li>12-15 units로 적정 수강량 유지</li>
          <li>Pass/No Pass 옵션 남용 금지</li>
        </ul>
        
        <h3>GPA 관리 전략</h3>
        <ul>
          <li>목표: 편입 대학별 최소 GPA + 0.2 이상</li>
          <li>어려운 과목은 여름학기 활용</li>
          <li>Tutor, Study Group 적극 활용</li>
        </ul>
        
        <h2>🤝 전략 3: 네트워킹과 관계 구축</h2>
        <ul>
          <li><strong>교수님과의 관계:</strong> Office Hours 정기 방문</li>
          <li><strong>Academic Advisor:</strong> 학기마다 상담 예약</li>
          <li><strong>동급생들:</strong> Study Group, 동아리 활동</li>
          <li><strong>Transfer Center:</strong> 편입 정보 수집</li>
        </ul>
        
        <h2>💡 전략 4: 효과적인 시간 관리</h2>
        <h3>일주일 스케줄 예시</h3>
        <ul>
          <li>월-목: 수업 + 과제 + 스터디</li>
          <li>금: 여가 활동, 친구들과 시간</li>
          <li>토: 과제 마무리, 다음 주 준비</li>
          <li>일: 휴식, 한국 가족/친구들과 연락</li>
        </ul>
        
        <h2>🌟 전략 5: 문화 적응과 멘탈 관리</h2>
        <h3>문화 적응 팁</h3>
        <ul>
          <li>Conversation Partner 프로그램 참여</li>
          <li>International Student Services 활용</li>
          <li>지역 문화 행사 참여</li>
        </ul>
        
        <h3>멘탈 관리</h3>
        <ul>
          <li>정기적인 운동 (헬스장, 스포츠 클럽)</li>
          <li>취미 활동 유지</li>
          <li>한국 음식, 문화 콘텐츠로 향수병 달래기</li>
          <li>필요시 Counseling Services 이용</li>
        </ul>
        
        <h2>🚨 주의사항</h2>
        <ul>
          <li>술, 파티 문화에 과도하게 노출되지 않기</li>
          <li>한국인끼리만 어울리는 것 피하기</li>
          <li>학업을 소홀히 하는 아르바이트 금지</li>
          <li>비자 규정 위반 절대 금지</li>
        </ul>
        
        <h2>✨ 마무리</h2>
        <p>CC 유학 성공의 핵심은 계획성과 실행력입니다. Flow Prep과 함께 체계적으로 준비한다면 여러분도 충분히 성공할 수 있습니다!</p>
      `
    },
    'cc-vs-liberal-arts-college-comparison': {
      title: '미국 CC vs 리버럴 아츠 칼리지: 내게 맞는 선택은?',
      author: 'Flow Prep 편집팀',
      date: '2024년 12월 19일',
      content: `
        <p>미국 유학을 계획할 때 고려해야 할 두 가지 주요 옵션에 대한 비교 분석입니다.</p>
        
        <h2>🏫 Community College (CC) 특징</h2>
        <h3>✅ 장점</h3>
        <ul>
          <li><strong>경제성:</strong> 연간 학비 $8,000-12,000</li>
          <li><strong>편입 기회:</strong> UC, CSU 등 명문대 편입 가능</li>
          <li><strong>입학 용이성:</strong> 상대적으로 낮은 입학 장벽</li>
          <li><strong>유연성:</strong> 전공 탐색 기회</li>
        </ul>
        
        <h3>⚠️ 단점</h3>
        <ul>
          <li>캠퍼스 라이프 제한적</li>
          <li>연구 기회 부족</li>
          <li>4년제 대학 대비 낮은 명성</li>
        </ul>
        
        <h2>🎓 Liberal Arts College 특징</h2>
        <h3>✅ 장점</h3>
        <ul>
          <li><strong>소규모 수업:</strong> 교수와 밀접한 관계</li>
          <li><strong>전인교육:</strong> 비판적 사고, 글쓰기 능력 향상</li>
          <li><strong>캠퍼스 문화:</strong> 풍부한 동아리, 스포츠 활동</li>
          <li><strong>네트워킹:</strong> 동문 네트워크의 힘</li>
        </ul>
        
        <h3>⚠️ 단점</h3>
        <ul>
          <li><strong>높은 비용:</strong> 연간 $40,000-60,000</li>
          <li><strong>입학 경쟁:</strong> 높은 GPA, 시험 점수 요구</li>
          <li><strong>전공 제한:</strong> 공학, 비즈니스 전공 부족</li>
        </ul>
        
        <h2>💰 비용 비교 (4년 기준)</h2>
        <table className="w-full border-collapse border border-gray-300">
          <tr>
            <th className="border border-gray-300 p-2">구분</th>
            <th className="border border-gray-300 p-2">CC → UC Transfer</th>
            <th className="border border-gray-300 p-2">Liberal Arts College</th>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">총 학비</td>
            <td className="border border-gray-300 p-2">$90,000-110,000</td>
            <td className="border border-gray-300 p-2">$160,000-240,000</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">절약 금액</td>
            <td className="border border-gray-300 p-2">$70,000-130,000</td>
            <td className="border border-gray-300 p-2">-</td>
          </tr>
        </table>
        
        <h2>🎯 어떤 학생에게 맞을까?</h2>
        
        <h3>CC가 적합한 학생</h3>
        <ul>
          <li>학비 부담을 줄이고 싶은 학생</li>
          <li>전공을 아직 정하지 못한 학생</li>
          <li>영어 실력을 더 키우고 싶은 학생</li>
          <li>UC, Ivy League 편입을 목표로 하는 학생</li>
        </ul>
        
        <h3>Liberal Arts College가 적합한 학생</h3>
        <ul>
          <li>소규모 수업을 선호하는 학생</li>
          <li>교수와 밀접한 관계를 원하는 학생</li>
          <li>캠퍼스 라이프를 중시하는 학생</li>
          <li>인문학, 사회과학에 관심이 높은 학생</li>
        </ul>
        
        <h2>📊 성공 사례 비교</h2>
        
        <h3>CC → Transfer 성공 사례</h3>
        <ul>
          <li>SMC → UCLA Film School</li>
          <li>DVC → UC Berkeley Economics</li>
          <li>Foothill → Stanford (Transfer)</li>
        </ul>
        
        <h3>Liberal Arts College 성공 사례</h3>
        <ul>
          <li>Williams College → Goldman Sachs</li>
          <li>Middlebury College → State Department</li>
          <li>Bowdoin College → Harvard Law School</li>
        </ul>
        
        <h2>🤔 결정할 때 고려사항</h2>
        <ol>
          <li><strong>예산:</strong> 가족의 재정 상황</li>
          <li><strong>목표:</strong> 최종 진로와 목표 대학</li>
          <li><strong>성격:</strong> 개인의 학습 스타일</li>
          <li><strong>시간:</strong> 준비 기간과 긴급성</li>
        </ol>
        
        <h2>💡 Flow Prep 추천</h2>
        <p>대부분의 한국 학생들에게는 CC → 편입 루트를 추천합니다. 경제적 효율성과 명문대 진학 가능성을 동시에 얻을 수 있기 때문입니다. 단, 개인의 상황과 목표에 따라 최적의 선택은 달라질 수 있으니 전문 상담을 받아보시기 바랍니다.</p>
      `
    }
  };

  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <div className="container mx-auto px-6 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">페이지를 찾을 수 없습니다</h1>
            <Link to="/blog" className="text-blue-400 hover:text-blue-300">
              블로그로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            블로그로 돌아가기
          </Link>
          
          <article className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <header className="mb-8">
              <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
              <div className="flex items-center gap-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
              </div>
            </header>
            
            <div 
              className="prose prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
