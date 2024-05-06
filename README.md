<p align="center">
  <img src="https://img.icons8.com/?size=512&id=55494&format=png" width="100" />
</p>
<p align="center">
    <h1 align="center">HUE-SERVER</h1>
</p>
<p align="center">
    <em>``</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/Ungkarl/hue-server?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/Ungkarl/hue-server?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/Ungkarl/hue-server?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/Ungkarl/hue-server?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/Express-000000.svg?style=flat&logo=Express&logoColor=white" alt="Express">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

## 🔗 Quick Links

> - [📍 Overview](#-overview)
> - [📦 Features](#-features)
> - [📂 Repository Structure](#-repository-structure)
> - [🚀 Getting Started](#-getting-started)
>   - [⚙️ Installation](#️-installation)
>   - [🤖 Running hue-server](#-running-hue-server)
>   - [🧪 Tests](#-tests)

---

## 📍 Overview

The Hue-Server project aims to facilitate sending and receiving data to and from Philips Hue devices at home while on the go. A login system, using MongoDB for storing accounts. 

---

## 📦 Features

Features include the ability to:

View which Hue products are turned on

Turn lights on and off.

Adjust lighting settings.

Login system with encrypted localstorage, for easy login.

---

## 📂 Repository Structure

```sh
└── hue-server/
    ├── attemptLogin.mjs
    ├── hue-server.mjs
    ├── package-lock.json
    ├── package.json
    └── public
        └── login
            ├── index.css
            ├── login.html
            └── login.js
```

---

## 🧩 Modules

<details closed><summary>.</summary>

| File                                                                                     | Summary                                       |
| ---                                                                                      | ---                                           |
| [attemptLogin.mjs](https://github.com/Ungkarl/hue-server/blob/master/attemptLogin.mjs)   | HTTP error 401 for prompt `attemptLogin.mjs`  |
| [package.json](https://github.com/Ungkarl/hue-server/blob/master/package.json)           | HTTP error 401 for prompt `package.json`      |
| [package-lock.json](https://github.com/Ungkarl/hue-server/blob/master/package-lock.json) | HTTP error 401 for prompt `package-lock.json` |
| [hue-server.mjs](https://github.com/Ungkarl/hue-server/blob/master/hue-server.mjs)       | HTTP error 401 for prompt `hue-server.mjs`    |

</details>

<details closed><summary>public.login</summary>

| File                                                                                    | Summary                                             |
| ---                                                                                     | ---                                                 |
| [login.html](https://github.com/Ungkarl/hue-server/blob/master/public/login/login.html) | HTTP error 401 for prompt `public/login/login.html` |
| [login.js](https://github.com/Ungkarl/hue-server/blob/master/public/login/login.js)     | HTTP error 401 for prompt `public/login/login.js`   |
| [index.css](https://github.com/Ungkarl/hue-server/blob/master/public/login/index.css)   | HTTP error 401 for prompt `public/login/index.css`  |

</details>

---

## 🚀 Getting Started

***Requirements***

Ensure you have the following dependencies installed on your system:

* **JavaScript**: `version x.y.z`

### ⚙️ Installation

1. Clone the hue-server repository:

```sh
git clone https://github.com/Ungkarl/hue-server
```

2. Change to the project directory:

```sh
cd hue-server
```

3. Install the dependencies:

```sh
npm install
```

### 🤖 Running hue-server

Use the following command to run hue-server:

```sh
node hue-server.mjs
```


---

## 🛠 Project Roadmap

- [X] `► Login Function with localstorage and encryption`
- [ ] `► Retrive HUE data`
- [ ] `► Turn all lights on/off`
- [ ] `► Turn certain lights on/off`
- [ ] `► Change light intensity and color`

---
