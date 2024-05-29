import Avator from "../assets/images/avators/Avator.jpg"

const Contact = ({ onClose }) => {
  return (
    <>
      <div className="seanbot svelte-18sdb5t">
        <div className="header svelte-18sdb5t">
          <div className="avatar svelte-18sdb5t">
            <img src={Avator} alt="Luckie Bot" className="svelte-18sdb5t" />
          </div>
          <div className="header-content svelte-18sdb5t">
            <div className="header-title svelte-18sdb5t">Luckie Bot</div>
            <div className="header-subtitle">Ask me a question</div>
          </div>
          <button className="close svelte-18sdb5t" id="close-chat"
            onClick={onClose}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                // fill-rule="evenodd" clip-rule="evenodd" 
                d="M7.41425 6.00025L11.7072 1.70725C12.0982 1.31625 12.0982 0.68425 11.7072 0.29325C11.3162 -0.09775 10.6843 -0.09775 10.2933 0.29325L6.00025 4.58625L1.70725 0.29325C1.31625 -0.09775 0.68425 -0.09775 0.29325 0.29325C-0.09775 0.68425 -0.09775 1.31625 0.29325 1.70725L4.58625 6.00025L0.29325 10.2933C-0.09775 10.6843 -0.09775 11.3162 0.29325 11.7072C0.48825 11.9022 0.74425 12.0002 1.00025 12.0002C1.25625 12.0002 1.51225 11.9022 1.70725 11.7072L6.00025 7.41425L10.2933 11.7072C10.4883 11.9022 10.7442 12.0002 11.0002 12.0002C11.2562 12.0002 11.5122 11.9022 11.7072 11.7072C12.0982 11.3162 12.0982 10.6843 11.7072 10.2933L7.41425 6.00025Z" className="svelte-18sdb5t"></path>
            </svg>
          </button>
        </div>
        <div className="inner svelte-18sdb5t">
          <div className="bubble-holder svelte-1ffruqs">
            <div className="bubble agent svelte-1ffruqs"
            // className=""
            >Hi!</div>
          </div>
          <div className="bubble-holder svelte-1ffruqs">
            <div className="bubble agent svelte-1ffruqs"
            // className=""
            >
              I`m Luckie Bot. I`m here to help you with any questions you might
              have about Luckie`s work.
            </div>
          </div>
          <div className="bubble-holder svelte-1ffruqs">
            <div className="bubble agent svelte-1ffruqs"
            // className=""
            >
              How can I help you today?
            </div>
          </div>
          <div className="button-holder">
            <div className="button-holder svelte-1ffruqs"
            // className=""
            >
              <button className="svelte-1ffruqs">
                Looking for your old portfolio
              </button>
            </div>
            <div className="button-holder svelte-1ffruqs"
            // className=""
            >
              <button className="svelte-1ffruqs" id="Hello">
                Just saying hello!
              </button>
              <div className="button-holder svelte-1ffruqs"
              // className=""
              >
                <button className="svelte-1ffruqs" id="mentorship">
                  Interested in mentorship
                </button>
              </div>
              <div className="button-holder svelte-1ffruqs"
              // className=""
              >
                <button className="svelte-1ffruqs" id="hire">
                  We`d like to hire you
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Contact
