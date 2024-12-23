// 4. Create a component named "List" that takes one prop - "items". 
// The component should display an unordered list element with the given list items.

function List(props) {
    const listItems = props.items.map((item) => {
       return <li key={item}>{item}</li>
    });

    return (
        <>
          <ul style={{ 
            listStyle: "none",  
            textAlign: "center", 
            color: "black", 
            backgroundColor: "#ccc", 
            fontSize: "20px", 
            fontWeight: "500", 
            padding: "5px 10px", 
            width: "fit-content", 
            margin: "50px auto",
            display: "flex",
            gap: "10px",
            textDecoration: "underline"
            }}>
            {listItems}
          </ul>
        </>
    );
}

export default List;