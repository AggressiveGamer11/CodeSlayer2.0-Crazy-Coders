/**
 * Material.js - Study Materials Manager
 * Handles dataset rendering, live searching, subject filtering,
 * modal notes viewer, and "Ask Tutor Later" bookmarking system.
 */

// Sample Study Materials Dataset
const MATERIALS_DATA = [
    {
        id: "mat_1",
        title: "Calculus & Differential Equations Master Guide",
        subject: "Mathematics",
        subjectBg: "bg-math",
        type: "PDF",
        typeIcon: "📄",
        difficulty: "Intermediate",
        diffClass: "diff-intermediate",
        icon: "∫",
        description: "Complete guide covering derivatives, integration techniques, limits, and ordinary differential equations with step-by-step solved examples.",
        meta: "14 Pages · 4.9 ★ · Math",
        readTime: "25 min read",
        author: "Prof. Alan Turing",
        summary: "Essential reference manual for multivariable calculus and introductory ODEs.",
        formulas: [
            "d/dx [f(g(x))] = f'(g(x)) · g'(x)  (Chain Rule)",
            "∫ u dv = uv - ∫ v du  (Integration by Parts)",
            "dy/dx + P(x)y = Q(x)  (First Order Linear ODE)"
        ],
        takeaways: [
            "Master the substitution method before tackling integration by parts.",
            "Always check initial value conditions when finding particular solutions.",
            "Understand geometric interpretations of gradients and directional derivatives."
        ],
        detailedNotes: `
      <h3>1. Fundamentals of Differentiation</h3>
      <p>Differentiation measures the rate at which a function changes with respect to a variable. The derivative of <em>f(x)</em> at <em>x = a</em> represents the slope of the tangent line to the function at that point.</p>
      
      <h3>2. Advanced Integration Techniques</h3>
      <p>When encountering complex integrals, evaluate trigonometric substitution or partial fraction decomposition. For integrals involving products of algebraic and transcendental functions, use Integration by Parts.</p>
      
      <h3>3. Differential Equations Application</h3>
      <p>Differential equations model physical phenomena ranging from population growth to radioactive decay and oscillatory motion in mechanical systems.</p>
    `
    },
    {
        id: "mat_2",
        title: "Quantum Mechanics & Wave-Particle Duality",
        subject: "Physics",
        subjectBg: "bg-physics",
        type: "Video Notes",
        typeIcon: "🎥",
        difficulty: "Advanced",
        diffClass: "diff-advanced",
        icon: "⚛",
        description: "Detailed breakdown of the double-slit experiment, Schrödinger's equation, and quantum state superpositions.",
        meta: "18 min video · 4.8 ★ · Physics",
        readTime: "18 min watch",
        author: "Dr. Richard Feynman",
        summary: "Visual and mathematical intuition behind quantum wave mechanics and probability densities.",
        formulas: [
            "iℏ ∂/∂t Ψ(r,t) = Ĥ Ψ(r,t)  (Time-Dependent Schrödinger Equation)",
            "λ = h / p  (de Broglie Wavelength)",
            "Δx · Δp ≥ ℏ / 2  (Heisenberg Uncertainty Principle)"
        ],
        takeaways: [
            "Particles exhibit both wave-like and particle-like properties depending on measurement.",
            "Quantum states collapse into definite eigenvalues upon wave function measurement.",
            "Superposition allows quantum systems to exist in linear combinations of states."
        ],
        detailedNotes: `
      <h3>1. The Wave Function Ψ</h3>
      <p>The wave function Ψ contains all observable information about a quantum system. Its squared magnitude |Ψ|² represents the probability density of locating a particle in space.</p>
      
      <h3>2. Heisenberg Uncertainty Principle</h3>
      <p>It is fundamentally impossible to simultaneously know both the exact position and exact momentum of a quantum particle with arbitrary precision.</p>
    `
    },
    {
        id: "mat_3",
        title: "Data Structures & Algorithms Cheat Sheet",
        subject: "Computer Science",
        subjectBg: "bg-cs",
        type: "Cheatsheet",
        typeIcon: "⚡",
        difficulty: "Beginner",
        diffClass: "diff-beginner",
        icon: "💻",
        description: "Quick lookup table for Big-O time and space complexity across Arrays, Trees, Graphs, Hash Tables, and Sorting algorithms.",
        meta: "4 Pages · 5.0 ★ · CS",
        readTime: "10 min reference",
        author: "Ada Lovelace",
        summary: "Comprehensive complexity cheat sheet for technical interview prep and daily software engineering.",
        formulas: [
            "Hash Table Search: O(1) Average | O(n) Worst",
            "QuickSort: O(n log n) Average | O(n²) Worst",
            "Binary Search Tree: O(log n) Balanced | O(n) Degenerate"
        ],
        takeaways: [
            "Choose Hash Maps for constant time key-value lookups.",
            "Use Binary Search only on pre-sorted arrays.",
            "Understand space-time trade-offs when choosing dynamic programming over recursion."
        ],
        detailedNotes: `
      <h3>1. Time Complexity Highlights</h3>
      <p>Big-O notation quantifies the worst-case growth rate of an algorithm relative to input size N.</p>
      
      <h3>2. Essential Data Structures</h3>
      <p>Arrays provide fast O(1) index access but linear O(N) insertions. Linked Lists offer fast O(1) insertions but require O(N) traversal.</p>
    `
    },
    {
        id: "mat_4",
        title: "Organic Chemistry Reaction Mechanisms",
        subject: "Chemistry",
        subjectBg: "bg-chem",
        type: "Notes",
        typeIcon: "📝",
        difficulty: "Advanced",
        diffClass: "diff-advanced",
        icon: "🧪",
        description: "Step-by-step electron pushing diagrams for SN1, SN2, E1, E2 nucleophilic substitutions and electrophilic aromatic additions.",
        meta: "12 Pages · 4.7 ★ · Chemistry",
        readTime: "30 min read",
        author: "Dr. Marie Curie",
        summary: "Master curved-arrow notation and stereochemical outcomes in organic synthesis reactions.",
        formulas: [
            "SN2 Rate = k[Substrate][Nucleophile] (Bimolecular, Inversion of Config)",
            "SN1 Rate = k[Substrate] (Unimolecular, Carbocation Intermediate, Racemization)",
            "E2 Rate = k[Substrate][Base] (Anti-periplanar geometry required)"
        ],
        takeaways: [
            "Primary alkyl halides favor SN2 with strong nucleophiles.",
            "Tertiary alkyl halides favor SN1/E1 due to carbocation stability.",
            "Polar aprotic solvents accelerate SN2 reactions."
        ],
        detailedNotes: `
      <h3>1. SN1 vs SN2 Mechanisms</h3>
      <p>SN2 is a concerted single-step reaction causing inversion of stereochemistry at the chiral center. SN1 involves a carbocation intermediate leading to racemic mixtures.</p>
    `
    },
    {
        id: "mat_5",
        title: "Cell Biology & Molecular Genetics Deck",
        subject: "Biology",
        subjectBg: "bg-bio",
        type: "Flashcards",
        typeIcon: "🎴",
        difficulty: "Beginner",
        diffClass: "diff-beginner",
        icon: "🧬",
        description: "Active recall flashcards covering mitosis, meiosis, DNA replication, transcription, translation, and organelle functions.",
        meta: "45 Cards · 4.9 ★ · Biology",
        readTime: "15 min review",
        author: "Dr. Rosalind Franklin",
        summary: "Interactive flashcard review for AP & College General Biology cellular concepts.",
        formulas: [
            "Central Dogma: DNA → (Transcription) → RNA → (Translation) → Protein",
            "ATP Yield: ~30-32 ATP per glucose molecule in aerobic respiration",
            "Hardy-Weinberg Equilibrium: p² + 2pq + q² = 1"
        ],
        takeaways: [
            "Mitochondria generate ATP via oxidative phosphorylation.",
            "Ribosomes translate mRNA sequences into polypeptide chains.",
            "DNA Polymerase III synthesizes DNA strands in the 5' to 3' direction."
        ],
        detailedNotes: `
      <h3>1. Cellular Respiration Stages</h3>
      <p>Glycolysis (Cytosol) → Pyruvate Oxidation → Krebs Cycle (Mitochondrial Matrix) → Electron Transport Chain (Inner Membrane).</p>
    `
    },
    {
        id: "mat_6",
        title: "Python Machine Learning Architecture Blueprint",
        subject: "Computer Science",
        subjectBg: "bg-cs",
        type: "Interactive Code",
        typeIcon: "💻",
        difficulty: "Master",
        diffClass: "diff-master",
        icon: "⚡",
        description: "Hands-on PyTorch code implementations for CNNs, Transformers, Gradient Descent optimization, and hyperparameter tuning.",
        meta: "Code Repo · 5.0 ★ · AI/CS",
        readTime: "40 min hands-on",
        author: "Dr. Yann LeCun",
        summary: "Production-ready machine learning models built from scratch with clean PyTorch code.",
        formulas: [
            "Loss = - ∑ [ y log(ŷ) + (1-y) log(1-ŷ) ]  (Binary Cross-Entropy)",
            "Attention(Q,K,V) = softmax(Q Kᵀ / √d_k) V  (Scaled Dot-Product Attention)",
            "θ_t+1 = θ_t - η · ∇_θ L(θ_t)  (Gradient Descent Step)"
        ],
        takeaways: [
            "Normalize input feature vectors to stabilize gradient descent convergence.",
            "Use AdamW optimizer with cosine learning rate decay for transformer models.",
            "Implement dropout and weight decay to prevent model overfitting."
        ],
        detailedNotes: `
      <h3>1. Building Neural Networks with PyTorch</h3>
      <p>Understand tensors, autograd engine, custom nn.Module classes, forward passes, and training loops.</p>
    `
    },
    {
        id: "mat_7",
        title: "Thermodynamics & Heat Transfer Principles",
        subject: "Physics",
        subjectBg: "bg-physics",
        type: "Notes",
        typeIcon: "📝",
        difficulty: "Intermediate",
        diffClass: "diff-intermediate",
        icon: "🔥",
        description: "Comprehensive study notes on Laws of Thermodynamics, Carnot Heat Engines, Entropy, and Conduction/Convective Heat Transfer.",
        meta: "15 Pages · 4.6 ★ · Physics",
        readTime: "22 min read",
        author: "Lord Kelvin",
        summary: "Essential physics notes covering energy conservation, entropy, and heat exchangers.",
        formulas: [
            "ΔU = Q - W  (First Law of Thermodynamics)",
            "dS ≥ dQ / T  (Second Law / Entropy Inequality)",
            "Q_dot = -k A (dT/dx)  (Fourier's Law of Thermal Conduction)"
        ],
        takeaways: [
            "Energy cannot be created or destroyed, only transformed.",
            "Total entropy of an isolated system always increases over time.",
            "Carnot efficiency represents the maximum theoretical limit of heat engines."
        ],
        detailedNotes: `
      <h3>1. Carnot Engine Efficiency</h3>
      <p>Efficiency η = 1 - (T_cold / T_hot). No real heat engine can exceed the efficiency of a Carnot cycle operating between the same two temperatures.</p>
    `
    },
    {
        id: "mat_8",
        title: "Linear Algebra Vectors & Matrix Operations",
        subject: "Mathematics",
        subjectBg: "bg-math",
        type: "Cheatsheet",
        typeIcon: "⚡",
        difficulty: "Beginner",
        diffClass: "diff-beginner",
        icon: "📐",
        description: "Quick reference guide for Matrix Multiplication, Determinants, Eigenvalues, Eigenvectors, and Matrix Inversion techniques.",
        meta: "6 Pages · 4.8 ★ · Math",
        readTime: "12 min reference",
        author: "Gilbert Strang",
        summary: "Visual matrix transformation formulas essential for data science and graphics.",
        formulas: [
            "A x = λ x  (Eigenvalue / Eigenvector Equation)",
            "det(A - λI) = 0  (Characteristic Polynomial)",
            "A⁻¹ = (1 / det(A)) · adj(A)"
        ],
        takeaways: [
            "Matrix multiplication is non-commutative: AB ≠ BA in general.",
            "If det(A) = 0, the matrix is singular and non-invertible.",
            "Eigenvectors maintain their directional axis under linear transformations."
        ],
        detailedNotes: `
      <h3>1. Geometric Meaning of Determinants</h3>
      <p>The determinant represents the volume scaling factor of a linear transformation in n-dimensional space.</p>
    `
    }
];

// App State
let currentSubject = "all";
let currentType = "all";
let currentDifficulty = "all";
let searchQuery = "";
let tutorQueue = JSON.parse(localStorage.getItem("tutorQueue") || "[]");
let activeMaterialForNotes = null;

// DOM Elements Initialization
document.addEventListener("DOMContentLoaded", () => {
    setupUserHeader();
    renderMaterials();
    setupFilterListeners();
    setupSearchListener();
    updateTutorQueueBadge();

    // URL Query Param Check (e.g. ?search=math)
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get("search");
    const subjectParam = urlParams.get("subject");

    if (searchParam) {
        const searchInput = document.getElementById("searchInput");
        if (searchInput) {
            searchInput.value = searchParam;
            searchQuery = searchParam.toLowerCase();
            renderMaterials();
        }
    }

    if (subjectParam) {
        setActiveSubject(subjectParam);
    }
});

// Render Student Header Info & Auth Check
function setupUserHeader() {
    const studentLoggedIn = localStorage.getItem("studentLoggedIn");
    const studentEmail = localStorage.getItem("studentEmail") || "student@example.com";

    if (studentLoggedIn === "false") {
        window.location.replace("Login.html");
        return;
    }

    const username = studentEmail.split("@")[0];
    const displayName = username.charAt(0).toUpperCase() + username.slice(1);

    const greetingEl = document.getElementById("userGreeting");
    const avatarEl = document.getElementById("userAvatar");

    if (greetingEl) greetingEl.textContent = `Welcome, ${displayName}! 📚`;
    if (avatarEl) avatarEl.textContent = displayName.substring(0, 2).toUpperCase();

    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("studentLoggedIn");
            window.location.href = "Login.html";
        });
    }
}

// Render Materials Cards Grid
function renderMaterials() {
    const grid = document.getElementById("materialsGrid");
    if (!grid) return;

    const filtered = MATERIALS_DATA.filter((item) => {
        // Subject Filter
        if (currentSubject !== "all" && item.subject.toLowerCase() !== currentSubject.toLowerCase()) {
            return false;
        }
        // Type Filter
        if (currentType !== "all" && !item.type.toLowerCase().includes(currentType.toLowerCase())) {
            return false;
        }
        // Difficulty Filter
        if (currentDifficulty !== "all" && item.difficulty.toLowerCase() !== currentDifficulty.toLowerCase()) {
            return false;
        }
        // Search Query Filter
        if (searchQuery) {
            const titleMatch = item.title.toLowerCase().includes(searchQuery);
            const descMatch = item.description.toLowerCase().includes(searchQuery);
            const subjectMatch = item.subject.toLowerCase().includes(searchQuery);
            const authorMatch = item.author.toLowerCase().includes(searchQuery);
            return titleMatch || descMatch || subjectMatch || authorMatch;
        }

        return true;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <h3>No materials match your criteria</h3>
        <p>Try adjusting your search terms or filters above to find what you're looking for.</p>
        <button class="btn-open-notes" style="margin: 16px auto 0; width: fit-content;" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
        return;
    }

    grid.innerHTML = filtered.map((item) => {
        const isSaved = tutorQueue.some(q => q.id === item.id);
        return `
      <div class="material-card" id="card-${item.id}">
        <div class="card-banner ${item.subjectBg}">
          <span class="subject-badge">${item.subject}</span>
          <span class="type-badge">${item.typeIcon} ${item.type}</span>
          <div class="card-icon-header">${item.icon}</div>
        </div>
        <div class="card-body">
          <span class="difficulty-tag ${item.diffClass}">${item.difficulty}</span>
          <h3 class="material-title">${item.title}</h3>
          <p class="material-desc">${item.description}</p>

          <div class="card-meta">
            <span>⏱ ${item.readTime}</span>
            <span>✍ ${item.author}</span>
          </div>

          <div class="card-actions">
            <button class="btn-open-notes" onclick="openNotesModal('${item.id}')">
              📖 Open Notes
            </button>
            <button class="btn-ask-tutor" onclick="toggleAskTutorQueue('${item.id}')" title="Save this material for AI Tutor discussion">
              ${isSaved ? '✅ Saved' : '✦ Ask Tutor'}
            </button>
          </div>
        </div>
      </div>
    `;
    }).join("");
}

// Setup Event Listeners for Filters
function setupFilterListeners() {
    const subjectPills = document.querySelectorAll(".subject-pill");
    subjectPills.forEach((pill) => {
        pill.addEventListener("click", () => {
            subjectPills.forEach(p => p.classList.remove("active"));
            pill.classList.add("active");
            currentSubject = pill.dataset.subject;
            renderMaterials();
        });
    });

    const typeSelect = document.getElementById("typeFilter");
    if (typeSelect) {
        typeSelect.addEventListener("change", (e) => {
            currentType = e.target.value;
            renderMaterials();
        });
    }

    const diffSelect = document.getElementById("difficultyFilter");
    if (diffSelect) {
        diffSelect.addEventListener("change", (e) => {
            currentDifficulty = e.target.value;
            renderMaterials();
        });
    }
}

// Live Search Listener
function setupSearchListener() {
    const searchInput = document.getElementById("searchInput");
    const clearBtn = document.getElementById("clearSearchBtn");

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            searchQuery = e.target.value.trim().toLowerCase();
            if (clearBtn) {
                clearBtn.classList.toggle("show", searchQuery.length > 0);
            }
            renderMaterials();
        });
    }

    if (clearBtn) {
        clearBtn.addEventListener("click", () => {
            if (searchInput) searchInput.value = "";
            searchQuery = "";
            clearBtn.classList.remove("show");
            renderMaterials();
        });
    }
}

// Reset Filters Function
function resetFilters() {
    currentSubject = "all";
    currentType = "all";
    currentDifficulty = "all";
    searchQuery = "";

    const searchInput = document.getElementById("searchInput");
    if (searchInput) searchInput.value = "";

    const typeSelect = document.getElementById("typeFilter");
    if (typeSelect) typeSelect.value = "all";

    const diffSelect = document.getElementById("difficultyFilter");
    if (diffSelect) diffSelect.value = "all";

    const subjectPills = document.querySelectorAll(".subject-pill");
    subjectPills.forEach(p => {
        p.classList.toggle("active", p.dataset.subject === "all");
    });

    renderMaterials();
}

// Helper to activate subject programmatically
function setActiveSubject(subject) {
    currentSubject = subject;
    const subjectPills = document.querySelectorAll(".subject-pill");
    subjectPills.forEach(p => {
        p.classList.toggle("active", p.dataset.subject.toLowerCase() === subject.toLowerCase());
    });
    renderMaterials();
}

// Open Notes Modal with detailed material content
function openNotesModal(materialId) {
    const material = MATERIALS_DATA.find(m => m.id === materialId);
    if (!material) return;

    activeMaterialForNotes = material;

    const modal = document.getElementById("notesModal");
    const banner = document.getElementById("modalBanner");
    const title = document.getElementById("modalTitle");
    const subMeta = document.getElementById("modalSubMeta");
    const body = document.getElementById("modalBody");
    const askTutorBtn = document.getElementById("modalAskTutorBtn");

    if (!modal || !body) return;

    if (banner) {
        banner.className = `modal-header-banner ${material.subjectBg}`;
    }

    if (title) title.textContent = material.title;
    if (subMeta) subMeta.textContent = `${material.subject} · ${material.type} · ${material.difficulty}`;

    const isSaved = tutorQueue.some(q => q.id === material.id);
    if (askTutorBtn) {
        askTutorBtn.textContent = isSaved ? "✅ Saved in Tutor Queue" : "✦ Ask Tutor About This";
    }

    body.innerHTML = `
    <div class="notes-section">
      <h3>📌 Executive Summary</h3>
      <p>${material.summary}</p>
    </div>

    <div class="notes-section">
      <h3>⚡ Key Formulas & Core Concepts</h3>
      ${material.formulas.map(f => `<div class="formula-box">${f}</div>`).join("")}
    </div>

    <div class="notes-section">
      <h3>✨ Key Takeaways</h3>
      <ul class="takeaway-list">
        ${material.takeaways.map(t => `<li>${t}</li>`).join("")}
      </ul>
    </div>

    <div class="notes-section">
      <h3>📖 Full Lecture & Study Notes</h3>
      ${material.detailedNotes}
    </div>
  `;

    modal.classList.add("active");
}

function closeNotesModal() {
    const modal = document.getElementById("notesModal");
    if (modal) modal.classList.remove("active");
}

// Ask Tutor Queue Logic (Save later / Discuss)
function toggleAskTutorQueue(materialId) {
    const material = MATERIALS_DATA.find(m => m.id === materialId);
    if (!material) return;

    const index = tutorQueue.findIndex(q => q.id === materialId);

    if (index > -1) {
        tutorQueue.splice(index, 1);
        showToast(`Removed "${material.title}" from Tutor Queue`);
    } else {
        tutorQueue.push({
            id: material.id,
            title: material.title,
            subject: material.subject,
            type: material.type,
            savedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        });
        showToast(`Saved "${material.title}" to Tutor Queue! 🎓`, true);
    }

    localStorage.setItem("tutorQueue", JSON.stringify(tutorQueue));
    updateTutorQueueBadge();
    renderMaterials();

    // If active modal is open, update its button state
    if (activeMaterialForNotes && activeMaterialForNotes.id === materialId) {
        const askTutorBtn = document.getElementById("modalAskTutorBtn");
        const isSavedNow = tutorQueue.some(q => q.id === materialId);
        if (askTutorBtn) {
            askTutorBtn.textContent = isSavedNow ? "✅ Saved in Tutor Queue" : "✦ Ask Tutor About This";
        }
    }
}

// Ask Tutor Modal Action
function modalAskTutorAction() {
    if (!activeMaterialForNotes) return;
    toggleAskTutorQueue(activeMaterialForNotes.id);
}

// Launch AI Tutor with pre-filled question
function launchAITutorWithMaterial(materialTitle, subject) {
    const queryPrompt = `Help me understand the study material "${materialTitle}" in ${subject}.`;
    // Save pre-fill message in localStorage
    localStorage.setItem("pendingTutorQuestion", queryPrompt);
    window.location.href = `AITutor.html?question=${encodeURIComponent(queryPrompt)}`;
}

// Update Header Tutor Queue Badge Counter
function updateTutorQueueBadge() {
    const countEl = document.getElementById("tutorQueueCount");
    if (countEl) {
        countEl.textContent = tutorQueue.length;
    }
}

// Tutor Queue Drawer Modal Open/Close
function openTutorQueueModal() {
    const modal = document.getElementById("tutorQueueModal");
    const list = document.getElementById("queueItemsList");

    if (!modal || !list) return;

    if (tutorQueue.length === 0) {
        list.innerHTML = `
      <div class="empty-state" style="padding: 30px;">
        <div class="empty-icon">🔖</div>
        <p>No study materials saved in your tutor queue yet.</p>
        <span style="font-size: 12.5px; color: var(--muted);">Click "Ask Tutor" on any material card to save it for later discussion.</span>
      </div>
    `;
    } else {
        list.innerHTML = tutorQueue.map((item) => `
      <div class="queue-item">
        <div class="queue-item-info">
          <h4>${item.title}</h4>
          <p>${item.subject} · ${item.type} · Saved at ${item.savedAt}</p>
        </div>
        <div style="display: flex; gap: 8px; align-items: center;">
          <button class="btn-open-notes" style="padding: 6px 12px; font-size: 12px;" onclick="launchAITutorWithMaterial('${item.title}', '${item.subject}')">
            Ask AI Tutor →
          </button>
          <button class="btn-remove-queue" onclick="toggleAskTutorQueue('${item.id}'); openTutorQueueModal();" title="Remove item">
            ✕
          </button>
        </div>
      </div>
    `).join("");
    }

    modal.classList.add("active");
}

function closeTutorQueueModal() {
    const modal = document.getElementById("tutorQueueModal");
    if (modal) modal.classList.remove("active");
}

// Toast Notifications Function
function showToast(message, isSuccess = false) {
    let container = document.querySelector(".toast-container");
    if (!container) {
        container = document.createElement("div");
        container.className = "toast-container";
        document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = "toast";
    if (!isSuccess) toast.style.borderLeftColor = "#ef4444";

    toast.innerHTML = `
    <span>${message}</span>
    <button style="background:none; border:none; color:white; font-weight:bold; cursor:pointer;" onclick="this.parentElement.remove()">✕</button>
  `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(20px)";
        toast.style.transition = "all 300ms ease";
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}
