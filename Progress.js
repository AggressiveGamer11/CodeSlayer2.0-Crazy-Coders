"use strict";

const escapeHTML = value => String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
})[character]);

function isQuizResult(value) {
    return value &&
        typeof value === "object" &&
        Number.isFinite(Number(value.correctCount)) &&
        Number.isFinite(Number(value.totalQuestions)) &&
        Number(value.totalQuestions) > 0;
}

function loadResults() {
    let state;

    try {
        state = JSON.parse(localStorage.getItem("quizState") || "{}");
    } catch {
        state = {};
    }

    let entries = [];

    if (Array.isArray(state)) {
        entries = state.map((result, index) => [`Quiz ${index + 1}`, result]);
    } else if (isQuizResult(state)) {
        entries = [[state.quizId || state.id || "Quiz", state]];
    } else if (state && typeof state === "object") {
        entries = Object.entries(state);
    }

    return entries
        .filter(([, result]) => isQuizResult(result))
        .map(([id, result]) => {
            const correct = Number(result.correctCount);
            const total = Number(result.totalQuestions);
            const storedScore = Number(result.score);
            const calculatedScore = (correct / total) * 100;

            // Supports scores stored as percentages or fractions from 0 to 1.
            const score = Number.isFinite(storedScore)
                ? storedScore >= 0 && storedScore <= 1
                    ? storedScore * 100
                    : storedScore
                : calculatedScore;

            return {
                id: String(result.quizId || result.id || id),
                correct,
                total,
                percent: Math.round(Math.max(0, Math.min(100, score))),
                date: result.date || null
            };
        })
        .sort((first, second) =>
            new Date(second.date || 0).getTime() - new Date(first.date || 0).getTime()
        );
}

function displayName(id) {
    return id.replace(/[-_]/g, " ").replace(/\b\w/g, character => character.toUpperCase());
}

function formatDate(value) {
    if (!value) return "Date not recorded";

    const date = new Date(value);
    return Number.isNaN(date.getTime())
        ? "Date not recorded"
        : date.toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric"
        });
}

function renderProgress() {
    const results = loadResults();
    const dateFilter = document.getElementById("dateFilter");
    const selectedDays = dateFilter.value;
    const cutoff = selectedDays === "all"
        ? null
        : Date.now() - Number(selectedDays) * 24 * 60 * 60 * 1000;

    const visibleResults = results.filter(result => {
        if (cutoff === null) return true;
        if (!result.date) return false;

        const timestamp = new Date(result.date).getTime();
        return Number.isFinite(timestamp) && timestamp >= cutoff;
    });

    const average = results.length
        ? Math.round(results.reduce((sum, result) => sum + result.percent, 0) / results.length)
        : null;
    const best = results.length
        ? Math.max(...results.map(result => result.percent))
        : null;
    const correctTotal = results.reduce((sum, result) => sum + result.correct, 0);
    const questionTotal = results.reduce((sum, result) => sum + result.total, 0);

    document.getElementById("quizCount").textContent = results.length;
    document.getElementById("averageScore").textContent =
        average === null ? "--" : `${average}%`;
    document.getElementById("bestScore").textContent =
        best === null ? "--" : `${best}%`;
    document.getElementById("correctAnswers").textContent = correctTotal;
    document.getElementById("questionTotal").textContent =
        `out of ${questionTotal} questions`;
    document.getElementById("ringScore").textContent =
        average === null ? "--" : `${average}%`;

    const progressRing = document.getElementById("progressRing");
    progressRing.style.setProperty("--progress", `${average || 0}%`);
    progressRing.setAttribute(
        "aria-label",
        average === null ? "No quiz scores recorded" : `Average score: ${average}%`
    );

    document.getElementById("progressMessage").textContent = results.length
        ? `You've completed ${results.length} ${results.length === 1 ? "quiz" : "quizzes"}. Keep practicing to improve your personal best.`
        : "Complete a quiz to start tracking your learning progress.";

    const chart = document.getElementById("scoreChart");

    if (!visibleResults.length) {
        chart.innerHTML = '<div class="empty" style="width:100%">No quiz attempts found for this period.</div>';
    } else {
        chart.innerHTML = visibleResults
            .slice(0, 12)
            .reverse()
            .map(result => {
                const dateLabel = result.date
                    ? new Date(result.date).toLocaleDateString(undefined, {
                        month: "short",
                        day: "numeric"
                    })
                    : "Quiz";

                return `
                    <div class="chart-item" title="${escapeHTML(displayName(result.id))}: ${result.percent}%">
                        <span class="chart-score">${result.percent}%</span>
                        <div class="bar-track">
                            <div class="bar" style="height:${Math.max(result.percent, 3)}%"></div>
                        </div>
                        <span class="chart-date">${escapeHTML(dateLabel)}</span>
                    </div>`;
            })
            .join("");
    }

    const attemptList = document.getElementById("attemptList");

    attemptList.innerHTML = results.length
        ? results.slice(0, 8).map(result => `
            <article class="attempt">
                <div>
                    <strong>${escapeHTML(displayName(result.id))}</strong>
                    <small>${result.correct} correct out of ${result.total} questions</small>
                </div>
                <small class="attempt-date">${escapeHTML(formatDate(result.date))}</small>
                <span class="score-pill">${result.percent}%</span>
            </article>
        `).join("")
        : '<div class="empty">No quiz results yet.<br><a href="Quiz.html">Take your first quiz</a></div>';
}

const email = localStorage.getItem("studentEmail") || "";
const studentName = localStorage.getItem("studentName") || email.split("@")[0] || "Student";
document.getElementById("userAvatar").textContent =
    studentName.trim().slice(0, 2).toUpperCase();

document.getElementById("dateFilter").addEventListener("change", renderProgress);

window.addEventListener("storage", event => {
    if (event.key === "quizState") renderProgress();
});

renderProgress();