
# Academic Students Affairs (ASA)

The Academic Students Affairs (ASA) project is a full-stack web application built using the Django framework. It provides several features to manage student records, including adding new students, editing their information, assigning them to departments, updating their status, and deleting them from the system.

## Features

The ASA project includes the following features:

- **Add Student**: This feature allows users to add new students to the system by providing their basic information, such as their name, email address, and academic level. Once added, the student will be assigned a unique identifier and stored in the system's database.

- **Edit Student**: This feature enables users to modify the information of existing students in the system. They can update the student's name, email address, academic level, and any other relevant details except id.

- **Assign Department for Student**: This feature allows users to assign a department to a student. Each department has a unique identifier and a name, and students can be assigned to one or more departments as needed.

- **Edit Student State**: This feature enables users to update the status of a student. They can mark a student as active or inactive, depending on whether they are currently enrolled in the academic program or have graduated.

- **Delete Student**: This feature allows users to remove a student from the system. Once deleted, the student's information will be permanently removed from the database.

## Getting Started

To run the ASA project on your local machine, follow these steps:

1. Clone the project from the GitHub repository.
2. Install the required dependencies by running the following command in your terminal:
```
pip install -r requirements.txt
```
3. Set up the database by running the following commands:
```
python manage.py makemigrations
python manage.py migrate
```
4. Start the development server by running the following command:
```
python manage.py runserver
```
5. Open your web browser and navigate to `http://localhost:8000/` to access the application.

## Contributing

Contributions to the ASA project are welcome! If you encounter any issues or have ideas for new features, please open an issue on the GitHub repository or submit a pull request.

### Contributors

| Name        | Email                |
| ----------- | --------------------|
| Rana Essam   | ranaessam03@gmail.com|
| Nour Muhammed   | nourmuhammad835@gmail.com|
| Merna Islam  | mernaislam39@gmail.com|
| Noor Eyad  | nooreyadd39@gmail.com |

