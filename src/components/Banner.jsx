import { Carousel } from "flowbite-react";

export function Banner() {
  return (
    <div className="bg-gray-700">
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slideInterval={3000}>

          <div className="relative flex h-full items-center justify-center bg-gray-700 dark:bg-gray-700 dark:text-white">
            <img className="h-full w-full" src="/images/carousel/c3.jpg" alt="image 1" />
            <div className="absolute top-0 left-0 right-0 text-white p-6 text-center">
              <h2 className="text-2xl font-bold mb-2"> LOTS OF BOOKS. 100% FREE </h2>
              <p> Welcom to your friendly neighborhood library. We have more than 50,000 free ebooks waiting to be discovered. </p>
            </div>
          </div>

          <div className="relative flex h-full items-center justify-center bg-gray-700 dark:bg-gray-700 dark:text-white">
            <img className="h-full w-full" src="/images/carousel/c2.jpg" alt="image 2" />
            <div className="absolute top-0 left-0 right-0 text-white p-6 text-center">
              <h2 className="text-2xl font-bold mb-2"> FREE AND DISCOUNTED BESTSELLERS </h2>
              <p> join 1,50,000+ fellow readers. Get free and discounted bestsellers straight to your inbox with the ManyBooks eBooks deals newsletter. <a href="" className="text-green-300"> SignUp Now </a> </p>
            </div>
          </div>

          <div className="relative flex h-full items-center justify-center bg-gray-700 dark:bg-gray-700 dark:text-white">
            <img className="h-full w-full" src="/images/carousel/c1.jpg" alt="image 3" />
            <div className="absolute top-0 left-0 right-0 text-white p-6 text-center">
              <h2 className="text-2xl font-bold mb-2"> THE ULTIMATE GUIDE TO FREE EBOOKS </h2>
              <p> Not sure what to read next? Explore our catalog of public domain books with our editors. Some real games are hidden in our library. <a href="" className="text-green-300"> Read More </a> </p>
            </div>
          </div>

        </Carousel>
      </div>
    </div>
  );
}


