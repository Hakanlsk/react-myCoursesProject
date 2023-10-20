import Course from "./Course";

function Courses({courses, removeCourse}) {
    return ( 
    <div className="courseMainDiv">
        <div>
            <h2>KURSLARIM</h2>
        </div>
        <div className="cardDiv">
            {
                courses.map((course)=>{
                    return(
                        <Course key={course.id} {...course} removeOneCourse={removeCourse}/>
                        //course={course}/>
                    )
                })
            }
        </div>
    </div> );
}

export default Courses;