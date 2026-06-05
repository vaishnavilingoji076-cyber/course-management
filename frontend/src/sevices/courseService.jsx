import API from "./api";

export const getCourses=async()=>{
    return await API.get("/courses");
};

export const createCourse=async(courseData)=>{
    return await API.post("/courses", courseData);
};

export const updateCourse=async(id, courseData)=>{
    return await API.put(`/courses/${id}`, courseData);
};

export const deleteCourse=async(id)=>{
    return await API.delete(`/courses/${id}`);
};