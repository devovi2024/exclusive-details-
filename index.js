const output = document.getElementById("output");

function showFunction(title, explanation, code, result) {
  const block = document.createElement("div");
  block.className = "function-block";

  block.innerHTML = `
    <h2>${title}</h2>
    <p>${explanation}</p>
    <div class="code">${code}</div>
    <div class="result">Result: ${result}</div>
  `;

  output.appendChild(block);
}

function findCourseById(courses, id) {
  return courses.find(course => course.course_id === id);
}
const allCourses = [
  { course_id: "1", title: "HTML" },
  { course_id: "2", title: "CSS" },
  { course_id: "3", title: "JavaScript" },
];
const courseFound = findCourseById(allCourses, "2");

showFunction(
  "findCourseById",
  "এই ফাংশনটি একটি কোর্স লিস্ট থেকে নির্দিষ্ট আইডি দিয়ে কোর্স খুঁজে বের করে।",
  `findCourseById(allCourses, "2")`,
  JSON.stringify(courseFound)
);

function countLectures(course) {
  return course.chapters.reduce((total, chapter) => {
    return total + chapter.chapterContent.length;
  }, 0);
}
const course1 = {
  chapters: [
    {
      chapterTitle: "Intro",
      chapterContent: [{ title: "Welcome" }, { title: "Overview" }],
    },
    {
      chapterTitle: "Basics",
      chapterContent: [{ title: "Variables" }],
    },
  ],
};
showFunction(
  "countLectures",
  "এই ফাংশনটি কোর্সে মোট কতটি লেকচার আছে তা গণনা করে।",
  "countLectures(course1)",
  countLectures(course1)
);

function totalCourseMinutes(course) {
  let total = 0;
  course.chapters.forEach(chapter => {
    chapter.chapterContent.forEach(lecture => {
      total += lecture.lectureDuration;
    });
  });
  return total;
}
const course2 = {
  chapters: [
    {
      chapterContent: [
        { title: "Intro", lectureDuration: 5 },
        { title: "Welcome", lectureDuration: 10 },
      ],
    },
    {
      chapterContent: [
        { title: "Variables", lectureDuration: 15 },
        { title: "Functions", lectureDuration: 20 },
      ],
    },
  ],
};
showFunction(
  "totalCourseMinutes",
  "এই ফাংশনটি কোর্সের সব লেকচারের মোট সময় (মিনিটে) গণনা করে।",
  "totalCourseMinutes(course2)",
  totalCourseMinutes(course2)
);

function getFinalPrice(price, discount) {
  return ((price * (100 - discount)) / 100).toFixed(2);
}
showFunction(
  "getFinalPrice",
  "ডিসকাউন্টের পর মূল্য কত দাঁড়াবে তা গণনা করে।",
  "getFinalPrice(100, 25)",
  getFinalPrice(100, 25)
);

function toggleChapter(currentIndex, clickedIndex) {
  return currentIndex === clickedIndex ? null : clickedIndex;
}
showFunction(
  "toggleChapter",
  "একই চ্যাপ্টার আবার ক্লিক করলে বন্ধ করে দেয়, অন্য চ্যাপ্টার ক্লিক করলে খোলে।",
  "toggleChapter(2, 2)",
  toggleChapter(2, 2)
);
showFunction(
  "toggleChapter",
  "নতুন চ্যাপ্টার খোলার সময় পুরানোটি বন্ধ করে দেয়।",
  "toggleChapter(1, 2)",
  toggleChapter(1, 2)
);

function formatDuration(minutes) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h > 0 ? `${h}h ` : ""}${m}m`;
}
showFunction(
  "formatDuration",
  "মিনিটকে ঘন্টা ও মিনিটে রূপান্তর করে।",
  "formatDuration(125)",
  formatDuration(125)
);
showFunction(
  "formatDuration",
  "৫০ মিনিটে কোনো ঘন্টা নেই।",
  "formatDuration(50)",
  formatDuration(50)
);

function countFreePreviews(course) {
  let count = 0;
  course.chapters.forEach(ch => {
    ch.chapterContent.forEach(lec => {
      if (lec.isFreePreview) count++;
    });
  });
  return count;
}
const course3 = {
  chapters: [
    {
      chapterContent: [
        { lectureTitle: "Intro", isFreePreview: true },
        { lectureTitle: "Setup", isFreePreview: false },
      ]
    },
    {
      chapterContent: [
        { lectureTitle: "Basics", isFreePreview: true }
      ]
    }
  ]
};
showFunction(
  "countFreePreviews",
  "কোর্সে কয়টি ফ্রি প্রিভিউ লেকচার আছে তা গণনা করে।",
  "countFreePreviews(course3)",
  countFreePreviews(course3)
);
