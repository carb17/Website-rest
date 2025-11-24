# 🍽️ Restaurant management

![React](https://img.shields.io/badge/React-v18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-v5.x-blueviolet)
![Vite](https://img.shields.io/badge/Vite-v5.x-lightgrey)
![CSS3](https://img.shields.io/badge/CSS3-3.0-blue)


Order management system for a restaurant developed in React, TypeScript and Vite, with customer control, kitchen and order management.

---

## 🚀 Project Description

**Restaurant App** is a web application that allows for efficient management of restaurant orders:

Customers can view the menu and add items to their cart.

The kitchen receives orders in "Preparing" status and can mark them as dispatched.

The administrator can view all orders, and their status changes to "Delivered" when they are completed.

---

## ⚙️ Funcionalidades principales

### 👤 Cliente

- Visualización del menú de productos con detalles y categorías.

- Agregar productos al carrito y confirmar el pedido.

- Gestión de pagos: el cliente puede ver el total del pedido y realizar el pago correspondiente.

### 🍳 Cocina

- Recepción de pedidos en estado “En preparación”.

- Actualización del estado a “Despachado” cuando los productos están listos para entrega.

### 🏢 Administración

- Visualización de todos los pedidos de clientes.

- Actualización automática del estado de los pedidos a “Entregado”.

- Gestión de cobros: registro y control de los pagos de cada pedido.

---

## 🛠️ Technologies Used

- React + TypeScript (frontend interface and logic)

- Vite (bundler and HMR)

- React Router (page navigation)

- Context API (global cart state)

- FontAwesome (icons)

- CSS Modules (styles)

---

## 🔐 Security

- Access to **Administration** and **Kitchen** is restricted and requires a login.

- Passwords are securely **hashed**.

- Data validation is used on forms to prevent errors or malicious data.

---

## 📂 General Structure

/restaurant-app
│
├── /src
│ ├── /components
│ │ └── /common
│ │   └── /buttons
│ │ 
│ ├── /context
│ │ └── CartContext.tsx
│ ├── /features
│ │ ├── /client
│ │ │ ├── /pages
│ │ │ ├── /hooks
│ │ │ ├── /services
│ │ │ └── /types
│ │ ├── /kitchen
│ │ │ ├── /pages
│ │ │ ├── /hooks
│ │ │ └── /types
│ │ └── /admin
│ │ ├── /pages
│ │ ├── /hooks
│ │ └── /types
│ ├── main.tsx
│ └── App.tsx
└── package.json

---

## 💡 Installation and Use

1. **Clone the repository:**
```bash
git clone https://github.com/your-username/restaurant-app.git
```
2. **Go to the project directory:**
```bash
cd restaurant-app
```
3. **Install dependencies:**
```bash
npm install  
# or
yarn
```

4. **Start the development server:**
```bash
npm run dev
# or
yarn dev
```

This will start the application in development mode, usually at:

http://localhost:5173

5. **Access the application:**

- Customer homepage: view products and add them to the cart.

- Kitchen page: view orders in preparation and update them.

- Administration page: view all orders and update their status to "Delivered".

6. **Build for production:** 
```bash
npm run build
# or
yarn build
```
The build will be generated in the /dist folder and can be deployed on any static server.
