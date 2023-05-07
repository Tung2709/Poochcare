let objItems = [
  {
    valueHTML: `<div class="col-4 blog-item" style="padding: 0 10px">
    <div class="card-item">
      <img
        src="https://wp.w3layouts.com/poochcare/wp-content/uploads/sites/8/2020/12/g1.jpg"
        alt=""
      />
      <div class="card-item-bottom">
        <p>Delivering Happiness For Pets</p>
        <div class="mt-3 mb-1">
          <b>W3Layouts </b>
          <span>- December 30, 2020</span>
        </div>
      </div>
    </div>
  </div>`,
  },
  {
    valueHTML: ` <div class="col-4 blog-item" style="padding: 0 10px">
    <div class="card-item">
      <img
        src="https://wp.w3layouts.com/poochcare/wp-content/uploads/sites/8/2020/12/g2.jpg"
        alt=""
      />
      <div class="card-item-bottom">
        <p>Delivering Happiness For Pets</p>
        <div class="mt-3 mb-1">
          <b>W3Layouts </b>
          <span>- December 30, 2020</span>
        </div>
      </div>
    </div>
  </div>`,
  },
  {
    valueHTML: `<div class="col-4 blog-item" style="padding: 0 10px">
    <div class="card-item">
      <img
        src="	https://wp.w3layouts.com/poochcare/wp-content/uploads/sites/8/2020/12/g3.jpg"
        alt=""
      />
      <div class="card-item-bottom">
        <p>Delivering Happiness For Pets</p>
        <div class="mt-3 mb-1">
          <b>W3Layouts </b>
          <span>- December 30, 2020</span>
        </div>
      </div>
    </div>
  </div>`,
  },

  {
    valueHTML: `<div class="col-4 blog-item" style="padding: 0 10px">
    <div class="card-item">
      <img
        src="	https://wp.w3layouts.com/poochcare/wp-content/uploads/sites/8/2020/12/g4.jpg"
        alt=""
      />
      <div class="card-item-bottom">
        <p>Delivering Happiness For Pets</p>
        <div class="mt-3 mb-1">
          <b>W3Layouts </b>
          <span>- December 30, 2020</span>
        </div>
      </div>
    </div>
  </div>`,
  },
  {
    valueHTML: `<div class="col-4 blog-item" style="padding: 0 10px">
    <div class="card-item">
      <img
        src="	https://wp.w3layouts.com/poochcare/wp-content/uploads/sites/8/2020/12/g5.jpg"
        alt=""
      />
      <div class="card-item-bottom">
        <p>Delivering Happiness For Pets</p>
        <div class="mt-3 mb-1">
          <b>W3Layouts </b>
          <span>- December 30, 2020</span>
        </div>
      </div>
    </div>
  </div>`,
  },
  {
    valueHTML: `<div class="col-4 blog-item" style="padding: 0 10px">
    <div class="card-item">
      <img
        src="https://wp.w3layouts.com/poochcare/wp-content/uploads/sites/8/2020/12/g6.jpg"
        alt=""
      />
      <div class="card-item-bottom">
        <p>Delivering Happiness For Pets</p>
        <div class="mt-3 mb-1">
          <b>W3Layouts </b>
          <span>- December 30, 2020</span>
        </div>
      </div>
    </div>
  </div>`,
  },
  {
    valueHTML: `<div class="col-4 blog-item" style="padding: 0 10px">
    <div class="card-item">
      <img
        src="	https://wp.w3layouts.com/poochcare/wp-content/uploads/sites/8/2020/12/g7.jpg"
        alt=""
      />
      <div class="card-item-bottom">
        <p>Delivering Happiness For Pets</p>
        <div class="mt-3 mb-1">
          <b>W3Layouts </b>
          <span>- December 30, 2020</span>
        </div>
      </div>
    </div>
  </div>`,
  },
  {
    valueHTML: `<div class="col-4 blog-item" style="padding: 0 10px">
    <div class="card-item">
      <img
        src="https://wp.w3layouts.com/poochcare/wp-content/uploads/sites/8/2020/12/g8.jpg"
        alt=""
      />
      <div class="card-item-bottom">
        <p>Delivering Happiness For Pets</p>
        <div class="mt-3 mb-1">
          <b>W3Layouts </b>
          <span>- December 30, 2020</span>
        </div>
      </div>
    </div>
  </div>`,
  },
  {
    valueHTML: `<div class="col-4 blog-item" style="padding: 0 10px">
    <div class="card-item">
      <img
        src="https://wp.w3layouts.com/poochcare/wp-content/uploads/sites/8/2020/12/g9.jpg"
        alt=""
      />
      <div class="card-item-bottom">
        <p>Delivering Happiness For Pets</p>
        <div class="mt-3 mb-1">
          <b>W3Layouts </b>
          <span>- December 30, 2020</span>
        </div>
      </div>
    </div>
  </div>`,
  },
  {
    valueHTML: `<div class="col-4 blog-item" style="padding: 0 10px">
    <div class="card-item">
      <img
        src="	https://wp.w3layouts.com/poochcare/wp-content/uploads/sites/8/2020/12/g7.jpg"
        alt=""
      />
      <div class="card-item-bottom">
        <p>Delivering Happiness For Pets</p>
        <div class="mt-3 mb-1">
          <b>W3Layouts </b>
          <span>- December 30, 2020</span>
        </div>
      </div>
    </div>
  </div>`,
  },
];

let current_page = 1;
let records_per_page = 9;

function prevPage() {
  if (current_page > 1) {
    current_page--;
    changePage(current_page);
  }
}

function nextPage() {
  if (current_page < numPages()) {
    current_page++;
    console.log({ current_page });
    changePage(current_page);
  }
}

function changePage(page = 0) {
  var btn_next = document.getElementById("btn_next");
  var btn_prev = document.getElementById("btn_prev");
  var listing_table = document.getElementById("listingTable");
  var page_span = document.getElementsByClassName("page");

  listing_table.innerHTML = "";
  page_span.innerHTML = page;
  if (page == 1) {
    btn_prev.style.visibility = "hidden";
  } else {
    btn_prev.style.visibility = "visible";
  }

  if (page == numPages()) {
    btn_next.style.visibility = "hidden";
  } else {
    btn_next.style.visibility = "visible";
  }

  for (
    let i = (page - 1) * records_per_page;
    i < page * records_per_page;
    i++
  ) {
    listing_table.innerHTML += objItems[i].valueHTML;
  }
}

function numPages() {
  return Math.ceil(objItems.length / records_per_page);
}
window.onload = function () {
  changePage(1);
};
