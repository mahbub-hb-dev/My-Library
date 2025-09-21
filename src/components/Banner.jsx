import { Carousel } from "flowbite-react";

export function Banner() {
  return (
    <div className="bg-gray-700">
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slideInterval={3000}>

          <div className="relative flex h-full items-center justify-center bg-gray-700 dark:bg-gray-700 dark:text-white">
            <img className="h-full w-full" src="/images/carousel/c3.jpg" alt="image 1" />
            <div className="absolute top-0 left-0 right-0 text-white p-6 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 lg:mb-4"> LOTS OF BOOKS. 100% FREE </h2>
              <p className="md:text-xl"> Welcom to your friendly neighborhood library. <span className="sm:block"> We have more than 50,000 free ebooks waiting to be discovered. </span> </p>
            </div>
          </div>

          <div className="relative flex h-full items-center justify-center bg-gray-700 dark:bg-gray-700 dark:text-white">
            <img className="h-full w-full" src="/images/carousel/c2.jpg" alt="image 2" />
            <div className="absolute top-0 left-0 right-0 text-white p-6 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 lg:mb-4"> FREE & DISCOUNTED BESTSELLERS </h2>
              <p className="md:text-xl"> join 1,50,000+ fellow readers. Get free and discounted bestsellers <span className="sm:block"> straight to your inbox with the ManyBooks eBooks deals newsletter. </span> <a href="" className="text-green-300"> SignUp Now </a> </p>
            </div>
          </div>

          <div className="relative flex h-full items-center justify-center bg-gray-700 dark:bg-gray-700 dark:text-white">
            <img className="h-full w-full" src="/images/carousel/c1.jpg" alt="image 3" />
            <div className="absolute top-0 left-0 right-0 text-white p-6 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 lg:mb-4"> THE ULTIMATE GUIDE TO FREE EBOOKS </h2>
              <p className="md:text-xl"> Not sure what to read next? Explore our catalog of public domain books with our editors. <span className="sm:block"> Some real games are hidden in our library. </span> <a href="" className="text-green-300"> Read More </a> </p>
            </div>
          </div>

        </Carousel>
      </div>
    </div>
  );
}


