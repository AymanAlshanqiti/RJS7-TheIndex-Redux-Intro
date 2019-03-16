const ADD_AUTHOR = "ADD_AUTHOR";
const DELETE_AUTHOR = "DELETE_AUTHOR";

export const addAuthor = () => {
  const authorObj = {
    id: 1,
    first_name: "J.K.",
    last_name: "Rowling",
    imageUrl:
      "https://nation.com.pk/digital_images/large/2015-05-10/jk-rowling-believes-in-standing-up-to-bullies-1431261222-3596.jpeg",
    books: [
      {
        title: "Harry Potter and the Philosopher's Stone",
        color: "red"
      },
      {
        title: "Harry Potter and the Chamber of Secrets",
        color: "blue"
      },
      {
        title: "Harry Potter and the Prizoner of Azkaban",
        color: "purple"
      },
      {
        title: "Harry Potter and the Goblet of Fire",
        color: "red"
      },
      {
        title: "Harry Potter and the Order of the Phoenix",
        color: "yellow"
      },
      {
        title: "Harry Potter and the Half-Blood Prince",
        color: "blue"
      },
      {
        title: "Harry Potter and the Deathly Hallows",
        color: "black"
      }
    ]
  };

  return {
    type: ADD_AUTHOR,
    payload: authorObj
  };
};

export const deleteAuthor = author => {
  return {
    type: DELETE_AUTHOR,
    payload: author
  };
};
