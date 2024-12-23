// 3. Create a component named "Header" that takes one prop - "title". 
// The component should display a header element with the given title.

function Header(props) {
    return (
        <>
          <h1 style = {{
            textAlign: "center", 
            color: "black", 
            backgroundColor: "pink", 
            fontSize: "20px", 
            fontWeight: "500", 
            padding: "5px 10px", 
            width: "fit-content", 
            margin: "50px auto"}}
            >
               {props.title}
          </h1>
        </>
    );
}

export default Header;