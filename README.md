# ☀️ SunCart – Summer Essentials Store

A dedicated seasonal e-commerce platform built to streamline the hunt for authentic summer gear, featuring dynamic routing and secure user data management.

**🔗 Live Development URL:** [http://localhost:3000/](http://localhost:3000/)

---

## 📌 Purpose

SunCart is a seasonal e-commerce platform built to streamline the hunt for authentic summer essentials. From curated skincare and sunglasses to beach gear and outfits, the app offers an easy browsing experience for everyone, while securing detailed views and checkout behind a seamless user authentication system.

---

## ✨ Key Features

*   **Curated Summer Catalog:** A dedicated marketplace for seasonal essentials. Anyone can instantly browse a wide selection of genuine summer outfits, sunglasses, skincare, and beach accessories.
*   **Secure, Dynamic Product Details:** Product pages use dynamic routing to fetch details on the fly. To protect the platform and ensure a secure shopping environment, these deep-dive details are restricted—users must log in to view them or place an order.
*   **Personalized Profile Management:** Once logged in, users unlock a dedicated dashboard where they can easily update their personal profile information and manage preferences etc.

---

## 🛠️ Tech Stack & Dependencies

The SunCart platform is built using a modern JavaScript stack, leveraging robust libraries for data management, secure user sessions, and a polished user interface.

### 🔐 Authentication & Database
*   **`better-auth`** – A framework-agnostic, TypeScript-first authentication library used to handle secure session management, credential login, and route shielding.
*   **`mongodb`** – The core database layer utilized to store curated product information, persistent user profiles, and incoming order data.

### 📝 Form Management & Feedback
*   **`react-hook-form`** – Manages form states efficiently, ensuring that user authentication inputs and real-time profile updates are validated with zero unnecessary re-renders.
*   **`react-toastify`** – Powers the dynamic alert system, providing users with immediate visual feedback during sign-in, cart updates, or profile modifications.

### 🎨 UI Architecture & Aesthetics
*   **`daisyui`** – Extends Tailwind CSS with responsive, pre-designed component classes to speed up layout construction while maintaining a clean, cohesive theme.
*   **`animate.css`** – Provides lightweight, drop-in CSS animations to inject a vibrant, fluid feel into UI transitions and scroll events.
*   **`react-icons`** – A centralized icon wrapper used to supply scalable vector graphics for the core layout, shopping utility, and dashboard elements.
