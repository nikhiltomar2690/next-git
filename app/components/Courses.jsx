import Link from "next/link";

// how to fetch data from internal api
async function fetchCourses() {
  const response = await fetch("https://localhost:3000/api/courses");
  const courses = await response.json();
  return courses;
}

const Courses = async () => {
  const courses = await fetchCourses();
  return (
    <div className="courses">
      {courses.map((course) => (
        <div className="card" key={course.id}>
          <h2>{course.title}</h2>
          <small>Level: {course.level}</small>
          <p>{course.description}</p>
          <Link href={course.link} target="_blank" className="btn">
            Go to Course
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Courses;
