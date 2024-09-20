let userPoints = 0;

function answer(selectedAnswer) {
  const correctAnswer = 'باريس';
  if (selectedAnswer === correctAnswer) {
    userPoints += 10;
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('rewards-container').classList.remove('hidden');
    document.getElementById('points').innerText = `نقاطك: ${userPoints}`;
  } else {
    alert('إجابة خاطئة. حاول مرة أخرى.');
  }
}

function claimReward() {
  alert('مبروك! حصلت على مكافأتك.');
  // هنا يمكن ربط المكافأة الحقيقية
}
