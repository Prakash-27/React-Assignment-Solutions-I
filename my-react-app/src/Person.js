// 1.Create a component named "Person" that takes two props - "name" and "age". 
// The component should display the person's name and age in a paragraph element.

function Person(props) {
    return (
        <>
          <p style = {{
            textAlign: "center", 
            color: "black", 
            backgroundColor: "pink", 
            fontSize: "20px", 
            fontWeight: "500", 
            padding: "5px 10px", 
            width: "200px", 
            margin: "50px auto" 
            }}>
               {props.name} is {props.age} years old.
          </p>
        </>
    );
}

export default Person;