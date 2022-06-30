import one from '../assets/svg/projects/Disney.png'
import two from '../assets/svg/projects/Facebook.png'
import three from '../assets/svg/projects/Netflix.png'
import four from '../assets/svg/projects/Chatapp.png'
import five from '../assets/svg/projects/Covid.png'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import eight from '../assets/svg/projects/eight.svg'



export const projectsData = [
    {
        id: 1,
        projectName: 'DISNEY_PLUS UI',
        projectDesc: 'Modern and popular movie platform user interface clone',
        tags: ['React', 'CSS', 'Firebase','ReactDOM'],
       
        demo: 'https://bucolic-dasik-cd7d34.netlify.app/',
        image: one
    },
    {
        id: 2,
        projectName: 'Facebook UI',
        projectDesc: 'Personal projects working on the most popular Social media UI.',
        tags: ['React', 'Firebase backend AUth'],
       
        demo: 'https://bucolic-dasik-cd7d34.netlify.app/',
        image: two
    },
    {
        id: 3,
        projectName: 'NETFLIX_UI CLONE',
        projectDesc: 'Netflix look alike with trailers consumed from youtube API .',
        tags: ['React', 'CSS', 'Material Ui', 'Youtube','Redux', 'AXIOS'],

        demo: 'https://hungry-thompson-ccbfb9.netlify.app/',
        image: three
    },
    {
        id: 4,
        projectName: 'CHAT APP',
        projectDesc: 'This is a MERN  stack build chap application with collections database managed in MongoDB',
        tags: ['MONGODB', 'Firebase', 'React'],
       
        demo: 'https://cool-muffin-a76b41.netlify.app',
        image: four
    },
    {
        id: 5,
        projectName: 'COVID TRACKER',
        projectDesc: 'Covid app displaying number of cases per country, worldwide cases  and grapical presentation of infection rate as consumed from WHO API',
        tags: ['React', 'REDUX', 'AXIOS', 'LeafletMAps'],

        demo: 'https://venerable-marigold-b97f35.netlify.app',
        image: five
    },
    
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/