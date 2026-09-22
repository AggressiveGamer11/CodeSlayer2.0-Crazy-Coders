// ================= QUIZ REPOSITORY & LOGIC =================

const QUIZ_DATA = [
    {
        id: "js-basics",
        title: "JavaScript Basics & Data Types",
        desc: "Test your fundamental knowledge of variables, data types, primitive vs reference types, and basic operators.",
        subject: "JavaScript",
        difficulty: "easy",
        timeMinutes: 10,
        questions: [
            {
                q: "Which keyword declares a block-scoped variable that can be reassigned?",
                options: ["var", "let", "const", "static"],
                answer: 1
            },
            {
                q: "What is the return value of typeof null in JavaScript?",
                options: ["'null'", "'undefined'", "'object'", "'number'"],
                answer: 2
            },
            {
                q: "Which expression evaluates to true?",
                options: ["0 == false", "0 === false", "NaN === NaN", "null === undefined"],
                answer: 0
            },
            {
                q: "What does Array.prototype.push() return?",
                options: ["The pushed item", "The modified array", "The new length of the array", "undefined"],
                answer: 2
            }
        ]
    },
    {
        id: "js-functions",
        title: "JavaScript Functions & Scope",
        desc: "Master function declarations, arrow functions, parameter defaults, and scope chain behavior.",
        subject: "JavaScript",
        difficulty: "easy",
        timeMinutes: 8,
        questions: [
            {
                q: "How do arrow functions handle the 'this' keyword?",
                options: [
                    "They bind 'this' dynamically at invocation",
                    "They inherit 'this' lexically from their enclosing scope",
                    "They set 'this' to the global window object always",
                    "They throw a TypeError if 'this' is referenced"
                ],
                answer: 1
            },
            {
                q: "What is the default return value of a function without an explicit return statement?",
                options: ["null", "false", "0", "undefined"],
                answer: 3
            },
            {
                q: "Which scope is created when using let/const inside an if statement?",
                options: ["Global scope", "Function scope", "Block scope", "Module scope"],
                answer: 2
            }
        ]
    },
    {
        id: "js-dom-async",
        title: "DOM Manipulation & Async JS",
        desc: "Practice query selectors, event listeners, Promises, and async/await handling.",
        subject: "JavaScript",
        difficulty: "medium",
        timeMinutes: 12,
        questions: [
            {
                q: "Which method selects all matching elements in the DOM as a NodeList?",
                options: ["document.getElementById", "document.querySelector", "document.querySelectorAll", "document.getElementsByClassName"],
                answer: 2
            },
            {
                q: "What state is a Promise in when initialized before resolve/reject?",
                options: ["fulfilled", "pending", "rejected", "settled"],
                answer: 1
            },
            {
                q: "What keyword must precede a function definition to use 'await' inside it?",
                options: ["async", "defer", "promise", "sync"],
                answer: 0
            },
            {
                q: "Which event fires when the initial HTML document has been completely loaded and parsed?",
                options: ["load", "DOMContentLoaded", "ready", "pagehide"],
                answer: 1
            }
        ]
    },
    {
        id: "js-es6",
        title: "ES6+ Modern Features & Destructuring",
        desc: "Evaluate your understanding of spread/rest operators, destructuring, template literals, and Sets.",
        subject: "JavaScript",
        difficulty: "medium",
        timeMinutes: 10,
        questions: [
            {
                q: "What is the output of [...new Set([1, 2, 2, 3, 3, 4])]?",
                options: ["[1, 2, 3, 4]", "[1, 2, 2, 3, 3, 4]", "Set(4)", "undefined"],
                answer: 0
            },
            {
                q: "How do you extract property 'a' from object obj = {a: 10, b: 20} into a variable 'a'?",
                options: ["const a = obj(a);", "const { a } = obj;", "const [ a ] = obj;", "const a = obj.get('a');"],
                answer: 1
            },
            {
                q: "Which array method creates a new array with all elements that pass a test?",
                options: ["map()", "filter()", "reduce()", "forEach()"],
                answer: 1
            }
        ]
    },
    {
        id: "js-advanced",
        title: "Closures, Prototypes & Event Loop",
        desc: "Challenge yourself with deep JS topics: lexical environment, prototype inheritance, and microtasks.",
        subject: "JavaScript",
        difficulty: "hard",
        timeMinutes: 15,
        questions: [
            {
                q: "What is a closure in JavaScript?",
                options: [
                    "A function bundled with references to its surrounding lexical state",
                    "A syntax error caused by unclosed parentheses",
                    "A built-in method for closing browser tabs",
                    "A private class method defined with #"
                ],
                answer: 0
            },
            {
                q: "In what order will logs appear for: console.log(1); Promise.resolve().then(()=>console.log(2)); setTimeout(()=>console.log(3),0);?",
                options: ["1, 2, 3", "1, 3, 2", "2, 1, 3", "3, 2, 1"],
                answer: 0
            },
            {
                q: "Where do Promises queue their callbacks in the JavaScript event loop?",
                options: ["Macrotask queue", "Microtask queue", "Call stack", "Heap memory"],
                answer: 1
            }
        ]
    },
    {
        id: "math-quadratics",
        title: "Quadratic Equations & Roots",
        desc: "Solve quadratic formulas, discriminants, and vertex forms in algebra.",
        subject: "Mathematics",
        difficulty: "easy",
        timeMinutes: 15,
        questions: [
            {
                q: "What are the roots of x² - 5x + 6 = 0?",
                options: ["x = 2 and x = 3", "x = -2 and x = -3", "x = 1 and x = 5", "x = 0 and x = 6"],
                answer: 0
            },
            {
                q: "What does a discriminant b² - 4ac > 0 indicate for real coefficients?",
                options: ["Two distinct real roots", "One repeated real root", "Two complex conjugate roots", "No mathematical solution"],
                answer: 0
            }
        ]
    },
    {
        id: "math-calculus",
        title: "Differential & Integral Calculus",
        desc: "Test your calculus knowledge on derivatives, integration rules, and limits.",
        subject: "Mathematics",
        difficulty: "medium",
        timeMinutes: 15,
        questions: [
            {
                q: "What is the derivative of f(x) = sin(x)?",
                options: ["cos(x)", "-cos(x)", "tan(x)", "sec²(x)"],
                answer: 0
            },
            {
                q: "What is the indefinite integral ∫ 2x dx?",
                options: ["x² + C", "2x² + C", "x + C", "2 + C"],
                answer: 0
            }
        ]
    },
    {
        id: "physics-thermo",
        title: "Heat & Thermodynamics",
        desc: "Test concepts on heat transfer, first and second laws of thermodynamics, and entropy.",
        subject: "Physics",
        difficulty: "medium",
        timeMinutes: 20,
        questions: [
            {
                q: "What is the equation for the First Law of Thermodynamics?",
                options: ["ΔU = Q - W", "F = ma", "PV = nRT", "E = mc²"],
                answer: 0
            },
            {
                q: "Which law states that entropy of an isolated system always increases over time?",
                options: ["Zeroth Law", "First Law", "Second Law", "Third Law"],
                answer: 2
            }
        ]
    },
    {
        id: "chem-reactions",
        title: "Organic Reaction Mechanisms",
        desc: "Test nucleophilic substitution, elimination, and electrophilic additions.",
        subject: "Chemistry",
        difficulty: "hard",
        timeMinutes: 15,
        questions: [
            {
                q: "Which mechanism proceeds via a concerted single step causing inversion of stereochemistry?",
                options: ["SN2", "SN1", "E1", "E2"],
                answer: 0
            },
            {
                q: "What intermediate is formed during an SN1 reaction?",
                options: ["Carbocation", "Free radical", "Carbanion", "Epoxide"],
                answer: 0
            }
        ]
    }
];

const $ = id => document.getElementById(id);

let activeQuiz = null;
let currentQuestion = 0;
let answers = [];

const getState = () =>
    JSON.parse(localStorage.getItem("quizState") || "{}");

const saveState = state =>
    localStorage.setItem("quizState", JSON.stringify(state));


// ---------- AUTH ----------

if (localStorage.getItem("studentLoggedIn") !== "true") {
    window.location.replace("Login.html");
}

const email =
    localStorage.getItem("studentEmail") || "student@example.com";

if ($("userAvatar")) {
    $("userAvatar").textContent =
        email.split("@")[0].slice(0, 2).toUpperCase();
}

$("logoutBtn")?.addEventListener("click", () => {
    localStorage.removeItem("studentLoggedIn");
    window.location.href = "Login.html";
});


// ---------- FILTERS ----------

let subject = "all";
let difficulty = "all";
let status = "all";

document.querySelectorAll("#subjectFilter .filter-tab").forEach(tab => {
    tab.addEventListener("click", () => {
        document.querySelectorAll("#subjectFilter .filter-tab")
            .forEach(t => t.classList.remove("active"));

        tab.classList.add("active");
        subject = tab.dataset.subject;
        renderQuizzes();
    });
});

document.querySelectorAll("#difficultyFilter .filter-tab").forEach(tab => {
    tab.addEventListener("click", () => {
        document.querySelectorAll("#difficultyFilter .filter-tab")
            .forEach(t => t.classList.remove("active"));

        tab.classList.add("active");
        difficulty = tab.dataset.difficulty;
        renderQuizzes();
    });
});

document.querySelectorAll("#statusFilter .filter-tab").forEach(tab => {
    tab.addEventListener("click", () => {
        document.querySelectorAll("#statusFilter .filter-tab")
            .forEach(t => t.classList.remove("active"));

        tab.classList.add("active");
        status = tab.dataset.status;
        renderQuizzes();
    });
});


// ---------- SHOW QUIZZES ----------

function renderQuizzes() {

    const data = getState();
    const grid = $("quizGrid");

    if (!grid) return;

    const solved = QUIZ_DATA.filter(q => data[q.id]?.solved);

    $("statTotal").textContent = QUIZ_DATA.length;
    $("statSolved").textContent = solved.length;
    $("statUnsolved").textContent =
        QUIZ_DATA.length - solved.length;

    $("statSolvedPct").textContent =
        Math.round(solved.length / QUIZ_DATA.length * 100) +
        "% completed";

    $("statAvgScore").textContent = solved.length
        ? Math.round(
            solved.reduce((sum, q) => sum + data[q.id].score, 0)
            / solved.length
        ) + "%"
        : "--";


    const quizzes = QUIZ_DATA.filter(q => {

        const solvedQuiz = data[q.id]?.solved;

        return (
            (subject === "all" || q.subject === subject) &&
            (difficulty === "all" || q.difficulty === difficulty) &&
            (
                status === "all" ||
                (status === "solved" && solvedQuiz) ||
                (status === "unsolved" && !solvedQuiz)
            )
        );
    });


    grid.innerHTML = quizzes.map(q => {

        const solvedQuiz = data[q.id]?.solved;

        return `
            <div class="quiz-card">

                <div>
                    <div class="quiz-card-header">
                        <div class="badges">

                            <span class="quiz-badge badge-${q.difficulty}">
                                ${q.difficulty}
                            </span>

                            <span class="quiz-badge ${solvedQuiz
                ? "badge-solved"
                : "badge-unsolved"
            }">
                                ${solvedQuiz ? "Solved ✓" : "Unsolved"}
                            </span>

                        </div>
                    </div>

                    <h3 class="quiz-card-title">
                        ${q.title}
                    </h3>

                    <p class="quiz-card-desc">
                        ${q.desc}
                    </p>
                </div>

                <div>

                    <div class="quiz-card-meta">
                        <span>📚 ${q.subject}</span>
                        <span>❓ ${q.questions.length} questions</span>
                        <span>⏱ ${q.timeMinutes} min</span>
                    </div>

                    <div class="quiz-card-footer">

                        <button
                            class="start-quiz-btn"
                            data-id="${q.id}">
                            ${solvedQuiz
                ? `Retake Quiz (${data[q.id].score}%)`
                : "Start Quiz →"}
                        </button>

                    </div>

                </div>

            </div>
        `;
    }).join("");


    document.querySelectorAll(".start-quiz-btn").forEach(btn => {

        btn.addEventListener("click", () => {
            openQuizModal(btn.dataset.id);
        });

    });
}


// ---------- OPEN QUIZ ----------

function openQuizModal(id) {

    activeQuiz = QUIZ_DATA.find(q => q.id === id);

    if (!activeQuiz) return;

    currentQuestion = 0;

    answers =
        new Array(activeQuiz.questions.length).fill(null);

    $("modalQuizTitle").textContent =
        activeQuiz.title;

    $("quizSubjectTag").textContent =
        `${activeQuiz.subject} · ${activeQuiz.difficulty.toUpperCase()}`;

    $("quizQuestionView").style.display = "block";
    $("quizResultsView").style.display = "none";

    $("quizModal").classList.add("active");

    showQuestion();
}


// ---------- SHOW QUESTION ----------

function showQuestion() {

    const q =
        activeQuiz.questions[currentQuestion];

    const total =
        activeQuiz.questions.length;


    $("modalCounter").textContent =
        `Question ${currentQuestion + 1} of ${total}`;

    $("modalQuestionText").textContent =
        q.q;

    $("modalProgress").style.width =
        `${((currentQuestion + 1) / total) * 100}%`;


    const options = $("modalOptions");

    options.innerHTML = "";


    q.options.forEach((option, index) => {

        const button =
            document.createElement("button");

        button.className =
            "option-btn";

        if (answers[currentQuestion] === index) {
            button.classList.add("selected");
        }

        button.innerHTML = `
            <span>
                ${String.fromCharCode(65 + index)}.
            </span>

            <span>
                ${option}
            </span>
        `;

        button.addEventListener("click", () => {
            selectOption(index);
        });

        options.appendChild(button);
    });


    $("modalNextBtn").disabled =
        answers[currentQuestion] === null;

    $("modalNextBtn").textContent =
        currentQuestion === total - 1
            ? "Submit Quiz ✓"
            : "Next Question →";
}


// ---------- SELECT ANSWER ----------

function selectOption(index) {

    answers[currentQuestion] = index;

    showQuestion();
}


// ---------- NEXT QUESTION ----------

$("modalNextBtn")?.addEventListener("click", () => {

    if (answers[currentQuestion] === null)
        return;


    if (currentQuestion <
        activeQuiz.questions.length - 1) {

        currentQuestion++;

        showQuestion();

    } else {

        finishQuiz();

    }

});


// ---------- FINISH QUIZ ----------

function finishQuiz() {

    let correct = 0;

    activeQuiz.questions.forEach((q, i) => {

        if (answers[i] === q.answer) {
            correct++;
        }

    });


    const total =
        activeQuiz.questions.length;

    const score =
        Math.round((correct / total) * 100);


    const data = getState();

    data[activeQuiz.id] = {
        solved: true,
        score: score,
        correctCount: correct,
        totalQuestions: total,
        date: new Date().toISOString()
    };

    saveState(data);


    $("quizQuestionView").style.display =
        "none";

    $("quizResultsView").style.display =
        "block";


    $("resultScoreCircle").textContent =
        score + "%";

    $("resultHeading").textContent =
        score >= 70
            ? "🎉 Quiz Completed!"
            : "💪 Good Try!";

    $("resultText").textContent =
        `You scored ${correct} out of ${total} questions correctly.`;


    renderQuizzes();
}


// ---------- CLOSE ----------

$("modalClose")?.addEventListener("click", () => {

    $("quizModal").classList.remove("active");

});

$("modalFinishBtn")?.addEventListener("click", () => {

    $("quizModal").classList.remove("active");

});


// ---------- START ----------

renderQuizzes();