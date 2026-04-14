# JavaScript & Classes — OOP Notes (Modern ES2024+)

## OOP — Object-Oriented Programming

## Object
- A collection of **properties** (data) and **methods** (behavior)
- Example: `String.toLowerCase()`, `Array.push()`, `Object.keys()`

## Why Use OOP?
- **Organize** complex code into reusable structures
- **Encapsulate** data and behavior together
- **Model** real-world entities (User, Product, Order)
- **Reuse** code through inheritance

## Parts of OOP
1. **Object Literals** — simplest form `{ key: value }`
2. **Constructor Functions** — `function User() { this.name = ... }`
3. **Prototypes** — shared methods via `Constructor.prototype.method`
4. **Classes (ES2015)** — modern syntax: `class User { }`
5. **Instances** — created with `new` keyword

## 4 Pillars
| Pillar | Description |
|--------|-------------|
| **Abstraction** | Hide complexity, expose simple interface |
| **Encapsulation** | Bundle data + methods, use `#private` fields (ES2022) |
| **Inheritance** | Child classes extend parent classes with `extends` |
| **Polymorphism** | Same method name, different behavior (method overriding) |

## Modern Features (ES2022+)
- `#privateField` — truly private class members
- `static #field` — private static fields
- Class field declarations — no need for constructor for simple props
- `static { }` — static initialization blocks
- `Object.hasOwn()` — replaces `.hasOwnProperty()`