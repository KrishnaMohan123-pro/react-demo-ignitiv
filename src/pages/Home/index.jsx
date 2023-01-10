
import AliceCarousel from '../../components/Carousel/AliceCarousel';
import Carousel from '../../components/Carousel/CarouselMultislide';
import './index.css';
// import Images from '../../resources/Images'
export default function Home() {
    // console.log('Images', Images);
    const items = [{
        name: "Box 1",
        image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
    },{
        name: "Box 2",
        image: "https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
    },
    {
        name: "box 3",
        image: "https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
    },
    {
            name: "box 4",
            image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
    },
    {
        name: "box 5",
        image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
    }
]
return (
    <div className='main'>
        <AliceCarousel items={items} />
        <h1>Ignitiv Interview Test</h1>
        <h2>About Ignitiv</h2>
        <p>Ignitiv is a products and consulting MNC with development centers in the US, Canada and India. We deliver solutions that help global brands harness emerging disruptive technologies to enrich their customers’ experience in ways not imagined before.</p>
        <p>At Ignitiv, we are always pushing our boundaries. In doing so, we discover new capabilities and develop a distinct point of view about the challenges and opportunities affecting our customers. Towards that goal, we are always looking for people to join our team who are independent thinkers and have the drive to understand and solve business problems of our clients in unique and dramatically better ways. 
            We are currently geared up for exceptional growth and onboarding leaders in our team. If you believe in your technical and learning capabilities, we may have a suitable opportunity that will help you uncover the secret path of expedited career growth!</p>
        <h4>We are hiring for:</h4>
        <ul>
            <li><a href="https://www.ignitiv.com/jobs/xstore-developer/">Xstore Developer</a></li>
            <li><a href="https://www.ignitiv.com/jobs/qa-analyst/">QA Analyst</a></li>
            <li><a href="https://www.ignitiv.com/jobs/software-developer-front-end-2/">Software Developer (Front-End)</a></li>
            <li><a href="https://www.ignitiv.com/jobs/senior-developer-front-end/">Senior Developer (Front-End)</a></li>
            <li><a href="https://www.ignitiv.com/jobs/software-developer-front-end/">Sr. Developer / Tech Lead – eComm – Full Stack</a></li>
            <li><a href="https://www.ignitiv.com/jobs/back-end-sr-developer-analytics-2/">Back-End Sr. Developer (Analytics)</a></li>
            <li><a href="https://www.ignitiv.com/jobs/sr-developer-back-end-tech-lead/">Sr. Developer (Back-End) / Tech Lead</a></li>
        </ul>
        <p>Ignitiv provide a mock interview platform for fresher/experinced technical questions including a wide variety of topics like:</p>
        <p>Test your knowledge or easily embed a quiz on your website with the Quiz API</p>
    <Carousel items={items} />
    </div>
);
}