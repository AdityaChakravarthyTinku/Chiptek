/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#071321",
          blue: "#0B2038",
          text: "#10213D"
        },
        teal: {
          DEFAULT: "#079A7A",
          soft: "#EFFAF7"
        },
        accent: {
          blue: "#3268E8",
          soft: "#F2F6FD"
        },
        slate: {
          body: "#59667A"
        },
        border: {
          soft: "#D9E2EE"
        },
        surface: {
          white: "#FFFFFF",
          cool: "#F7FAFC"
        }
      },
      fontFamily: {
        head: ["Manrope", "sans-serif"],
        body: ["Inter", "sans-serif"]
      },
      maxWidth: {
        content: "1280px",
        prose: "68ch"
      },
      boxShadow: {
        card: "0 1px 2px rgba(7, 19, 33, 0.06), 0 8px 24px rgba(7, 19, 33, 0.06)",
        header: "0 1px 0 rgba(7, 19, 33, 0.06)"
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(160deg, #071321 0%, #0B2038 55%, #0B2038 100%)",
        "pale-gradient": "linear-gradient(135deg, #F2F6FD 0%, #EFFAF7 100%)",
        "cta-gradient": "linear-gradient(135deg, #079A7A 0%, #3268E8 100%)"
      }
    }
  },
  plugins: []
};
