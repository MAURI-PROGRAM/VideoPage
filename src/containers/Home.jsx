import "../assets/styles/App.scss";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";
import useInitialState from "../hooks/useInitialState";

export default function Home() {
  const videos = useInitialState();
  return (
    <div className="App">
      <Header />
      <Search />
      {videos?.mylist?.length > 0 && (
        <Categories title="Mi lista">
          <Carousel>
            {videos?.mylist?.map((video) => (
              <CarouselItem key={video.id} {...video} />
            ))}
          </Carousel>
        </Categories>
      )}
      {videos?.trends?.length > 0 && (
        <Categories title="tendencias">
          <Carousel>
            {videos?.trends?.map((video) => (
              <CarouselItem key={video.id} {...video} />
            ))}
          </Carousel>
        </Categories>
      )}
      <Categories title="Originales de NEtflig">
        <Carousel>
          {videos?.originals?.map((video) => (
            <CarouselItem key={video.id} {...video} />
          ))}
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
}
