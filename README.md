 ![svgviewer-output](https://github.com/ElloTechnology/backend_takehome/assets/3518127/561bc8d4-bffc-4360-b9ea-61e876bcec93)


# Ello Engineering Challenge

👋 Hello,
We are really excited about you potentially joining the team, so we designed this take home exercise to give you a taste of the challenges you may encounter in the role, and better understand what it would be like to work closely together.

Thanks for taking the time, and we hope to talk with you soon!

## About Ello

Ello is a forward-thinking educational technology company dedicated to revolutionizing the way children learn to read. Our mission is to empower young readers with the tools they need to become proficient and passionate readers. We believe that fostering a love for reading is essential for a child's academic and personal growth.

**Note:** Please don't fork this repository or create a pull request against it. Other applicants may take inspiration from it. You should create another repository for the challenge. Once the coding challenge is completed, email your solution back to our team at [fullstack2024@ello.com](mailto:fullstack2024@ello.com).


## Challenge
As part of our goal to have Ello impact as many children as we can, we offer an Ello web viewer product. [https://books.ello.com](https://books.ello.com/)


We give this to certain schools for free to allow teachers to share our books with children. 
You are building part of the teacher-facing UI for this product,
namely the book assignment view, where teachers can assign books to students. 

The view should have the following features:-

1. A search bar that allows users to search for books by title.
2. A list of search results that displays the book title, author, and a button to add the book to the students reading list.
3. A reading list that displays all the books that the teacher has added.
4. A button to remove a book from the reading list.

You can build this view without the concept of a "student" and just have a single reading list for the teacher.

### Requirements
- Use React as the frontend framework.
- Showcase the use of React hooks.
- Use [material-ui](https://mui.com/material-ui/) as the component library.
- Write your code in the `src/frontend` directory.
- Create components as you feel is best suited for your solution
<img width="1013" alt="Screenshot 2024-05-15 at 19 10 51" src="https://github.com/ElloTechnology/fullstack-take-home-test/assets/3518127/bc3eb7f7-489f-4304-93f4-032bbbd38c58">


### Data
To get access to data that you will use for this challenge you can switch into the `src/backend` folder and run

```bash
npm install
```

Then run the following command to start the server

```bash
npm start
```

This start a Graphql server at the url `http://localhost:4000/`, the server has a single query `books` that returns a list of books. 

```graphql
query Books {
  books {
    author
    coverPhotoURL
    readingLevel
    title
  }
}
```

You can use this query to get the list of books to display in your frontend. You may need to adjust the `coverPhotoURL` to be a valid URL. The photos are in the `src/frontend/assets` directory.

### Styling Guidelines
- Use the "Mulish" Google font
- You can use the following colors (You don't have to use all but you can pick and choose from here)
<img width="961" alt="Screenshot 2024-05-14 at 17 36 40" src="https://github.com/ElloTechnology/fullstack-take-home-test/assets/3518127/15922f8f-a7c7-4033-8405-76988e95afb3">




### You will be evaluated on
- Code quality and organization.
- User experience and design.
- Beautiful and responsive UI.



### My Implementation(Arsenhh-byte)

Features Implemented
Search Bar: Allows users to search for books by title.
Search Results: Displays the book title, author, and a button to add the book to the reading list.
Reading List: Displays all the books that the teacher has added with an option to remove books from the list.
Image Handling: Properly displays book cover images in both search results and reading list.

How to Run the Project
Clone the Repository

bash
Copy code
git clone [your-repo-url]
cd [your-repo-name]

Setup the Backend

bash
Copy code
cd src/backend
npm install
npm start
The backend server will start at http://localhost:4000/.

Setup the Frontend

bash
Copy code
cd ../frontend
npm install
npm start
The frontend development server will start at http://localhost:3000/.
![image](https://github.com/arsenhh-byte/ello-coding-challenge/assets/77290710/feb948f0-c72c-4ea5-a491-b736baeaf638)
![image](https://github.com/arsenhh-byte/ello-coding-challenge/assets/77290710/3d397350-fd03-43d6-9226-4635f97009fa)
![image](https://github.com/arsenhh-byte/ello-coding-challenge/assets/77290710/ff2add26-c992-4a6a-883f-13ce8a096087)


https://github.com/arsenhh-byte/ello-coding-challenge/assets/77290710/a256d783-b60c-493e-8e7e-2243746224e2





