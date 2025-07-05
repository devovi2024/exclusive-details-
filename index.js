const output = document.getElementById("output");

function showFunction(title, explanation, code, result, question, answer) {
  const block = document.createElement("section");
  block.className = "function-block";

  block.innerHTML = `
    <h2><span class="material-icons" aria-hidden="true">code</span> ${title}</h2>
    <p class="description">${explanation}</p>
    <pre class="code">${code}</pre>
    <div class="result">🖥️ Output: <code>${result}</code></div>
    <div class="question">❓ প্রশ্ন: ${question}</div>
    <div class="answer">💡 উত্তর: ${answer}</div>
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
  "এই ফাংশনটি কোর্সের লিস্ট থেকে আইডি দিয়ে নির্দিষ্ট কোর্স অবজেক্ট খুঁজে বের করে।",
  `function findCourseById(courses, id) {
  return courses.find(course => course.course_id === id);
}

findCourseById(allCourses, "2")`,
  JSON.stringify(courseFound),
  "কী কাজ করে?",
  "এই ফাংশনটি courses অ্যারেতে find() ব্যবহার করে course_id মিলিয়ে খুঁজে দেয়।"
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
  "এই ফাংশনটি একটি কোর্সের সব চ্যাপ্টারের লেকচারের সংখ্যা গোনে।",
  `function countLectures(course) {
  return course.chapters.reduce((total, chapter) => {
    return total + chapter.chapterContent.length;
  }, 0);
}

countLectures(course1)`,
  countLectures(course1),
  "কেন reduce ব্যবহার?",
  "reduce দিয়ে সব chapters এর lecture সংখ্যা যোগ করা হয়।"
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
  "কোর্সের সব লেকচারের মোট সময় (মিনিটে) বের করে।",
  `function totalCourseMinutes(course) {
  let total = 0;
  course.chapters.forEach(chapter => {
    chapter.chapterContent.forEach(lecture => {
      total += lecture.lectureDuration;
    });
  });
  return total;
}

totalCourseMinutes(course2)`,
  totalCourseMinutes(course2),
  "কেন forEach?",
  "forEach দিয়ে প্রতিটি lectureDuration যোগ করা হয় total এ।"
);

function getFinalPrice(price, discount) {
  return ((price * (100 - discount)) / 100).toFixed(2);
}
showFunction(
  "getFinalPrice",
  "মূল্য থেকে ডিসকাউন্ট কেটে ফাইনাল মূল্য বের করে (দশমিকসহ)।",
  `function getFinalPrice(price, discount) {
  return ((price * (100 - discount)) / 100).toFixed(2);
}

getFinalPrice(100, 25)`,
  getFinalPrice(100, 25),
  "কীভাবে কাজ করে?",
  "প্রাইস থেকে ডিসকাউন্ট শতাংশ কমিয়ে বাকি ভাগ হিসাব করে এবং ২ দশমিকে রূপান্তর করে।"
);

function toggleChapter(currentIndex, clickedIndex) {
  return currentIndex === clickedIndex ? null : clickedIndex;
}
showFunction(
  "toggleChapter",
  "একই ইনডেক্স ক্লিক করলে বন্ধ করে দেয়, অন্য ক্লিক করলে ঐ ইনডেক্স রিটার্ন করে।",
  `function toggleChapter(currentIndex, clickedIndex) {
  return currentIndex === clickedIndex ? null : clickedIndex;
}

toggleChapter(2, 2)
toggleChapter(1, 2)`,
  `toggleChapter(2,2) => ${toggleChapter(2, 2)}\ntoggleChapter(1,2) => ${toggleChapter(1, 2)}`,
  "কেন এমন কাজ করে?",
  "একই ইনডেক্স থাকলে null রিটার্ন করে (বন্ধ), না হলে নতুন ইনডেক্স দেয় (খোলা)।"
);

function formatDuration(minutes) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h > 0 ? `${h}h ` : ""}${m}m`;
}
showFunction(
  "formatDuration",
  "মিনিট থেকে ঘন্টা ও মিনিটের ফরম্যাটে রূপান্তর করে।",
  `function formatDuration(minutes) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return \`\${h > 0 ? \`\${h}h \` : ""}\${m}m\`;
}

formatDuration(125)
formatDuration(50)`,
  `formatDuration(125) => ${formatDuration(125)}\nformatDuration(50) => ${formatDuration(50)}`,
  "কেন এই ফরম্যাট?",
  "যদি ঘন্টা ০ হয় তবে ঘন্টা দেখায় না, শুধু মিনিট দেখায়।"
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
  "কোর্সের ফ্রি প্রিভিউ লেকচার সংখ্যা গোনে।",
  `function countFreePreviews(course) {
  let count = 0;
  course.chapters.forEach(ch => {
    ch.chapterContent.forEach(lec => {
      if (lec.isFreePreview) count++;
    });
  });
  return count;
}

countFreePreviews(course3)`,
  countFreePreviews(course3),
  "কেন দরকার?",
  "কেননা, ফ্রি লেকচার সংখ্যা জানতে শিক্ষার্থীদের সুবিধা হয়।"
);
