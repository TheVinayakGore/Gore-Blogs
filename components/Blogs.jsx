"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { format } from "date-fns";
import { Button } from "./ui/button";
import { FaCalendarAlt } from "react-icons/fa";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const query = `*[_type == "blogs"]{
        title,
        desc, // Short description from your schema
        slug, // Include slug in the fetch query
        coverImage { // Use coverImage as per your schema
          asset->{
            _id,
            url
          }
        },
        date
      }`;
      try {
        const result = await client.fetch(query);
        setBlogs(result);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <main
        id="blogs"
        className="flex flex-col items-start relative space-y-20 p-40 w-full"
      >
        <h1 className="text-start text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-bold">
          Blogs
        </h1>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {blogs.map((blog, index) => (
            <Link
              href={`/blogs/${blog.slug.current}`}
              target="_blank"
              key={index}
              className="group bg-white dark:bg-zinc-900 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out w-full"
            >
              {blog.coverImage?.asset?.url && (
                <Image
                  src={blog.coverImage.asset.url}
                  alt={blog.coverImage?.attribution || blog.title}
                  width={1000}
                  height={1000}
                  priority
                  className="shadow-lg shadow-zinc-300 dark:shadow-black border border-zinc-400 dark:border-zinc-800 rounded-lg w-full h-auto"
                />
              )}
              <div className="flex flex-col items-start space-y-10 p-5">
                <div className="flex flex-col items-start">
                  <h3 className="text-3xl font-bold pb-3">{blog.title}</h3>
                  {/* 🌟 Date with Calendar Icon */}
                  <div className="flex items-center space-x-2 text-base font-medium opacity-50">
                    <FaCalendarAlt className="w-4 h-4" />
                    <p>
                      {blog.date
                        ? format(new Date(blog.date), "MMM dd, yyyy")
                        : "No Date"}
                    </p>
                  </div>
                  <p className="my-5 text-lg opacity-60">
                    {blog.desc.slice(0, 100)}...
                  </p>
                </div>
                {/* 🌟 Read More Button */}
                <Button className="px-10 py-6 text-lg bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-all duration-300">
                  Read More
                </Button>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
};

export default Blogs;
