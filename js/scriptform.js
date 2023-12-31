/*
  File: script.js
  Author: CS100 Team
  Date Created: 23 July 2023
  Copyright: CSTU
  Description: JS code of CSTU Passport that validate with JS
*/

const config = {
  backendUrl: "http://localhost:8000/", // Default backend URL
};
const port = 8000;


// Function to validate Firstname and Lastname
function validateName() {
  const fullnameInput = document.getElementById("fullname");
  const names = fullnameInput.value.trim().split(" ");
  const errorElement = document.getElementById("fullnameError");

  if (names.length !== 2) {
    errorElement.textContent = 'โปรดใส่ชื่อและนามสกุลให้ถูกต้องตามฟอร์แมต "ชื่อจริง นามสกุล"';
    return false;
  } else {
    errorElement.textContent = ""; // Clear the error message when valid

  }
  return true;
}


// Function to validate Student ID
function validateSex() {
  const sexInput = document.getElementById("sex");
  const errorElement = document.getElementById("sexError");

  if (sexInput.value <= 0) {
    errorElement.textContent = "โปรดเลือกเพศของคุณ";
    return false;
  }

  else {
    errorElement.textContent = "" ; // Clear the error message when valid
  }
  return true;
}


// Function to validate Student ID
function validateStudentID() {
  const studentIDInput = document.getElementById("studentID");
  const studentIDPattern = /^\d{10}$/;
  const errorElement = document.getElementById("studentIDError");

  if (!studentIDPattern.test(studentIDInput.value)) {
    errorElement.textContent = "โปรดใส่เลขรหัสนักศึกษาให้ถูกต้อง"
    return false;
  }

  else {
    errorElement.textContent = ""; // Clear the error message when valid
  }
  return true;
}


// Function to validate University Email
function validateEmail() {
  const emailInput = document.getElementById("email");
  const emailPattern = /^.+@dome\.tu\.ac\.th$/;
  const errorElement = document.getElementById("emailError");

  if (!emailPattern.test(emailInput.value)) {
    errorElement.textContent =
      "โปรดใส่อีเมลให้ถูกต้องตามรูปแบบ 'xxx.yyy@dome.tu.ac.th'";
    return false;
  }
  
  else {
    errorElement.textContent = ""; // Clear the error message when valid
  }
  return true;
}

// validate phone number
function validatePhone() {
  const phoneInput = document.getElementById("phoneNum");
  const phonePattern = /^\d{10}$/;
  const errorElement = document.getElementById("phoneError");

  if (!phonePattern.test(phoneInput.value)) {
    errorElement.textContent = "โปรดใส่เบอร์โทรศัพท์ของคุณให้ถูกต้อง";
    return false;
  }
  
  else {
    errorElement.textContent = ""; // Clear the error message when valid
  }
  return true;
}

function validateWork() {
  const workTitleInput = document.getElementById("workTitle");
  const errorElement = document.getElementById("workError");

  if (workTitleInput.value.length <= 0 ) {
    errorElement.textContent =
      "กิจกรรม/งานของคุณ ไม่ควรว่าง";
    return false;
  }
  
  else {
    errorElement.textContent = ""; // Clear the error message when valid
  }
  return true;
}

function validateWorkType() {
  const workTitleInput = document.getElementById("activityType");
  const errorElement = document.getElementById("workTypeError");

  if (workTitleInput.value.length <= 0 ) {
    errorElement.textContent =
      "โปรดเลือกชนิดกิจกรรม";
    return false;
  }
  
  else {
    errorElement.textContent = "";
  }
  return true;
}

function validateAyear() {
  const ayearInput = document.getElementById("academicYear");
  const errorElement = document.getElementById("aYearError");

  if (ayearInput.value.length <= 0 ) {
    errorElement.textContent =
      "โปรดเลือกปีการศึกษา";
    return false;
  }
  
  else if (ayearInput.value != 2566){
    errorElement.textContent = "แนะนำให้คุณเลือกปีการศึกษานี้ (2566) [ไม่ใช่ข้อผิดพลาด]";

  }

  else {
    errorElement.textContent = "";
  }
  return true;
}

function validateSemester() {
  const semesterInput = document.getElementById("semester");
  const errorElement = document.getElementById("semesterError");

  if (semesterInput.value.length <= 0 ) {
    errorElement.textContent =
      "โปรดเลือกเทอม";
    return false;
  }
  
  else if (semesterInput.value != 1 ){
    errorElement.textContent = "แนะนำให้คุณเลือกเทอมนี้ (เทอม 1) [ไม่ใช่ข้อผิดพลาด]";
  }

  else {
    errorElement.textContent = "";
  }
  return true;
}

function validateLocation() {
  const Locate = document.getElementById("location");
  const errorElement = document.getElementById("locationError");

  if (Locate.value.length <= 0 ) {
    errorElement.textContent =
      "สถานที่ทำกิจกรรม ไม่ควรเว้นว่าง";
    return 0;
  }
  
  else {
    errorElement.textContent = "";
  }
  return 1;
}

function validateDate() {
  const start = document.getElementById("startDate");
  const end = document.getElementById("endDate");
  const errorElement = document.getElementById("dateError");

  if (start.value <= 0 || end.value <= 0) {
    errorElement.textContent =
      "วันเวลาเริ่มต้น หรือ สิ้นสุด ไม่ควรเว้นว่าง";
    return 0;
  }
  
  else if (start.value > end.value){
      errorElement.textContent =
      "วันเวลาเริ่มต้น ไม่ควรเริ่มหลังวันสิ้นสุด";
    return 0;
    }

    else{
    errorElement.textContent = "";
    
    }

    return 1;
  }





// Function to fetch activity types from the backend
/*
async function fetchActivityTypes() {
  try {
    const response = await fetch(config.backendUrl + "getActivityType");
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Failed to fetch activity types.");
      return [];
    }
  } catch (error) {
    console.error("An error occurred while fetching activity types:", error);
    return [];
  }
}
*/

// Function to populate activity types in the select element
/*
function populateActivityTypes(activityTypes) {
  const activityTypeSelect = document.getElementById("activityType");

  for (const type of activityTypes) {
    const option = document.createElement("option");
    option.value = type.id;
    option.textContent = type.value;
    activityTypeSelect.appendChild(option);
  }
}

// Event listener when the page content has finished loading
document.addEventListener("DOMContentLoaded", async () => {
  const activityTypes = await fetchActivityTypes();
  populateActivityTypes(activityTypes);
});
*/


  


function validcheck(){
  validateName();
  validateStudentID();
  validateEmail();
  validateWork();
  validateWorkType();
  validatePhone();
  validateSemester();
  validateAyear();
  validateLocation();
  validateDate();
  validateSex();

  a = !validateName() + 
!validateStudentID() + 
!validateEmail() + 
!validateWork() + 
!validateWorkType() + 
!validatePhone() + 
!validateSemester() + 
!validateAyear() + 
!validateLocation() + 
!validateDate() +
!validateSex();

const errorElement = document.getElementById("allError");
  if (a  > 0 ) {
    errorElement.textContent = "ไม่สามารถบันทึกได้ เนื่องจากมีจุดผิดพลาด "+a+" จุด";
    alert("ไม่สามารถบันทึกได้เนื่องจากมีจุดผิดพลาด โปรดแก้ไขก่อนที่จะกด Submit อีกครั้ง");


}
}

var z = 1;
var a = 0;

function displaydata(){

const fullname = document.getElementById("fullname");
const studentid = document.getElementById("studentID");
const work = document.getElementById("workTitle");
const email = document.getElementById("email");
const worktype = document.getElementById("activityType").value;
const startdatetime = document.getElementById("startDate");
const enddatetime = document.getElementById("endDate");
const ayear = document.getElementById("academicYear").value;
const semes = document.getElementById("semester").value;
const locate = document.getElementById("location").value;
const description = document.getElementById("description").value;
const phone = document.getElementById("phoneNum");
const sex = document.getElementById("sex");


validcheck();

a = !validateName() + 
!validateStudentID() + 
!validateEmail() + 
!validateWork() + 
!validateWorkType() + 
!validatePhone() + 
!validateSemester() + 
!validateAyear() + 
!validateLocation() + 
!validateDate() +
!validateSex();

const errorElement = document.getElementById("allError");
  if (a  > 0 ) {
    errorElement.textContent = "ไม่สามารถบันทึกได้ เนื่องจากมีจุดผิดพลาด "+a+" จุด";
    alert("ไม่สามารถบันทึกได้เนื่องจากมีจุดผิดพลาด โปรดแก้ไขก่อนที่จะกด Submit อีกครั้ง");

  
//       document.getElementById("ActNext").insertAdjacentHTML("afterend",
// '<table><div><tr id="style2"><td colspan="3"><h2>Activity n : งาน123456789</h2></tr><tr id="style2"><td><h3>ภาพกิจกรรม</h3><img src="" width="400vh" height="300vh" id="style3" /></td><td width="600vh"><h2>ชื่อคนที่ทำกิจกรรม : </h2><h3>รหัสนักศึกษา : </h3><h3>อีเมลล์ : </h3><h3>อยู่ปีการศึกษา : </h3><h3>เบอร์โทรศัพท์ : </h3><br><h3>ชนิดกิจกรรม : </h3><h3>วันเริ่ม-จบกิจกรรม : </h3><h3>สถานที่ทำกิจกรรม : </h3><h3>รายละเอียดกิจกรรมเพิ่มเติม : </h3></td></tr></div></table>');
  }
  else{

    if (z==1){
      document.getElementById("ActNext").insertAdjacentHTML("beforeend","<h1 id='font-noto1'>My Previous Activity</h1>");
      
    }

    
  //display picture

  var b = document.getElementById("picturedata").textContent;

          document.getElementById("ActNext").insertAdjacentHTML("afterend",
 '<table><div><tr id="style2"><td colspan="3"><h2 id="font-noto1">Activity '+z+' : '+work.value+'</h2></tr><tr id="style2"><td id="font-noto2"><h3>ภาพกิจกรรม</h3><img src="'+b+'" width="400vh" height="300vh" id="style3" /></td><td width="600vh" id="font-kanit1"><h2>ชื่อคนที่ทำกิจกรรม : '+fullname.value+'</h2><h3>เพศ : '+sex.value+'</h3><h3>รหัสนักศึกษา : '+studentid.value+'</h3><h3>อีเมลล์ : '+email.value+'</h3><h3>อยู่ปีการศึกษา : '+semes+'/'+ayear+'</h3><h3>เบอร์โทรศัพท์ : '+phone.value+'</h3><br><h3>ชนิดกิจกรรม : '+worktype+'</h3><h3>วันเริ่ม-จบกิจกรรม : '+startdatetime.value+' - '+enddatetime.value+'</h3><h3>สถานที่ทำกิจกรรม : '+locate+'</h3><h3>รายละเอียดกิจกรรมเพิ่มเติม : '+description+'</h3></td></tr></div></table>');




    //encodeImageFileAsURL();
  errorElement.textContent = "";
  //document.getElementById("ActNext").insertAdjacentHTML("afterend","<tr><td>"+a+"</td><td>"+fullname.value+"</td><td>"+studentid.value+"</td><td>"+work.value+" - TypeOfWork</td><td>Semester/A.year</td><td>Places</td></tr>");
 //<div><tr><td colspan="2"><h2>Activity'+z+' : </h2></td></tr><tr id="style2"><td><h3>ภาพกิจกรรม</h3><img src="" width="400vh" height="300vh" id="style3" /></td><td width="600vh"><h2>ชื่อคนที่ทำกิจกรรม : </h2><h3>รหัสนักศึกษา : </h3><h3>อีเมลล์ : </h3><h3>อยู่ปีการศึกษา : </h3><h3>เบอร์โทรศัพท์ : </h3><br><h3>ชนิดกิจกรรม : </h3><h3>วันเริ่ม-จบกิจกรรม : -</h3><h3>สถานที่ทำกิจกรรม : </h3><h3>รายละเอียดกิจกรรมเพิ่มเติม : </h3></td></tr></div>' 


alert("บันทึกข้อมูลได้สำเร็จ");
z++;

//document.getElementById("myForm").reset();
}

}






//preview image

var fileTag = document.getElementById("filetag"),
    preview = document.getElementById("preview"),
    picturedata = document.getElementById("picturedata");
    
fileTag.addEventListener("change", function() {
  changeImage(this);
});

function changeImage(input) {
  var reader;

  if (input.files && input.files[0]) {
    reader = new FileReader();

    reader.onload = function(e) {
      preview.setAttribute('src', e.target.result);
      var b = e.target.result;
      picturedata.textContent = b;
    }

    reader.readAsDataURL(input.files[0]);
  }
}



// Event listener for form submission
document.getElementById("myForm").addEventListener("submit", submitForm);

// Event listeners for input validation on user input
document.getElementById("fullname").addEventListener("input", validateName);
document.getElementById("studentID").addEventListener("input", validateStudentID);
document.getElementById("email").addEventListener("input", validateEmail);
document.getElementById("phoneNum").addEventListener("input", validatePhone);
document.getElementById("workTitle").addEventListener("input", validateWork);
document.getElementById("academicYear").addEventListener("input", validateAyear);
document.getElementById("semester").addEventListener("input", validateSemester);
document.getElementById("location").addEventListener("input", validateLocation);
document.getElementById("activityType").addEventListener("input", validateWorkType);
document.getElementById("startDate").addEventListener("input", validateDate);
document.getElementById("endDate").addEventListener("input", validateDate);
document.getElementById("sex").addEventListener("input", validateSex);



// Function to submit the form
async function submitForm(event) {
  event.preventDefault();

    // Validate form inputs before submission
    a = !validateName() + 
    !validateStudentID() + 
    !validateEmail() + 
    !validateWork() + 
    !validateWorkType() + 
    !validatePhone() + 
    !validateSemester() + 
    !validateAyear() + 
    !validateLocation() + 
    !validateDate() +
    !validateSex();

 if (a>0) {
   console.log("Can't fetch! Please check all error point!")
    return;
  }

  // Create the data object to send to the backend
  const formData = new FormData(event.target);
  const data = {
    first_name: formData.get("fullname").split(" ")[0],
    last_name: formData.get("fullname").split(" ")[1],
    student_id: parseInt(formData.get("studentID")),
    email: formData.get("email"),
    title: formData.get("workTitle"),
    type_of_work_id: formData.get("activityType"),
    academic_year: parseInt(formData.get("academicYear")) - 543,
    semester: parseInt(formData.get("semester")),
    start_date: formData.get("startDate"),
    end_date: formData.get("endDate"),
    location: formData.get("location"),
    description: formData.get("description"),
    sex : formData.get("sex")
    //pic_data: document.getElementById("picturedata").textContent
  };

  console.log(data);

  try {
    // Send data to the backend using POST request
    const response = await fetch(`http://${window.location.hostname}:${port}/record`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    //check if response to localhost is ok
    if (response.ok) {
      const responseData = await response.json();
      console.log("Form data submitted successfully!");

      // Format JSON data for display
      const formattedData = Object.entries(responseData.data)
        .map(([key, value]) => `"${key}": "${value}"`)
        .join("\n");

      // Display success message with formatted data
      alert(responseData.message + "\n" + formattedData);

      displaydata();

      document.getElementById("myForm").reset();
    } else {
      console.error("No Response. Failed to submit form data.");

      // Display error message
      alert("No response to Localhost! Failed to submit form data. Please try again.");
    }
  } catch (error) {
    console.error("An error occurred while submitting form data:", error);
  }
}