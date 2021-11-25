CREATE DATABASE pevn;

CREATE TABLE proffesor (
    id_prof SERIAL PRIMARY KEY,
    prof_name TEXT NOT NULL,
    prof_email TEXT NOT NULL,
    prof_password TEXT NOT NULL
);

CREATE TABLE student (
    id_student SERIAL PRIMARY KEY,
    student_name TEXT NOT NULL,
    student_email TEXT NOT NULL,
    student_password TEXT NOT NULL
);

CREATE TABLE course (
    id_course SERIAL PRIMARY KEY,
    prof_id INTEGER REFERENCES professor(id_prof),
    course_name TEXT NOT NULL,
    course_description TEXT NOT NULL
);

CREATE TABLE studentvscourse (
    student_id INTEGER NOT NULL REFERENCES student(id_student),
    course_id INTEGER NOT NULL REFERENCES course(id_course)
);

CREATE TABLE assigment (
    id_assigment SERIAL PRIMARY KEY,
    course_id INTEGER NOT NULL REFERENCES course(id_course),
    assigment_name TEXT NOT NULL,
    assigment_description TEXT,
    assigment_file TEXT NOT NULL
);

CREATE TABLE delivery (
    id_delivery SERIAL PRIMARY KEY,
    assigment_id INTEGER REFERENCES assigment(id_assigment),
    student_id INTEGER REFERENCES student(id_student),
    delivery_file TEXT NOT NULL,
    delivery_filename TEXT
);