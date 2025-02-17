// const About = () => {
//     console.log("Welcome to the about page in the console!");

//     return(
//         <>
//             <h1>Welcome to about the right about page.</h1>
//         </>
//     )
// };

// export default About;
// second way to export default a function.
export default function About() {
    console.log("Welcome to the about page!");
    return(
        <>
           <h1>Welcome to the about page.</h1> 
        </>
    );
};