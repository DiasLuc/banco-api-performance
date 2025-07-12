# Banco API Performance Tests

## 📘 Introduction

This project contains performance testing scripts for the [Banco API](https://github.com/juliodelimas/banco-api), developed using [K6](https://k6.io/). The goal is to evaluate the API's stability, scalability, and responsiveness under various load conditions.

## 🧪 Technologies Used

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript): scripting language used to write K6 test cases
- [K6](https://k6.io/): open-source load testing tool and framework
- [GJSON](https://github.com/tidwall/gjson): used for querying and asserting JSON data within tests

## 📁 Repository Structure

```
.
├── README.md
├── config/
│   └── config.local.json
├── fixtures/
│   └── postLogin.json
├── helpers/
│   └── authentication.js
├── tests/
│   ├── login.test.js
│   └── transfers.test.js
├── utils/
│   └── variables.js
├── html-report.html
```

## 🎯 Objective of Each Group of Files

- `config/`: Contains local configuration files used by the test scripts.
- `fixtures/`: Contains static JSON files used as input or expected responses during testing.
- `helpers/`: Helper modules, such as authentication utilities, to facilitate script organization.
- `tests/`: Main performance test scripts that simulate different usage scenarios of the API.
- `utils/`: Utility scripts or constants used throughout the testing codebase.

## ⚙️ How to Install and Execute the Project

### Prerequisites

- [Install K6](https://k6.io/docs/getting-started/installation/)
- (Optional) Clone and run the [Banco API](https://github.com/juliodelimas/banco-api) locally for testing purposes.

### Clone the Repository

```bash
git clone https://github.com/DiasLuc/banco-api-performance.git
cd banco-api-performance
```

### Set Required Environment Variable

Before executing any test, set the `BASE_URL` environment variable to point to the base URL of the Banco API (if not using config.local.json):

```bash
k6 run tests/login.test.js -e BASE_URL=http://localhost:3000
```

### Execute a Test Script

To run a specific test script and follow results in **real time** via K6's dashboard, use the following command:

```bash
K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run tests/login.test.js
```

This command will:
- Launch the K6 Web Dashboard so you can follow the test live in your browser.
- Export the performance report as `html-report.html` upon test completion.

Replace `tests/login.test.js` with any other test script as needed.

---
