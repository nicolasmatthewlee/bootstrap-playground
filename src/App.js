import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// required for dropdown to work
import "@popperjs/core";
import "bootstrap";

import Dropdown from "react-bootstrap/Dropdown";

import IMG from "./assets/example.jpg";

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
        {/* input groups are created with a parent.input-group which acts as the
        container for inputs and addons

        input groups allow you to extend form controls to add text, icons, 
        and buttons before, after, or on both sides of the input

        when using text, both the input and the input-group-text
        are under the parent input-group; when using an icon, only the
        icon falls under the input-group, and the input appears outside
        
        the span html tag is an inline container used to mark up part of a text or a document */}
        <div className="row g-3">
          <div className="col-6">
            <div className="input-group">
              <span className="input-group-text">
                <span className="bi-person"></span>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Amount"
              />
              <span className="input-group-text">.00</span>
            </div>
          </div>
          <div className="col-6">
            <div className="input-group">
              <span className="input-group-text">https://www.</span>
              <input
                type="text"
                className="form-control"
                placeholder="Domain name"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="input-group">
              <span className="input-group-text">$</span>
              <input
                type="text"
                className="form-control"
                placeholder="US Dollar"
              />
            </div>
          </div>
        </div>
        <br />
        {/* Bootstrap file input */}
        <div className="input-group">
          <input type="file" className="form-control" />
          <button className="btn btn-secondary">Upload</button>
        </div>
        <br />
        {/* place multiple inputs in an input-group
        or multiple addons in an input group */}
        <div className="input-group mb-3">
          <span className="input-group-text">Name</span>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
        <div className="input-group">
          <span className="input-group-text">$</span>
          <span className="input-group-text">0.00</span>
          <input type="text" className="form-control" />
        </div>
        <br />
        {/* add button to input-group (no need to specify input-group-text),
        just add the button inside the input-group parent */}
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Search..." />
          <button className="btn btn-primary">
            <i className="bi-search"></i>
          </button>
        </div>
        <br />
        {/* size input groups with input-group-lg, input-group-sm */}
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text">Large</span>
          <input className="form-control" type="text" />
        </div>
        <div className="input-group mb-2">
          <span className="input-group-text">Default</span>
          <input className="form-control" type="text" />
        </div>
        <div className="input-group input-group-sm mb-2">
          <span className="input-group-text">Small</span>
          <input className="form-control" type="text" />
        </div>
        <br />
        <div className="row gy-3 mb-3">
          <div className="col-auto">
            <button className="btn btn-primary">Primary</button>
          </div>
          <div className="col-auto">
            <button className="btn btn-secondary">Secondary</button>
          </div>
          <div className="col-auto">
            <button className="btn btn-warning">Warning</button>
          </div>
          <div className="col-auto">
            <button className="btn btn-success">Success</button>
          </div>
          <div className="col-auto">
            <button className="btn btn-dark">Dark</button>
          </div>
          <div className="col-auto">
            <button className="btn btn-danger">Danger</button>
          </div>
          <div className="col-auto">
            <button className="btn btn-link">Link</button>
          </div>
        </div>
        <div className="row gy-3 mb-3">
          <div className="col-auto">
            <button className="btn btn-outline-primary">Primary</button>
          </div>
          <div className="col-auto">
            <button className="btn btn-outline-secondary">Secondary</button>
          </div>
          <div className="col-auto">
            <button className="btn btn-outline-warning">Warning</button>
          </div>
          <div className="col-auto">
            <button className="btn btn-outline-success">Success</button>
          </div>
          <div className="col-auto">
            <button className="btn btn-outline-dark">Dark</button>
          </div>
          <div className="col-auto">
            <button className="btn btn-outline-danger">Danger</button>
          </div>
        </div>
        <div className="row gx-3 align-items-center mb-3">
          <div className="col-auto">
            <button className="btn btn-primary btn-lg">Large</button>
          </div>
          <div className="col-auto">
            <button className="btn btn-primary col-auto">Default</button>
          </div>
          <div className="col-auto">
            <button className="btn btn-primary btn-sm col-auto">Small</button>
          </div>
        </div>
        {/* can also create disabled buttons with attribute disabled, which 
        Bootstrap automatically styles */}
        {/* indicate loading state of application with a disabled button and spinner */}
        <div className="row mb-3">
          <div className="col-auto">
            <button className="btn btn-primary" disabled>
              <span className="spinner-border spinner-border-sm"></span>
            </button>
          </div>
          <div className="col-auto">
            <button className="btn btn-primary" disabled>
              <span className="spinner-border spinner-border-sm"></span>{" "}
              Loading...
            </button>
          </div>
          <div className="col-auto">
            <button className="btn btn-primary" disabled>
              <span className="spinner-grow spinner-grow-sm"></span> Loading...
            </button>
          </div>
        </div>
        {/* create a button group with parent btn-group */}
        <div className="row-">
          <div className="col-12">
            <div className="btn-group mb-3">
              <button className="btn btn-primary">Home</button>
              <button className="btn btn-primary active">About</button>
              <button className="btn btn-primary">Services</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="btn-group mb-3">
              <button className="btn btn-outline-primary">Home</button>
              <button className="btn btn-outline-primary active">About</button>
              <button className="btn btn-outline-primary">Services</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="btn-group mb-3">
              <button className="btn btn-success">
                <i className="bi-eye"></i> View
              </button>
              <button className="btn btn-warning">
                <i className="bi-pencil"></i> Edit
              </button>
              <button className="btn btn-danger">
                <i className="bi-trash"></i> Delete
              </button>
            </div>
          </div>
        </div>
        {/* create a toolbar of button groups with
        parent btn-toolbar and children btn-groups (with child buttons) */}
        <div className="btn-toolbar mb-3">
          <div className="btn-group me-2">
            <button className="btn btn-primary">
              <i className="bi-fonts"></i>
            </button>
            <button className="btn btn-primary">
              <i className="bi-type-bold"></i>
            </button>
            <button className="btn btn-primary">
              <i className="bi-type-italic"></i>
            </button>
            <button className="btn btn-primary">
              <i className="bi-type-underline"></i>
            </button>
          </div>
          <div className="btn-group me-2">
            <button className="btn btn-primary">
              <i className="bi-text-left"></i>
            </button>
            <button className="btn btn-primary">
              <i className="bi-text-center"></i>
            </button>
            <button className="btn btn-primary">
              <i className="bi-text-right"></i>
            </button>
            <button className="btn btn-primary">
              <i className="bi-text-justify"></i>
            </button>
          </div>
          <div className="btn-group">
            <button className="btn btn-primary">
              <i className="bi-code"></i>
            </button>
          </div>
        </div>
        {/* large, default, small button groups */}
        <div className="row">
          <div className="col-12">
            <div className="btn-group btn-group-lg mb-1">
              <button className="btn btn-primary">Home</button>
              <button className="btn btn-primary">About</button>
              <button className="btn btn-primary">Services</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="btn-group mb-1">
              <button className="btn btn-primary">Home</button>
              <button className="btn btn-primary">About</button>
              <button className="btn btn-primary">Services</button>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12">
            <div className="btn-group btn-group-sm">
              <button className="btn btn-primary">Home</button>
              <button className="btn btn-primary">About</button>
              <button className="btn btn-primary">Services</button>
            </div>
          </div>
        </div>
        {/* create a button group that flexes to available width with utility
        class d-flex applied to the btn-group */}
        <div className="btn-group d-flex mb-3">
          <button className="btn btn-primary">Home</button>
          <button className="btn btn-primary">About</button>
          <button className="btn btn-primary">Services</button>
        </div>
        {/* rounded, rounded-circle, img-thumbnail styles for images */}
        <div className="row mb-3">
          <div className="col-4">
            <img src={IMG} alt="example" className="img-fluid rounded" />
          </div>
          <div className="col-4">
            <img src={IMG} alt="example" className="img-fluid rounded-circle" />
          </div>
          <div className="col-4">
            <img src={IMG} alt="example" className="img-fluid img-thumbnail" />
          </div>
        </div>
        {/* img-fluid auto scales image width max-width 100%
        and height auto */}
        <img src={IMG} alt="example" className="img-fluid mb-3" />
        {/* can also style videos to be responsive */}
        {/* can align images in a container with text-center, text-end classes */}
        <div className="row border mb-1">
          <div className="col">
            <img src={IMG} alt="example" className="img-fluid col-2" />
          </div>
        </div>
        <div className="row border mb-1">
          <div className="col text-center">
            <img src={IMG} alt="example" className="img-fluid col-2" />
          </div>
        </div>
        <div className="row border mb-3">
          <div className="col text-end">
            <img src={IMG} alt="example" className="img-fluid col-2" />
          </div>
        </div>
        {/* can also align images horizonally with float classes in image directly */}
        <div className="row border mb-1">
          <div className="col">
            <img src={IMG} alt="" className="img-fluid col-2 float-end" />
          </div>
        </div>
        <div className="row border mb-3">
          <div className="col">
            <img src={IMG} alt="" className="img-fluid col-2 float-start" />
          </div>
        </div>
        {/* can center-align with auto margin in image directly */}
        <div className="row border mb-3">
          <div className="col">
            <img src={IMG} alt="" className="img-fluid col-2 d-block mx-auto" />
          </div>
        </div>
        {/* Bootstrap cards are flexible and extensible containers with options
        for headers, footers, contextual background colors, and additional
        display options */}
        {/* cards do not have a fixed width, so they will occupy the full width
        of its parent element; a fixed-width card must explicitly specify width
        or be contained within a fixed-width parent; card has no margin by default
        
        card-header
        card-img-top
        card-body : padded box within card
          card-title
          card-subtitle
          card-text
          card-link
        card-footer
        
         */}
        <div className="row mb-3">
          <div className="col-6">
            <div className="card">
              <img src={IMG} alt="example" className="card-img-top" />
              <div className="card-body text-center">
                <h5 className="card-title">John Smith</h5>
                <p>
                  John is a web developer based in Los Angeles. He is
                  specialized in HTML5, CSS3, JavaScript, and Bootstrap.
                </p>
                <button className="btn btn-primary">View Profile</button>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card">
              <img src={IMG} alt="example" className="card-img-top" />
              <div className="card-body text-center">
                <h5 className="card-title">John Smith</h5>
                <p>
                  John is a web developer based in Los Angeles. He is
                  specialized in HTML5, CSS3, JavaScript, and Bootstrap.
                </p>
                <button className="btn btn-primary">View Profile</button>
              </div>
            </div>
          </div>
        </div>
        {/* example of card-header and card-footer
         card-footer uses text-muted to lighten text */}
        <div className="card text-center mb-3">
          <div className="card-header">Featured</div>
          <div className="card-body ">
            <h5 className="card-title">NASA Launched Solar Probe</h5>
            <p className="card-text">
              NASA launched Parker space probe in 2018 with the mission of
              making observations of the outer corona of the Sun. It is the
              first-ever mission to "touch" the Sun.
            </p>
            <button className="btn btn-primary">Learn more</button>
          </div>
          <div className="card-footer text-muted">3 years ago</div>
        </div>
        {/* example of group-list in a card
        ul must use class list-group-flush */}
        <div className="card mb-3">
          <div className="card-header">Expenses</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Groceries</li>
            <li className="list-group-item">Utilities</li>
            <li className="list-group-item">Misc.</li>
          </ul>
          <div className="card-body">
            <a href="" className="card-link">
              Add More
            </a>
            <a href="" className="card-link">
              Share
            </a>
          </div>
        </div>
        {/* the additional styling provided by setting card-title, etc. 
        as opposed to not defining any class ensures that the card is 
        styled nicely; may be small differences but do improve styling */}
        <div className="row mb-3">
          <div className="col-8">
            <div className="card">
              <img src={IMG} alt="example" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Here is some example text to make up the card's content.
                  Replace it with your own text anytime.
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Item one</li>
                <li className="list-group-item">Item two</li>
                <li className="list-group-item">Item three</li>
              </ul>
              <div className="card-body">
                <a href="" className="card-link">
                  Card link
                </a>
                <a href="" className="card-link">
                  Card link two
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* can also add Bootstrap nav components to the card header */}
        {/* coloring cards with text-{COLOR} and bg-{OPTION} */}
        <div className="row gy-4 mb-3">
          <div className="col-6">
            <div className="card bg-primary text-white">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some example text to fill the card's content. This can be
                  replaced anytime.
                </p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card bg-dark text-white">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some example text to fill the card's content. This can be
                  replaced anytime.
                </p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card bg-warning text-white">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some example text to fill the card's content. This can be
                  replaced anytime.
                </p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card bg-danger text-white">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some example text to fill the card's content. This can be
                  replaced anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* card groups render cards as single, attached elements with equal
        width and height columns; cards inside a card group become
        horizontally stacked on extra small devices */}
        <div className="card-group mb-3">
          <div className="card">
            <img src={IMG} alt="example" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some example text to fill the card's content. This can be
                replaced anytime.
              </p>
            </div>
            <div className="card-footer text-muted">
              Last updated 5 mins ago
            </div>
          </div>
          <div className="card">
            <img src={IMG} alt="example" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some example text to fill the card's content. This can be
                replaced anytime.
              </p>
            </div>
            <div className="card-footer text-muted">
              Last updated 5 mins ago
            </div>
          </div>
          <div className="card">
            <img src={IMG} alt="example" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some example text to fill the card's content. This can be
                replaced anytime.
              </p>
            </div>
            <div className="card-footer text-muted">
              Last updated 5 mins ago
            </div>
          </div>
        </div>
        {/* can also layout cards with Bootstrap rows and cols, setting 
        the number of cols for each screen size */}
        {/* can create horizontal cards by putting a row and col inside 
        of a card */}
        {/* set image into a card background with card-img-overlay
        NOTE: the card content must not be larger than the height of
        the image, or it will be displayed outside the image */}
        <div className="card mb-3">
          <img src={IMG} alt="example" className="card-img-top" />
          <div className="card-img-overlay">
            <h5 className="card-title">John Smith</h5>
            <p>
              John is a web developer based in Los Angeles. He is specialized in
              HTML5, CSS3, JavaScript, and Bootstrap.
            </p>
            <button className="btn btn-primary">View Profile</button>
          </div>
        </div>
        {/* can make a link in the entire card expand to the full card (so that
        the entire card is clickable and will direct to the link by
        specifying "stretched-link" class in the link tag) */}
        {/* Bootstrap icons example */}
        <div className="row mb-3">
          <div className="col-auto">
            <button className="btn btn-primary">
              <i className="bi-search"></i> Search
            </button>
          </div>
          <div className="col-auto">
            <button className="btn btn-dark">
              <i className="bi-search"></i> Search
            </button>
          </div>
        </div>
        {/* Bootstrap nav
        NOTE: disabled attribute makes the link look disabled by
        changing the color and removing the hover effect, but the
        link remains clickable unless the href attribute is removed */}
        <nav className="nav">
          <a href="" className="nav-item nav-link">
            Home
          </a>
          <a href="" className="nav-item nav-link">
            Profile
          </a>
          <a href="" className="nav-item nav-link">
            Messages
          </a>
          <a className="nav-item nav-link disabled">Reports</a>
        </nav>
        {/* align nav items with justify-content-center, justify-content-end */}
        <nav className="nav justify-content-center">
          <a href="" className="nav-item nav-link">
            Home
          </a>
          <a href="" className="nav-item nav-link">
            Profile
          </a>
          <a href="" className="nav-item nav-link">
            Messages
          </a>
          <a className="nav-item nav-link disabled">Reports</a>
        </nav>
        <nav className="nav justify-content-end">
          <a href="" className="nav-item nav-link">
            Home
          </a>
          <a href="" className="nav-item nav-link">
            Profile
          </a>
          <a href="" className="nav-item nav-link">
            Messages
          </a>
          <a className="nav-item nav-link disabled">Reports</a>
        </nav>

        {/* can make vertically-stacked navigation with flex-column class
        added to nav  */}
        {/* tabbed navigation with "nav nav-tabs" */}
        <nav className="nav nav-tabs mb-3">
          <a href="" className="nav-item nav-link active">
            Home
          </a>
          <a href="" className="nav-item nav-link">
            Profile
          </a>
          <a href="" className="nav-item nav-link">
            Messages
          </a>
          <a className="nav-item nav-link disabled">Reports</a>
        </nav>

        {/* add icons to navigation bar */}
        <nav className="nav nav-tabs mb-3">
          <a href="" className="nav-item nav-link active">
            <i className="bi-house-door"></i> Home
          </a>
          <a href="" className="nav-item nav-link">
            <i className="bi-person"></i> Profile
          </a>
          <a href="" className="nav-item nav-link">
            <i className="bi-envelope"></i> Messages
          </a>
          <a className="nav-item nav-link disabled">
            <i className="bi-bar-chart"></i> Reports
          </a>
        </nav>

        {/* pills navigation */}
        <nav className="nav nav-pills mb-3">
          <a href="" className="nav-item nav-link active">
            <i className="bi-house-door"></i> Home
          </a>
          <a href="" className="nav-item nav-link">
            <i className="bi-person"></i> Profile
          </a>
          <a href="" className="nav-item nav-link">
            <i className="bi-envelope"></i> Messages
          </a>
          <a className="nav-item nav-link disabled">
            <i className="bi-bar-chart"></i> Reports
          </a>
        </nav>

        {/* vertical pills navigation */}
        <nav className="nav nav-pills mb-3 flex-column">
          <a href="" className="nav-item nav-link active">
            <i className="bi-house-door"></i> Home
          </a>
          <a href="" className="nav-item nav-link">
            <i className="bi-person"></i> Profile
          </a>
          <a href="" className="nav-item nav-link">
            <i className="bi-envelope"></i> Messages
          </a>
          <a className="nav-item nav-link disabled">
            <i className="bi-bar-chart"></i> Reports
          </a>
        </nav>

        {/* Bootstrap dropdown menus (not working...
        try react-bootstrap dropdown components) */}
        <Dropdown className="mb-3">
          <Dropdown.Toggle>Messages</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Inbox</Dropdown.Item>
            <Dropdown.Item>Sent</Dropdown.Item>
            <Dropdown.Item>Drafts</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* expand nav-items to proportionally (based on item size) 
        fill all space with nav-fill */}
        <nav className="nav nav-pills nav-fill mb-3">
          <a href="#bottom" className="nav-item nav-link active">
            <i className="bi-house-door"></i> Home
          </a>
          <a href="#bottom" className="nav-item nav-link">
            <i className="bi-person"></i> Profile
          </a>
          <a href="#bottom" className="nav-item nav-link">
            <i className="bi-envelope"></i> Messages
          </a>
          <a className="nav-item nav-link disabled">
            <i className="bi-bar-chart"></i> Reports
          </a>
        </nav>

        {/* use nav-justified for nav items to fill all space
        and each have the same width */}
        <nav className="nav nav-pills nav-justified mb-3">
          <a href="#bottom" className="nav-item nav-link active">
            <i className="bi-house-door"></i> Home
          </a>
          <a href="#bottom" className="nav-item nav-link">
            <i className="bi-person"></i> Profile
          </a>
          <a href="#bottom" className="nav-item nav-link">
            <i className="bi-envelope"></i> Messages
          </a>
          <a className="nav-item nav-link disabled">
            <i className="bi-bar-chart"></i> Reports
          </a>
        </nav>

        {/* Bootstrap navigation bar will auto collapse on devices
        with small viewports with expansion when users click the
        toggle button; will be horizontal on medium and large
        devices like laptops or desktop
        
        nav.navbar
        a.navbar-brand
        button.navbar-toggler>i.navbar-toggler-icon
        */}

        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container-fluid">
            <a href="#bottom" className="navbar-brand">
              Brand
            </a>
            <button
              type="button"
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <i className="navbar-toggler-icon"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav">
                <a href="#bottom" className="nav-item nav-link">
                  Home
                </a>
                <a href="#bottom" className="nav-item nav-link">
                  Profile
                </a>
                <a href="#bottom" className="nav-item nav-link">
                  Messages
                </a>
                <a href="#bottom" className="nav-item nav-link">
                  Reports
                </a>
              </div>
              <div className="navbar-nav ms-auto">
                <a href="#bottom" className="nav-item nav-link">
                  Login
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* can add logo images, dropdowns, search form of navbar
        can set color of navbar
        can fix navbar to top or bottom .fixed-top .fixed-bottom
        can set sticky navbar with .sticky-top */}

        {/* NOTE: must add at least 70px padding to top or bottom when
        using fixed-top or fixed-bottom navbar
        
        ALSO, place navbar in a .container, .container-fluid for
        proper padding and alignment with the rest of the content */}

        <br />
      </div>
      <div id="bottom"></div>
    </div>
  );
}

export default App;
