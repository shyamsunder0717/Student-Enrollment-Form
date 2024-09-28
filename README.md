# **Student Enrollment Form**

The **Student Enrollment Form** project is a web-based application that enables easy management and enrollment of student data. This project features a fully interactive form where users can input, retrieve, and update student information using a streamlined interface. It is designed to simplify student data management for schools or educational institutions by providing a seamless experience for administrators.


![Student-Enrollment-Form](https://github.com/shyamsunder0717/student-form/blob/main/front-page-screenshot.png)

## **Key Features**

- **Student Information Management**: Capture student details such as Roll No., Full Name, Class, Birth Date, Address, and Enrollment Date.
- **CRUD Operations**:
  - **Create**: Add new student records.
  - **Retrieve**: Fetch existing student data using their Roll No.
  - **Update**: Modify existing student records.
  - **Delete**: Reset form inputs for fresh entries.
- **Form Validation**: Ensures that all fields are filled out before submission, helping maintain data integrity.
- **Data Persistence**: Interacts with a backend database to store and retrieve student data securely.
- **Responsive Design**: The form layout is optimized for usability across different screen sizes and devices.

## **Technologies Used**

### **Frontend**:
- **HTML5**: For the structure of the form.
- **CSS3**: For styling the form, including a background image and responsive design.
- **Bootstrap**: For enhanced UI components.
- **jQuery**: For improved interactivity and DOM manipulation.

### **Backend**:
- **API Integration**: Using [login2explore](https://login2explore.com) to handle the storage and retrieval of student data.
- **Local Storage**: Used to manage session-based data.
- **JavaScript**: Handles form validation, AJAX requests, and dynamic form updates.

## **How to Use**

1. Enter the student’s **Roll No.** and click out of the field. If the Roll No. exists, the form will populate with the student’s data for review or update.
2. If the Roll No. does not exist, you can proceed to fill out the form and submit it by clicking the **Save** button.
3. After submitting, the form will reset, and the Roll No. input will be ready for the next student.

## **Future Enhancements**

- Add an authentication system for secure access.
- Implement more advanced data analytics or reporting features.
- Integrate additional fields based on school requirements.

## **Getting Started**

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/shyamsunder0717/student-form.git
   
2. Ensure that you have a valid connection token for **login2explore** and configure it in the script **(connToken)**.
3. Run the project by opening the **index.html** file in your browser.
