
const Bg = () => {
  return (
    <div className="Outer">
      <div className="ring2">
        <i style={{
          zIndex: '100',
          "--clr": "#00ff0a"
        }}></i>
        <i style={{
          zIndex: '1',
          "--clr": "#ff0057"
        }}></i>
        <i style={{
          zIndex: '1',
          "--clr": "#fffd44"
        }}></i>
      </div>
      {/* <div className="ring3">
        <i style={{
          "--clr": "#00ff0a"
        }}></i>
        <i style={{ "--clr": "#ff0057" }}></i>
        <i style={{ "--clr": "#fffd44" }}></i>
      </div> */}
    </div>
  )
}

export default Bg
