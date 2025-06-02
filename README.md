# HTML Preview Editor

A modern HTML preview editor built with Monaco Editor and Astro 5. This project provides a real-time HTML editing experience with instant preview capabilities.

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/small.svg)](https://astro.build)

## ✨ Features

- Real-time HTML preview
- Powered by Monaco Editor (the same editor used in VS Code)
- Built on Astro 5's latest features and optimizations
- Responsive design for all devices
- Fast performance with minimal JavaScript

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/JoseCortez1/html-preview-astro.git
   cd html-preview-astro
   ```

2. Install dependencies
   ```sh
   npm install
   ```

3. Start the development server
   ```sh
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:4321`

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🛠️ Project Structure

```text
/
├── public/            # Static assets
│   └── favicon.svg
├── src/
│   ├── assets/        # Images and other assets
│   ├── components/    # Reusable Astro components
│   ├── layouts/       # Page layouts
│   └── pages/         # File-based routing
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [the Astro guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 💻 Technologies

- [Astro](https://astro.build/) - The web framework for content-driven websites
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) - The editor that powers VS Code
- TypeScript - For type safety and better developer experience

## 🔄 How It Works

The Monaco Editor allows you to write and edit HTML code, while the preview pane renders the result in real-time, providing an interactive coding experience.

## 🔧 Configuration

You can configure the editor behavior and appearance by modifying the Monaco Editor settings in the component files.

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Jose Cortez**

* GitHub: [JoseCortez1](https://github.com/JoseCortez1)

---

Built with ❤️ using Astro 5
