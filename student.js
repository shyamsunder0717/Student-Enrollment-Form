var jpdbBaseURL = "http://api.login2explore.com:5577";
var jpdbIRL = "/api/irl";
var jpdbIML = "/api/iml";
var proDBName = "STUDENT-TABLE";  
var schoolRelationName = "SCHOOL-DB";  
var connToken = "90931764|-31949307529103269|90963442";

$("#rollNo").focus();

function saveRecNo2LS(jsonObj) {
    var lvData = JSON.parse(jsonObj.data);
    localStorage.setItem("recno", lvData.rec_no); 
}

function getStudentIdAsJsonObj() {
    var rollNo = $("#rollNo").val();  
    var jsonStr = {
        id: rollNo
    };
    return JSON.stringify(jsonStr);
}

function fillData(jsonObj) {
    saveRecNo2LS(jsonObj);
    var record = JSON.parse(jsonObj.data).record;
    $("#fullName").val(record.Name);
    $("#section").val(record.Section);
    $("#birthDate").val(record.BirthDate);
    $("#address").val(record.Address);    
    $("#enrollmentDate").val(record.EnrollmentDate);    
}


function validateData() {
    var rollNo, fullName, section, birthDate, address, enrollmentDate;
    rollNo = $("#rollNo").val();
    fullName = $("#fullName").val();
    section = $("#section").val();
    birthDate = $("#birthDate").val();
    address = $("#address").val();
    enrollmentDate = $("#enrollmentDate").val();

    if (rollNo === "") {
        alert("rollNo is missing");
        $("#rollNo").focus();
        return "";
    }
    if (fullName === "") {
        alert("fullName is missing");
        $("#fullName").focus();
        return "";
    }
    if (section === "") {
        alert("section missing");
        $("#section").focus();
        return "";
    }
    if (birthDate === "") {
        alert("birthDate is missing");
        $("#birthDate").focus();
        return "";
    }
    if (address === "") {
        alert("address enter the deadline");
        $("#address").focus();
        return "";
    }
    if (enrollmentDate === "") {
        alert("enrollmentDate enter the deadline");
        $("#enrollmentDate").focus();
        return "";
    }

    var jsonStrObj = {
        id: rollNo,
        Name: fullName,
        Section: section,
        BirthDate: birthDate,
        Address: address,
        EnrollmentDate: enrollmentDate
    };
    return JSON.stringify(jsonStrObj);
}

function getStudent() {
    var rollNoJsonObj = getStudentIdAsJsonObj();
    var getRequest = createGET_BY_KEYRequest(connToken, proDBName, schoolRelationName, rollNoJsonObj);  
    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(getRequest, jpdbBaseURL, jpdbIRL);  
    jQuery.ajaxSetup({async: true});
    if (resJsonObj.status === 400) {
        $("#save").prop("disabled", false);
        $("#reset").prop("disabled", false);
        $("#fullName").focus();
    } else if (resJsonObj.status === 200) {
        $("#rollNo").prop("disabled", true);
        fillData(resJsonObj);
        $("#change").prop("disabled", false);
        $("#reset").prop("disabled", false);
        $("#fullName").focus();
    }
}


function saveData() {
    var jsonStrObj = validateData();
    if (jsonStrObj === "") {
        return;
    }
    var putRequest = createPUTRequest(connToken, jsonStrObj, proDBName, schoolRelationName);  
    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(putRequest, jpdbBaseURL, jpdbIML);  
    jQuery.ajaxSetup({async: true});
    resetForm();
    $("#rollNo").focus();
}

function resetForm() {
    $("#rollNo").val("");
    $("#fullName").val("");
    $("#section").val("");
    $("#birthDate").val("");
    $("#address").val("");
    $("#enrollmentDate").val("");
    $("#rollNo").prop("disabled", false);
    $("#save").prop("disabled", true);
    $("#change").prop("disabled", true);
    $("#reset").prop("disabled", true);
    $("#rollNo").focus();
}

function changeData() {
    $("#change").prop("disabled", true);
    var jsonChg = validateData();  // Corrected variable name
    var updateRequest = createUPDATERecordRequest(connToken, jsonChg, proDBName, schoolRelationName, localStorage.getItem("recno"));  // Implement createUPDATERecordRequest
    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(updateRequest, jpdbBaseURL, jpdbIML);  // Implement executeCommandAtGivenBaseUrl
    jQuery.ajaxSetup({async: true});
    console.log(resJsonObj);
    resetForm();    
    $("#rollNo").focus();
}

