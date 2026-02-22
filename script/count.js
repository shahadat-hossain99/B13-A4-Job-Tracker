let interviewList = [];
let rejectedList = [];

let totalCount = document.getElementById("totalCount");
let InterviewCount = document.getElementById("InterviewCount");
let rejectedCount = document.getElementById("rejectedCount");

const jobCardContainer = document.getElementById("job-card-container");
// console.log(jobCardContainer.children.length);

const mainContainer = document.querySelector("main");

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
  console.log(selected);

  selected.classList.add("btn-info", "text-base-100");
}
