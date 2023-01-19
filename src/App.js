import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

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
        {/* headers in Bootstrap */}
        <h1>h1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
        <h4>h4</h4>
        <h5>h5</h5>
        <h6>h6</h6>
        <br />
        {/* display ssecondary text of a heading in a smaller and lighter variation
        with small tag and text-muted className */}
        <h2>
          h2
          <small className="text-muted"> text-muted</small>
        </h2>
        <br />
        {/* Bootstrap headings feature a larger font-size with a lighter font-weight */}
        <h1 className="display-1">display heading 1</h1>
        <h1 className="display-2">display heading 2</h1>
        <h1 className="display-3">display heading 3</h1>
        <h1 className="display-4">display heading 4</h1>
        <h1 className="display-5">display heading 5</h1>
        <h1 className="display-6">display heading 6</h1>
        <br />
        {/* paragraphs in bootstrap - use className lead for a larger font-size and lighter font-weight */}
        <p>paragraph in Bootstrap</p>
        <p className="lead">paragraph lead in Bootstrap</p>
        <br />
        {/* align text to left, center, right with text-start, text-center, text-end
        can also set align for different screen sizes (text-sm-center
        text-md-right) */}
        <p className="text-start">text-start</p>
        <p className="text-center">text-center</p>
        <p className="text-end">text-end</p>
        <br />
        {/* can format text using standard html tags

        b-bold
        code-code
        em-italicize (emphasized)
        i-italicize
        mark-highlight
        strong-bold (strongly emphasized)
        small-smaller
        sub-subscript
        sup-superscript
        ins-underlined (inserted)
        del-strikethrough (deleted) */}
        <p>
          <b>b</b>
        </p>
        <p>
          <code>code</code>
        </p>
        <p>
          <em>em</em>
        </p>
        <p>
          <i>i</i>
        </p>
        <p>
          <mark>mark</mark>
        </p>
        <p>
          <strong>strong</strong>
        </p>
        <p>
          <small>small</small>
        </p>
        <p>
          <sub>sub</sub>
          <sup>sup</sup>
        </p>
        <p>
          <ins>ins</ins>
        </p>
        <p>
          <del>del</del>
        </p>
        <br />
        {/* can format uppercase, lowercase, capitalize with text-uppercase, text-lowercase, text-capitalize */}
        <p className="text-lowercase">
          text-lowercase: The quick brown fox jumps over the lazy dog.
        </p>
        <p className="text-uppercase">
          text-uppercase: The quick brown fox jumps over the lazy dog.
        </p>
        <p className="text-capitalize">
          text-capitalize: The quick brown fox jumps over the lazy dog.
        </p>
        <br />
        {/* utility classes can be used to set font-color */}
        <p className="text-primary">text-primary</p>
        <p className="text-secondary">text-secondary</p>
        <p className="text-success">text-success</p>
        <p className="text-info">text-info</p>
        <p className="text-warning">text-warning</p>
        <p className="text-danger">text-danger</p>
        <p className="text-muted">text-muted</p>
        {/* blockquotes in Bootstrap - looks like a larger version of p */}
        <blockquote className="blockquote">
          <p>paragraph in blockquote with class blockquote</p>
        </blockquote>
        {/* for a properly attributed blockquote, put the blockquote 
        (with class blockquote) in a figure tag and use a figcaption 
        with class blockquote-footer that includes the author within
        cite tags; can align with text-end text-center */}
        <figure>
          <blockquote className="blockquote">
            <p>paragraph in blockquote in figure</p>
          </blockquote>
          <figcaption className="blockquote-footer">
            figcaption.blockquote-footer by <cite>cite html tag</cite>
          </figcaption>
        </figure>
        {/* truncate text with an ellipsis with text-truncate */}
        <div className="row">
          <div className="col-2 text-truncate">
            The quick brown fox jumps over the lazy dog.
          </div>
        </div>
        {/* text-wrap wraps text
        text-nowrap prevents text wrapping */}
        <div className="row">
          <div className="col-2 text-nowrap bg-primary">
            <p>The quick brown fox jumps over the lazy dog.</p>
          </div>
        </div>
        <br />
        {/* use text-break to prevent a long word from breaking the layout */}
        <div className="row">
          <div className="col-1 border">
            <p>The quickbrownfox jumps over the lazy dog.</p>
          </div>
          <div className="col-1 text-break border order-first">
            <p>The quickbrownfox jumps over the lazy dog.</p>
          </div>
        </div>
        {/* Bootstrap tables use regular html table tags with only table having class table
        there are also table classes like table-primary, table-danger, table-dark that color
        tables, table rows, or individual cells
        "table table-striped" makes a striped table
        "table table-bordered" draws a border around each data cell
        "table table-hover" makes rows darker on hover */}
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John</td>
              <td>Smith</td>
              <td>johnsmith@example.com</td>
            </tr>
            <tr className="table-dark">
              <td>2</td>
              <td>John</td>
              <td>Smith</td>
              <td>johnsmith@example.com</td>
            </tr>
            <tr>
              <td>3</td>
              <td className="table-primary">John</td>
              <td className="table-info">Smith</td>
              <td className="table-secondary">johnsmith@example.com</td>
            </tr>
            <tr>
              <td>4</td>
              <td className="table-light">John</td>
              <td className="table-success">Smith</td>
              <td className="table-danger">null</td>
            </tr>
          </tbody>
        </table>
        <br />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John</td>
              <td>Smith</td>
              <td>johnsmith@example.com</td>
            </tr>
            <tr>
              <td>2</td>
              <td>John</td>
              <td>Smith</td>
              <td>johnsmith@example.com</td>
            </tr>
            <tr>
              <td>3</td>
              <td>John</td>
              <td>Smith</td>
              <td>johnsmith@example.com</td>
            </tr>
            <tr>
              <td>4</td>
              <td>John</td>
              <td>Smith</td>
              <td>null</td>
            </tr>
          </tbody>
        </table>
        <br />
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John</td>
              <td>Smith</td>
              <td>johnsmith@example.com</td>
            </tr>
            <tr>
              <td>2</td>
              <td>John</td>
              <td>Smith</td>
              <td>johnsmith@example.com</td>
            </tr>
            <tr>
              <td>3</td>
              <td>John</td>
              <td>Smith</td>
              <td>johnsmith@example.com</td>
            </tr>
            <tr>
              <td>4</td>
              <td>John</td>
              <td>Smith</td>
              <td>null</td>
            </tr>
          </tbody>
        </table>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John</td>
              <td>Smith</td>
              <td>johnsmith@example.com</td>
            </tr>
            <tr>
              <td>2</td>
              <td>John</td>
              <td>Smith</td>
              <td>johnsmith@example.com</td>
            </tr>
            <tr>
              <td>3</td>
              <td>John</td>
              <td>Smith</td>
              <td>johnsmith@example.com</td>
            </tr>
            <tr>
              <td>4</td>
              <td>John</td>
              <td>Smith</td>
              <td>null</td>
            </tr>
          </tbody>
        </table>
        <br />
        {/* compact table made with "table table-sm"
        can set dark to only thead with table-dark */}
        <table className="table table-sm">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John</td>
              <td>Smith</td>
              <td>johnsmith@example.com</td>
            </tr>
            <tr>
              <td>2</td>
              <td>John</td>
              <td>Smith</td>
              <td>johnsmith@example.com</td>
            </tr>
            <tr>
              <td>3</td>
              <td>John</td>
              <td>Smith</td>
              <td>johnsmith@example.com</td>
            </tr>
            <tr>
              <td>4</td>
              <td>John</td>
              <td>Smith</td>
              <td>null</td>
            </tr>
          </tbody>
        </table>
        {/* unordered list without bullets */}
        <ul className="list-unstyled">
          <li>Home</li>
          <li>
            Products
            <ul>
              <li>Gadgets</li>
              <li>Accessories</li>
            </ul>
          </li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
        {/* create a horizontal unordered list with ul.list-inline and
        each li.list-inline-item */}
        <ul className="list-inline">
          <li className="list-inline-item">Home</li>
          <li className="list-inline-item">Products</li>
          <li className="list-inline-item">About</li>
          <li className="list-inline-item">Support</li>
        </ul>
        {/* dl=description list, dt=description term, dd=description definition
        To make a definition list, use standard html tags with the dl being a row
        and each dt, dd pair being a col */}
        <dl className="row">
          <dt className="col-3">User Agent</dt>
          <dd className="col-9">
            An HTML user agent is any device that interprets HTML documents.
          </dd>
          <dt className="col-3 text-truncate">Client-side Scripting</dt>
          <dd className="col-9">
            Client-side scripting generally refers to the category of computer
            programs on the web that are executed by the user's web browser.
          </dd>
        </dl>
        {/* list groups are unordered lists with the class list-group and whose items
        have the class list-group-item; set the width to 50% with w-50
        set active and disabled */}
        <ul className="list-group w-50">
          <li className="list-group-item active">list-group-item active</li>
          <li className="list-group-item">list-group-item</li>
          <li className="list-group-item">list-group-item</li>
          <li className="list-group-item disabled">list-group-item disabled</li>
          <li className="list-group-item disabled">list-group-item disabled</li>
        </ul>
        <br />
        {/* create a list-group without outer borders and rounded corners that is
        flush with its parent container with list-group list-group-flush */}
        <ul className="list-group list-group-flush w-50">
          <li className="list-group-item">list-group-item</li>
          <li className="list-group-item">list-group-item</li>
          <li className="list-group-item">list-group-item</li>
          <li className="list-group-item">list-group-item</li>
        </ul>
        <br />
        {/* can use list-group with checkboxes and radios children of div must be labels
        with class list-group-item which house the input tag */}
        <div className="list-group w-50">
          <label className="list-group-item">
            <input type="checkbox" className="form-check-input me-1" />
            form-check-input
          </label>
          <label className="list-group-item">
            <input type="checkbox" className="form-check-input me-1" />
            form-check-input
          </label>
          <label className="list-group-item">
            <input type="checkbox" className="form-check-input me-1" />
            form-check-input
          </label>
        </div>
        <br />
        {/* can use list-group with radio buttons too (remember children must be 
          list-group-item); also, note that list-group does not have to be a list
          but can be a div, and list-group-item doesn't have to be a li either */}
        <div className="list-group w-50">
          <label className="list-group-item">
            <input
              type="radio"
              className="form-check-input me-1"
              name="gender"
            />
            Male
          </label>
          <label className="list-group-item">
            <input
              type="radio"
              className="form-check-input me-1"
              name="gender"
            />
            Female
          </label>
        </div>
        <br />
        {/* can use list-group to create a sidebar menu where list-group-items
        are links with class "list-group-item list-group-item-action" 
        containing i tags with Bootstrap icons and the name

        Added bootstrap icons with npm i bootstrap-icons
        and setting classname within an i tag */}
        <div className="list-group w-50">
          <a href="" className="list-group-item list-group-item-action active">
            <i className="bi-house-fill"></i> Home
          </a>
          <a href="" className="list-group-item list-group-item-action">
            <i className="bi-camera-fill"></i> Pictures
            <span className="badge rounded-pill bg-primary float-end">145</span>
          </a>
          <a href="" className="list-group-item list-group-item-action">
            <i className="bi-music-note-beamed"></i> Music
            <span className="badge rounded-pill bg-primary float-end">50</span>
          </a>
          <a href="" className="list-group-item list-group-item-action">
            <i className="bi-film"></i> Videos
            <span className="badge rounded-pill bg-primary float-end">50</span>
          </a>
        </div>
        <br />
        {/* can also add nearly any HTML within the list group, for example to
        create a list of article briefs  */}
        {/* list-group-item also has contextual classes for custom coloring
        list-group-item-action darkens list-group-item on hover */}
        <div className="list-group">
          <li className="list-group-item list-group-item-primary list-group-item-action">
            list-group-item-primary
          </li>
          <li className="list-group-item list-group-item-warning list-group-item-action">
            list-group-item-warning
          </li>
          <li className="list-group-item list-group-item-danger list-group-item-action">
            list-group-item-danger
          </li>
        </div>
        <br />
        {/* three types of forms in Bootstrap: vertical, horizontal, inline

        all textual form controls, including input and textarea require the
        class form-control

        select requires the class form-select

        vertical form */}
        <form action="">
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="text" className="form-control" placeholder="Email" />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" />
              <label htmlFor="" className="form-check-label">
                Remember me
              </label>
            </div>
          </div>
          <button className="btn btn-primary">Sign in</button>
        </form>
        <br />
        {/* horizontal form
        create a row for each label-input row
        must set each label class to "col col-form label" for proper formatting
        also remember that rows must have columns as descendents */}
        <form action="">
          <div className="row mb-3">
            <label htmlFor="" className="col-2 col-form-label">
              Email
            </label>
            <div className="col-10">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="" className="col-2 col-form-label">
              Password
            </label>
            <div className="col-10">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-10 offset-2">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" />
                <label htmlFor="" className="form-check-label">
                  Remember me
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-10 offset-2">
              <button className="btn btn-primary">Sign in</button>
            </div>
          </div>
        </form>
        <br />
        {/* inline form */}
        <form action="">
          <div className="row align-items-center g-3">
            <div className="col-auto">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="col-auto">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="col-auto">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" />
                <label htmlFor="" className="form-check-label">
                  Remember me
                </label>
              </div>
            </div>
            <div className="col-auto">
              <button className="btn btn-primary">Sign in</button>
            </div>
          </div>
        </form>
        <br />
        {/* NOTE: it is recommended to include a label for form inputs
        so screen readers have no trouble with form
        if desired, can hide form labels with visually-hidden class
        
        Also, can make responsive form layouts, for example an inline
        form that becomes a vertical form on smaller viewports */}
        {/* can preset form values with input.form-control-plaintext instead
        of input.form-control and adding attribute readonly */}
        <form action="">
          <div className="row mb-3">
            <label htmlFor="" className="col-2 col-form-label">
              Email
            </label>
            <div className="col-10">
              <input
                type="email"
                className="form-control-plaintext"
                readOnly
                value="computerInsertedEmail@example.com"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="" className="col-2 col-form-label">
              Password
            </label>
            <div className="col-10">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-10 offset-2">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" />
                <label htmlFor="" className="form-check-label">
                  Remember me
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-10 offset-2">
              <button className="btn btn-primary">Sign in</button>
            </div>
          </div>
        </form>
        <br />
        {/* can size form controls with column-sizing */}
        <form action="">
          <div className="row">
            <div className="col-6">
              <input type="text" className="form-control" placeholder="City" />
            </div>
            <div className="col-3">
              <select name="" id="" className="form-select">
                <option value="">State</option>
              </select>
            </div>
            <div className="col-3">
              <input type="text" className="form-control" placeholder="Zip" />
            </div>
          </div>
        </form>
        <br />
        {/* to make an inline form of radio buttons, create div.row,
        div.col-12, and then div.form-check.form-check-inline for each
        checkbox with children being the input and label */}
        <div className="row">
          <div className="col-12">
            <div className="form-check form-check-inline">
              <input type="checkbox" className="form-check-input" />
              <label htmlFor="" className="form-check-label">
                Music
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input type="checkbox" className="form-check-input" />
              <label htmlFor="" className="form-check-label">
                Travel
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input type="checkbox" className="form-check-input" />
              <label htmlFor="" className="form-check-label">
                Reading
              </label>
            </div>
          </div>
        </div>
        <br />
        {/* add help text to form controls with div.form-text */}
        <label htmlFor="" className="form-label">
          Password
        </label>
        <input type="password" className="form-control" />
        <div className="form-text">
          Must be 8-20 characters long, contain letters, numbers and special
          characters, but must not contain spaces.
        </div>
        <br />
        {/* add disabled attributes to form-controls (input, textarea, select)
        and Bootstrap will style them to reflect their disabled status
        
        to disable all controls within a form, place them in a fieldset
        element and apply the attribute disabled to the fieldset element
        
        can add readonly attribute to form-controls to prevent modification; 
        read-only inputs are styled similar to disabled but retain the standard
        text cursor
        ^^ disabled form-controls cannot be highlighted, the text cannot be
        selected, while readonly form-controls can be selected (though not
        modified) */}
        {/* can set height of form-controls with col-form-label-lg
        or col-form-label-sm
        
        when using lg or sm form-controls, also apply col-form-label-{size}
        to legend elements to correctly resize them */}
        <div className="row mb-3">
          <label htmlFor="" className="col-2 col-form-label col-form-label-lg">
            Email
          </label>
          <div className="col-10">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="" className="col-2 col-form-label">
            Email
          </label>
          <div className="col-10">
            <input type="text" className="form-control" placeholder="Email" />
          </div>
        </div>
        <div className="row">
          <label htmlFor="" className="col-2 col-form-label col-form-label-sm">
            Email
          </label>
          <div className="col-10">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Email"
            />
          </div>
        </div>
        <br />
        {/* can also create a lg or sm form-select in the same way */}
        {/* form validation with Bootstrap uses the browser's native form 
        validation API, styling with :invalid and :valid pseudo-classes
        
        when doing form-validation, check out Bootstrap documentation on
        this; I'm not going to copy this over now */}
        {/* bootstrap also supports new HTML5 inputs types including: 
        datetime, number, email, url, search, range, color, url, etc. */}
        {/* can also disable checkboxes and radios with disabled attribute;
        Bootstrap will automatically style them to appear disabled */}
        {/* create a toggle switch (custom checkbox) with "form-check form-switch"
        as the class for the parent div that contains the checkbox input
        and label
        Can set to be pre-checked with checked attribute */}
        <div className="form-check form-switch">
          <input type="checkbox" className="form-check-input" />
          <label htmlFor="" className="form-check-label">
            Default switch checkbox
          </label>
        </div>
        <br />

        {/* create a range-slider with input type="range" and input class 
        form-range; specify min, max, and step with attributes */}
        <label htmlFor="">Custom range</label>
        <input type="range" className="form-range" min="0" max="8" step="2" />
        <br />
      </div>
    </div>
  );
}

export default App;
