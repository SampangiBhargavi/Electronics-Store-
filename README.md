# ElectroMart – Electronics Store

## 📌 Project Overview

ElectroMart is a responsive electronics e-commerce website developed using **HTML, CSS, Bootstrap, JavaScript and Local Storage**.

The website allows users to browse electronic products, search and filter products, view product details, add products to the cart, manage wishlist items and place orders.

It also includes an **Admin Dashboard** for managing products, viewing orders and customers.

---

## 🚀 Features

### 👤 User Features

* Home page
* Product listing
* Product search
* Product filtering
* Product sorting
* Category browsing
* Brand browsing
* Deals section
* New arrivals section
* Product details page
* Add to Cart
* Wishlist
* Cart quantity management
* Order management
* User login
* Responsive design

### 🔐 Admin Features

* Admin Login
* Admin Dashboard
* View total products
* View total orders
* View customers
* View total sales
* Add new products
* Edit existing products
* Delete products
* View product details
* Search products
* View orders
* View customers
* Admin Logout

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* Bootstrap 5
* Bootstrap Icons
* JavaScript
* Local Storage
* Node.js
* npm

---

## 📂 Project Structure

```text
ElectroMart/
│
├── index.html
├── shop.html
├── categories.html
├── product-details.html
├── brands.html
├── deals.html
├── new-arrivals.html
├── about.html
├── contact.html
├── cart.html
├── wishlist.html
├── orders.html
├── login.html
│
├── admin.html
├── admin-login.html
│
├── products.js
├── script.js
├── style.css
│
├── package.json
├── package-lock.json
│
└── node_modules/
    ├── bootstrap/
    └── bootstrap-icons/
```

---

## 💻 Installation and Setup

### 1. Clone or download the project

Open the project folder in Visual Studio Code.

### 2. Open the terminal

In VS Code:

```text
Terminal → New Terminal
```

### 3. Install dependencies

Run:

```bash
npm install
```

This installs the packages listed in `package.json`.

If Bootstrap and Bootstrap Icons are not installed, run:

```bash
npm install bootstrap
```

```bash
npm install bootstrap-icons
```

---

## ▶️ How to Run

Open the project in Visual Studio Code.

You can run the website using **Live Server**.

### Using Live Server

1. Install the **Live Server** extension in VS Code.
2. Right-click `index.html`.
3. Select **Open with Live Server**.
4. The ElectroMart website will open in your browser.

---

## 🔑 Admin Login

The Admin Dashboard is protected by a simple frontend login.

### Demo Credentials

```text
Username: admin
Password: admin123
```

Open:

```text
admin-login.html
```

After successful login, you will be redirected to:

```text
admin.html
```

---

## 🛒 Product Management

The Admin Dashboard provides product management functionality.

### Add Product

Admin can add:

* Product name
* Category
* Brand
* Price
* Old price
* Stock
* Image URL
* Description

### Edit Product

Admin can modify existing product information.

### Delete Product

Admin can remove products from the store.

### View Product

Admin can open the product details page.

---

## 💾 Data Storage

This project uses **Browser Local Storage** instead of a backend database.

Important Local Storage keys include:

```text
electroMartProducts
electroMartCart
electroMartWishlist
electroMartOrders
electroMartUsers
electroMartAdminLoggedIn
```

This means the project can demonstrate e-commerce functionality without requiring a server-side database.

---

## 📦 Product Data

Initial product information is stored in:

```text
products.js
```

The project includes products from categories such as:

* Mobiles & Tablets
* Laptops & Computers
* Audio & Headphones
* Smartwatches
* Cameras & Photography
* Gaming & Accessories

---

## 🎨 User Interface

The website uses **Bootstrap** to create a responsive interface.

Bootstrap components used include:

* Navbar
* Cards
* Buttons
* Forms
* Tables
* Modals
* Badges
* Grid system
* Alerts
* Responsive layouts

Bootstrap Icons are used throughout the website.

---

## 📱 Responsive Design

The website is designed to work on:

* Desktop
* Laptop
* Tablet
* Mobile devices

Bootstrap's responsive grid system is used to adjust the layout for different screen sizes.

---

## ⚠️ Important Note

This is a **frontend/demo e-commerce project**.

The Admin Login uses Local Storage and is **not suitable for real production security**.

A production e-commerce application should use:

* Backend authentication
* Database
* Password encryption
* Secure sessions/tokens
* Payment gateway
* Server-side validation
* Secure API endpoints

---

## 🎯 Project Objective

The main objective of ElectroMart is to demonstrate the development of a responsive e-commerce website with product management and basic admin functionality using frontend technologies.

---

## 👩‍💻 Developed By

**Bhargavi**

Bachelor of Engineering – Computer Science and Engineering

---

## 📄 License

This project is created for **educational and demonstration purposes**.
