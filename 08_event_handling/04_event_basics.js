// ============================================
// Event Handling Basics — Modern JavaScript (ES2024+)
// ============================================

console.log("Modern event handling shuru karte hain");

/*
 Modern Event Handling Concepts:

 1. addEventListener() — Events attach karne ka standard tarika
    element.addEventListener('click', handler);

 2. Event Delegation — Bahut saare children ki jagah parent pe EK listener lagao
    parent.addEventListener('click', (e) => {
        if (e.target.matches('.child')) { ... }
    });

 3. AbortController — Event listeners remove karne ka modern tarika (ES2024 best practice)
    const controller = new AbortController();
    element.addEventListener('click', handler, { signal: controller.signal });
    controller.abort(); // Listener remove ho jayega!

 4. Passive Events — Scroll performance improve karta hai
    element.addEventListener('scroll', handler, { passive: true });

 5. Once Option — Pehle invocation ke baad listener auto-remove ho jaata hai
    element.addEventListener('click', handler, { once: true });

 6. Event Properties:
    - e.target       -> Wo element jisne event trigger kiya
    - e.currentTarget -> Wo element jispe listener laga hai
    - e.preventDefault()  -> Default behavior cancel karo
    - e.stopPropagation() -> Event bubbling roko

 7. Custom Events (ES2015):
    const event = new CustomEvent('myEvent', { detail: { key: 'value' } });
    element.dispatchEvent(event);
*/