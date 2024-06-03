import '../styles/BackgroundPages/New.jsx'
import image from '../assets/images/AboutImages/large-07.png'
const New = () => {
  return (
    <div>

      <body>
        {/* <!-- quick fix to load assets from github --> */}
        <base href="https://rawcdn.githack.com/MuhammadHasann/component-frontend/7e3a0bced6f1b050e8d0b621f2a3a6e7b1cb06d3/section/category%20card-2/" />
        {/* <!-- lazy dog credit note --> */}
        <dialog open>Reply to <a href="https://twitter.com/asanagih/status/1764194084435181573" target="_blank"> tweet</a> by <a href="https://hasanmolla.vercel.app/" target="_blank">HASAN MOLLA</a></dialog>




        <section className="container">
          <div className="category_container">
            <div className="content">
              <img src="../assets/images/avators/Avator.jpg" className="professio_image" alt="Luckies image" />
              <img src={image} className="profile_image" alt="Profile" />
              <div className="profile_detail">
                <span>John Doe</span>
                <p>UI/UX Designer + Graphic Designer</p>
              </div>

              <div className="wrapper">
                <div className="profile_quote">
                  <p>UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.</p>
                </div>
              </div>

            </div>
            <div className="content">
              <img src="assets/Photographer.jpg" className="profession_image" alt="Profession" />
              <img src="../assets/images/AboutImages/small-03.jpg" className="profile_image" alt="Profile" />
              <div className="profile_detail">
                <span>Prince Akashi</span>
                <p>Photographer + Model</p>
              </div>
              <div className="wrapper">
                <div className="profile_quote">
                  <p>"If you see something that moves you, and then snap it, you keep a moment."</p>
                </div>
              </div>
            </div>
            <div className="content">
              <img src="assets/Fashion Designer.jpg" className="profession_image" alt="Profession" />
              <img src="assets/Rafaella Mendes.jpg" className="profile_image" alt="Profile" />
              <div className="profile_detail">
                <span>Rafaella Mendes</span>
                <p>Fashion Designer + Model</p>
              </div>
              <div className="wrapper">
                <div className="profile_quote">
                  <p>"My mission in life is not merely to survive, but to thrive and to do so with some passion, some compassion, some humor, and some style."</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>

    </div >
  )
}

export default New
