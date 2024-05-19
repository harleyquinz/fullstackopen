import Part from "./Part";
const Content = ({course}) => {
    return (
      <>
          {course.map( (note) =>
              <Part key={note.id} name={note.name} exercises={note.exercises}/>
            )
          }
      </>
    )
}

export default Content