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
  InterviewCount.innerText = interviewList.children.length;
  rejectedCount.innerText = rejectedList.children.length;
}
calculateCount();
