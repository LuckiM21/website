import "../styles/BackgroundPages/background.css";
const Background = () => {
  return (
    <div>
      <body>
        <div className="container max-w-7xl pt-5 pb-12 mb-12">
          <div className="gradient-line"></div>
          <div className="row">
            <div className="col"></div>
          </div>
          <div className="row g-4 mt-3">
            <div className="col-lg-4">
              <div className="gradient-border-card">
                <div className="icon mb-3">
                  <svg
                    aria-labelledby="routes-icon-title"
                    fill="none"
                    height="30"
                    role="img"
                    viewBox="0 0 30 30"
                    width="30"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title id="routes-icon-title">An icon of a globe</title>
                    <defs>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="icon-gradient-fill"
                        x1="4"
                        x2="40"
                        y1="4"
                        y2="24"
                      >
                        <stop stopColor="white" stopOpacity="0.2"></stop>
                        <stop
                          offset="0"
                          stopColor="white"
                          stopOpacity="0.4"
                        ></stop>
                        <stop offset="0.5" stopColor="white"></stop>
                        <stop
                          offset="0.75"
                          stopColor="white"
                          stopOpacity="0.4"
                        ></stop>
                        <stop
                          offset="1"
                          stopColor="white"
                          stopOpacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                    <path
                      d="M15 26.25C17.4937 26.2499 19.9168 25.4215 21.8888 23.895C23.8607 22.3685 25.2699 20.2304 25.895 17.8163M15 26.25C12.5063 26.2499 10.0832 25.4215 8.11121 23.895C6.13925 22.3685 4.73009 20.2304 4.105 17.8163M15 26.25C18.1062 26.25 20.625 21.2125 20.625 15C20.625 8.7875 18.1062 3.75 15 3.75M15 26.25C11.8937 26.25 9.375 21.2125 9.375 15C9.375 8.7875 11.8937 3.75 15 3.75M15 3.75C16.9953 3.74917 18.9549 4.2792 20.6777 5.28571C22.4006 6.29221 23.8246 7.73896 24.8037 9.4775M15 3.75C13.0047 3.74917 11.0451 4.2792 9.32226 5.28571C7.59942 6.29221 6.17538 7.73896 5.19625 9.4775M24.8037 9.4775C22.0821 11.8349 18.6007 13.1302 15 13.125C11.2525 13.125 7.825 11.75 5.19625 9.4775M24.8037 9.4775C25.7548 11.1625 26.2531 13.0651 26.25 15C26.25 15.9725 26.1262 16.9163 25.895 17.8163M25.895 17.8163C22.5615 19.6642 18.8115 20.631 15 20.625C11.0475 20.625 7.33375 19.6063 4.105 17.8163M4.105 17.8163C3.86843 16.8962 3.74915 15.95 3.75 15C3.75 12.9938 4.275 11.1088 5.19625 9.4775"
                      stroke="url(#icon-gradient-fill)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    ></path>
                  </svg>
                </div>
                <h2 className="gradient-text-animation">
                  CSS for the shell of it
                </h2>
                <p className="mt-3"> Not all work needs to lead somewhere</p>
                <div className="shimmer" style={{ "--delay": "-6s" }}></div>
                <i aria-hidden="true"></i>
                <div className="glowing-wrapper glowing-wrapper-active mt-3">
                  <div className="glowing-wrapper-animations">
                    <div className="glowing-wrapper-glow"></div>
                    <div className="glowing-wrapper-mask-wrapper">
                      <div className="glowing-wrapper-mask"></div>
                    </div>
                  </div>
                  <div className="glowing-wrapper-borders-masker">
                    <div className="glowing-wrapper-borders"></div>
                  </div>
                  <a href="#" className="glowing-wrapper-button w-inline-block">
                    <div className="text-white">Learn More</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="gradient-border-card">
                <div className="icon mb-3">
                  <svg
                    aria-labelledby="middleware-icon-title"
                    fill="none"
                    height="28"
                    role="img"
                    viewBox="0 0 28 28"
                    width="28"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title id="middleware-icon-title">
                      An icon for Edge Middleware
                    </title>
                    <defs>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="icon-gradient-fill"
                        x1="4"
                        x2="40"
                        y1="4"
                        y2="24"
                      >
                        <stop stopColor="white" stopOpacity="0.2"></stop>
                        <stop
                          offset="0"
                          stopColor="white"
                          stopOpacity="0.4"
                        ></stop>
                        <stop offset="0.5" stopColor="white"></stop>
                        <stop
                          offset="0.75"
                          stopColor="white"
                          stopOpacity="0.4"
                        ></stop>
                        <stop
                          offset="1"
                          stopColor="white"
                          stopOpacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                    <path
                      d="M18.5 11.0001L18.5 17.0001M26 8.00012V20.0001M11.75 14.0001L2 20.0001L2 8.00012L11.75 14.0001Z"
                      stroke="url(#icon-gradient-fill)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    ></path>
                  </svg>
                </div>
                <h2>Lorem Ipsum</h2>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="favorite-item mt-3">
                  Add Favorite
                  <span aria-hidden="true" style={{ height: "16px" }}>
                    <div className="favorite-container">
                      <svg
                        data-testid="geist-icon"
                        height="16"
                        strokeLinejoin="round"
                        viewBox="0 0 16 16"
                        width="16"
                        style={{ color: "gray" }}
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.00001 0.433594L8.65845 1.64093L10.5908 5.18412L14.5577 5.92698L15.9094 6.18011L14.9646 7.17942L12.192 10.1121L12.7113 14.1144L12.8883 15.4782L11.6459 14.8884L8.00001 13.1577L4.35408 14.8884L3.11173 15.4782L3.28869 14.1144L3.80802 10.1121L1.03538 7.17942L0.0906067 6.18011L1.44233 5.92698L5.40922 5.18412L7.34156 1.64093L8.00001 0.433594ZM8.00001 3.56646L6.55565 6.21487L6.38519 6.52743L6.03525 6.59296L3.07014 7.14822L5.14259 9.34029L5.38718 9.59899L5.34137 9.95205L4.95318 12.9436L7.67838 11.65L8.00001 11.4973L8.32163 11.65L11.0468 12.9436L10.6586 9.95205L10.6128 9.59899L10.8574 9.34029L12.9299 7.14822L9.96476 6.59296L9.61482 6.52743L9.44436 6.21487L8.00001 3.56646Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <div className="sparkles-container">
                        <div
                          className="sparkle-container"
                          style={{
                            "--starting-position-x": "6px",
                            "--starting-position-y": "6px",
                            "--starting-scale": "0",
                            "--ending-position-x": "1px",
                            "--ending-position-y": "1px",
                            "--ending-scale": "1",
                            "--color": "#ff4cff",
                            "--delay": "50ms",
                            "--duration": "180ms",
                          }}
                        >
                          <svg
                            fill="none"
                            height="6"
                            viewBox="0 0 6 6"
                            width="6"
                          >
                            <path
                              d="M2.5 0.5V0H3.5V0.5C3.5 1.60457 4.39543 2.5 5.5 2.5H6V3V3.5H5.5C4.39543 3.5 3.5 4.39543 3.5 5.5V6H3H2.5V5.5C2.5 4.39543 1.60457 3.5 0.5 3.5H0V3V2.5H0.5C1.60457 2.5 2.5 1.60457 2.5 0.5Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                        <div
                          className="sparkle-container"
                          style={{
                            "--starting-position-x": "13px",
                            "--starting-position-y": "6px",
                            "--starting-scale": "0",
                            "--ending-position-x": "16px",
                            "--ending-position-y": "0px",
                            "--ending-scale": "0.7",
                            "--color": "#ff8b8b",
                            "--delay": "100ms",
                            "--duration": "260ms",
                          }}
                        >
                          <svg
                            fill="none"
                            height="6"
                            viewBox="0 0 6 6"
                            width="6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.5 0.5V0H3.5V0.5C3.5 1.60457 4.39543 2.5 5.5 2.5H6V3V3.5H5.5C4.39543 3.5 3.5 4.39543 3.5 5.5V6H3H2.5V5.5C2.5 4.39543 1.60457 3.5 0.5 3.5H0V3V2.5H0.5C1.60457 2.5 2.5 1.60457 2.5 0.5Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                        <div
                          className="sparkle-container"
                          style={{
                            "--starting-position-x": "2px",
                            "--starting-position-y": "13px",
                            "--starting-scale": "0",
                            "--ending-position-x": "0px",
                            "--ending-position-y": "13px",
                            "--ending-scale": "0.5",
                            "--color": "#f4ff21",
                            "--delay": "120ms",
                            "--duration": "150ms",
                          }}
                        >
                          <svg
                            fill="none"
                            height="6"
                            viewBox="0 0 6 6"
                            width="6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.5 0.5V0H3.5V0.5C3.5 1.60457 4.39543 2.5 5.5 2.5H6V3V3.5H5.5C4.39543 3.5 3.5 4.39543 3.5 5.5V6H3H2.5V5.5C2.5 4.39543 1.60457 3.5 0.5 3.5H0V3V2.5H0.5C1.60457 2.5 2.5 1.60457 2.5 0.5Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                        <div
                          className="sparkle-container"
                          style={{
                            "--starting-position-x": "9px",
                            "--starting-position-y": "15px",
                            "--starting-scale": "0",
                            "--ending-position-x": "9px",
                            "--ending-position-y": "18px",
                            "--ending-scale": "0.7",
                            "--color": "#46e5e5",
                            "--delay": "80ms",
                            "--duration": "200ms",
                          }}
                        >
                          <svg
                            fill="none"
                            height="6"
                            viewBox="0 0 6 6"
                            width="6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.5 0.5V0H3.5V0.5C3.5 1.60457 4.39543 2.5 5.5 2.5H6V3V3.5H5.5C4.39543 3.5 3.5 4.39543 3.5 5.5V6H3H2.5V5.5C2.5 4.39543 1.60457 3.5 0.5 3.5H0V3V2.5H0.5C1.60457 2.5 2.5 1.60457 2.5 0.5Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                        <div
                          className="sparkle-container"
                          style={{
                            "--starting-position-x": "15px",
                            "--starting-position-y": "12px",
                            "--starting-scale": "0",
                            "--ending-position-x": "18px",
                            "--ending-position-y": "13px",
                            "--ending-scale": "0.5",
                            "--color": "#6f6fff",
                            "--delay": "0ms",
                            "--duration": "3400ms",
                          }}
                        >
                          <svg
                            fill="none"
                            height="6"
                            viewBox="0 0 6 6"
                            width="6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.5 0.5V0H3.5V0.5C3.5 1.60457 4.39543 2.5 5.5 2.5H6V3V3.5H5.5C4.39543 3.5 3.5 4.39543 3.5 5.5V6H3H2.5V5.5C2.5 4.39543 1.60457 3.5 0.5 3.5H0V3V2.5H0.5C1.60457 2.5 2.5 1.60457 2.5 0.5Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </span>
                </div>
                <div className="shimmer" style={{ "--delay": "-8s" }}></div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="gradient-border-card">
                <div className="icon mb-3">
                  <svg
                    aria-labelledby="observability-icon-title"
                    fill="none"
                    height="28"
                    role="img"
                    viewBox="0 0 28 28"
                    width="28"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title id="observability-icon-title">
                      An icon of a bar chart
                    </title>
                    <defs>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="icon-gradient-fill"
                        x1="4"
                        x2="40"
                        y1="4"
                        y2="24"
                      >
                        <stop stopColor="white" stopOpacity="0.2"></stop>
                        <stop
                          offset="0"
                          stopColor="white"
                          stopOpacity="0.4"
                        ></stop>
                        <stop offset="0.5" stopColor="white"></stop>
                        <stop
                          offset="0.75"
                          stopColor="white"
                          stopOpacity="0.4"
                        ></stop>
                        <stop
                          offset="1"
                          stopColor="white"
                          stopOpacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                    <path
                      d="M8 17V20M12 14V20M16 11V20M20 8V20M6 25H22C22.7957 25 23.5587 24.6839 24.1213 24.1213C24.6839 23.5587 25 22.7957 25 22V6C25 5.20435 24.6839 4.44129 24.1213 3.87868C23.5587 3.31607 22.7957 3 22 3H6C5.20435 3 4.44129 3.31607 3.87868 3.87868C3.31607 4.44129 3 5.20435 3 6V22C3 22.7957 3.31607 23.5587 3.87868 24.1213C4.44129 24.6839 5.20435 25 6 25Z"
                      stroke="url(#icon-gradient-fill)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    ></path>
                  </svg>
                </div>
                <h2>Lorem Ipsum</h2>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button type="submit" className="mt-3">
                  <span>
                    <span className="highlight-bg"></span>
                    <span className="button-text">
                      <svg
                        className="me-2"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                        <circle cx="8.5" cy="7" r="4"></circle>
                        <path d="M20 8v6"></path>
                        <path d="M23 11h-6"></path>
                      </svg>
                      Collaborate with a Team
                    </span>
                  </span>
                </button>
                <div className="shimmer" style={{ "--delay": "-12.5s" }}></div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="gradient-border-card">
                <div className="icon mb-3">
                  <svg
                    aria-labelledby="ssr-icon-title"
                    fill="none"
                    height="12"
                    role="img"
                    viewBox="0 0 28 12"
                    width="28"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title id="ssr-icon-title">
                      An icon for Server-Side Rendering
                    </title>
                    <defs>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="icon-gradient-fill"
                        x1="4"
                        x2="40"
                        y1="4"
                        y2="24"
                      >
                        <stop stopColor="white" stopOpacity="0.2"></stop>
                        <stop
                          offset="0"
                          stopColor="white"
                          stopOpacity="0.4"
                        ></stop>
                        <stop offset="0.5" stopColor="white"></stop>
                        <stop
                          offset="0.75"
                          stopColor="white"
                          stopOpacity="0.4"
                        ></stop>
                        <stop
                          offset="1"
                          stopColor="white"
                          stopOpacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                    <path
                      d="M4.32 11.648C3.47733 11.648 2.73067 11.4987 2.08 11.2C1.42933 10.9013 0.917333 10.464 0.544 9.888C0.181333 9.30133 0 8.592 0 7.76V7.36H1.712V7.76C1.712 8.54933 1.94667 9.14133 2.416 9.536C2.896 9.93067 3.53067 10.128 4.32 10.128C5.12 10.128 5.72267 9.96267 6.128 9.632C6.53333 9.29067 6.736 8.85333 6.736 8.32C6.736 7.968 6.64 7.68 6.448 7.456C6.256 7.232 5.984 7.056 5.632 6.928C5.28 6.78933 4.85867 6.66133 4.368 6.544L3.776 6.4C3.06133 6.22933 2.43733 6.02133 1.904 5.776C1.38133 5.52 0.976 5.184 0.688 4.768C0.4 4.352 0.256 3.81867 0.256 3.168C0.256 2.50667 0.416 1.94133 0.736 1.472C1.06667 1.00267 1.52 0.64 2.096 0.384C2.672 0.128 3.34933 0 4.128 0C4.90667 0 5.6 0.133334 6.208 0.400001C6.82667 0.666667 7.312 1.06133 7.664 1.584C8.016 2.10667 8.192 2.76267 8.192 3.552V4.128H6.48V3.552C6.48 3.072 6.37867 2.68267 6.176 2.384C5.984 2.08533 5.712 1.86667 5.36 1.728C5.008 1.58933 4.59733 1.52 4.128 1.52C3.44533 1.52 2.912 1.664 2.528 1.952C2.15467 2.22933 1.968 2.61867 1.968 3.12C1.968 3.46133 2.048 3.744 2.208 3.968C2.37867 4.18133 2.624 4.35733 2.944 4.496C3.264 4.63467 3.664 4.75733 4.144 4.864L4.736 5.008C5.46133 5.168 6.10133 5.376 6.656 5.632C7.21067 5.87733 7.648 6.21333 7.968 6.64C8.288 7.06667 8.448 7.616 8.448 8.288C8.448 8.96 8.27733 9.54667 7.936 10.048C7.60533 10.5493 7.13067 10.944 6.512 11.232C5.89333 11.5093 5.16267 11.648 4.32 11.648Z"
                      fill="url(#icon-gradient-fill)"
                    ></path>
                    <path
                      d="M13.91 11.648C13.0673 11.648 12.3207 11.4987 11.67 11.2C11.0193 10.9013 10.5073 10.464 10.134 9.888C9.77133 9.30133 9.59 8.592 9.59 7.76V7.36H11.302V7.76C11.302 8.54933 11.5367 9.14133 12.006 9.536C12.486 9.93067 13.1207 10.128 13.91 10.128C14.71 10.128 15.3127 9.96267 15.718 9.632C16.1233 9.29067 16.326 8.85333 16.326 8.32C16.326 7.968 16.23 7.68 16.038 7.456C15.846 7.232 15.574 7.056 15.222 6.928C14.87 6.78933 14.4487 6.66133 13.958 6.544L13.366 6.4C12.6513 6.22933 12.0273 6.02133 11.494 5.776C10.9713 5.52 10.566 5.184 10.278 4.768C9.99 4.352 9.846 3.81867 9.846 3.168C9.846 2.50667 10.006 1.94133 10.326 1.472C10.6567 1.00267 11.11 0.64 11.686 0.384C12.262 0.128 12.9393 0 13.718 0C14.4967 0 15.19 0.133334 15.798 0.400001C16.4167 0.666667 16.902 1.06133 17.254 1.584C17.606 2.10667 17.782 2.76267 17.782 3.552V4.128H16.07V3.552C16.07 3.072 15.9687 2.68267 15.766 2.384C15.574 2.08533 15.302 1.86667 14.95 1.728C14.598 1.58933 14.1873 1.52 13.718 1.52C13.0353 1.52 12.502 1.664 12.118 1.952C11.7447 2.22933 11.558 2.61867 11.558 3.12C11.558 3.46133 11.638 3.744 11.798 3.968C11.9687 4.18133 12.214 4.35733 12.534 4.496C12.854 4.63467 13.254 4.75733 13.734 4.864L14.326 5.008C15.0513 5.168 15.6913 5.376 16.246 5.632C16.8007 5.87733 17.238 6.21333 17.558 6.64C17.878 7.06667 18.038 7.616 18.038 8.288C18.038 8.96 17.8673 9.54667 17.526 10.048C17.1953 10.5493 16.7207 10.944 16.102 11.232C15.4833 11.5093 14.7527 11.648 13.91 11.648Z"
                      fill="url(#icon-gradient-fill)"
                    ></path>
                    <path
                      d="M19.692 11.424V0.224H24.396C25.0893 0.224 25.6973 0.346667 26.22 0.592C26.7533 0.826667 27.164 1.168 27.452 1.616C27.7507 2.064 27.9 2.59733 27.9 3.216V3.392C27.9 4.096 27.7293 4.66133 27.388 5.088C27.0573 5.504 26.652 5.79733 26.172 5.968V6.224C26.5773 6.24533 26.9027 6.384 27.148 6.64C27.3933 6.88533 27.516 7.24267 27.516 7.712V11.424H25.772V7.952C25.772 7.664 25.6973 7.43467 25.548 7.264C25.3987 7.09333 25.1587 7.008 24.828 7.008H21.42V11.424H19.692ZM21.42 5.44H24.204C24.8227 5.44 25.3027 5.28533 25.644 4.976C25.9853 4.656 26.156 4.224 26.156 3.68V3.552C26.156 3.008 25.9853 2.58133 25.644 2.272C25.3133 1.952 24.8333 1.792 24.204 1.792H21.42V5.44Z"
                      fill="url(#icon-gradient-fill)"
                    ></path>
                  </svg>
                </div>
                <h2>Lorem Ipsum</h2>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="shimmer" style={{ "--delay": "-4s" }}></div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="gradient-border-card">
                <div className="icon mb-3">
                  <svg
                    aria-labelledby="zero-icon-title"
                    fill="none"
                    height="28"
                    role="img"
                    viewBox="0 0 28 28"
                    width="28"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title id="zero-icon-title">
                      An icon showing a line through a circle
                    </title>
                    <defs>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="icon-gradient-fill"
                        x1="4"
                        x2="40"
                        y1="4"
                        y2="24"
                      >
                        <stop stopColor="white" stopOpacity="0.2"></stop>
                        <stop
                          offset="0"
                          stopColor="white"
                          stopOpacity="0.4"
                        ></stop>
                        <stop offset="0.5" stopColor="white"></stop>
                        <stop
                          offset="0.75"
                          stopColor="white"
                          stopOpacity="0.4"
                        ></stop>
                        <stop
                          offset="1"
                          stopColor="white"
                          stopOpacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                    <path
                      d="M3.56251 24.849L25.349 3.06248M26.1667 14C26.1667 20.4433 20.9433 25.6666 14.5 25.6666C8.05669 25.6666 2.83334 20.4433 2.83334 14C2.83334 7.55666 8.05669 2.33331 14.5 2.33331C20.9433 2.33331 26.1667 7.55666 26.1667 14Z"
                      stroke="url(#icon-gradient-fill)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    ></path>
                  </svg>
                </div>
                <h2>Lorem Ipsum</h2>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="shimmer" style={{ "--delay": "-10s" }}></div>
              </div>
            </div>
          </div>

          <div
            className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none group mt-3"
            data-spotlight=""
          >
            {/* <!-- Card 1 --> */}
            <div className="relative h-full bg-gray-800 rounded-xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-gray-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
              <div className="relative h-full bg-gray-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                {/* <!-- Radial gradient --> */}
                <div
                  className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 translate-z-0 bg-gray-800 rounded-full blur-[80px]"></div>
                </div>
                <div className="flex flex-col h-full">
                  <div className="icon mb-3">
                    <svg
                      aria-labelledby="middleware-icon-title"
                      fill="none"
                      height="28"
                      role="img"
                      viewBox="0 0 28 28"
                      width="28"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title id="middleware-icon-title">
                        An icon for Edge Middleware
                      </title>
                      <defs>
                        <linearGradient
                          gradientUnits="userSpaceOnUse"
                          id="icon-gradient-fill"
                          x1="4"
                          x2="40"
                          y1="4"
                          y2="24"
                        >
                          <stop stopColor="white" stopOpacity="0.2"></stop>
                          <stop
                            offset="0"
                            stopColor="white"
                            stopOpacity="0.4"
                          ></stop>
                          <stop offset="0.5" stopColor="white"></stop>
                          <stop
                            offset="0.75"
                            stopColor="white"
                            stopOpacity="0.4"
                          ></stop>
                          <stop
                            offset="1"
                            stopColor="white"
                            stopOpacity="0"
                          ></stop>
                        </linearGradient>
                      </defs>
                      <path
                        d="M18.5 11.0001L18.5 17.0001M26 8.00012V20.0001M11.75 14.0001L2 20.0001L2 8.00012L11.75 14.0001Z"
                        stroke="url(#icon-gradient-fill)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="text-white">{/* "Spotlight effect" */}</h2>
                  <p className="text-gray-400 mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- Card 2 --> */}
            <div className="relative h-full bg-gray-800 rounded-xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-gray-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
              <div className="relative h-full bg-gray-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                {/* <!-- Radial gradient --> */}
                <div
                  className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 translate-z-0 bg-gray-800 rounded-full blur-[80px]"></div>
                </div>
                <div className="flex flex-col h-full">
                  <div className="icon mb-3">
                    <svg
                      aria-labelledby="routes-icon-title"
                      fill="none"
                      height="30"
                      role="img"
                      viewBox="0 0 30 30"
                      width="30"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title id="routes-icon-title">An icon of a globe</title>
                      <defs>
                        <linearGradient
                          gradientUnits="userSpaceOnUse"
                          id="icon-gradient-fill"
                          x1="4"
                          x2="40"
                          y1="4"
                          y2="24"
                        >
                          <stop stopColor="white" stopOpacity="0.2"></stop>
                          <stop
                            offset="0"
                            stopColor="white"
                            stopOpacity="0.4"
                          ></stop>
                          <stop offset="0.5" stopColor="white"></stop>
                          <stop
                            offset="0.75"
                            stopColor="white"
                            stopOpacity="0.4"
                          ></stop>
                          <stop
                            offset="1"
                            stopColor="white"
                            stopOpacity="0"
                          ></stop>
                        </linearGradient>
                      </defs>
                      <path
                        d="M15 26.25C17.4937 26.2499 19.9168 25.4215 21.8888 23.895C23.8607 22.3685 25.2699 20.2304 25.895 17.8163M15 26.25C12.5063 26.2499 10.0832 25.4215 8.11121 23.895C6.13925 22.3685 4.73009 20.2304 4.105 17.8163M15 26.25C18.1062 26.25 20.625 21.2125 20.625 15C20.625 8.7875 18.1062 3.75 15 3.75M15 26.25C11.8937 26.25 9.375 21.2125 9.375 15C9.375 8.7875 11.8937 3.75 15 3.75M15 3.75C16.9953 3.74917 18.9549 4.2792 20.6777 5.28571C22.4006 6.29221 23.8246 7.73896 24.8037 9.4775M15 3.75C13.0047 3.74917 11.0451 4.2792 9.32226 5.28571C7.59942 6.29221 6.17538 7.73896 5.19625 9.4775M24.8037 9.4775C22.0821 11.8349 18.6007 13.1302 15 13.125C11.2525 13.125 7.825 11.75 5.19625 9.4775M24.8037 9.4775C25.7548 11.1625 26.2531 13.0651 26.25 15C26.25 15.9725 26.1262 16.9163 25.895 17.8163M25.895 17.8163C22.5615 19.6642 18.8115 20.631 15 20.625C11.0475 20.625 7.33375 19.6063 4.105 17.8163M4.105 17.8163C3.86843 16.8962 3.74915 15.95 3.75 15C3.75 12.9938 4.275 11.1088 5.19625 9.4775"
                        stroke="url(#icon-gradient-fill)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="text-white">{/* "Spotlight effect" */}</h2>
                  <p className="text-gray-400 mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- Card 3 --> */}
            <div className="relative h-full bg-gray-800 rounded-xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-gray-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
              <div className="relative h-full bg-gray-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                {/* <!-- Radial gradient --> */}
                <div
                  className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 translate-z-0 bg-gray-800 rounded-full blur-[80px]"></div>
                </div>
                <div className="flex flex-col h-full">
                  <div className="icon mb-3">
                    <svg
                      aria-labelledby="observability-icon-title"
                      fill="none"
                      height="28"
                      role="img"
                      viewBox="0 0 28 28"
                      width="28"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title id="observability-icon-title">
                        An icon of a bar chart
                      </title>
                      <defs>
                        <linearGradient
                          gradientUnits="userSpaceOnUse"
                          id="icon-gradient-fill"
                          x1="4"
                          x2="40"
                          y1="4"
                          y2="24"
                        >
                          <stop stopColor="white" stopOpacity="0.2"></stop>
                          <stop
                            offset="0"
                            stopColor="white"
                            stopOpacity="0.4"
                          ></stop>
                          <stop offset="0.5" stopColor="white"></stop>
                          <stop
                            offset="0.75"
                            stopColor="white"
                            stopOpacity="0.4"
                          ></stop>
                          <stop
                            offset="1"
                            stopColor="white"
                            stopOpacity="0"
                          ></stop>
                        </linearGradient>
                      </defs>
                      <path
                        d="M8 17V20M12 14V20M16 11V20M20 8V20M6 25H22C22.7957 25 23.5587 24.6839 24.1213 24.1213C24.6839 23.5587 25 22.7957 25 22V6C25 5.20435 24.6839 4.44129 24.1213 3.87868C23.5587 3.31607 22.7957 3 22 3H6C5.20435 3 4.44129 3.31607 3.87868 3.87868C3.31607 4.44129 3 5.20435 3 6V22C3 22.7957 3.31607 23.5587 3.87868 24.1213C4.44129 24.6839 5.20435 25 6 25Z"
                        stroke="url(#icon-gradient-fill)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="text-white">{/* "Spotlight effect" */}</h2>
                  <p className="text-gray-400 mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="gradient-Background__wrapper">
            <div className="gradient-Background">
              <div className="gradient-Background__shape gradient-Background__shape--1"></div>
              <div className="gradient-Background__shape gradient-Background__shape--2"></div>
            </div>
            <div className="gradient-Background__noise"></div>
          </div>
        </div>

        <section
          data-gtm-key="tesla-fixed-Background-11"
          className=""
          id="tesla_fixed_Background_11"
        >
          <div
            className="dx-fixed-Background"
            id="react-data-tesla_fixed_Background_11"
            data-component-status="initialized"
          >
            <section>
              <div className="dx-fixed-Background__separator-container">
                <div className="tds-theme--replicant-separator  tds-theme--replicant-separator--reversed"></div>
              </div>
              <div className="dx-fixed-Background__container">
                <div className="dx-fixed-Background__media-wrapper">
                  <picture className="tcl-react-image dx-fixed-Background__media">
                    <img
                      src="https://res.cloudinary.com/du6mfjbbd/image/upload/v1701989004/1691530134-about-hero_xdbubk.jpg"
                      className="dx-fixed-Background__media-asset"
                    />
                  </picture>
                </div>
                <article className="z-10 max-w-[60rem] backdrop-blur-sm bg-white/30 p-8 rounded-xl">
                  <h3 className="text-4xl">
                    An interesting way to do a slight `parallax` effect
                  </h3>
                  <p className="mt-3">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem.
                  </p>
                </article>
              </div>
              <div className="dx-fixed-Background__separator-container">
                <div className="tds-theme--replicant-separator"></div>
              </div>
            </section>
          </div>
        </section>

        <div className="relative pointer-events-none overflow-hidden pt-75 s:pt-250 will-change-transform h-[250px]">
          {" "}
          <div className="absolute left-0 w-full z-2">
            <div className="sf-rings relative pt-[100%] media-fit z-2">
              <div className="sf-ring__wrap --1 absolute inset-0 z-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 2828.43 2720.74"
                  className="sf-ring --1"
                >
                  <path
                    fill="none"
                    stroke="#f203ff"
                    strokeWidth="2"
                    d="M578.43 43.87c208.56-130.32 533 78.36 764.29 75.45 235.3-3 511.78-147.66 720.83-31.07 200 111.49 358 337.06 489.06 546.74s261.74 450.84 274.27 679.47c13.12 239-197.48 443.12-303.29 653.36-104 206.65-122.25 529.71-330.8 660s-507.56-50-738.86-47.08c-235.31 3-545.63 221.33-754.69 104.75-199.99-111.47-171.6-493.4-302.6-703.08S14.8 1625.09 2.25 1396.48c-13.11-239.05 78.79-484.87 184.61-695.1 104-206.66 182.96-527.18 391.57-657.51Z"
                  ></path>
                </svg>
              </div>{" "}
              <div className="sf-ring__wrap --2 absolute inset-0 z-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 2758.36 2922.53"
                  className="sf-ring --2"
                >
                  <path
                    fill="none"
                    stroke="#f945a2"
                    strokeWidth="2"
                    d="M314.52 474.72c162.24-180.3 571.22-10.93 786.48-80.62 222.06-71.89 434.12-344.59 662.52-296.16 221.38 46.95 435.48 232.82 615.73 395.28s384.25 357.06 454.05 572.47c72 222.23-121.6 471.77-169.85 700.27-46.78 221.48 67.3 559.25-94.94 739.55s-531.15 36.39-746.38 106.09c-222.07 71.9-447.35 445.25-675.75 396.83-221.39-46.94-266.76-485.84-447.06-648.3s-496.24-202.2-566-417.6c-72-222.23-35.42-484.38 12.83-712.88 46.75-221.49 6.13-574.65 168.37-754.93Z"
                    opacity=".25"
                    transform="translate(-91.81 -91.22)"
                  ></path>
                </svg>
              </div>{" "}
              <div className="sf-ring__wrap --3 absolute inset-0 z-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 2723.79 2841.29"
                  className="sf-ring --3"
                >
                  <path
                    fill="none"
                    stroke="#a64eff"
                    strokeWidth="2"
                    d="M2688.5 580.86c128.59 205.78-146.74 552.37-139 778.62 8 233.4 211.6 512.62 102.2 718.91-106 200-343.54 354.54-549.25 483.08s-448.83 271-675 278.64c-233.34 7.92-419.81-247.17-626.07-356.64-199.88-106.12-555.88-89.65-684.43-295.44s111.23-520.87 103.55-747.1c-8-233.46-304.71-553.13-195.32-759.46 106-200 540.21-122.45 745.93-251s330.86-421.43 557-429.09c233.39-7.91 475.17 99.68 681.39 209.15 200 106.11 550.43 164.54 679 370.33Z"
                  ></path>
                </svg>
              </div>{" "}
              <div className="sf-ring__wrap --4 absolute inset-0 z-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 2700.65 3034.3"
                  className="sf-ring --4"
                >
                  <path
                    fill="none"
                    stroke="#ff00fe"
                    strokeWidth="2"
                    d="M1274.29 1.13c242.4-8.42 404.87 403.5 604.59 510 206 109.89 549.5 73.17 673.42 271.17 120.12 191.92 135.26 475 143.77 717.55s10.33 524.43-96.05 724.21c-109.74 206.11-423.73 240-621.57 364-191.75 120.1-355.33 436.71-597.73 445.13s-395.34-357-595.05-463.49c-206-109.89-631.07-12.81-755-210.79C-89.46 2167 194.59 1829.6 186.08 1587.05s-199.52-497.5-93.14-697.28C202.68 683.66 416.61 528 614.44 404.08 806.19 284 1031.88 9.55 1274.29 1.13Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Background;
