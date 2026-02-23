let interviewList = [];
let rejectedList = [];
let currentStatus = "all";

let totalCount = document.getElementById("totalCount");
let InterviewCount = document.getElementById("InterviewCount");
let rejectedCount = document.getElementById("rejectedCount");

const jobCardContainer = document.getElementById("job-card-container");
// console.log(jobCardContainer.children.length);

const mainContainer = document.querySelector("main");
const filteredSection = document.getElementById("filtered-section");

// console.log(totalCount, InterviewCount, rejectedCount);

// function dashboard count

function calculateCount() {
  totalCount.innerText = jobCardContainer.children.length;
  InterviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}
calculateCount();

// toggle

const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

function toggleStyle(id) {
  allFilterBtn.classList.remove("btn-info", "text-base-100");
  interviewFilterBtn.classList.remove("btn-info", "text-base-100");
  rejectedFilterBtn.classList.remove("btn-info", "text-base-100");

  const selected = document.getElementById(id);
  // console.log(selected);
  currentStatus = id;

  selected.classList.add("btn-info", "text-base-100");

  if (id == "interview-filter-btn") {
    jobCardContainer.classList.add("hidden");
    filteredSection.classList.remove("hidden");
    constructInterviewList();
    noJobCard();
  } else if (id == "all-filter-btn") {
    jobCardContainer.classList.remove("hidden");

    filteredSection.classList.add("hidden");
  } else if (id == "rejected-filter-btn") {
    jobCardContainer.classList.add("hidden");

    filteredSection.classList.remove("hidden");

    constructRejectList();
    noJobCard();
  }
}

// Main function

// 1

mainContainer.addEventListener("click", function (event) {
  // console.log(event.target.classList.contains("interview-btn"));

  if (event.target.classList.contains("interview-btn")) {
    const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector(".companyName").innerText;
    const postName = parentNode.querySelector(".postName").innerText;
    const place = parentNode.querySelector(".place").innerText;
    // const jobList = parentNode.querySelector(".jobList").innerText;
    const workPlace = parentNode.querySelector(".workPlace").innerText;
    const salary = parentNode.querySelector(".salary").innerText;
    const jobStatus = parentNode.querySelector(".job-status").innerText;
    const jobDescription =
      parentNode.querySelector(".jobDescription").innerText;

    parentNode.querySelector(".job-status").innerText = "INTERVIEW";

    const cardInfo = {
      companyName,
      postName,
      place,
      workPlace,
      salary,
      jobStatus: "INTERVIEW",
      jobDescription,
    };
    // console.log(cardInfo);

    const companyExist = interviewList.find(
      (item) => item.companyName == cardInfo.companyName,
    );

    if (!companyExist) {
      interviewList.push(cardInfo);
    }

    rejectedList = rejectedList.filter(
      (item) => item.companyName != cardInfo.companyName,
    );

    if (currentStatus == "rejected-filter-btn") {
      constructRejectList();
    }

    // if (currentStatus == "interview-filter-btn") {
    //   constructInterviewList();
    // }

    calculateCount();
    // constructInterviewList();
  } else if (event.target.classList.contains("rejected-btn")) {
    const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector(".companyName").innerText;
    const postName = parentNode.querySelector(".postName").innerText;
    const place = parentNode.querySelector(".place").innerText;

    const workPlace = parentNode.querySelector(".workPlace").innerText;
    const salary = parentNode.querySelector(".salary").innerText;
    const jobStatus = parentNode.querySelector(".job-status").innerText;
    const jobDescription =
      parentNode.querySelector(".jobDescription").innerText;

    parentNode.querySelector(".job-status").innerText = "REJECTED";

    const cardInfo = {
      companyName,
      postName,
      place,
      workPlace,
      salary,
      jobStatus: "REJECTED",
      jobDescription,
    };
    // console.log(cardInfo);

    const companyExist = rejectedList.find(
      (item) => item.companyName == cardInfo.companyName,
    );

    if (!companyExist) {
      rejectedList.push(cardInfo);
    }

    interviewList = interviewList.filter(
      (item) => item.companyName != cardInfo.companyName,
    );

    if (currentStatus == "interview-filter-btn") {
      constructInterviewList();
    }

    calculateCount();

    // constructRejectList();
  } else if (event.target.closest(".card-delete")) {
    const card = event.target.closest(".flex"); // whole card
    const companyName = card.querySelector(".companyName").innerText;

    card.remove();

    interviewList = interviewList.filter(
      (item) => item.companyName !== companyName,
    );

    rejectedList = rejectedList.filter(
      (item) => item.companyName !== companyName,
    );

    // update counts
    calculateCount();

    // re-render filtered view if active
    if (currentStatus === "interview-filter-btn") {
      constructInterviewList();
    } else if (currentStatus === "rejected-filter-btn") {
      constructRejectList();
    }
  }
});

function constructInterviewList() {
  filteredSection.innerHTML = "";

  for (let interview of interviewList) {
    console.log(interview);

    let div = document.createElement("div");
    div.className =
      "flex justify-between p-6 bg-base-100 rounded-lg border border-gray-100";

    div.innerHTML = `

     <!-- left content -->

          <div class="space-y-5">
            <!-- company name and position -->

            <div>
              <h6 class="companyName font-semibold text-lg text-[#002C5C]">
                ${interview.companyName}
              </h6>
              <p class="postName text-[#64748B]">${interview.postName}</p>
            </div>

            <!-- location,type and salary -->
            <div class="md:flex gap-2.5 text-[14px] text-[#64748B]">
              <span class="place">${interview.place}</span>
              <ul class="md:flex gap-2">
                <li class="workPlace flex items-center gap-1.5">
                  <i class="fa-solid fa-circle text-[5px]"></i> ${interview.workPlace}
                </li>
                <li class="salary flex items-center gap-1.5">
                  <i class="fa-solid fa-circle text-[5px]"></i> ${interview.salary}
                </li>
              </ul>
            </div>

            <!-- status and job description -->
            <div>
              <span
                class="job-status py-2 px-3 rounded-lg font-medium text-[#002C5C] bg-[#EEF4FF]"
                >${interview.jobStatus}</span
              >
              <p class="jobDescription mt-4">
                ${interview.jobDescription}
              </p>
            </div>

            <div class="space-x-2">
              <button
                class="interview-btn btn btn-accent btn-outline font-semibold"
              >
                Interview
              </button>
              <button
                class="rejected-btn btn btn-error btn-outline font-semibold"
              >
                Rejected
              </button>
            </div>
          </div>

          <!-- right content -->

          <div>
            <button
              class="card-delete btn w-10 h-10 rounded-full border-2 text-gray-600 border-gray-300 cursor-pointer"
            >
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
    `;
    filteredSection.appendChild(div);
  }
}

function constructRejectList() {
  filteredSection.innerHTML = "";

  for (let rejected of rejectedList) {
    console.log(rejected);
    let div = document.createElement("div");
    div.className =
      "flex justify-between p-6 bg-base-100 rounded-lg border border-gray-100";

    div.innerHTML = `

     <!-- left content -->

          <div class="space-y-5">
            <!-- company name and position -->

            <div>
              <h6 class="companyName font-semibold text-lg text-[#002C5C]">
                ${rejected.companyName}
              </h6>
              <p class="postName text-[#64748B]">${rejected.postName}</p>
            </div>

            <!-- location,type and salary -->
            <div class="md:flex gap-2.5 text-[14px] text-[#64748B]">
              <span class="place">${rejected.place}</span>
              <ul class="md:flex gap-2">
                <li class="workPlace flex items-center gap-1.5">
                  <i class="fa-solid fa-circle text-[5px]"></i> ${rejected.workPlace}
                </li>
                <li class="salary flex items-center gap-1.5">
                  <i class="fa-solid fa-circle text-[5px]"></i> ${rejected.salary}
                </li>
              </ul>
            </div>

            <!-- status and job description -->
            <div>
              <span
                class="job-status py-2 px-3 rounded-lg font-medium text-[#002C5C] bg-[#EEF4FF]"
                >${rejected.jobStatus}</span
              >
              <p class="jobDescription mt-4">
                ${rejected.jobDescription}
              </p>
            </div>

            <div class="space-x-2">
              <button
                class="interview-btn btn btn-accent btn-outline font-semibold"
              >
                Interview
              </button>
              <button
                class="rejected-btn btn btn-error btn-outline font-semibold"
              >
                Rejected
              </button>
            </div>
          </div>

          <!-- right content -->

          <div>
            <button
              class="card-delete btn w-10 h-10 rounded-full border-2 text-gray-600 border-gray-300 cursor-pointer"
            >
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
    `;
    filteredSection.appendChild(div);
  }
}

// when UI have no cards

function noJobCard() {
  const interviewEmpty = interviewList.length === 0;
  const rejectedEmpty = rejectedList.length === 0;

  const noCardSection = document.getElementById("no-cards");

  noCardSection.classList.add("hidden");

  if (currentStatus === "interview-filter-btn") {
    if (interviewEmpty) {
      filteredSection.classList.add("hidden");
      noCardSection.classList.remove("hidden");
    } else {
      filteredSection.classList.remove("hidden");
    }
  } else if (currentStatus === "rejected-filter-btn") {
    if (rejectedEmpty) {
      filteredSection.classList.add("hidden");
      noCardSection.classList.remove("hidden");
    } else {
      filteredSection.classList.remove("hidden");
    }
  }
}
