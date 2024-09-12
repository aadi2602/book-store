import React from 'react'
import Navbar from "./Navbar"
import Footer from "./Footer"
import books from './../../public/books.jpeg'
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <Navbar />
      <div>
        <div className=" max-w-screen-2xl container mx-auto md:px-20 px-2 flex flex-col md:flex-row my-10 ">
          <div className="w-full order-2 md:order-1 md:w-1/2 mt-10 md:mt-20">
            <div className="space-y-5">
              <h1 className="text-2xl md:text-4xl font-bold">
                Hello, welcomes here to learn something{" "}
                <span className="text-pink-500">new everyday!!!</span>
              </h1>
              <p className="text-sm md:text-xl text-justify">

                At your Bookstore, we believe in the power of stories to inspire, educate, and transform lives. Our mission is to create a welcoming space where readers of all ages can discover new worlds, learn something new every day, and find joy in the written word.

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor et totam. 

                We offer a carefully curated selection of books across all genres, from timeless classics to contemporary bestsellers. Whether you're looking for an epic adventure, a heartwarming romance, or a thought-provoking non-fiction read, you'll find it here. Our friendly and knowledgeable staff is always ready to help you find your next favorite book.

                Join us in celebrating the magic of reading. Visit us often, explore our shelves, and immerse yourself in the wonderful world of books. At Your Bookstor, every visit is an opportunity to learn, grow, and be inspired.

                Thank you for being part of our community of book lovers. We look forward to embarking on countless literary journeys with you!
              </p>
            </div>
            <Link to='/course'>
            <button className="btn mt-6 btn-secondary">Get Started</button>
            </Link>
          </div>
          <div className=" order-1 w-full mt-60 md:w-1/2 rotate-6  animate-bounce">
            <img
              src={books}
              className="md:w-[550px] md:h-[460px] md:ml-12"
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About