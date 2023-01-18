import "bootstrap/dist/css/bootstrap.min.css";

// import individual components rather than the entire library
// to reduce the amount of code that gets sent to the client
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="App">
      {/* // container spans a max-width at each breakpoint */}
      <div className="container bg-primary">container</div>
      {/* container-{breakpoint} spants 100% of the width until the specified breakpoint and then spans a max-width like container; will be 100% until the breakpoint specified (then max-width like container) */}
      <div className="container-sm bg-primary">container-sm</div>
      <div className="container-md bg-primary">container-md</div>
      <div className="container-lg bg-primary">container-lg</div>
      <div className="container-xl bg-primary">container-xl</div>
      <div className="container-xxl bg-primary">container-xxl</div>
      {/* container-fluid spans 100% of the width at each breakpoint */}
      <div className="container-fluid bg-primary">container-fluid</div>
      <div className="container-fluid bg-dark text-white">
        bg-dark text-white
      </div>
      <div className="container-fluid border">border</div>
      {/* default container padding is 12px on left and right and none on top and bottom */}
      <div className="container-fluid border py-3">border py-3</div>
      {/* NOTE: do not set left and right margin on responsive containers because the value auto is applied to margin-left and margin-right to align the container horizontally */}
      <div className="container-fluid border my-3">border my-3</div>

      {/* Bootstrap uses a 12-column grid system built with flexbox */}
      {/* each column size specifies a max-width before it will wrap */}
      {/* in a Bootstrap grid layout, content must be placed inside colummns and only columns can be the immediate children of rows */}
      {/* grid column widths are set in percentages, so they are always fluid and sized relative to their parent element */}
      <div className="container-fluid no-gutters">
        <div className="row px-0">
          <div className="col bg-secondary">col</div>
          <div className="col bg-primary">col</div>
        </div>
        <div className="row">
          <div className="col-sm bg-secondary">col-sm</div>
          <div className="col-sm bg-primary">col-sm</div>
        </div>
        <div className="row">
          <div className="col-md bg-secondary">col-md</div>
          <div className="col-md bg-primary">col-md</div>
        </div>
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-3 border">
            col-md-4 col-lg-3
          </div>
          <div className="col-sm-4 col-md-8 col-lg-6 border">
            col-md-8 col-lg-6
          </div>

          {/* set the column layout on different sizes by specifying the
          number of columns to occupy at a specific breakpoint; below:
          col-sm-4 means that at the small breakpoint, the div will
          occupy 4 columns */}
          <div className="col-sm-4 col-md-12 col-lg-3 border">
            col-md-12 col-lg-3
          </div>

          {/* below: nesting rows inside columns with additional columns
           (total columns in a row is 12) */}
        </div>
        <div className="row">
          <div className="col-6 border">
            <div className="row">
              <div className="col border">col</div>
              <div className="col border">col</div>
              <div className="col border">col</div>
            </div>
          </div>
          <div className="col-6 border">col-6</div>
        </div>
        {/* col-auto sets the width to fit content */}
        <div className="row">
          <div className="col border">col</div>
          <div className="col-auto border">col-auto</div>
          <div className="col border">col</div>
        </div>
        {/* align-items-start, align-items-center, align-items-end 
        aligns each child to the top, center, bottom of the row */}
        <div
          className="row align-items-start border"
          style={{ height: "50px" }}
        >
          <div className="col border">Column one</div>
          <div className="col border">Column two</div>
          <div className="col border">Column three</div>
        </div>
        <div
          className="row align-items-center border"
          style={{ height: "50px" }}
        >
          <div className="col border">Column one</div>
          <div className="col border">Column two</div>
          <div className="col border">Column three</div>
        </div>
        <div className="row align-items-end border" style={{ height: "50px" }}>
          <div className="col border">Column one</div>
          <div className="col border">Column two</div>
          <div className="col border">Column three</div>
        </div>
        {/* align-self-start, align-self-center, align-self-end aligns 
        individual columns to the top, center, bottom of a row 
        (in a row, align determines vertical alignment */}
        <div className="row border" style={{ height: "50px" }}>
          <div className="col border align-self-start">align-self-start</div>
          <div className="col border align-self-center">align-self-center</div>
          <div className="col border align-self-end">align-self-end</div>
        </div>
        {/* justify-content-start, justify-content-middle, justify-content-end
        aligns content horizonally to the left, center, and right of a row
        (in a row, justify-content determines horizontal alignment) */}
        <div className="row border justify-content-start">
          <div className="col-4 bg-primary border">col-4</div>
          <div className="col-4 bg-primary border">col-4</div>
        </div>
        <div className="row border justify-content-center">
          <div className="col-4 bg-primary border">col-4</div>
          <div className="col-4 bg-primary border">col-4</div>
        </div>
        <div className="row border justify-content-end">
          <div className="col-4 bg-primary border">col-4</div>
          <div className="col-4 bg-primary border">col-4</div>
        </div>
        {/* can manipulate the order of columns regardless of their JSX (or html)
        order with order-first, order-last, order-{1-12}
        lower numbers appear before higher numbers */}
        <div className="row">
          <div className="col border order-last">col order-last</div>
          <div className="col border">col</div>
          <div className="col border order-4">col order-4</div>
          <div className="col border order-3">col order-3</div>
          <div className="col  borderorder-first">col order-first</div>
        </div>
        {/* offset sets the left margin of the col to the specified number
        of columns; can be set for different screen sizes with offset-sm-{1-12} */}
        <div className="row">
          <div className="col-4 border">col-4</div>
          <div className="col-7 border offset-1">col-7</div>
        </div>

        {/* remove negative margins and padding from child columns
        by setting gutters to 0: g-0 */}
        <div className="row g-0">
          <div className="col-4 border">col-4</div>
          <div className="col-4 border">col-4</div>
          <div className="col-4 border">col-4 </div>
        </div>

        {/* create equal-width columns that span multiple rows by inserting
        w-100 where you want the columns to break to a new line */}
        <div className="row border">
          <div className="col border">col</div>
          <div className="col border">col</div>
          <div className=" border w-100">w-100</div>
          <div className="col border">col</div>
          <div className="col border">col</div>
        </div>

        {/* fixed layout : using pixel sizes for a one-structure, screen-size-specific layout
        fluid layout : using percent sizes for a one-structure fluid layout
        responsive layout : using breakpoints to define multiple structures that adapt responsively to different sizes
        (^^ for example defining different column sizes for sm, md, lg screen sizes)
        responsive layouts enable an optimal layout at each screen size */}
      </div>
    </div>
  );
}

export default App;
