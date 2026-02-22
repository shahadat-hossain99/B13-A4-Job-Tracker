let interviewList = [];
let rejectedList = [];

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
  console.log(selected);

  selected.classList.add("btn-info", "text-base-100");
}

// Main function

mainContainer.addEventListener("click", function (event) {
  //! for interview button

  console.log(event.target.classList.contains("interview-btn"));
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

    // console.log(
    //   companyName,
    //   postName,
    //   place,
    //   jobList
    //   workPlace,
    //   salary,
    //   jobStatus,
    //   jobDescription,
    // );

    const cardInfo = {
      companyName,
      postName,
      place,
      workPlace,
      salary,
      jobStatus,
      jobDescription,
    };
    // console.log(cardInfo);

    const companyExist = interviewList.find(
      (item) => item.companyName == cardInfo.companyName,
    );
    if (!companyExist) {
      interviewList.push(cardInfo);
    }
    // console.log(interviewList);
    constructInterviewList();
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
                Mobile First Corp
              </h6>
              <p class="postName text-[#64748B]">React Native Developer</p>
            </div>

            <!-- location,type and salary -->
            <div class="md:flex gap-2.5 text-[14px] text-[#64748B]">
              <span class="place">Remote</span>
              <ul class="md:flex gap-2">
                <li class="workPlace flex items-center gap-1.5">
                  <i class="fa-solid fa-circle text-[5px]"></i> Full time
                </li>
                <li class="salary flex items-center gap-1.5">
                  <i class="fa-solid fa-circle text-[5px]"></i> $130,000 -
                  $175,000
                </li>
              </ul>
            </div>

            <!-- status and job description -->
            <div>
              <span
                class="job-status py-2 px-3 rounded-lg font-medium text-[#002C5C] bg-[#EEF4FF]"
                >NOT APPLIED</span
              >
              <p class="jobDescription mt-4">
                Build cross-platform mobile applications using React Native.
                Work on products used by millions of users worldwide.
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
  }
}
