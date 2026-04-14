// ============================================
// 📌 Event Handling Basics — Modern JavaScript (ES2024+)
// ============================================

console.log("Getting started with modern event handling");

/*
 🧠 Modern Event Handling Concepts:
 ─────────────────────────────────

 1. addEventListener() — Standard way to attach events
    element.addEventListener('click', handler);

 2. Event Delegation — Attach ONE listener to parent instead of many to children
    parent.addEventListener('click', (e) => {
        if (e.target.matches('.child')) { ... }
    });

 3. AbortController — Modern way to remove event listeners (ES2024 best practice)
    const controller = new AbortController();
    element.addEventListener('click', handler, { signal: controller.signal });
    controller.abort(); // Removes the listener!

 4. Passive Events — Improve scroll performance
    element.addEventListener('scroll', handler, { passive: true });

 5. Once Option — Auto-remove listener after first invocation
    element.addEventListener('click', handler, { once: true });

 6. Event Properties:
    - e.target       → Element that triggered the event
    - e.currentTarget → Element the listener is attached to
    - e.preventDefault()  → Cancel default behavior
    - e.stopPropagation() → Stop event bubbling

 7. Custom Events (ES2015):
    const event = new CustomEvent('myEvent', { detail: { key: 'value' } });
    element.dispatchEvent(event);
*/