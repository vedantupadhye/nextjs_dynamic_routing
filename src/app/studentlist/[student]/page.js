"use client"
const student = ({params}) => {
    return (
      <main>
          <h1>student Details</h1>
            <h4>name is {params.student}</h4>
      </main>
    )
  }
  
  export default student