import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ExtraSkillsCard from './ExtraSkillsCard';


const MyCarousel = ({mainprops}) => {
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
  
    return (
      <Carousel 
      responsive={responsive}
      autoPlay={true}             // Enable autoplay
      autoPlaySpeed={3000}       // Set the speed (in milliseconds)
      infinite={true}            
      >
        {mainprops.map((item,index) => (
          <ExtraSkillsCard key={index} props={{ title: item.title, rating: item.rating, image: item.image, description: item.description, link: item.link }} />
        ))}
      </Carousel>
    );
  };
  
  export default MyCarousel;