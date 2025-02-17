// الأذكار الصباحية والمسائية
const dhikr = [
  "اللهم بك أصبحنا وبك أمسينا، وبك نحيا وبك نموت، وإليك المصير.",
  "أعوذ بكلمات الله التامات من شر ما خلق.",
  "اللهم اجعلني من أهل القرآن الذين هم أهلك وخاصتك.",
  // أضف المزيد من الأذكار هنا
];

// عرض الأذكار
const dhikrContainer = document.getElementById('dhikr');
dhikr.forEach(dhikrText => {
  const p = document.createElement('p');
  p.textContent = dhikrText;
  dhikrContainer.appendChild(p);
});

// القرآن الكريم
const quran = [
  "سورة الفاتحة",
  "سورة البقرة",
  "سورة آل عمران",
  "سورة النساء",
  // أضف المزيد من السور هنا حسب الترتيب
];

// عرض القرآن
const quranContainer = document.getElementById('quran-content');
quran.forEach((surah, index) => {
  const div = document.createElement('div');
  div.classList.add('surah');
  div.textContent = surah;
  
  // إضافة زر لتتبع التقدم
  const progressButton = document.createElement('button');
  progressButton.textContent = "أكمل الحزب";
  progressButton.addEventListener('click', () => {
    updateProgress(index + 1); // حفظ التقدم في الحزب الحالي
  });

  div.appendChild(progressButton);
  quranContainer.appendChild(div);
});

// حفظ التقدم في localStorage
function updateProgress(surahIndex) {
  localStorage.setItem('lastReadSurah', surahIndex);
  alert(`تم حفظ التقدم في الحزب رقم ${surahIndex}`);
}

// عرض آخر حزب قريته
function showProgress() {
  const lastSurah = localStorage.getItem('lastReadSurah');
  if (lastSurah) {
    alert(`آخر حزب قريته هو الحزب رقم ${lastSurah}`);
  } else {
    alert('مازال ما قرأت ولا حزب.');
  }
}

// عند تحميل الصفحة، عرض التقدم إن وجد
document.addEventListener('DOMContentLoaded', () => {
  showProgress();
});
