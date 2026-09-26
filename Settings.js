"use strict";

const form = document.getElementById("settingsForm");
const emailInput = document.getElementById("studentEmail");
const nameInput = document.getElementById("studentName");
const themeInput = document.getElementById("theme");
const emailUpdatesInput = document.getElementById("emailUpdates");
const quizRemindersInput = document.getElementById("quizReminders");
const saveStatus = document.getElementById("saveStatus");
const userAvatar = document.getElementById("userAvatar");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

function readPreferences() {
    try {
        const value = JSON.parse(localStorage.getItem("studentSettings") || "{}");
        return value && typeof value === "object" && !Array.isArray(value) ? value : {};
    } catch {
        return {};
    }
}

function applyTheme(theme) {
    const isDark = theme === "dark" || (theme === "system" && systemTheme.matches);
    document.body.classList.toggle("dark", isDark);
}

function updateAvatar(name, email) {
    const label = (name.trim() || email.split("@")[0] || "student").trim();
    if (userAvatar) userAvatar.textContent = label.slice(0, 2).toUpperCase();
}

function getCurrentSettings() {
    return {
        name: nameInput.value,
        email: emailInput.value,
        theme: themeInput.value,
        emailUpdates: emailUpdatesInput.checked,
        quizReminders: quizRemindersInput.checked
    };
}

function applySettings(settings) {
    nameInput.value = settings.name || "";
    emailInput.value = settings.email || "";
    themeInput.value = settings.theme || "system";
    emailUpdatesInput.checked = Boolean(settings.emailUpdates);
    quizRemindersInput.checked = Boolean(settings.quizReminders);

    applyTheme(themeInput.value);
    updateAvatar(nameInput.value, emailInput.value);
}

const savedPreferences = readPreferences();
let savedSettings = {
    name: localStorage.getItem("studentName") || "",
    email: localStorage.getItem("studentEmail") || "",
    theme: savedPreferences.theme || "system",
    emailUpdates: savedPreferences.emailUpdates,
    quizReminders: savedPreferences.quizReminders
};

applySettings(savedSettings);

themeInput.addEventListener("change", () => applyTheme(themeInput.value));

systemTheme.addEventListener("change", () => {
    if (themeInput.value === "system") applyTheme("system");
});

form.addEventListener("submit", event => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const settings = getCurrentSettings();

    try {
        localStorage.setItem("studentName", settings.name.trim());
        localStorage.setItem("studentEmail", settings.email.trim());
        localStorage.setItem("studentSettings", JSON.stringify({
            theme: settings.theme,
            emailUpdates: settings.emailUpdates,
            quizReminders: settings.quizReminders
        }));

        savedSettings = { ...settings, name: settings.name.trim(), email: settings.email.trim() };
        applySettings(savedSettings);
        saveStatus.textContent = "Settings saved.";
    } catch {
        saveStatus.textContent = "Could not save settings. Please check your browser storage.";
    }
});

document.getElementById("resetBtn").addEventListener("click", () => {
    applySettings(savedSettings);
    saveStatus.textContent = "Unsaved changes have been reset.";
});

document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("studentLoggedIn");
    window.location.href = "Login.html";
});